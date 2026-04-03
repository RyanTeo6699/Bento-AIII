import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type Capability = {
  title: string;
  description: string;
  bullets: string[];
};

export type ProjectStatus = "Live" | "Prototype" | "Internal" | "Concept";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  track: string;
  featured: boolean;
  outcome: string;
  disclosure: string;
  detail: {
    problem: string;
    system: string;
    architecture: string[];
    currentFocus: string;
    stage: string;
  };
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

export type CompanyProfile = {
  name: string;
  positioning: string;
  description: string;
  mission: string;
  disclosure: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  note: string;
  href?: string;
};

function same(value: string): LocalizedText {
  return {
    en: value,
    "zh-Hant": value,
    ja: value
  };
}

function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

const companyProfileContent = {
  name: "Bento AIII",
  positioning: {
    en:
      "A technology company focused on AI applications and large language model systems, building practical products, workflows, and digital experiences.",
    "zh-Hant":
      "一家專注於 AI 應用與大型語言模型系統的科技公司，持續打造實用產品、工作流程與數位體驗。",
    ja:
      "AI アプリケーションと大規模言語モデルシステムに取り組み、実用的なプロダクト、ワークフロー、デジタル体験を構築するテクノロジー企業です。"
  },
  description: {
    en:
      "Bento AIII is a small AI product and systems studio. The work usually sits between interface design, operator workflow, retrieval behavior, and delivery detail.",
    "zh-Hant":
      "Bento AIII 是一間小型 AI 產品與系統工作室，工作通常落在介面設計、操作流程、檢索行為與交付細節的交界處。",
    ja:
      "Bento AIII は小規模な AI プロダクト / システムスタジオです。仕事は、UI 設計、運用ワークフロー、検索挙動、デリバリー設計の交差点にあります。"
  },
  mission: {
    en: "Build AI software that is readable, reviewable, and useful inside real business workflows.",
    "zh-Hant": "打造可閱讀、可審查、並真正能放進業務流程中的 AI 軟體。",
    ja: "実際の業務フローの中で、読みやすく、レビューしやすく、役に立つ AI ソフトウェアをつくること。"
  },
  disclosure: {
    en:
      "This site shows current capability tracks and core delivery roles. Public case studies are intentionally limited while work is still internal, early-stage, or private.",
    "zh-Hant":
      "本網站呈現目前的能力方向與交付角色。若工作仍屬內部、早期或私人範圍，公開案例會刻意保持有限。",
    ja:
      "このサイトでは現在の能力トラックと主要なデリバリー役割を示しています。仕事が内部、初期段階、または非公開である間は、公開事例を意図的に限定しています。"
  }
};

const capabilityDefinitions = [
  {
    title: {
      en: "AI Product Engineering",
      "zh-Hant": "AI 產品工程",
      ja: "AI プロダクトエンジニアリング"
    },
    description: {
      en:
        "Bento AIII frames the workflow, defines the interface, and ships the software layer around the model instead of treating AI as a bolt-on feature.",
      "zh-Hant":
        "Bento AIII 會先定義流程與介面，再交付模型外層真正可用的軟體，而不是把 AI 當成後加功能。",
      ja:
        "Bento AIII は AI を後付け機能として扱わず、ワークフローを定義し、UI を設計し、モデル周辺のソフトウェアレイヤーまで実装します。"
    },
    bullets: {
      en: ["Product scoping", "Operator surfaces", "Frontend delivery"],
      "zh-Hant": ["產品定義", "操作介面", "前端交付"],
      ja: ["プロダクト整理", "運用画面", "フロントエンド実装"]
    }
  },
  {
    title: {
      en: "LLM Systems",
      "zh-Hant": "LLM 系統",
      ja: "LLM システム"
    },
    description: {
      en:
        "The system work covers retrieval, prompt behavior, orchestration, and evaluation so language model features can hold up under real use.",
      "zh-Hant":
        "系統工作涵蓋檢索、提示行為、編排與評估，讓語言模型功能在真實使用下仍能成立。",
      ja:
        "システム設計では、検索、プロンプト挙動、オーケストレーション、評価まで扱い、言語モデル機能を実運用に耐えるものにします。"
    },
    bullets: {
      en: ["RAG systems", "Agent workflows", "Guardrails and evals"],
      "zh-Hant": ["RAG 系統", "Agent 流程", "防護與評估"],
      ja: ["RAG システム", "Agent ワークフロー", "ガードレールと評価"]
    }
  },
  {
    title: {
      en: "Workflow Automation",
      "zh-Hant": "流程自動化",
      ja: "ワークフロー自動化"
    },
    description: {
      en:
        "Repetitive business motion gets translated into reviewable AI-assisted workflows with clear human checkpoints where judgment still matters.",
      "zh-Hant":
        "將重複性的業務動作整理為可審查的 AI 輔助流程，並保留真正需要判斷的人為節點。",
      ja:
        "繰り返し発生する業務を、判断が必要な箇所に人の確認点を残したまま、レビュー可能な AI 支援ワークフローへ置き換えます。"
    },
    bullets: {
      en: ["Approval flows", "Task routing", "Operational tooling"],
      "zh-Hant": ["審批流程", "任務分流", "營運工具"],
      ja: ["承認フロー", "タスク振り分け", "運用ツール"]
    }
  },
  {
    title: {
      en: "Delivery for Real Teams",
      "zh-Hant": "面向真實團隊的交付",
      ja: "実運用チーム向けデリバリー"
    },
    description: {
      en:
        "The delivery model assumes mixed systems, imperfect inputs, and the need to explain decisions to operators and stakeholders.",
      "zh-Hant":
        "交付方式預設要面對混合系統、不完整輸入，以及需要向操作人員與利害關係人說明決策的現實。",
      ja:
        "デリバリーモデルは、混在するシステム、不完全な入力、そして運用者や関係者への説明責任がある現実を前提にしています。"
    },
    bullets: {
      en: ["Incremental rollout", "Auditability", "Maintainable handoff"],
      "zh-Hant": ["漸進上線", "可稽核性", "可維護交接"],
      ja: ["段階的展開", "監査可能性", "保守しやすい引き継ぎ"]
    }
  }
];

