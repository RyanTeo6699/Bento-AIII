import { NextResponse, type NextRequest } from "next/server";

import { localeCookieName } from "@/lib/i18n";
import { stripLocaleFromPathname } from "@/lib/locale-routing";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locale, pathname: logicalPath } = stripLocaleFromPathname(pathname);

  // Temporary deployment-safe mode:
  // keep all public routing on the real unprefixed pages and only use
  // the locale cookie as the active language source.
  if (!locale) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = logicalPath;

  const response = NextResponse.redirect(redirectUrl);
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
