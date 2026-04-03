import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";

type FinalCtaProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function FinalCta({
  locale,
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: FinalCtaProps) {
  return (
    <section className="py-24">
      <div className="shell">
        <div className="surface pixel-corner px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="section-kicker">{eyebrow}</span>
              <span className="hud-line max-w-xs" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="text-base leading-8 text-slate-300 md:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={buildLocalizedPath(locale, primaryHref)}
              className="button-primary w-full justify-center text-center sm:w-auto"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={buildLocalizedPath(locale, secondaryHref)}
                className="button-secondary w-full justify-center text-center sm:w-auto"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
