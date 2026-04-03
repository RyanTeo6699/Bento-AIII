import type { Locale } from "@/lib/i18n";

const ctaDictionary = {
  en: {
    startConversation: "Start a conversation",
    viewProjects: "View projects",
    contactUs: "Contact us",
    aboutCompany: "About Bento AIII",
    viewTeam: "Meet the team"
  },
  "zh-Hant": {
    startConversation: "開始對話",
    viewProjects: "查看項目",
    contactUs: "聯絡我們",
    aboutCompany: "了解 Bento AIII",
    viewTeam: "查看團隊"
  },
  ja: {
    startConversation: "相談を始める",
    viewProjects: "プロジェクトを見る",
    contactUs: "お問い合わせ",
    aboutCompany: "Bento AIII について",
    viewTeam: "チームを見る"
  }
} as const;

export function getSharedCtas(locale: Locale) {
  return ctaDictionary[locale];
}
