import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, localeCookieName } from "@/lib/i18n";
import {
  LOCALE_HEADER,
  PATHNAME_HEADER,
  buildLocalizedPath,
  stripLocaleFromPathname
} from "@/lib/locale-routing";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locale, pathname: logicalPath } = stripLocaleFromPathname(pathname);

  if (!locale) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = buildLocalizedPath(defaultLocale, pathname);
    return NextResponse.redirect(redirectUrl);
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = logicalPath;

  // Keep the locale in the public URL for SEO and shareability,
  // while reusing the existing unprefixed App Router pages underneath.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);
  requestHeaders.set(PATHNAME_HEADER, logicalPath);

  const response = NextResponse.rewrite(rewriteUrl, {
    request: {
      headers: requestHeaders
    }
  });

  response.cookies.set(localeCookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax"
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
};
