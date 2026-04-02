import Link from "next/link";

import { companyProfile, contactChannels, navItems } from "@/lib/site-data";

export function SiteFooter() {
  const emailChannel = contactChannels.find((item) => item.href?.startsWith("mailto:"));

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="shell">
        <div className="surface px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="brand-mark">
                  <span className="brand-grid">
                    <span className="bg-accent shadow-[0_0_16px_rgba(46,232,255,0.8)]" />
                    <span className="bg-white/15" />
                    <span className="bg-white/15" />
                    <span className="bg-violet" />
                  </span>
                </span>
                <div>
                  <p className="text-xl font-semibold tracking-[0.08em] text-white">
                    Bento AIII
                  </p>
                  <p className="font-pixel text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">
                    AI applications / LLM systems
                  </p>
                </div>
              </div>

              <div className="max-w-md space-y-3">
                <h2 className="text-2xl font-semibold text-white">
                  AI software for actual operating work.
                </h2>
                <p className="text-sm leading-7 text-slate-400">
                  {companyProfile.description}
                </p>
                <Link href="/contact" className="button-secondary">
                  Start scoped inquiry
                </Link>
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
                Contact
              </h3>
              <div className="space-y-3 text-sm leading-7 text-slate-300">
                <a
                  href={emailChannel?.href ?? "mailto:hello@bentoaiii.com"}
                  className="block hover:text-white"
                >
                  {emailChannel?.value ?? "hello@bentoaiii.com"}
                </a>
                <p className="text-slate-400">Edmonton, Alberta / remote</p>
                <p className="text-slate-500">
                  Public material on the site is intentionally limited to information Bento
                  AIII can reasonably stand behind.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="font-pixel text-[0.62rem] uppercase tracking-[0.18em] text-slate-500">
              build the layer around the model
            </p>
            <p className="text-sm text-slate-500">
              Bento AIII. Practical AI with product discipline.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