const projectDefinitions = [
  {
    slug: "support-knowledge-console",
    name: same("Support Knowledge Console"),
    summary: {
      en: "A retrieval-first workspace for support and operations lookup.",
      "zh-Hant": "以檢索為核心的支援與營運知識工作區。",
      ja: "サポートおよび運用検索のための、検索中心ワークスペース。"
    },
    description: {
      en:
        "A current applied track for teams that need grounded answers against internal documentation, policy notes, and change logs.",
      "zh-Hant":
        "面向需要根據內部文件、政策備註與變更紀錄取得可追溯答案的團隊。",
      ja:
        "内部ドキュメント、ポリシーノート、変更履歴に根拠を持つ回答が必要なチーム向けの、現在進行中の実装トラックです。"
    },
    tags: {
      en: ["Retrieval", "Next.js", "LLM"],
      "zh-Hant": ["Retrieval", "Next.js", "LLM"],
      ja: ["Retrieval", "Next.js", "LLM"]
    },
    status: "Prototype" as const,
    track: {
      en: "External Track",
      "zh-Hant": "外部方向",
      ja: "外部向けトラック"
    },
    featured: true,
    outcome: {
      en:
        "Established a believable delivery shape for documentation-heavy teams without overstating deployment maturity.",
      "zh-Hant":
        "在不誇大部署成熟度的前提下，為文件密集型團隊建立了可信的交付輪廓。",
      ja:
        "導入成熟度を誇張せずに、ドキュメント負荷の高いチーム向けの現実的なデリバリー像を整理しました。"
    },
    disclosure: {
      en:
        "Representative applied track. Public references are intentionally omitted while work is still early or private.",
      "zh-Hant":
        "此為代表性的應用方向。若工作仍屬早期或私人範圍，公開參考資訊會刻意省略。",
      ja:
        "代表的な実装方向です。仕事が初期段階または非公開の間は、公開参照情報を意図的に省いています。"
    },
    detail: {
      problem: {
        en:
          "Documentation-heavy teams lose time moving between wikis, PDFs, and ticket history when answers need source grounding.",
        "zh-Hant":
          "當答案需要來源依據時，文件密集型團隊常在 wiki、PDF 與工單歷史之間來回切換而耗費時間。",
        ja:
          "回答に根拠が必要な場面では、ドキュメント量の多いチームは wiki、PDF、チケット履歴を行き来することで時間を失います。"
      },
      system: {
        en:
          "The system combines ingestion, retrieval, answer generation, and reviewer visibility inside a single operator surface.",
        "zh-Hant":
          "系統把資料匯入、檢索、答案生成與審查可視性整合在同一個操作介面中。",
        ja:
          "このシステムは、取り込み、検索、回答生成、レビュー可視化を一つの運用画面に統合します。"
      },
      architecture: {
        en: [
          "Ingestion and chunking flow for internal documentation and policy material",
          "Retrieval-backed answer composer with visible source context",
          "Operator interface for review, correction, and feedback capture"
        ],
        "zh-Hant": [
          "面向內部文件與政策資料的匯入與切片流程",
          "具來源可視上下文的檢索式回答組合器",
          "供審查、修正與回饋紀錄的操作介面"
        ],
        ja: [
          "内部ドキュメントやポリシー資料の取り込み・分割フロー",
          "参照元を見える形で提示する検索ベースの回答生成",
          "レビュー、修正、フィードバック記録のための運用画面"
        ]
      },
      currentFocus: {
        en:
          "Tighten source ranking, answer formatting, and citation visibility before broader rollout.",
        "zh-Hant":
          "在擴大使用前，持續收斂來源排序、回答格式與引用可視性。",
        ja:
          "広い展開の前に、ソース順位付け、回答整形、引用の見え方を詰めています。"
      },
      stage: {
        en: "Prototype scoped around limited-source collections and reviewer feedback.",
        "zh-Hant": "目前仍是以有限資料集與審查回饋為核心的原型階段。",
        ja: "限定されたソース群とレビュー担当者のフィードバックを軸にしたプロトタイプ段階です。"
      }
    }
  },
  {
    slug: "internal-copilot-workflow",
    name: same("Internal Copilot Workflow"),
    summary: {
      en: "An internal assistant pattern for request intake, drafting, and review queues.",
      "zh-Hant": "用於需求接收、草稿生成與審查佇列的內部助手流程。",
      ja: "依頼受付、下書き生成、レビューキューのための内部アシスタントパターン。"
    },
    description: {
      en:
        "An internal build focused on structuring repetitive request work before it hits human reviewers.",
      "zh-Hant":
        "一項內部建置，目標是在交給人工審查前，先把重複性的需求工作整理成有結構的流程。",
      ja:
        "人のレビューに入る前の反復的な依頼処理を構造化することに焦点を当てた内部構築です。"
    },
    tags: {
      en: ["Workflow", "Prompting", "Internal Tools"],
      "zh-Hant": ["Workflow", "Prompting", "Internal Tools"],
      ja: ["Workflow", "Prompting", "Internal Tools"]
    },
    status: "Internal" as const,
    track: {
      en: "Internal Build",
      "zh-Hant": "內部建置",
      ja: "内部構築"
    },
    featured: true,
    outcome: {
      en:
        "Defined a usable internal pattern for triage and draft generation without claiming a public product launch.",
      "zh-Hant":
        "在不宣稱公開產品的前提下，整理出一套可用於分流與草稿生成的內部模式。",
      ja:
        "公開プロダクトを名乗ることなく、トリアージと下書き生成に使える内部パターンを定義しました。"
    },
    disclosure: {
      en:
        "Internal operating build, shown here as a capability direction rather than a client case study.",
      "zh-Hant": "這是內部運營建置，列出的是能力方向，而不是客戶案例。",
      ja:
        "内部運用向けの構築であり、ここでは顧客事例ではなく能力方向として掲載しています。"
    },
    detail: {
      problem: {
        en:
          "Teams receive recurring requests with thin context, inconsistent formatting, and too much manual preparation work.",
        "zh-Hant":
          "團隊常收到上下文不足、格式不一且需要大量人工前置處理的重複型需求。",
        ja:
          "チームには、文脈が薄く、形式がばらつき、事前準備に手作業が多い依頼が繰り返し届きます。"
      },
      system: {
        en:
          "Bento AIII maps intake, context assembly, drafting, and review into a staged internal workflow.",
        "zh-Hant":
          "Bento AIII 將接收、上下文整理、草稿生成與審查流程整理為分階段的內部工作流。",
        ja:
          "Bento AIII は、受付、文脈整理、下書き生成、レビューを段階的な内部ワークフローとして整理します。"
      },
      architecture: {
        en: [
          "Request intake layer with structured fields and task typing",
          "Draft generation block with editable prompt and source inputs",
          "Review queue with status, owner, and approval checkpoints"
        ],
        "zh-Hant": [
          "具結構化欄位與任務分類的需求接收層",
          "可編輯提示與來源輸入的草稿生成模組",
          "帶有狀態、負責人與審批節點的審查佇列"
        ],
        ja: [
          "構造化フィールドとタスク分類を持つ受付レイヤー",
          "編集可能なプロンプトと入力ソースを持つ下書き生成ブロック",
          "状態、担当者、承認ポイントを持つレビューキュー"
        ]
      },
      currentFocus: {
        en:
          "Reduce manual triage time while keeping reviewer control visible in the interface.",
        "zh-Hant": "在保留審查控制權可見的前提下，降低人工分流時間。",
        ja: "レビュー担当者の制御を画面上で見えるように保ちながら、手作業のトリアージ時間を減らしています。"
      },
      stage: {
        en: "Internal build used to refine workflow shape before any public release.",
        "zh-Hant": "目前作為內部建置使用，用來在對外前持續調整流程形態。",
        ja: "公開化の前にワークフロー形状を磨くための内部構築です。"
      }
    }
  },
  {
    slug: "review-operations-layer",
    name: same("Review Operations Layer"),
    summary: {
      en: "A review layer for conversation, draft, and policy-sensitive outputs.",
      "zh-Hant": "面向對話、草稿與敏感輸出的審查層。",
      ja: "会話、下書き、ポリシー影響の大きい出力向けのレビュー層。"
    },
    description: {
      en:
        "A practical track for teams that need a structured way to inspect AI-assisted output before it becomes operational.",
      "zh-Hant":
        "適合需要在 AI 輔助輸出進入實際運作前，先進行有結構檢查的團隊。",
      ja:
        "AI 支援の出力を運用に入れる前に、構造化された確認方法が必要なチーム向けの実務トラックです。"
    },
    tags: {
      en: ["Evaluation", "Transcripts", "Node.js"],
      "zh-Hant": ["Evaluation", "Transcripts", "Node.js"],
      ja: ["Evaluation", "Transcripts", "Node.js"]
    },
    status: "Prototype" as const,
    track: {
      en: "External Track",
      "zh-Hant": "外部方向",
      ja: "外部向けトラック"
    },
    featured: true,
    outcome: {
      en:
        "Showed how quality review could be made faster and more consistent without pretending full automation.",
      "zh-Hant": "展示了如何在不假裝全自動化的前提下，讓品質審查更快也更一致。",
      ja:
        "完全自動化を装わずに、品質レビューをより速く一貫したものにできる形を示しました。"
    },
    disclosure: {
      en:
        "Representative quality-assurance direction. Public deployment details are intentionally withheld.",
      "zh-Hant": "這是一條代表性的品質保證方向，公開部署細節目前刻意保留。",
      ja:
        "代表的な品質保証方向です。公開できる導入詳細は意図的に絞っています。"
    },
    detail: {
      problem: {
        en:
          "Policy-sensitive outputs often need a repeatable review layer, but fully manual checking does not scale well.",
        "zh-Hant":
          "涉及政策或敏感規則的輸出通常需要可重複的審查層，但完全人工檢查很難擴展。",
        ja:
          "ポリシー影響の大きい出力には再現性のあるレビュー層が必要ですが、完全手動の確認は拡張しにくいのが実情です。"
      },
      system: {
        en:
          "The system groups outputs into reviewable units, applies explicit criteria, and surfaces exceptions that need human attention.",
        "zh-Hant":
          "系統把輸出整理成可審查單位，套用明確標準，並把需要人工注意的例外顯示出來。",
        ja:
          "出力をレビュー可能な単位に分け、明示的な基準を適用し、人の確認が必要な例外を浮かび上がらせます。"
      },
      architecture: {
        en: [
          "Input normalization for drafts, conversations, and generated summaries",
          "Criteria engine for policy fit, tone, and escalation triggers",
          "Reviewer dashboard for exception queues and sample inspection"
        ],
        "zh-Hant": [
          "針對草稿、對話與摘要輸入的正規化層",
          "用於政策符合度、語氣與升級條件的判準引擎",
          "管理例外佇列與抽樣檢查的審查儀表板"
        ],
        ja: [
          "下書き、会話、生成要約を対象にした入力正規化",
          "ポリシー適合、トーン、エスカレーション条件の判定エンジン",
          "例外キューとサンプル確認のためのレビューダッシュボード"
        ]
      },
      currentFocus: {
        en: "Tighten rubric calibration and reviewer workflows before wider adoption.",
        "zh-Hant": "在更大範圍採用前，持續收斂評分尺度與審查者工作流。",
        ja: "広い採用の前に、評価基準の調整とレビュー運用を詰めています。"
      },
      stage: {
        en: "Prototype held at a reviewable scope, not marketed as autonomous QA.",
        "zh-Hant": "目前仍維持在可審查的原型範圍，並未包裝成自主 QA 系統。",
        ja: "レビュー可能な範囲に留めたプロトタイプであり、自律 QA としては扱っていません。"
      }
    }
  },
  {
    slug: "ai-delivery-foundation",
    name: same("AI Delivery Foundation"),
    summary: {
      en: "A shared internal layer for interface patterns, prompt primitives, and operating rules.",
      "zh-Hant": "面向介面模式、提示基元與運營規則的共享內部層。",
      ja: "UI パターン、プロンプト基盤、運用ルールのための共有内部レイヤー。"
    },
    description: {
      en:
        "An internal capability block intended to make future Bento AIII builds more consistent and easier to maintain.",
      "zh-Hant":
        "一層內部能力基礎，用來讓後續 Bento AIII 的建置更一致、也更容易維護。",
      ja:
        "今後の Bento AIII の構築を、より一貫性があり、保守しやすいものにするための内部能力ブロックです。"
    },
    tags: {
      en: ["Design System", "Prompt Ops", "Internal Platform"],
      "zh-Hant": ["Design System", "Prompt Ops", "Internal Platform"],
      ja: ["Design System", "Prompt Ops", "Internal Platform"]
    },
    status: "Internal" as const,
    track: {
      en: "Capability Layer",
      "zh-Hant": "能力層",
      ja: "能力レイヤー"
    },
    featured: false,
    outcome: {
      en:
        "Shortened the distance between concept, interface scaffold, and usable system behavior for internal builds.",
      "zh-Hant":
        "縮短了內部建置從概念、介面骨架到可用系統行為之間的距離。",
      ja:
        "内部構築において、構想から画面骨格、使えるシステム挙動までの距離を短くしました。"
    },
    disclosure: {
      en:
        "Internal foundation work. It supports delivery quality rather than serving as a public-facing product.",
      "zh-Hant": "這是內部基礎建設工作，重點在提升交付品質，而不是成為公開產品。",
      ja:
        "内部基盤の整備であり、公開プロダクトではなく、デリバリー品質を支えるためのものです。"
    },
    detail: {
      problem: {
        en:
          "Repeated AI builds were recreating the same chat, search, review, and prompt-control patterns from scratch.",
        "zh-Hant":
          "重複的 AI 建置常常從零開始重做相同的聊天、搜尋、審查與提示控制模式。",
        ja:
          "繰り返される AI 実装で、チャット、検索、レビュー、プロンプト制御の同じパターンを毎回作り直していました。"
      },
      system: {
        en:
          "Bento AIII keeps a shared layer for UI structure, prompt behavior, and system conventions that can be reused across engagements.",
        "zh-Hant":
          "Bento AIII 維護一套可在不同項目中重用的 UI 結構、提示行為與系統慣例共享層。",
        ja:
          "Bento AIII は、UI 構造、プロンプト挙動、システム規約の共有レイヤーを維持し、複数案件で再利用できるようにしています。"
      },
      architecture: {
        en: [
          "Reusable UI blocks for review, context display, and action history",
          "Prompt and evaluation primitives aligned to delivery workflows",
          "Internal documentation for repeatable engineering decisions"
        ],
        "zh-Hant": [
          "供審查、上下文展示與操作歷史使用的可重用 UI 區塊",
          "與交付流程對齊的提示與評估基元",
          "支援可重複工程決策的內部文件"
        ],
        ja: [
          "レビュー、文脈表示、操作履歴向けの再利用 UI ブロック",
          "デリバリーワークフローに沿ったプロンプト / 評価基盤",
          "再現性ある技術判断のための内部ドキュメント"
        ]
      },
      currentFocus: {
        en:
          "Consolidate shared primitives so new projects start from a tighter operational baseline.",
        "zh-Hant": "持續整合共享基元，讓新項目能從更穩定的運營基線開始。",
        ja: "共有基盤を整理し、新しい案件をより安定した運用基線から始められるようにしています。"
      },
      stage: {
        en: "Internal capability layer under active use and continuous cleanup.",
        "zh-Hant": "目前是持續使用與整理中的內部能力層。",
        ja: "現在も継続利用と整理を進めている内部能力レイヤーです。"
      }
    }
  },
  {
    slug: "decision-briefing-study",
    name: same("Decision Briefing Study"),
    summary: {
      en: "A concept track for turning fragmented updates into concise operating briefs.",
      "zh-Hant": "將零散更新整理成簡明決策摘要的概念方向。",
      ja: "分散した更新情報を簡潔な運用ブリーフに変えるための構想トラック。"
    },
    description: {
      en:
        "Kept intentionally exploratory while the expected inputs, review path, and reporting tolerance are still being tested.",
      "zh-Hant":
        "在預期輸入、審查路徑與報告容忍度仍在測試中時，刻意維持為探索型方向。",
      ja:
        "期待する入力、レビュー経路、報告精度の許容度を検証中のため、意図的に探索段階に留めています。"
    },
    tags: {
      en: ["Summarization", "Reporting", "Concept"],
      "zh-Hant": ["Summarization", "Reporting", "Concept"],
      ja: ["Summarization", "Reporting", "Concept"]
    },
    status: "Concept" as const,
    track: {
      en: "Concept Study",
      "zh-Hant": "概念研究",
      ja: "構想検討"
    },
    featured: false,
    outcome: {
      en:
        "Created a realistic concept boundary for a briefing system without pretending it is already a product line.",
      "zh-Hant":
        "為簡報系統建立了更現實的概念邊界，而不是假裝它已經是成熟產品線。",
      ja:
        "すでに製品ラインであるかのように装わず、ブリーフィングシステムの現実的な構想境界を整理しました。"
    },
    disclosure: {
      en:
        "Concept-only direction. It is listed to show problem space coverage, not to imply a finished deployment.",
      "zh-Hant": "這是一條概念性方向，列出是為了呈現問題覆蓋範圍，而不是暗示已經完成部署。",
      ja:
        "構想段階のみの方向です。完成済みの導入を示すのではなく、対象問題領域を示すために掲載しています。"
    },
    detail: {
      problem: {
        en:
          "Leadership reporting often breaks down when updates live across notes, dashboards, and uneven status writeups.",
        "zh-Hant":
          "當更新散落在筆記、儀表板與品質不一的狀態說明中時，管理層報告往往容易失真。",
        ja:
          "更新情報がメモ、ダッシュボード、ばらつきのある進捗文章に散らばると、経営向け報告は崩れやすくなります。"
      },
      system: {
        en:
          "The concept organizes incoming updates by workstream, risk, and decision point before drafting a compact brief for review.",
        "zh-Hant":
          "此概念會先依工作流、風險與決策點整理輸入更新，再生成供審查的精簡摘要。",
        ja:
          "この構想では、更新情報をワークストリーム、リスク、意思決定ポイントごとに整理した上で、レビュー用の簡潔なブリーフを作成します。"
      },
      architecture: {
        en: [
          "Ingestion model for status notes, metrics, and milestone updates",
          "Drafting layer focused on variance, blockers, and next decisions",
          "Human review gate before anything becomes an official brief"
        ],
        "zh-Hant": [
          "用於狀態說明、指標與里程碑更新的匯入模型",
          "聚焦偏差、阻塞點與下一步決策的草稿層",
          "在形成正式摘要前保留人工審查關卡"
        ],
        ja: [
          "進捗メモ、指標、マイルストーン更新の取り込みモデル",
          "差分、詰まり、次の判断に焦点を当てたドラフト層",
          "正式なブリーフになる前に置く人のレビューゲート"
        ]
      },
      currentFocus: {
        en:
          "Validate what a trustworthy briefing workflow would need before any build commitment.",
        "zh-Hant": "在正式投入建置前，先驗證可信的摘要流程需要哪些條件。",
        ja: "実装に踏み切る前に、信頼できるブリーフィングフローに必要な条件を検証しています。"
      },
      stage: {
        en: "Concept study only. No production or commercial rollout is implied.",
        "zh-Hant": "目前僅為概念研究，不代表已投入正式生產或商業部署。",
        ja: "構想検討のみであり、本番運用や商用展開は前提としていません。"
      }
    }
  }
];

