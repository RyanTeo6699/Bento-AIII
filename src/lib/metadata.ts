import type { Metadata } from "next";

import { locales, type Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://bento-ai-web.vercel.app";

const htmlLangMap: Record<Locale, string> = {
  en: "en",
  "zh-Hant": "zh-TW",
  ja: "ja"
};

const openGraphLocaleMap: Record<Locale, string> = {
  en: "en_US",
  "zh-Hant": "zh_TW",
  ja: "ja_JP"
};

function buildTitle(title?: string) {
  return title ? `${title} | Bento AIII` : "Bento AIII";
}

function buildAbsoluteUrl(pathname: string) {
  return `${SITE_URL}${pathname}`;
}

function getAlternateLanguageMap(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [getHtmlLang(locale), buildLocalizedPath(locale, path)])
  );
}

export function getHtmlLang(locale: Locale) {
  return htmlLangMap[locale];
}

export function getOpenGraphLocale(locale: Locale) {
  return openGraphLocaleMap[locale];
}

export function createPageMetadata({
  locale,
  title,
  description,
  path
}: {
  locale: Locale;
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const localizedPath = buildLocalizedPath(locale, path);
  const resolvedTitle = buildTitle(title);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: localizedPath,
      languages: getAlternateLanguageMap(path)
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url: buildAbsoluteUrl(localizedPath),
      siteName: "Bento AIII",
      locale: getOpenGraphLocale(locale),
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => getOpenGraphLocale(item)),
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description
    }
  };
}

export function getSiteMetadataBase() {
  return new URL(SITE_URL);
}
