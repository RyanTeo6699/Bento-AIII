import { cookies } from "next/headers";

import { localeCookieName, resolveLocale, type Locale } from "@/lib/i18n";

export function getCurrentLocale(): Locale {
  return resolveLocale(cookies().get(localeCookieName)?.value);
}
