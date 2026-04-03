import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

export type TeamSection = {
  id: string;
  title: string;
  subtitle: string;
  members: TeamMember[];
};

type TeamPageCopy = {
  homeTitle: string;
  homeDescription: string;
  pageTitle: string;
  pageDescription: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  overviewTitle: string;
  overviewDescription: string;
};

type TeamMemberDefinition = {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  tags: LocalizedList;
};

type TeamSectionDefinition = {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  memberIds: string[];
};

function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

const teamMemberDefinitions = {
  "ryan-z": {
    id: "ryan-z",
    name: "Ryan Z.",
    role: {
      en: "Founder & Product Systems",
      "zh-Hant": "創辦人・產品系統",
      ja: "創業者・プロダクトシステム"
    },
    bio: {
      en:
        "Ryan Z. leads product direction, system framing, and the operating logic behind Bento AIII. His work centers on product definition, workflow design, information architecture, and shaping AI software into a deliverable product system.",
      "zh-Hant":
        "Ryan Z. 負責 Bento AIII 的產品方向、系統框架與整體運作邏輯，重點在產品定義、流程設計、資訊架構，以及把 AI 軟體整理成真正可交付的產品系統。",
      ja:
        "Ryan Z. は Bento AIII のプロダクト方針、システムの枠組み、運用ロジックを担当します。主な役割は、プロダクト定義、ワークフロー設計、情報設計、そして AI ソフトウェアを実際に届けられる形へ整えることです。"
    },
    tags: {
      en: ["Product Systems", "Strategy", "Workflow Design"],
      "zh-Hant": ["產品系統", "策略", "流程設計"],
      ja: ["プロダクトシステム", "戦略", "ワークフロー設計"]
    }
  },
  "randy-j": {
    id: "randy-j",
    name: "Randy J.",
    role: {
      en: "Product Engineer",
      "zh-Hant": "產品工程師",
      ja: "プロダクトエンジニア"
    },
    bio: {
      en:
        "Randy J. focuses on engineering delivery across frontend, backend, deployment, and integration work. He translates product direction into stable implementation choices, working systems, and a clean shipping path.",
      "zh-Hant":
        "Randy J. 專注於前後端實作、部署與系統整合等工程交付，負責把產品方向轉成可運作的系統，並維持清楚、可落地的實作路徑。",
      ja:
        "Randy J. はフロントエンド、バックエンド、デプロイ、システム統合を含む実装デリバリーを担当します。プロダクトの方向性を、実際に動くシステムと安定したリリース経路へ落とし込みます。"
    },
    tags: {
      en: ["Full Stack", "Infrastructure", "Shipping"],
      "zh-Hant": ["全端開發", "基礎設施", "工程交付"],
      ja: ["フルスタック", "インフラ", "実装と出荷"]
    }
  },
  "jason-n": {
    id: "jason-n",
    name: "Jason N.",
    role: {
      en: "Applied AI Engineer",
      "zh-Hant": "應用 AI 工程師",
      ja: "応用 AI エンジニア"
    },
    bio: {
      en:
        "Jason N. works across AI applications, product implementation, and system execution. He contributes to model-enabled features, application logic, and the engineering detail required to ship usable product surfaces.",
      "zh-Hant":
        "Jason N. 參與 AI 應用開發、產品實作與系統執行，主要投入模型功能落地、應用邏輯，以及讓產品真正可用的工程細節。",
      ja:
        "Jason N. は AI アプリケーション開発、プロダクト実装、システム実行を横断して担当します。モデル機能、アプリケーションロジック、実用的な画面を出荷するための技術細部に関わります。"
    },
    tags: {
      en: ["Applied AI", "Product Build", "System Execution"],
      "zh-Hant": ["應用 AI", "產品建置", "系統執行"],
      ja: ["応用 AI", "プロダクト実装", "システム実行"]
    }
  },
  "john-snow": {
    id: "john-snow",
    name: "John Snow",
    role: {
      en: "Marketing",
      "zh-Hant": "行銷",
      ja: "マーケティング"
    },
    bio: {
      en: "Profile details coming soon.",
      "zh-Hant": "更多資料即將更新。",
      ja: "詳細プロフィールは近日公開予定です。"
    },
    tags: {
      en: ["Marketing", "Brand", "Growth"],
      "zh-Hant": ["行銷", "品牌", "成長"],
      ja: ["マーケティング", "ブランド", "成長"]
    }
  },
  // Keep market-team profiles intentionally restrained until
  // public-facing details are ready to publish.
  "guo-ng": {
    id: "guo-ng",
    name: "Guo Ng",
    role: {
      en: "Marketing",
      "zh-Hant": "行銷",
      ja: "マーケティング"
    },
    bio: {
      en: "Profile details coming soon.",
      "zh-Hant": "更多資料即將更新。",
      ja: "詳細プロフィールは近日公開予定です。"
    },
    tags: {
      en: ["Marketing", "Brand", "Outreach"],
      "zh-Hant": ["行銷", "品牌", "拓展"],
      ja: ["マーケティング", "ブランド", "アウトリーチ"]
    }
  }
} as const satisfies Record<string, TeamMemberDefinition>;

