import { NextResponse } from "next/server";

import { getDictionary, resolveLocale } from "@/lib/i18n";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

const allowedProjectTypes = new Set([
  "ai-application",
  "llm-system",
  "workflow-design",
  "platform-delivery",
  "advisory"
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  message: string;
  locale?: string;
  website?: string;
};

type ContactFieldErrors = Partial<
  Record<"name" | "company" | "email" | "projectType" | "message", string>
>;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const recent = (rateLimitStore.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, recent);
    return false;
  }

  recent.push(now);
  rateLimitStore.set(ip, recent);
  return true;
}

function validatePayload(
  payload: ContactPayload,
  messages: ReturnType<typeof getDictionary>["contactForm"]["api"]
) {
  const fieldErrors: ContactFieldErrors = {};

  if (payload.name.length < 2) {
    fieldErrors.name = messages.name;
  }

  if (payload.company.length > 120) {
    fieldErrors.company = messages.company;
  }

  if (!emailPattern.test(payload.email)) {
    fieldErrors.email = messages.email;
  }

  if (!allowedProjectTypes.has(payload.projectType)) {
    fieldErrors.projectType = messages.projectType;
  }

  if (payload.message.length < 24) {
    fieldErrors.message = messages.messageMin;
  }

  if (payload.message.length > 2400) {
    fieldErrors.message = messages.messageMax;
  }

  return fieldErrors;
}

async function forwardWithResend(payload: ContactPayload, reference: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !inbox || !from) {
    return { mode: "logged-only" as const };
  }

  const html = `
    <h2>Bento AIII inquiry</h2>
    <p><strong>Reference:</strong> ${escapeHtml(reference)}</p>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Company or team:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Inquiry type:</strong> ${escapeHtml(payload.projectType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: payload.email,
      subject: `Bento AIII inquiry ${reference}`,
      html
    })
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return { mode: "forwarded" as const };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  const clientIp = getClientIp(request);
  const reference = `BA-${Date.now().toString(36).toUpperCase()}`;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: getDictionary("en").contactForm.api.invalidPayload,
        reference
      },
      { status: 400 }
    );
  }

  const locale = resolveLocale(readString(body.locale));
  const messages = getDictionary(locale).contactForm.api;

  const payload: ContactPayload = {
    name: readString(body.name),
    company: readString(body.company),
    email: readString(body.email),
    projectType: readString(body.projectType),
    message: readString(body.message),
    locale,
    website: readString(body.website)
  };

  if (payload.website) {
    console.warn(
      "[contact.honeypot]",
      JSON.stringify({ reference, clientIp, submittedAt: new Date().toISOString() })
    );
    return NextResponse.json({
      ok: true,
      message: messages.inquiryReceived,
      reference
    });
  }

  if (!checkRateLimit(clientIp)) {
    console.warn(
      "[contact.rate_limited]",
      JSON.stringify({ reference, clientIp, submittedAt: new Date().toISOString() })
    );
    return NextResponse.json(
      {
        ok: false,
        error: messages.rateLimited,
        reference
      },
      { status: 429 }
    );
  }

  const fieldErrors = validatePayload(payload, messages);

  if (Object.keys(fieldErrors).length > 0) {
    const firstError =
      Object.values(fieldErrors).find((value): value is string => Boolean(value)) ??
      messages.validationFailed;

    return NextResponse.json(
      {
        ok: false,
        error: firstError,
        fieldErrors,
        reference
      },
      { status: 400 }
    );
  }

  console.info(
    "[contact.received]",
    JSON.stringify({
      reference,
      clientIp,
      projectType: payload.projectType,
      name: payload.name,
      company: payload.company || null,
      email: payload.email,
      messageLength: payload.message.length,
      submittedAt: new Date().toISOString()
    })
  );

  try {
    const delivery = await forwardWithResend(payload, reference);

    if (delivery.mode === "logged-only") {
      console.info(
        "[contact.logged_only]",
        JSON.stringify({
          reference,
          clientIp,
          reason: "missing_resend_env",
          submittedAt: new Date().toISOString()
        })
      );

      return NextResponse.json({
        ok: true,
        message: messages.loggedOnly,
        reference
      });
    }
  } catch (error) {
    console.error(
      "[contact.forward_failed]",
      JSON.stringify({
        reference,
        clientIp,
        error: error instanceof Error ? error.message : "unknown_error",
        submittedAt: new Date().toISOString()
      })
    );
    return NextResponse.json(
      {
        ok: false,
        error: messages.forwardFailed,
        reference
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: messages.success,
    reference
  });
}
