"use client";

import { usePathname, useRouter } from "next/navigation";

import {
  localeCookieName,
  localeOptions,
  type Locale
} from "@/lib/i18n";
import { replaceLocaleInPathname } from "@/lib/locale-routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  className?: string;
  stacked?: boolean;
  onChangeComplete?: () => void;
};

export function LanguageSwitcher({
  locale,
  label,
  className,
  stacked = false,
  onChangeComplete
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${localeCookieName}=${encodeURIComponent(
      nextLocale
    )}; path=/; max-age=31536000; samesite=lax`;

    const nextPathname = replaceLocaleInPathname(pathname, nextLocale);

    if (nextPathname !== pathname) {
      router.push(nextPathname);
    }

    router.refresh();
    onChangeComplete?.();
  }

  return (
    <div
      className={cn(
        "flex min-w-0 items-center gap-2",
        stacked && "w-full flex-col items-start gap-3",
        className
      )}
    >
      <span className="shrink-0 font-pixel text-[0.62rem] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>
      <div className="flex max-w-full flex-wrap items-center rounded-[0.95rem] border border-white/10 bg-white/[0.03] p-1">
        {localeOptions.map((option) => {
          const active = option.value === locale;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleLocaleChange(option.value)}
              className={cn(
                "rounded-[0.7rem] px-2 py-1.5 text-xs font-medium transition sm:px-2.5 sm:py-2",
                active
                  ? "bg-white/[0.08] text-white"
                  : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
              )}
              aria-pressed={active}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