const teamDefinitions = [
  {
    id: "ryan-z",
    name: "Ryan Z.",
    role: {
      en: "Founder & Product Systems",
      "zh-Hant": "創辦人・產品系統",
      ja: "創業者・プロダクトシステム"
    },
    bio: {
      en:
        "Ryan Z. leads product direction, system framing, and the brand and business logic behind Bento AIII. His work focuses on 0→1 product definition, information architecture, workflow design, and practical AI product positioning.",
      "zh-Hant":
        "Ryan Z. 負責 Bento AIII 的產品方向、系統框架，以及品牌與業務邏輯。工作重點在 0→1 產品定義、資訊架構、工作流程設計，以及務實的 AI 產品定位。",
      ja:
        "Ryan Z. は Bento AIII のプロダクト方針、システムの枠組み、ブランドと事業ロジックを担当します。0→1 のプロダクト定義、情報設計、ワークフロー設計、実務的な AI プロダクトの位置づけ整理が主な役割です。"
    },
    tags: {
      en: ["Product Systems", "Strategy", "Workflow Design"],
      "zh-Hant": ["產品系統", "策略", "流程設計"],
      ja: ["プロダクトシステム", "戦略", "ワークフロー設計"]
    }
  },
  {
    id: "randy-j",
    name: "Randy J.",
    role: {
      en: "Product Engineer",
      "zh-Hant": "產品工程師",
      ja: "プロダクトエンジニア"
    },
    bio: {
      en:
        "Randy J. focuses on engineering delivery across frontend, backend, deployment, and system integration. He turns product direction into working software with clear implementation choices and dependable shipping paths.",
      "zh-Hant":
        "Randy J. 專注於前後端實作、部署與系統整合等工程交付，負責把產品方向轉成可實際運作的軟體，並維持清楚可落地的實作路徑。",
      ja:
        "Randy J. はフロントエンド、バックエンド、デプロイ、システム統合を含む実装デリバリーを担当します。プロダクトの方向性を、実際に動くソフトウェアと安定したリリース経路へ落とし込みます。"
    },
    tags: {
      en: ["Full Stack", "Infrastructure", "Shipping"],
      "zh-Hant": ["全端開發", "基礎設施", "工程交付"],
      ja: ["フルスタック", "インフラ", "実装と出荷"]
    }
  },
  {
    id: "jason-n",
    name: "Jason N.",
    role: {
      en: "Applied AI Engineer",
      "zh-Hant": "應用 AI 工程師",
      ja: "応用 AI エンジニア"
    },
    bio: {
      en:
        "Jason N. works across AI applications, product implementation, and system execution. He contributes to model-enabled features, application logic, and the engineering detail needed to ship usable product surfaces.",
      "zh-Hant":
        "Jason N. 參與 AI 應用開發、產品實作與系統執行，主要投入模型功能落地、應用邏輯，以及讓產品真正可用的工程細節。",
      ja:
        "Jason N. は AI アプリケーション開発、プロダクト実装、システム実行を横断して担当します。モデル機能の実装、アプリケーションロジック、実用的な画面を出荷するための技術細部に関わります。"
    },
    tags: {
      en: ["Applied AI", "Product Build", "System Execution"],
      "zh-Hant": ["應用 AI", "產品建置", "系統執行"],
      ja: ["応用 AI", "プロダクト実装", "システム実行"]
    }
  },
  {
    id: "john-snow",
    name: "John Snow",
    role: {
      en: "Marketing",
      "zh-Hant": "行銷",
      ja: "マーケティング"
    },
    bio: {
      en: "Marketing team. Profile details coming soon.",
      "zh-Hant": "行銷團隊。更多資料即將更新。",
      ja: "マーケティングチーム。詳細プロフィールは近日公開予定です。"
    },
    tags: {
      en: ["Marketing", "Growth", "Partnerships"],
      "zh-Hant": ["行銷", "成長", "合作"],
      ja: ["マーケティング", "成長", "パートナーシップ"]
    }
  },
  {
    id: "guo-ng",
    name: "Guo Ng",
    role: {
      en: "Brand & Outreach",
      "zh-Hant": "品牌與拓展",
      ja: "ブランド・アウトリーチ"
    },
    bio: {
      en: "Marketing team. Profile details coming soon.",
      "zh-Hant": "行銷團隊。更多資料即將更新。",
      ja: "マーケティングチーム。詳細プロフィールは近日公開予定です。"
    },
    tags: {
      en: ["Brand", "Outreach", "Marketing"],
      "zh-Hant": ["品牌", "拓展", "行銷"],
      ja: ["ブランド", "アウトリーチ", "マーケティング"]
    }
  }
];

