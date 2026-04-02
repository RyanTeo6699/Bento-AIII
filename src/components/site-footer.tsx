import Link from "next/link";

import { companyProfile, navItems, socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <span className="section-kicker">Bento AIII</span>
          <div className="max-w-md space-y-3">
            <h2 className="text-2xl font-semibold text-white">
              Building practical AI systems with strong product shape.
            </h2>
            <p className="text-sm leading-7 text-slate-400">
              {companyProfile.positioning}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Navigate
          </h3>
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Connect
          </h3>
          <div className="space-y-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-slate-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:hello@bentoaiii.com"
              className="block text-sm text-slate-300 hover:text-white"
            >
              hello@bentoaiii.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
