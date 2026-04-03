import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { getCompanyProfile, getContactChannels } from "@/lib/site-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bentoaiii.com"),
  title: {
    default: "Bento AIII",
    template: "%s | Bento AIII"
  },
  description:
    "Bento AIII is a technology company focused on AI applications and large language model systems, building practical products, workflows, and digital experiences.",
  openGraph: {
    title: "Bento AIII",
    description:
      "AI applications, large language model systems, and practical product delivery.",
    url: "https://bentoaiii.com",
    siteName: "Bento AIII",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const companyProfile = getCompanyProfile(locale);
  const contactChannels = getContactChannels(locale);
  const emailChannel = contactChannels.find((item) => item.href?.startsWith("mailto:"));

  return (
    <html lang={locale}>
      <body>
        <SiteHeader locale={locale} navItems={dictionary.nav} copy={dictionary.header} />
        <main>{children}</main>
        <SiteFooter
          navItems={dictionary.nav}
          copy={dictionary.footer}
          companyDescription={companyProfile.description}
          emailHref={emailChannel?.href ?? "mailto:hello@bentoaiii.com"}
          emailValue={emailChannel?.value ?? "hello@bentoaiii.com"}
        />
      </body>
    </html>
  );
}