const valueDefinitions = [
  {
    title: {
      en: "Practical Intelligence",
      "zh-Hant": "實用智能",
      ja: "実用的な知性"
    },
    description: {
      en: "We focus on useful systems, not demos that collapse outside ideal conditions.",
      "zh-Hant": "我們關注的是有用的系統，而不是離開理想條件就失效的 demo。",
      ja: "理想条件の外で崩れるデモではなく、実際に使えるシステムを重視します。"
    }
  },
  {
    title: {
      en: "Readable Systems",
      "zh-Hant": "可理解的系統",
      ja: "読み解けるシステム"
    },
    description: {
      en: "Operators and stakeholders should be able to understand what the system is doing and why.",
      "zh-Hant": "操作人員與利害關係人都應該能理解系統在做什麼，以及為什麼這樣做。",
      ja: "運用者や関係者が、システムが何をしているのか、なぜそうするのかを理解できるべきです。"
    }
  },
  {
    title: {
      en: "Production Discipline",
      "zh-Hant": "交付紀律",
      ja: "運用品質の規律"
    },
    description: {
      en: "Evaluation, traceability, and rollout strategy matter as much as the model call itself.",
      "zh-Hant": "評估、可追溯性與上線策略，和模型呼叫本身同樣重要。",
      ja: "評価、追跡可能性、展開戦略は、モデル呼び出しそのものと同じくらい重要です。"
    }
  },
  {
    title: {
      en: "Shared Ownership",
      "zh-Hant": "共同承擔",
      ja: "共有された責任"
    },
    description: {
      en: "The best AI products are built with design, engineering, and operations aligned from the start.",
      "zh-Hant": "最好的 AI 產品，從一開始就需要設計、工程與營運站在同一條線上。",
      ja: "良い AI プロダクトは、設計、エンジニアリング、運用が最初から揃った状態でつくられます。"
    }
  }
];

