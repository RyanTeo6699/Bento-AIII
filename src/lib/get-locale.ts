import { cookies, headers } from "next/headers";

import { localeCookieName, resolveLocale, type Locale } from "@/lib/i18n";
import { LOCALE_HEADER } from "@/lib/locale-routing";

export function getCurrentLocale(): Locale {
  return resolveLocale(
    headers().get(LOCALE_HEADER) ?? cookies().get(localeCookieName)?.value
  );
}
