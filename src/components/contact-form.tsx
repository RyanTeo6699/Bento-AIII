"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FieldName = "name" | "company" | "email" | "projectType" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

type FormStatus =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string; reference?: string }
  | { state: "error"; message: string; reference?: string };

const initialStatus: FormStatus = { state: "idle" };

const inquiryOptions = [
  { value: "ai-application", label: "AI application" },
  { value: "llm-system", label: "LLM system" },
  { value: "workflow-design", label: "Workflow tooling" },
  { value: "platform-delivery", label: "Platform delivery" },
  { value: "advisory", label: "Scoping and advisory" }
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: {
  name: string;
  company: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const errors: FieldErrors = {};

  if (payload.name.length < 2) {
    errors.name = "Enter a name with at least 2 characters.";
  }

  if (!emailPattern.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.projectType) {
    errors.projectType = "Select the inquiry type that fits best.";
  }

  if (payload.company.length > 120) {
    errors.company = "Keep the company or team field under 120 characters.";
  }

  if (payload.message.length < 24) {
    errors.message = "Describe the workflow or problem in at least 24 characters.";
  }

  if (payload.message.length > 2400) {
    errors.message = "Keep the project brief under 2400 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(field: FieldName) {
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: readField(formData, "name"),
      company: readField(formData, "company"),
      email: readField(formData, "email"),
      projectType: readField(formData, "projectType"),
      message: readField(formData, "message"),
      website: readField(formData, "website")
    };

    const nextFieldErrors = validatePayload(payload);
    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      setStatus({
        state: "error",
        message: "Please correct the highlighted fields and submit again."
      });
      return;
    }

    setFieldErrors({});
    setStatus({ state: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
        reference?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !result.ok) {
        setFieldErrors(result.fieldErrors ?? {});
        setStatus({
          state: "error",
          message:
            result.error ?? "The form could not be submitted. Please try again.",
          reference: result.reference
        });
        return;
      }

      form.reset();
      setFieldErrors({});
      setStatus({
        state: "success",
        message:
          result.message ?? "Inquiry received. Bento AIII will follow up by email.",
        reference: result.reference
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "The form could not reach the site backend. Please try again or email hello@bentoaiii.com."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface pixel-corner p-6 md:p-8">
      <div className="mb-8 space-y-3">
        <span className="section-kicker">Contact form</span>
        <h2 className="text-3xl font-semibold text-white">Tell us what needs to work.</h2>
        <p className="text-sm leading-7 text-slate-400">
          This form posts to the site backend. Email forwarding can be connected later
          through Resend without changing the frontend structure.
        </p>
      </div>

      {status.state !== "idle" ? (
        <div
          aria-live="polite"
          className={`mb-6 rounded-[1rem] border px-4 py-3 text-sm ${
            status.state === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
              : status.state === "error"
                ? "border-rose-400/30 bg-rose-400/10 text-rose-100"
                : "border-[rgba(46,232,255,0.3)] bg-[rgba(46,232,255,0.1)] text-white"
          }`}
        >
          <p>{status.state === "loading" ? "Submitting inquiry..." : status.message}</p>
          {"reference" in status && status.reference ? (
            <p className="mt-2 font-pixel text-[0.68rem] uppercase tracking-[0.16em]">
              Reference: {status.reference}
            </p>
          ) : null}
          {status.state === "success" ? (
            <p className="mt-2 text-xs leading-6 text-emerald-100/80">
              If the request is time-sensitive, send the same reference to
              {" "}
              <a href="mailto:hello@bentoaiii.com" className="underline underline-offset-4">
                hello@bentoaiii.com
              </a>
              .
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Your name"
            minLength={2}
            maxLength={80}
            aria-invalid={Boolean(fieldErrors.name)}
            onChange={() => clearFieldError("name")}
            required
          />
          {fieldErrors.name ? <p className="field-error">{fieldErrors.name}</p> : null}
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Company or team</span>
          <input
            className="form-input"
            type="text"
            name="company"
            placeholder="Company or team"
            maxLength={120}
            aria-invalid={Boolean(fieldErrors.company)}
            onChange={() => clearFieldError("company")}
          />
          {fieldErrors.company ? <p className="field-error">{fieldErrors.company}</p> : null}
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="name@company.com"
            aria-invalid={Boolean(fieldErrors.email)}
            onChange={() => clearFieldError("email")}
            required
          />
          {fieldErrors.email ? <p className="field-error">{fieldErrors.email}</p> : null}
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Inquiry type</span>
          <select
            className="form-input"
            name="projectType"
            defaultValue=""
            aria-invalid={Boolean(fieldErrors.projectType)}
            onChange={() => clearFieldError("projectType")}
            required
          >
            <option value="" disabled>
              Select a track
            </option>
            {inquiryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {fieldErrors.projectType ? (
            <p className="field-error">{fieldErrors.projectType}</p>
          ) : null}
        </label>

        <label className="space-y-2 text-sm text-slate-300 md:col-span-2">
          <span>Project brief</span>
          <textarea
            className="form-textarea"
            name="message"
            placeholder="What is the workflow, team, or business problem you want to solve?"
            minLength={24}
            maxLength={2400}
            aria-invalid={Boolean(fieldErrors.message)}
            onChange={() => clearFieldError("message")}
            required
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            {fieldErrors.message ? (
              <p className="field-error">{fieldErrors.message}</p>
            ) : (
              <p className="text-xs leading-5 text-slate-500">
                Enough detail to explain the workflow, the constraint, and what needs to change.
              </p>
            )}
            <p className="text-xs leading-5 text-slate-500">24-2400 characters</p>
          </div>
        </label>

        <label className="hidden">
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Preferred input: a real workflow, a rough scope, or the current constraint you need to unblock.
        </p>
        <button
          type="submit"
          className="button-primary"
          disabled={status.state === "loading"}
        >
          {status.state === "loading" ? "Submitting..." : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