const roadmapDefinitions = [
  {
    phase: {
      en: "Phase 01",
      "zh-Hant": "階段 01",
      ja: "Phase 01"
    },
    title: {
      en: "Tighten Shared Build Blocks",
      "zh-Hant": "收斂共享建置模組",
      ja: "共有ビルドブロックを磨く"
    },
    description: {
      en:
        "Keep consolidating the interface, prompt, and review primitives reused across Bento AIII delivery work.",
      "zh-Hant": "持續整理在 Bento AIII 交付中重複使用的介面、提示與審查基元。",
      ja:
        "Bento AIII の案件で繰り返し使う UI、プロンプト、レビュー基盤を引き続き整理していきます。"
    }
  },
  {
    phase: {
      en: "Phase 02",
      "zh-Hant": "階段 02",
      ja: "Phase 02"
    },
    title: {
      en: "Publish Only Verifiable Case Material",
      "zh-Hant": "只公開可驗證的案例內容",
      ja: "検証可能な事例だけを公開する"
    },
    description: {
      en:
        "Turn internal notes into public case studies only when the scope, results, and permissions are concrete enough to stand behind.",
      "zh-Hant":
        "只有在範圍、結果與公開權限都足夠明確時，才會把內部筆記整理成公開案例。",
      ja:
        "スコープ、結果、公開許可の条件が十分に整った場合にのみ、内部メモを公開事例へ変換します。"
    }
  },
  {
    phase: {
      en: "Phase 03",
      "zh-Hant": "階段 03",
      ja: "Phase 03"
    },
    title: {
      en: "Expand Evaluation Coverage",
      "zh-Hant": "擴大評估覆蓋範圍",
      ja: "評価カバレッジを広げる"
    },
    description: {
      en:
        "Increase the depth of review and evaluation patterns used across operator-facing AI systems.",
      "zh-Hant":
        "提高在操作人員面向 AI 系統中使用的審查與評估模式深度。",
      ja:
        "運用者向け AI システムで使うレビューと評価パターンの深さを広げていきます。"
    }
  },
  {
    phase: {
      en: "Phase 04",
      "zh-Hant": "階段 04",
      ja: "Phase 04"
    },
    title: {
      en: "Refine Intake and Delivery Ops",
      "zh-Hant": "優化接收與交付流程",
      ja: "受付とデリバリー運用を整える"
    },
    description: {
      en:
        "Improve scoping, reporting, and handoff so the company can stay small without becoming ad hoc.",
      "zh-Hant":
        "改善範圍定義、報告與交接方式，讓公司在保持小團隊的同時不至於變得鬆散。",
      ja:
        "スコープ整理、報告、引き継ぎを改善し、小規模なままでも場当たり的にならない体制を整えます。"
    }
  }
];

