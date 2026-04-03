import { defaultLocale, type Locale } from "@/lib/i18n";

export const LOCALE_HEADER = "x-bento-locale";
export const PATHNAME_HEADER = "x-bento-pathname";

const localeSegmentMap: Record<Locale, string> = {
  en: "en",
  "zh-Hant": "zh-hant",
  ja: "ja"
};

const segmentLocaleMap: Record<string, Locale> = {
  en: "en",
  "zh-hant": "zh-Hant",
  ja: "ja"
};

function normalizePathname(pathname: string) {
  if (!pathname) {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (withLeadingSlash !== "/" && withLeadingSlash.endsWith("/")) {
    return withLeadingSlash.slice(0, -1);
  }

  return withLeadingSlash;
}

export function localeToSegment(locale: Locale) {
  return localeSegmentMap[locale];
}

export function segmentToLocale(segment?: string | null) {
  if (!segment) {
    return null;
  }

  return segmentLocaleMap[segment.toLowerCase()] ?? null;
}

export function stripLocaleFromPathname(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);
  const [, firstSegment, ...restSegments] = normalizedPathname.split("/");
  const locale = segmentToLocale(firstSegment);

  if (!locale) {
    return {
      locale: null,
      pathname: normalizedPathname
    };
  }

  const strippedPathname = restSegments.length > 0 ? `/${restSegments.join("/")}` : "/";

  return {
    locale,
    pathname: normalizePathname(strippedPathname)
  };
}

export function getLogicalPathname(pathname: string) {
  return stripLocaleFromPathname(pathname).pathname;
}

// In the current deployment mode, all real routes stay unprefixed.
// Keep this helper as the single path builder so callers do not need
// to know whether locale prefixes are enabled or not.
export function buildLocalizedPath(_locale: Locale, pathname = "/") {
  return getLogicalPathname(pathname);
}

export function replaceLocaleInPathname(pathname: string, locale: Locale) {
  return buildLocalizedPath(locale, pathname);
}

export function buildDefaultLocaleRedirect(pathname: string) {
  return buildLocalizedPath(defaultLocale, pathname);
}