// Grouping lives in the data layer so the page can render by section
// without hardcoding which members belong together.
const teamSectionDefinitions = [
  {
    id: "technical-founders",
    title: {
      en: "Technical Founding Team",
      "zh-Hant": "技術創始團隊",
      ja: "技術創業チーム"
    },
    subtitle: {
      en: "Leads product direction, system architecture, applied AI delivery, and engineering execution.",
      "zh-Hant": "負責產品方向、系統架構、AI 應用落地與工程執行。",
      ja: "プロダクト方針、システム設計、AI 実装、エンジニアリング実行を担当します。"
    },
    memberIds: ["ryan-z", "randy-j", "jason-n"]
  },
  {
    id: "market-founders",
    title: {
      en: "Market Founding Team",
      "zh-Hant": "市場創始團隊",
      ja: "市場創業チーム"
    },
    subtitle: {
      en: "Leads brand communication, market development, growth partnerships, and external relationships.",
      "zh-Hant": "負責品牌傳播、市場拓展、增長合作與外部連結。",
      ja: "ブランド発信、市場開拓、成長提携、対外的な接続を担当します。"
    },
    memberIds: ["john-snow", "guo-ng"]
  }
] as const satisfies readonly TeamSectionDefinition[];

const teamPageCopy = {
  en: {
    homeTitle: "Founding team across product systems, engineering, and applied AI delivery.",
    homeDescription:
      "Bento AIII presents a compact founding team with clear ownership across product direction, engineering execution, and AI system delivery.",
    pageTitle:
      "A five-person founding team organized across technical delivery and market growth.",
    pageDescription:
      "The team page is grouped by function so responsibility stays readable: technical founders on one side, market founders on the other.",
    metrics: [
      { label: "Team model", value: "Five-person founding team" },
      { label: "Coverage", value: "Product / Engineering / AI / Market" },
      { label: "Working mode", value: "Grouped by technical and market leadership" }
    ],
    overviewTitle:
      "The founding team is grouped by function so direction, execution, and market work stay clear.",
    overviewDescription:
      "This page keeps the current team readable instead of flattening everyone into one undifferentiated wall. The structure matches how the company actually operates."
  },
  "zh-Hant": {
    homeTitle: "創始團隊涵蓋產品系統、工程與應用 AI 交付。",
    homeDescription:
      "Bento AIII 對外呈現的是一個分工清楚的創始團隊，負責產品方向、工程執行與 AI 系統交付。",
    pageTitle: "一個由技術與市場職能構成的五人創始團隊。",
    pageDescription:
      "團隊頁改以職能分組呈現，讓技術創始團隊與市場創始團隊的責任邊界更清楚，也更符合實際運作方式。",
    metrics: [
      { label: "團隊模式", value: "5 人創始團隊" },
      { label: "覆蓋範圍", value: "產品 / 工程 / AI / 市場" },
      { label: "組織方式", value: "依技術與市場職能分組" }
    ],
    overviewTitle: "創始團隊按職能分組呈現，讓方向、執行與市場工作更清楚。",
    overviewDescription:
      "這一頁不再把所有成員攤平成單一牆面，而是依實際工作分工整理成技術與市場兩個 section，讓角色與責任更可信。"
  },
  ja: {
    homeTitle: "プロダクトシステム、エンジニアリング、応用 AI デリバリーを担う創業チーム。",
    homeDescription:
      "Bento AIII は、プロダクト方針、実装、AI システムデリバリーを担う創業チームを、責任範囲が見える形で公開しています。",
    pageTitle:
      "技術デリバリーと市場成長の役割で整理された 5 名の創業チームです。",
    pageDescription:
      "チームページは職能ごとに整理しています。技術創業チームと市場創業チームを分けて、責任範囲が読み取りやすい構成にしています。",
    metrics: [
      { label: "チーム構成", value: "5 名の創業チーム" },
      { label: "担当領域", value: "プロダクト / エンジニアリング / AI / 市場" },
      { label: "構成方針", value: "技術と市場の役割で分割" }
    ],
    overviewTitle:
      "創業チームを職能で分けることで、方向性、実装、市場側の役割が読みやすくなります。",
    overviewDescription:
      "全員を一枚の壁に並べるのではなく、実際の働き方に合わせて技術と市場の 2 つのセクションへ整理しています。"
  }
} as const satisfies Record<Locale, TeamPageCopy>;

function materializeMember(member: TeamMemberDefinition, locale: Locale): TeamMember {
  return {
    id: member.id,
    name: member.name,
    role: pick(member.role, locale),
    bio: pick(member.bio, locale),
    tags: pick(member.tags, locale)
  };
}

export function getTeamSections(locale: Locale): TeamSection[] {
  return teamSectionDefinitions.map((section) => ({
    id: section.id,
    title: pick(section.title, locale),
    subtitle: pick(section.subtitle, locale),
    members: section.memberIds.map((memberId) =>
      materializeMember(teamMemberDefinitions[memberId], locale)
    )
  }));
}

export function getTeamMembers(locale: Locale): TeamMember[] {
  return getTeamSections(locale).flatMap((section) => section.members);
}

// Keep the homepage preview focused on the technical founders so the
// preview section preserves its existing visual density.
export function getFeaturedTeamMembers(locale: Locale): TeamMember[] {
  return getTeamSections(locale)[0]?.members ?? [];
}

export function getTeamPageCopy(locale: Locale) {
  return teamPageCopy[locale];
}