const contactChannelDefinitions = [
  {
    label: {
      en: "General email",
      "zh-Hant": "一般 Email",
      ja: "一般窓口"
    },
    value: same("hello@bentoaiii.com"),
    href: "mailto:hello@bentoaiii.com",
    note: {
      en: "General inquiries, project introductions, and first-contact conversations",
      "zh-Hant": "一般洽詢、項目介紹與初步對話",
      ja: "一般問い合わせ、案件紹介、最初の相談に対応します"
    }
  },
  {
    label: {
      en: "Project intake",
      "zh-Hant": "項目提交",
      ja: "案件受付"
    },
    value: {
      en: "Use the form below",
      "zh-Hant": "請使用下方表單",
      ja: "下のフォームをご利用ください"
    },
    note: {
      en: "Best for structured briefs, workflow notes, or a scoped description of the problem",
      "zh-Hant": "最適合提交有結構的說明、流程筆記或問題範圍描述",
      ja: "構造化した概要、ワークフローメモ、課題範囲の説明に適しています"
    }
  },
  {
    label: {
      en: "Base",
      "zh-Hant": "據點",
      ja: "拠点"
    },
    value: {
      en: "Edmonton, Alberta / remote",
      "zh-Hant": "加拿大亞伯達省愛德蒙頓 / 遠端",
      ja: "エドモントン / リモート"
    },
    note: {
      en: "Distributed delivery across product, engineering, and AI systems work",
      "zh-Hant": "跨產品、工程與 AI 系統工作的分散式交付",
      ja: "プロダクト、エンジニアリング、AI システムをまたぐ分散型のデリバリー"
    }
  }
];

export function getCompanyProfile(locale: Locale): CompanyProfile {
  return {
    name: companyProfileContent.name,
    positioning: pick(companyProfileContent.positioning, locale),
    description: pick(companyProfileContent.description, locale),
    mission: pick(companyProfileContent.mission, locale),
    disclosure: pick(companyProfileContent.disclosure, locale)
  };
}

export function getCapabilityPillars(locale: Locale): Capability[] {
  return capabilityDefinitions.map((pillar) => ({
    title: pick(pillar.title, locale),
    description: pick(pillar.description, locale),
    bullets: pick(pillar.bullets, locale)
  }));
}

export function getProjects(locale: Locale): Project[] {
  return projectDefinitions.map((project) => ({
    slug: project.slug,
    name: pick(project.name, locale),
    summary: pick(project.summary, locale),
    description: pick(project.description, locale),
    tags: pick(project.tags, locale),
    status: project.status,
    track: pick(project.track, locale),
    featured: project.featured,
    outcome: pick(project.outcome, locale),
    disclosure: pick(project.disclosure, locale),
    detail: {
      problem: pick(project.detail.problem, locale),
      system: pick(project.detail.system, locale),
      architecture: pick(project.detail.architecture, locale),
      currentFocus: pick(project.detail.currentFocus, locale),
      stage: pick(project.detail.stage, locale)
    }
  }));
}

export function getProjectSlugs() {
  return projectDefinitions.map((project) => project.slug);
}

export function getTeamMembers(locale: Locale): TeamMember[] {
  return teamDefinitions.map((member) => ({
    id: member.id,
    name: member.name,
    role: pick(member.role, locale),
    bio: pick(member.bio, locale),
    tags: pick(member.tags, locale)
  }));
}

export function getValues(locale: Locale): ValueItem[] {
  return valueDefinitions.map((value) => ({
    title: pick(value.title, locale),
    description: pick(value.description, locale)
  }));
}

export function getRoadmap(locale: Locale): RoadmapItem[] {
  return roadmapDefinitions.map((item) => ({
    phase: pick(item.phase, locale),
    title: pick(item.title, locale),
    description: pick(item.description, locale)
  }));
}

export function getContactChannels(locale: Locale): ContactChannel[] {
  return contactChannelDefinitions.map((channel) => ({
    label: pick(channel.label, locale),
    value: pick(channel.value, locale),
    note: pick(channel.note, locale),
    href: channel.href
  }));
}
