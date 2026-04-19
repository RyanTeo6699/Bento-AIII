import type { Locale } from "@/lib/i18n";

type Localized<T> = Record<Locale, T>;

function localized<T>(en: T, zhHant: T, ja: T): Localized<T> {
  return {
    en,
    "zh-Hant": zhHant,
    ja
  };
}

export type ProjectStatus = "Live" | "Prototype" | "Internal" | "Concept";

export type ProjectFeature = {
  title: string;
  body: string;
};

export type ProjectAngleLayer = {
  title: string;
  body: string;
};

export type ProjectVisualLink = {
  label: string;
  href: string;
};

export type CommercialProjectView = {
  slug: string;
  name: string;
  alternateName?: string;
  definition: string;
  heroLead: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  problem: string;
  whatItDoes: string;
  coreWorkflow: string[];
  coreFeatures: ProjectFeature[];
  differentiation: {
    not: string[];
    value: string;
  };
  bentoAngle: {
    summary: string;
    layers: ProjectAngleLayer[];
    conclusion: string;
  };
  currentStatus: {
    stage: string;
    alreadyLabel: string;
    already: string[];
    nextLabel: string;
    next: string[];
  };
  visual: {
    availableMaterials: string[];
    publicDemo: string;
    projectLink?: ProjectVisualLink;
  };
  closingCta: string;
};

export type ProjectPresentationCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  sharedLogicEyebrow: string;
  sharedLogicTitle: string;
  sharedLogicDescription: string;
  sharedLogic: Array<{
    title: string;
    body: string;
  }>;
  portfolioEyebrow: string;
  portfolioTitle: string;
  portfolioDescription: string;
  stageLabel: string;
  viewProject: string;
  problemEyebrow: string;
  whatItDoesEyebrow: string;
  coreWorkflowEyebrow: string;
  coreFeaturesEyebrow: string;
  differentiationEyebrow: string;
  bentoAngleEyebrow: string;
  currentStatusEyebrow: string;
  visualDemoEyebrow: string;
  availableMaterialsLabel: string;
  publicDemoLabel: string;
  projectLinkLabel: string;
  closingEyebrow: string;
  closingDescription: string;
  indexFinalEyebrow: string;
  indexFinalTitle: string;
  indexFinalDescription: string;
  stepLabel: string;
  notTryingLabel: string;
  valueLabel: string;
};

type LocalizedProjectDefinition = {
  slug: string;
  status: ProjectStatus;
  featured: boolean;
  name: Localized<string>;
  alternateName?: Localized<string>;
  definition: Localized<string>;
  heroLead: Localized<string>;
  category: Localized<string>;
  problem: Localized<string>;
  whatItDoes: Localized<string>;
  coreWorkflow: Localized<string[]>;
  coreFeatures: Localized<ProjectFeature[]>;
  differentiation: {
    not: Localized<string[]>;
    value: Localized<string>;
  };
  bentoAngle: {
    summary: Localized<string>;
    layers: Localized<ProjectAngleLayer[]>;
    conclusion: Localized<string>;
  };
  currentStatus: {
    stage: Localized<string>;
    alreadyLabel: Localized<string>;
    already: Localized<string[]>;
    nextLabel: Localized<string>;
    next: Localized<string[]>;
  };
  visual: {
    availableMaterials: Localized<string[]>;
    publicDemo: Localized<string>;
    projectLink?: Localized<ProjectVisualLink>;
  };
  closingCta: Localized<string>;
};

function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

const projectPresentationCopy: Record<Locale, ProjectPresentationCopy> = {
  en: {
    heroEyebrow: "Projects",
    heroTitle: "Four project surfaces under one Bento AIII operating layer.",
    heroDescription:
      "Each project applies the same Bento AIII logic in a different workflow environment: structured decisions, workflow progression, and retained operational memory.",
    sharedLogicEyebrow: "Operating layer",
    sharedLogicTitle: "One operating logic across four projects.",
    sharedLogicDescription:
      "The domain changes, but the underlying job stays consistent: turn fragmented input into a workflow that can move, hold state, and improve over time.",
    sharedLogic: [
      {
        title: "Decision",
        body: "Each product starts by turning vague user situations into a clearer next-step frame."
      },
      {
        title: "Execution",
        body: "The workflow continues after the answer so activity can be advanced, reviewed, and maintained."
      },
      {
        title: "Memory",
        body: "The result persists as usable state instead of disappearing as a one-time interaction."
      }
    ],
    portfolioEyebrow: "Project layer",
    portfolioTitle: "Four company projects, not four separate product brands.",
    portfolioDescription:
      "These are four deployments of the same Bento AIII logic across different workflow environments. The point is not product variety for its own sake. The point is how the system adapts.",
    stageLabel: "Stage",
    viewProject: "View Project",
    problemEyebrow: "Problem",
    whatItDoesEyebrow: "What It Does",
    coreWorkflowEyebrow: "Workflow",
    coreFeaturesEyebrow: "Core Features",
    differentiationEyebrow: "Differentiation",
    bentoAngleEyebrow: "Why It Matters",
    currentStatusEyebrow: "Current Status",
    visualDemoEyebrow: "Visual / Demo",
    availableMaterialsLabel: "Available materials",
    publicDemoLabel: "Public demo",
    projectLinkLabel: "Project link",
    closingEyebrow: "Next",
    closingDescription:
      "Across all four projects, the pattern stays the same: structure the decision, carry the workflow forward, and retain useful state.",
    indexFinalEyebrow: "Contact",
    indexFinalTitle: "Need this kind of operating logic inside a real workflow?",
    indexFinalDescription:
      "Bento AIII can scope the workflow, interface, and memory model together instead of treating them as separate workstreams.",
    stepLabel: "Step",
    notTryingLabel: "Not trying to be",
    valueLabel: "Value"
  },
  "zh-Hant": {
    heroEyebrow: "專案",
    heroTitle: "四個專案介面，共用同一個 Bento AIII 營運核心。",
    heroDescription:
      "每個專案都在不同的工作流環境中，套用同一套 Bento AIII 邏輯：結構化決策、流程推進，以及可保留的營運記憶。",
    sharedLogicEyebrow: "營運核心",
    sharedLogicTitle: "同一套營運邏輯，落在四個專案上。",
    sharedLogicDescription:
      "領域會改變，但底層工作始終一致：把零碎輸入轉成可推進、可保留狀態、也能持續優化的工作流。",
    sharedLogic: [
      {
        title: "決策",
        body: "每個產品都先把模糊的使用者情境整理成更清楚的下一步判斷。"
      },
      {
        title: "執行",
        body: "回應不會停在答案本身，後續流程仍能持續推進、檢視與維護。"
      },
      {
        title: "記憶",
        body: "結果會保留成可再次使用的狀態，而不是一次性的互動紀錄。"
      }
    ],
    portfolioEyebrow: "專案層",
    portfolioTitle: "這是四個公司專案，不是四個彼此無關的產品品牌。",
    portfolioDescription:
      "這四個專案是在不同工作流環境中部署同一套 Bento AIII 邏輯。重點不是展示產品種類，而是看系統如何適應不同場景。",
    stageLabel: "階段",
    viewProject: "查看專案",
    problemEyebrow: "問題",
    whatItDoesEyebrow: "做什麼",
    coreWorkflowEyebrow: "流程",
    coreFeaturesEyebrow: "核心功能",
    differentiationEyebrow: "差異化",
    bentoAngleEyebrow: "為何重要",
    currentStatusEyebrow: "目前狀態",
    visualDemoEyebrow: "畫面 / 示範",
    availableMaterialsLabel: "可提供資料",
    publicDemoLabel: "公開示範",
    projectLinkLabel: "專案連結",
    closingEyebrow: "下一步",
    closingDescription:
      "四個專案都遵循同一個模式：先把決策結構化，再推進工作流，並保留可持續使用的狀態。",
    indexFinalEyebrow: "聯絡",
    indexFinalTitle: "如果你的工作流也需要這種營運核心？",
    indexFinalDescription:
      "Bento AIII 可以把工作流、介面與記憶模型一起定義，而不是把它們拆成彼此分離的工作項目。",
    stepLabel: "步驟",
    notTryingLabel: "不是要成為",
    valueLabel: "價值"
  },
  ja: {
    heroEyebrow: "プロジェクト",
    heroTitle: "4つのプロジェクト面を、1つの Bento AIII オペレーティングコアで支える。",
    heroDescription:
      "各プロジェクトは、構造化された意思決定、ワークフロー進行、保持される運用記憶という同じ Bento AIII のロジックを、異なる業務環境に適用しています。",
    sharedLogicEyebrow: "運用コア",
    sharedLogicTitle: "4つのプロジェクトに通底する、1つの運用ロジック。",
    sharedLogicDescription:
      "領域は変わっても、基礎となる仕事は同じです。断片的な入力を、進行でき、状態を保持し、時間とともに改善できるワークフローへ変えることです。",
    sharedLogic: [
      {
        title: "判断",
        body: "各プロダクトは、曖昧な利用状況をより明確な次の一手へ整理するところから始まります。"
      },
      {
        title: "実行",
        body: "答えを返して終わるのではなく、その先の実務を進め、確認し、維持できるようにします。"
      },
      {
        title: "記憶",
        body: "結果は一度きりの対話で消えず、再利用できる状態として残ります。"
      }
    ],
    portfolioEyebrow: "プロジェクト層",
    portfolioTitle: "4つの会社プロジェクトであり、別々の製品ブランドではありません。",
    portfolioDescription:
      "これは異なるワークフロー環境に同じ Bento AIII ロジックを展開した4つの実装です。製品の種類を増やすこと自体が目的ではなく、システムがどう適応するかを示しています。",
    stageLabel: "段階",
    viewProject: "プロジェクトを見る",
    problemEyebrow: "課題",
    whatItDoesEyebrow: "役割",
    coreWorkflowEyebrow: "ワークフロー",
    coreFeaturesEyebrow: "主要機能",
    differentiationEyebrow: "差異化",
    bentoAngleEyebrow: "なぜ重要か",
    currentStatusEyebrow: "現在の状況",
    visualDemoEyebrow: "画面 / デモ",
    availableMaterialsLabel: "公開可能な資料",
    publicDemoLabel: "公開デモ",
    projectLinkLabel: "プロジェクトリンク",
    closingEyebrow: "次",
    closingDescription:
      "4つのプロジェクトすべてに共通するのは、意思決定を構造化し、ワークフローを前に進め、使える状態を保持することです。",
    indexFinalEyebrow: "お問い合わせ",
    indexFinalTitle: "実際の業務フローに、この種の運用ロジックが必要ですか。",
    indexFinalDescription:
      "Bento AIII は、ワークフロー、インターフェース、記憶モデルを別々に扱わず、ひとつの設計として定義できます。",
    stepLabel: "ステップ",
    notTryingLabel: "目指しているものではない",
    valueLabel: "価値"
  }
};

const projectStatusLabels: Record<ProjectStatus, Localized<string>> = {
  Live: localized("Live", "已上線", "稼働中"),
  Prototype: localized("Prototype", "原型", "プロトタイプ"),
  Internal: localized("Internal Build", "內部版本", "内部ビルド"),
  Concept: localized("Concept", "概念", "コンセプト")
};

const projectDefinitions: LocalizedProjectDefinition[] = [
  {
    slug: "immipilot",
    status: "Prototype",
    featured: true,
    name: localized("ImmiPilot", "ImmiPilot", "ImmiPilot"),
    definition: localized(
      "An AI-assisted immigration workflow system for international students and temporary residents in Canada, designed to turn messy status questions into structured case progress, next actions, and export-ready preparation outputs.",
      "一套面向加拿大國際學生與臨時居民的 AI 輔助移民工作流系統，目的是把混亂的身分問題整理成結構化案件進度、下一步行動，以及可匯出的申請準備內容。",
      "カナダの留学生と一時滞在者向けに設計された AI 支援の入管ワークフローシステム。複雑で曖昧な在留ステータスの相談を、構造化された案件進行、次の行動、そして書き出し可能な準備アウトプットへ変えます."
    ),
    heroLead: localized(
      "ImmiPilot is built for users who know they need to extend status, maintain continuity, or prepare for a transition, but do not know what to do next, what is missing, or where the real risk lies.",
      "ImmiPilot 面向那些知道自己需要延長身分、維持合法狀態，或為下一階段做準備，但還不知道下一步是什麼、缺了什麼、真正風險在哪裡的人。",
      "ImmiPilot は、在留期間延長や資格維持、次の移行準備が必要だと分かっていても、次に何をすべきか、何が不足しているか、本当のリスクがどこにあるかが分からない利用者のためのものです."
    ),
    category: localized(
      "Immigration workflow system",
      "移民流程系統",
      "入管ワークフローシステム"
    ),
    problem: localized(
      "Immigration support often breaks at the point where a user needs structure, not more information. Government pages, forums, and generic AI tools may provide answers, but they rarely convert a real situation into a case that can be advanced, reviewed, or handed off.",
      "移民支援最常失效的地方，不是在資訊不足，而是在使用者需要的是結構而不是更多資訊。政府網站、論壇和通用 AI 工具或許能回答問題，但很少能把真實情況轉成可推進、可檢視、可交接的案件。",
      "入管支援が崩れやすいのは、利用者が必要としているのが追加情報ではなく構造である場面です。政府サイト、掲示板、汎用 AI ツールは答えを返せても、実際の状況を進行・確認・引き継ぎ可能な案件へ変えることはほとんどできません."
    ),
    whatItDoes: localized(
      "ImmiPilot works as a case progression system, not a generic immigration chatbot. It identifies likely case type, urgency, and missing context, then turns the result into a structured workspace with checklist logic, risk signals, next actions, and exportable case summaries.",
      "ImmiPilot 是一套案件推進系統，不是通用移民聊天機器人。它會先辨識可能的案件類型、急迫性與缺失背景，再把結果整理成具備清單邏輯、風險提示、下一步行動和可匯出案件摘要的工作空間。",
      "ImmiPilot は汎用的な入管チャットボットではなく、案件進行システムとして機能します。想定される案件種別、緊急度、不足文脈を見極め、その結果をチェックリストロジック、リスクシグナル、次の行動、書き出し可能な案件要約を備えた構造化ワークスペースへ変換します."
    ),
    coreWorkflow: localized(
      [
        "Start from a real immigration scenario",
        "Identify case type, urgency, and missing context",
        "Generate structured guidance and risk-aware next steps",
        "Save the result into a continuing case workspace",
        "Build or update checklist, missing items, and actions",
        "Export a clean summary for review or handoff"
      ],
      [
        "從真實的移民情境開始",
        "辨識案件類型、急迫性與缺失背景",
        "產出結構化指引與具風險意識的下一步",
        "把結果存入可持續維護的案件工作區",
        "建立或更新清單、缺漏項目與行動",
        "匯出可供審查或交接的清楚摘要"
      ],
      [
        "実際の入管シナリオから開始する",
        "案件種別、緊急度、不足文脈を特定する",
        "構造化された案内とリスクを踏まえた次の一手を生成する",
        "結果を継続可能な案件ワークスペースへ保存する",
        "チェックリスト、不足項目、行動を作成または更新する",
        "確認や引き継ぎのために整理された要約を書き出す"
      ]
    ),
    coreFeatures: localized(
      [
        {
          title: "Scenario-Based Entry",
          body: "Users begin from concrete pathways such as Study Permit Extension, Visitor Record, or PGWP preparation."
        },
        {
          title: "Structured AI Response",
          body: "Questions are converted into summary, next steps, support logic, and risk-aware guidance."
        },
        {
          title: "Case Workspace",
          body: "Each case persists as a structured workflow rather than a disposable answer."
        },
        {
          title: "Checklist and Missing-Item Logic",
          body: "User input becomes preparation tasks, requirements, and missing items."
        },
        {
          title: "Risk Flags",
          body: "The system highlights timing pressure, incomplete context, and weak preparation states."
        },
        {
          title: "Export and Handoff Summary",
          body: "Cases can be reviewed, shared, and transferred in a clean structured format."
        }
      ],
      [
        {
          title: "情境式入口",
          body: "使用者可從學簽延長、訪客紀錄或 PGWP 準備等具體情境進入。"
        },
        {
          title: "結構化 AI 回應",
          body: "系統會把提問整理成摘要、下一步、支援邏輯與具風險意識的指引。"
        },
        {
          title: "案件工作區",
          body: "每個案件都會保留為可持續推進的結構化流程，而不是一次性的回答。"
        },
        {
          title: "清單與缺漏項目邏輯",
          body: "使用者輸入會被轉成準備任務、申請要求與缺漏項目。"
        },
        {
          title: "風險標記",
          body: "系統會標示時程壓力、背景資訊不足與準備薄弱的狀態。"
        },
        {
          title: "匯出與交接摘要",
          body: "案件可以被檢視、分享，並以清楚的結構化格式交接。"
        }
      ],
      [
        {
          title: "シナリオ起点の入口",
          body: "学習許可延長、ビジターレコード、PGWP 準備など、具体的な経路から開始できます。"
        },
        {
          title: "構造化された AI 応答",
          body: "質問は要約、次の行動、支援ロジック、リスクを踏まえた案内へ整理されます。"
        },
        {
          title: "案件ワークスペース",
          body: "各案件は使い捨ての回答ではなく、継続できる構造化ワークフローとして残ります。"
        },
        {
          title: "チェックリストと不足項目ロジック",
          body: "利用者入力は準備タスク、要件、不足項目へ変換されます。"
        },
        {
          title: "リスクフラグ",
          body: "時期的な圧力、文脈不足、準備の弱さをシステムが可視化します。"
        },
        {
          title: "書き出しと引き継ぎ要約",
          body: "案件は確認、共有、引き継ぎがしやすい構造化形式で出力できます。"
        }
      ]
    ),
    differentiation: {
      not: localized(
        [
          "a generic immigration chatbot",
          "a content-first policy portal",
          "a static dashboard",
          "a one-time form helper"
        ],
        ["通用移民聊天機器人", "以內容為主的政策入口", "靜態儀表板", "一次性表單輔助工具"],
        ["汎用的な入管チャットボット", "コンテンツ中心の制度ポータル", "静的ダッシュボード", "単発のフォーム補助ツール"]
      ),
      value: localized(
        "Its value comes from turning fragmented user input into a workflow that can be advanced, updated, reviewed, and handed off.",
        "它的價值，在於把零碎的使用者輸入轉成可推進、可更新、可檢視、也可交接的工作流。",
        "価値は、断片的な利用者入力を、進行・更新・確認・引き継ぎできるワークフローへ変える点にあります。"
      )
    },
    bentoAngle: {
      summary: localized(
        "ImmiPilot reflects Bento AIII's core model across all three layers:",
        "ImmiPilot 反映了 Bento AIII 在三個層次上的核心模型：",
        "ImmiPilot は、Bento AIII のコアモデルを3つの層で表しています。"
      ),
      layers: localized(
        [
          {
            title: "Decision",
            body: "scenario recognition, urgency detection, next-step prioritization"
          },
          {
            title: "Execution",
            body: "workflow progression beyond the answer layer"
          },
          {
            title: "Memory",
            body: "persistent case state that remains usable over time"
          }
        ],
        [
          {
            title: "決策",
            body: "情境辨識、急迫性判斷、下一步優先排序"
          },
          {
            title: "執行",
            body: "不只停在回答，而是持續推進案件流程"
          },
          {
            title: "記憶",
            body: "可長期使用的持續案件狀態"
          }
        ],
        [
          {
            title: "判断",
            body: "シナリオ認識、緊急度判定、次の一手の優先順位付け"
          },
          {
            title: "実行",
            body: "回答の先まで続くワークフロー進行"
          },
          {
            title: "記憶",
            body: "時間が経っても使える持続的な案件状態"
          }
        ]
      ),
      conclusion: localized(
        "It is an application-layer product that also points toward a deeper operating layer for structured cases, workflow transitions, and handoff-ready outputs.",
        "它是一個應用層產品，同時也指向更深一層的營運核心：結構化案件、流程轉換，以及可直接交接的輸出。",
        "これはアプリケーション層の製品であると同時に、構造化案件、ワークフロー遷移、引き継ぎ可能なアウトプットを支える、より深い運用レイヤーを示しています。"
      )
    },
    currentStatus: {
      stage: localized(
        "Product definition and workflow architecture stage",
        "產品定義與流程架構階段",
        "製品定義とワークフロー設計の段階"
      ),
      alreadyLabel: localized("Already Defined", "已完成定義", "すでに定義済み"),
      already: localized(
        [
          "core product direction",
          "workflow-based case logic",
          "first scenarios for V1",
          "entry -> answer -> workspace -> export structure"
        ],
        [
          "核心產品方向",
          "以流程為基礎的案件邏輯",
          "V1 首批情境",
          "入口 -> 回答 -> 工作區 -> 匯出 的結構"
        ],
        [
          "製品のコア方向性",
          "ワークフロー基盤の案件ロジック",
          "V1 向けの初期シナリオ",
          "入口 -> 回答 -> ワークスペース -> 書き出し の構造"
        ]
      ),
      nextLabel: localized("Next", "下一步", "次"),
      next: localized(
        [
          "build V1 workflow for status-continuity scenarios",
          "launch structured scenario-entry flows",
          "add workspace and export / handoff logic",
          "validate movement from asking into maintaining a case state"
        ],
        [
          "建立針對身分延續情境的 V1 流程",
          "推出結構化情境入口流程",
          "加入工作區與匯出 / 交接邏輯",
          "驗證從提問到維持案件狀態的轉換"
        ],
        [
          "在留継続シナリオ向けの V1 ワークフローを構築する",
          "構造化されたシナリオ入口フローを立ち上げる",
          "ワークスペースと書き出し / 引き継ぎロジックを追加する",
          "質問から案件状態の維持へ移る流れを検証する"
        ]
      )
    },
    visual: {
      availableMaterials: localized(
        ["workflow diagrams", "product architecture diagrams", "initial workspace and case-flow concepts"],
        ["流程圖", "產品架構圖", "初步工作區與案件流程概念"],
        ["ワークフロー図", "製品アーキテクチャ図", "初期ワークスペースと案件フローのコンセプト"]
      ),
      publicDemo: localized("Not yet publicly released", "尚未公開發布", "まだ一般公開されていません"),
      projectLink: localized(
        { label: "ImmiPilot.ca", href: "https://immipilot.ca" },
        { label: "ImmiPilot.ca", href: "https://immipilot.ca" },
        { label: "ImmiPilot.ca", href: "https://immipilot.ca" }
      )
    },
    closingCta: localized(
      "See how ImmiPilot turns immigration questions into structured case progression.",
      "了解 ImmiPilot 如何把移民問題轉成可推進的結構化案件流程。",
      "ImmiPilot が入管相談をどのように構造化された案件進行へ変えるかを確認してください。"
    )
  },
  {
    slug: "daigou-helper",
    status: "Prototype",
    featured: true,
    name: localized("Daigou Helper", "Daigou Helper", "Daigou Helper"),
    alternateName: localized("代购神奇", "代购神奇", "代购神奇"),
    definition: localized(
      "A cross-border daigou operations platform for individual resellers and small teams, designed to manage products, inventory, orders, suppliers, and multi-warehouse workflows in one system.",
      "一套給個人代購與小型團隊使用的跨境代購營運平台，能在同一個系統中管理商品、庫存、訂單、供應商與多倉工作流。",
      "個人リセラーや小規模チーム向けの越境代購オペレーションプラットフォーム。商品、在庫、注文、仕入先、複数倉庫ワークフローを一つのシステムで管理するために設計されています。"
    ),
    heroLead: localized(
      "Daigou Helper is built for resale operators who have outgrown spreadsheets, chat-based order handling, and manual warehouse coordination, but still need a workflow that matches how daigou businesses actually run.",
      "Daigou Helper 面向那些已經無法再靠試算表、聊天訊息接單與人工倉庫協調來維持營運，但仍需要真正符合代購運作方式的工作流的經營者。",
      "Daigou Helper は、スプレッドシート、チャットベースの受注、手作業の倉庫調整ではもう回らない一方で、代購ビジネスの実態に合うワークフローを必要とする運営者のために作られています。"
    ),
    category: localized(
      "Cross-border operations system",
      "跨境營運系統",
      "越境オペレーションシステム"
    ),
    problem: localized(
      "Daigou operations usually run on fragmented tools: chat for customer requests, spreadsheets for stock and orders, memory for SKU details, and ad hoc coordination for suppliers and shipping. This leads to stock mismatch, duplicated records, overselling, slow fulfillment, and weak team control. The problem matters more now because cross-border resale is becoming more operationally complex, not less. Catalogs are larger, customer expectations are faster, and margin pressure is tighter. Once volume grows, manual workflows stop being inconvenient and start becoming destructive.",
      "代購營運通常建立在分散工具之上：顧客需求在聊天裡、庫存與訂單在試算表裡、SKU 細節靠記憶、供應商與物流則靠臨時協調。結果就是庫存不準、資料重複、超賣、履約變慢，以及團隊控管薄弱。這個問題現在更重要，因為跨境代購不是變簡單，而是越來越複雜。商品目錄更大、顧客期待更快、利潤壓力更高。當量一上來，手工作業就不只是麻煩，而會直接破壞營運。",
      "代購オペレーションは通常、断片化したツールの上で動いています。顧客要望はチャット、在庫と注文はスプレッドシート、SKU 詳細は記憶、仕入先や発送はその場しのぎの調整です。その結果、在庫不一致、重複記録、売り越し、遅い出荷、弱いチーム統制が起こります。しかも越境リセールは簡単になるどころか、運用上ますます複雑になっています。カタログは大きくなり、顧客期待は速くなり、利益圧力は強まっています。量が増えると、手作業フローは不便を超えて破壊的になります。"
    ),
    whatItDoes: localized(
      "Daigou Helper works as a cross-border operations system, not a generic commerce dashboard. It connects intake, catalog structure, inventory states, supplier flow, and fulfillment execution into one operating loop built for daigou realities.",
      "Daigou Helper 是一套跨境營運系統，不是通用電商後台。它把接單入口、商品結構、庫存狀態、供應商流程與履約執行串成一個真正符合代購現場的營運迴路。",
      "Daigou Helper は汎用的な EC ダッシュボードではなく、越境オペレーションシステムとして機能します。受注入口、商品構造、在庫状態、仕入先フロー、出荷実行を、代購の現実に合わせた一つの運用ループへ接続します。"
    ),
    coreWorkflow: localized(
      [
        "Start from incoming customer demand, supplier links, spreadsheets, chat text, or receipts",
        "Import and structure the input into products, SKU records, and orders",
        "Route inventory impact into the correct warehouse context",
        "Manage purchasing, stock movement, supplier coordination, and warehouse actions",
        "Execute fulfillment with barcode and shipment operations",
        "Keep orders, stock, suppliers, and shipment status synchronized in one backend"
      ],
      [
        "從顧客需求、供應商連結、試算表、聊天內容或收據開始",
        "把輸入匯入並整理成商品、SKU 記錄與訂單",
        "把庫存影響導入正確的倉庫情境",
        "管理採購、庫存流動、供應商協調與倉庫作業",
        "透過條碼與出貨流程執行履約",
        "在同一個後台同步訂單、庫存、供應商與物流狀態"
      ],
      [
        "顧客需要、仕入先リンク、スプレッドシート、チャット文面、レシートから開始する",
        "入力を商品、SKU レコード、注文へ取り込み構造化する",
        "在庫への影響を正しい倉庫コンテキストへ振り分ける",
        "仕入れ、在庫移動、仕入先調整、倉庫作業を管理する",
        "バーコードと出荷オペレーションで履行を実行する",
        "注文、在庫、仕入先、出荷状態を一つのバックエンドで同期する"
      ]
    ),
    coreFeatures: localized(
      [
        {
          title: "Smart Order Intake",
          body: "Supports Excel import, text-based order parsing, and receipt OCR."
        },
        {
          title: "Product Center with SPU / SKU Structure",
          body: "Handles products through a two-layer structure with SKU-level control for size, color, UPC, pricing, and supplier linkage."
        },
        {
          title: "Multi-Warehouse Inventory Management",
          body: "Tracks overseas stock, domestic stock, and in-transit goods with real-time linkage."
        },
        {
          title: "Supplier and Purchasing Workflow",
          body: "Supports purchase orders, supplier records, and procurement actions."
        },
        {
          title: "Barcode and Fulfillment Operations",
          body: "Enables barcode-based warehouse actions, shipment batching, and tracking updates."
        },
        {
          title: "Multi-Tenant and Role-Based Access",
          body: "Separates team data, supports permissions, and improves auditability."
        }
      ],
      [
        {
          title: "智慧接單入口",
          body: "支援 Excel 匯入、文字訂單解析與收據 OCR。"
        },
        {
          title: "具備 SPU / SKU 結構的商品中心",
          body: "以雙層結構管理商品，並在 SKU 層級控制尺寸、顏色、UPC、價格與供應商連結。"
        },
        {
          title: "多倉庫庫存管理",
          body: "即時串接海外庫存、國內庫存與在途貨品。"
        },
        {
          title: "供應商與採購流程",
          body: "支援採購單、供應商紀錄與採購作業。"
        },
        {
          title: "條碼與履約作業",
          body: "支援以條碼進行倉庫作業、批次出貨與物流追蹤更新。"
        },
        {
          title: "多租戶與角色權限",
          body: "隔離團隊資料、支援權限控制，並提升可稽核性。"
        }
      ],
      [
        {
          title: "スマート受注入口",
          body: "Excel 取込、テキスト注文解析、レシート OCR に対応します。"
        },
        {
          title: "SPU / SKU 構造を持つ商品センター",
          body: "二層構造で商品を扱い、サイズ、色、UPC、価格、仕入先連携を SKU 単位で管理します。"
        },
        {
          title: "複数倉庫の在庫管理",
          body: "海外在庫、国内在庫、輸送中在庫をリアルタイムに連動させます。"
        },
        {
          title: "仕入先と購買ワークフロー",
          body: "発注、仕入先記録、調達アクションを支援します。"
        },
        {
          title: "バーコードと履行オペレーション",
          body: "バーコードベースの倉庫作業、出荷バッチ処理、追跡更新を可能にします。"
        },
        {
          title: "マルチテナントとロールベース権限",
          body: "チームデータを分離し、権限を支え、監査性を高めます。"
        }
      ]
    ),
    differentiation: {
      not: localized(
        [
          "a normal shopping app",
          "a simple order form",
          "a standalone warehouse screen",
          "a generic ERP pretending to fit daigou use cases",
          "a product catalog tool with admin pages"
        ],
        ["一般購物 App", "簡單訂單表單", "獨立的倉庫畫面", "假裝適合代購的通用 ERP", "帶後台頁面的商品目錄工具"],
        ["普通のショッピングアプリ", "単純な注文フォーム", "独立した倉庫画面", "代購用途に見せかけた汎用 ERP", "管理画面付きの商品カタログツール"]
      ),
      value: localized(
        "Its value comes from coordinating the real operating loop of daigou teams: messy intake sources, SKU-heavy catalogs, multi-location inventory, supplier relationships, and fulfillment execution. Normal tools store information. This system coordinates operations.",
        "它的價值，在於真正協調代購團隊的營運迴路：混亂的接單來源、SKU 密集的商品目錄、多地庫存、供應商關係與履約執行。一般工具只是存資料，這套系統是在協調作業。",
        "価値は、代購チームの実際の運用ループを調整できる点にあります。雑多な受注源、SKU の多いカタログ、複数拠点在庫、仕入先関係、履行実行です。普通のツールは情報を保存するだけですが、このシステムは運用を調整します。"
      )
    },
    bentoAngle: {
      summary: localized(
        "Daigou Helper demonstrates Bento AIII's ability to convert fragmented real-world business behavior into structured operational software.",
        "Daigou Helper 展示了 Bento AIII 如何把零碎的真實商業行為轉成結構化的營運軟體。",
        "Daigou Helper は、断片化した現実の業務行動を構造化された運用ソフトウェアへ変換する Bento AIII の能力を示しています。"
      ),
      layers: localized(
        [
          {
            title: "Execution logic",
            body: "moving order handling, stock movement, procurement, and fulfillment into one controlled workflow"
          },
          {
            title: "Memory logic",
            body: "persistent product, supplier, and inventory records"
          },
          {
            title: "Decision logic",
            body: "secondary but present through stock visibility, purchasing timing, and operational prioritization"
          }
        ],
        [
          {
            title: "執行邏輯",
            body: "把接單、庫存移動、採購與履約放進同一個可控制的流程"
          },
          {
            title: "記憶邏輯",
            body: "持續保留的商品、供應商與庫存資料"
          },
          {
            title: "決策邏輯",
            body: "雖然是次層，但仍體現在庫可視性、採購時機與作業優先順序中"
          }
        ],
        [
          {
            title: "実行ロジック",
            body: "受注処理、在庫移動、調達、履行を一つの制御されたワークフローへ乗せること"
          },
          {
            title: "記憶ロジック",
            body: "持続する商品、仕入先、在庫の記録"
          },
          {
            title: "判断ロジック",
            body: "主役ではないが、在庫可視化、購買タイミング、運用優先順位に現れる判断ロジック"
          }
        ]
      ),
      conclusion: localized(
        "It is more than an application-layer admin tool. Underneath, it reveals deeper system logic in structured intake, entity relationships, warehouse state transitions, role isolation, and workflow coordination.",
        "它不只是應用層的管理工具。其底層揭示的是更深的系統邏輯：結構化入口、實體關係、倉庫狀態轉換、角色隔離與流程協調。",
        "これは単なるアプリケーション層の管理ツールではありません。その下には、構造化された入口、エンティティ関係、倉庫状態遷移、権限分離、ワークフロー調整という深いシステムロジックがあります。"
      )
    },
    currentStatus: {
      stage: localized(
        "Functional product prototype / early operational system",
        "可運作的產品原型 / 初期營運系統",
        "機能する製品プロトタイプ / 初期運用システム"
      ),
      alreadyLabel: localized("Already Built", "已完成", "すでに構築済み"),
      already: localized(
        [
          "working backend / admin interface",
          "dashboard metrics",
          "product management",
          "SKU structure",
          "inventory views",
          "order handling",
          "operational management screens",
          "product materials describing OCR intake, text parsing, multi-warehouse logic, supplier flow, and tenant isolation"
        ],
        [
          "可運作的後台 / 管理介面",
          "儀表板指標",
          "商品管理",
          "SKU 結構",
          "庫存檢視",
          "訂單處理",
          "營運管理畫面",
          "說明 OCR 接單、文字解析、多倉邏輯、供應商流程與租戶隔離的產品資料"
        ],
        [
          "稼働するバックエンド / 管理画面",
          "ダッシュボード指標",
          "商品管理",
          "SKU 構造",
          "在庫ビュー",
          "注文処理",
          "運用管理画面",
          "OCR 取込、テキスト解析、複数倉庫ロジック、仕入先フロー、テナント分離を説明する製品資料"
        ]
      ),
      nextLabel: localized("Next", "下一步", "次"),
      next: localized(
        [
          "harden intake automation",
          "tighten procurement-to-fulfillment linkage",
          "improve reporting",
          "prove support for live daigou teams at higher volume"
        ],
        ["強化接單自動化", "收緊採購到履約的串接", "提升報表能力", "驗證在更高量下支援真實代購團隊的能力"],
        ["受注自動化を強化する", "調達から履行までの連携を引き締める", "レポーティングを改善する", "より高い取扱量で実運用チームを支えられることを示す"]
      )
    },
    visual: {
      availableMaterials: localized(
        [
          "backend / admin screenshots",
          "pitch deck PDF / PPT",
          "product overview PDF",
          "dashboard, inventory, product, and order management screens"
        ],
        ["後台 / 管理畫面截圖", "提案簡報 PDF / PPT", "產品概覽 PDF", "儀表板、庫存、商品與訂單管理畫面"],
        ["バックエンド / 管理画面のスクリーンショット", "ピッチデック PDF / PPT", "製品概要 PDF", "ダッシュボード、在庫、商品、注文管理画面"]
      ),
      publicDemo: localized("None provided yet", "目前尚未提供", "現時点では未提供")
    },
    closingCta: localized(
      "Request a demo to see how Daigou Helper replaces Excel, chat-based order handling, and fragmented stock management with one operational system.",
      "申請 Demo，了解 Daigou Helper 如何以單一營運系統取代 Excel、聊天接單與分散的庫存管理。",
      "Daigou Helper が Excel、チャット受注、分断された在庫管理をどのように一つの運用システムへ置き換えるか、デモで確認してください。"
    )
  },
  {
    slug: "shiok",
    status: "Internal",
    featured: true,
    name: localized("Shiok", "Shiok", "Shiok"),
    definition: localized(
      "An AI-assisted dining copilot for frequent diners, built to improve ordering decisions, capture meal events automatically, and turn everyday dining into structured review and spending insight.",
      "一套面向經常外食者的 AI 餐飲副駕系統，用來改善點餐決策、自動記錄用餐事件，並把日常外食轉成結構化的回顧與支出洞察。",
      "外食頻度の高い人向けの AI 支援ダイニングコパイロット。注文判断を改善し、食事イベントを自動で記録し、日常の外食を構造化されたレビューと支出インサイトへ変えます。"
    ),
    heroLead: localized(
      "Shiok is designed for people who eat out often and want better control over what they order, what it costs, and what those decisions add up to over time.",
      "Shiok 是為經常外食、想更好掌握自己點了什麼、花了多少，以及這些決策長期累積成什麼結果的人而設計。",
      "Shiok は、外食の機会が多く、自分が何を頼み、いくらかかり、その判断が時間とともに何へ積み上がるのかを、より良く把握したい人のために設計されています。"
    ),
    category: localized("Dining decision system", "餐飲決策系統", "外食意思決定システム"),
    problem: localized(
      "Dining is a repeated high-friction decision space shaped by menu overload, rising costs, dietary constraints, and weak review loops. Most people rely on memory, impulse, receipts, or generic tracking apps that fail once real-world dining becomes messy.",
      "外食是一個高頻且摩擦很高的決策場景，會受到菜單資訊過載、成本上升、飲食限制與薄弱回顧機制的影響。大多數人只能依賴記憶、衝動、收據或通用記錄 App，而這些方法一旦碰到真實世界裡混亂的外食情境就會失效。",
      "外食は、メニュー過多、価格上昇、食事制約、弱い振り返りループに左右される、高頻度で摩擦の大きい意思決定領域です。多くの人は記憶、衝動、レシート、汎用トラッキングアプリに頼りますが、現実の外食が複雑になると機能しなくなります。"
    ),
    whatItDoes: localized(
      "Shiok works as a dining decision-and-review system. It supports the choice, captures the event, structures the record, allows correction, and feeds the result into continued reflection and behavioral optimization.",
      "Shiok 是一套餐飲決策與回顧系統。它支援當下選擇、記錄用餐事件、整理紀錄、允許修正，並把結果持續回饋到後續的反思與行為優化。",
      "Shiok は外食の意思決定とレビューのためのシステムです。選択を支え、出来事を記録し、記録を構造化し、修正を可能にし、その結果を継続的な振り返りと行動最適化へつなげます。"
    ),
    coreWorkflow: localized(
      [
        "Start from a menu, meal decision, receipt, or completed order",
        "Parse the dining event into structured meal data",
        "Review and correct the result",
        "Surface constraints, warnings, and weekly progress context",
        "Build a closed-loop dining record",
        "Use accumulated history to improve future choices"
      ],
      [
        "從菜單、點餐決策、收據或已完成訂單開始",
        "把用餐事件解析成結構化餐點資料",
        "檢視並修正結果",
        "呈現限制、警示與每週進度脈絡",
        "建立封閉迴路的用餐紀錄",
        "利用累積歷史改善未來選擇"
      ],
      [
        "メニュー、食事の選択、レシート、完了済み注文から開始する",
        "食事イベントを構造化された食事データへ解析する",
        "結果を確認し修正する",
        "制約、警告、週次進捗の文脈を表示する",
        "閉じたループの外食記録を作る",
        "蓄積した履歴を今後の選択改善に使う"
      ]
    ),
    coreFeatures: localized(
      [
        {
          title: "Constraint-Aware Ordering Support",
          body: "Helps users make better tradeoffs under budget, preference, and dietary constraints."
        },
        {
          title: "Automatic Meal Capture and Parsing",
          body: "Turns meal-related inputs into structured records without requiring full manual logging."
        },
        {
          title: "Review and Correction Flow",
          body: "Allows users to inspect low-confidence outputs and improve data quality over time."
        },
        {
          title: "Weekly Progress and Insight Layer",
          body: "Surfaces activity, spend totals, pending reviews, and actionable summaries."
        },
        {
          title: "Retention and Follow-Up Surface",
          body: "Brings unfinished items and next actions back through an active Inbox flow."
        },
        {
          title: "WebDashboard and Export Pipeline",
          body: "Supports reporting, filtering, and structured analysis outside the mobile app."
        }
      ],
      [
        {
          title: "具限制意識的點餐支援",
          body: "幫助使用者在預算、偏好與飲食限制下做出更好的取捨。"
        },
        {
          title: "自動記錄與解析餐點",
          body: "把與餐點相關的輸入轉成結構化紀錄，不需要完整手動記帳。"
        },
        {
          title: "檢視與修正流程",
          body: "讓使用者檢查低信心結果，並隨時間提升資料品質。"
        },
        {
          title: "每週進度與洞察層",
          body: "呈現活動、總支出、待檢視項目與可採取行動的摘要。"
        },
        {
          title: "保留與後續處理介面",
          body: "透過持續運作的 Inbox，把未完成項目與下一步重新帶回來。"
        },
        {
          title: "WebDashboard 與匯出管線",
          body: "支援在行動 App 之外進行報表、篩選與結構化分析。"
        }
      ],
      [
        {
          title: "制約を踏まえた注文支援",
          body: "予算、好み、食事制約の中で、より良いトレードオフを選べるよう支援します。"
        },
        {
          title: "食事の自動記録と解析",
          body: "食事に関する入力を、全面的な手動記録なしで構造化データへ変換します。"
        },
        {
          title: "レビューと修正フロー",
          body: "信頼度の低い出力を確認し、時間とともにデータ品質を上げられます。"
        },
        {
          title: "週次進捗とインサイト層",
          body: "活動、支出合計、未レビュー項目、行動可能な要約を表示します。"
        },
        {
          title: "保持とフォローアップ面",
          body: "未完了項目と次の行動を、動的な Inbox フローで再び前面に戻します。"
        },
        {
          title: "WebDashboard とエクスポート基盤",
          body: "モバイルアプリ外でのレポート、絞り込み、構造化分析を支えます。"
        }
      ]
    ),
    differentiation: {
      not: localized(
        ["a calorie tracker", "a flat expense tracker", "a generic recommendation chatbot", "a simple meal diary"],
        ["卡路里追蹤器", "扁平的記帳工具", "通用推薦聊天機器人", "簡單的餐飲日記"],
        ["カロリートラッカー", "単純な支出記録ツール", "汎用レコメンドチャットボット", "簡単な食事日記"]
      ),
      value: localized(
        "Its value comes from the closed loop between decision, capture, correction, review, and future optimization.",
        "它的價值，在於把決策、記錄、修正、回顧與未來優化串成一個封閉迴路。",
        "価値は、意思決定、記録、修正、振り返り、将来の最適化を閉じたループでつなぐ点にあります。"
      )
    },
    bentoAngle: {
      summary: localized(
        "Shiok reflects Bento AIII's operating logic across three layers:",
        "Shiok 反映了 Bento AIII 在三個層次上的營運邏輯：",
        "Shiok は、Bento AIII の運用ロジックを3つの層で表しています。"
      ),
      layers: localized(
        [
          {
            title: "Decision",
            body: "constrained ordering support at the point of choice"
          },
          {
            title: "Execution",
            body: "structured capture, review, and follow-up flows"
          },
          {
            title: "Memory",
            body: "cumulative meal history, corrections, patterns, and behavioral context"
          }
        ],
        [
          {
            title: "決策",
            body: "在選擇當下提供具限制意識的點餐支援"
          },
          {
            title: "執行",
            body: "結構化的記錄、檢視與後續處理流程"
          },
          {
            title: "記憶",
            body: "累積的用餐歷史、修正紀錄、模式與行為脈絡"
          }
        ],
        [
          {
            title: "判断",
            body: "選択時点での制約付き注文支援"
          },
          {
            title: "実行",
            body: "構造化された記録、レビュー、フォローアップの流れ"
          },
          {
            title: "記憶",
            body: "蓄積された食事履歴、修正、パターン、行動文脈"
          }
        ]
      ),
      conclusion: localized(
        "It is a consumer-facing product that also reveals deeper system logic in parsing, correction loops, export infrastructure, and sync-ready architecture.",
        "它是一個面向消費者的產品，但同時也揭示了更深的系統邏輯：解析、修正迴路、匯出基礎設施與可同步架構。",
        "これはコンシューマー向けの製品である一方で、解析、修正ループ、エクスポート基盤、同期可能なアーキテクチャという、より深いシステムロジックも示しています。"
      )
    },
    currentStatus: {
      stage: localized(
        "Advanced prototype / internal product build",
        "進階原型 / 內部產品建置",
        "高度なプロトタイプ / 内部製品ビルド"
      ),
      alreadyLabel: localized("Already Built", "已完成", "すでに構築済み"),
      already: localized(
        [
          "iOS app foundation",
          "parsing and review flows",
          "retention surfaces",
          "usage limiting and paywall framework",
          "weekly insight mechanisms",
          "export pipeline",
          "WebDashboard support",
          "sync-readiness groundwork"
        ],
        [
          "iOS App 基礎",
          "解析與檢視流程",
          "保留與提醒介面",
          "使用限制與付費牆框架",
          "每週洞察機制",
          "匯出管線",
          "WebDashboard 支援",
          "同步準備基礎"
        ],
        [
          "iOS アプリ基盤",
          "解析とレビューのフロー",
          "保持と再提示の面",
          "利用制限とペイウォール基盤",
          "週次インサイトの仕組み",
          "エクスポート基盤",
          "WebDashboard 対応",
          "同期に向けた基礎整備"
        ]
      ),
      nextLabel: localized("Next", "下一步", "次"),
      next: localized(
        [
          "stabilize cloud sync architecture",
          "improve cross-device data handling",
          "tighten product polish",
          "strengthen the closed loop between capture, review, and insight"
        ],
        ["穩定雲端同步架構", "改善跨裝置資料處理", "收緊產品細節打磨", "強化記錄、檢視與洞察之間的閉環"],
        ["クラウド同期アーキテクチャを安定させる", "デバイス間データ処理を改善する", "製品の仕上げを詰める", "記録、レビュー、インサイトの閉ループを強める"]
      )
    },
    visual: {
      availableMaterials: localized(
        ["Inbox screens", "review-flow screens", "weekly insight surfaces", "debug and quality tools", "WebDashboard report views"],
        ["Inbox 畫面", "檢視流程畫面", "每週洞察介面", "除錯與品質工具", "WebDashboard 報表畫面"],
        ["Inbox 画面", "レビュー導線の画面", "週次インサイト画面", "デバッグと品質ツール", "WebDashboard のレポート画面"]
      ),
      publicDemo: localized(
        "Internal demo materials / test builds only",
        "僅提供內部 Demo 資料 / 測試版本",
        "内部デモ資料 / テストビルドのみ"
      )
    },
    closingCta: localized(
      "Request a demo to see how Shiok turns everyday dining into structured, reviewable, and compounding user intelligence.",
      "申請 Demo，了解 Shiok 如何把日常外食轉成可檢視、可累積的結構化使用者洞察。",
      "Shiok が日常の外食を、レビュー可能で積み上がるユーザー知見へどう変えるか、デモで確認してください。"
    )
  },
  {
    slug: "you-wife-list",
    status: "Prototype",
    featured: true,
    name: localized("You Wife List", "You Wife List", "You Wife List"),
    definition: localized(
      "A privacy-first, offline household shopping system that helps individuals and families plan purchases, confirm what was bought, track at-home inventory, and trigger replenishment from actual consumption.",
      "一套以隱私優先、離線為主的家庭採買系統，幫助個人與家庭規劃採購、確認已購買項目、追蹤家中庫存，並根據實際消耗觸發補貨。",
      "プライバシー優先のオフライン家庭購買システム。個人や家族が購入計画を立て、何を買ったかを確認し、自宅在庫を追跡し、実際の消費から補充を起こせるようにします。"
    ),
    heroLead: localized(
      "You Wife List is built for households that want better control over recurring essentials without depending on cloud-heavy shopping automation or fragmented note-taking habits.",
      "You Wife List 面向那些想更好掌握日常必需品，但不想依賴重雲端的購物自動化或零散筆記習慣的家庭。",
      "You Wife List は、日常必需品をもっと確実に管理したい一方で、クラウド依存の強い買い物自動化や断片的なメモ習慣には頼りたくない家庭向けのものです。"
    ),
    category: localized("Household shopping system", "家庭採買系統", "家庭購買システム"),
    problem: localized(
      "Household purchasing is usually fragmented across lists, memory, receipts, retailer apps, and ad hoc reminders. As a result, users lose track of what they need, what they bought, and what is still at home. The outcome is duplicate purchases, waste, stock blind spots, and weak spending control.",
      "家庭採購通常分散在清單、記憶、收據、零售商 App 與臨時提醒裡。結果是使用者搞不清楚自己需要什麼、買了什麼、家裡還剩什麼，最終造成重複購買、浪費、庫存盲點與支出控管薄弱。",
      "家庭の購買は通常、リスト、記憶、レシート、小売アプリ、場当たり的なリマインダーに分散しています。その結果、何が必要で、何を買い、家に何が残っているのか分からなくなり、重複購入、無駄、在庫の盲点、支出管理の弱さにつながります。"
    ),
    whatItDoes: localized(
      "You Wife List works as a closed-loop household shopping system. It links planning, purchase confirmation, inventory state, and consumption into one persistent local memory model.",
      "You Wife List 是一個封閉迴路的家庭採買系統。它把採購規劃、購買確認、庫存狀態與消耗串成同一個持續存在的本地記憶模型。",
      "You Wife List は閉ループの家庭購買システムとして機能します。計画、購入確認、在庫状態、消費を、一つの持続的なローカル記憶モデルへ結び付けます。"
    ),
    coreWorkflow: localized(
      [
        "Start with a list from Inbox or a named shopping list",
        "Normalize item identity across modules",
        "Mark items as Purchased",
        "Persist purchase events into Inventory",
        "Track stock changes through Used up actions",
        "Maintain reliable local memory for future replenishment"
      ],
      [
        "從 Inbox 或指定購物清單開始",
        "在不同模組之間統一品項身分",
        "把項目標記為已購買",
        "把購買事件持續寫入 Inventory",
        "透過 Used up 動作追蹤庫存變化",
        "維持可供未來補貨使用的可靠本地記憶"
      ],
      [
        "Inbox または名前付き買い物リストから始める",
        "モジュール間で品目の同一性を正規化する",
        "項目を Purchased として記録する",
        "購入イベントを Inventory へ保持する",
        "Used up アクションで在庫変化を追跡する",
        "将来の補充に使える信頼性の高いローカル記憶を保つ"
      ]
    ),
    coreFeatures: localized(
      [
        {
          title: "List Management",
          body: "Create lists, add items quickly, mark items as Purchased, and remove items."
        },
        {
          title: "Inventory with Consumption Actions",
          body: "Track at-home quantities and decrement stock through Used up actions."
        },
        {
          title: "Offline-First Local Memory",
          body: "Persist lists, inventory, aliases, and purchase records locally."
        },
        {
          title: "Product Identity Normalization",
          body: "Unify item names across modules through normalization and alias logic."
        },
        {
          title: "Purchase-to-Inventory Reconciliation",
          body: "Ensure purchased items are reflected in inventory, including backfill cases."
        },
        {
          title: "Quick Add Omni-Entry",
          body: "Support fast item entry and list creation through one clean input path."
        }
      ],
      [
        {
          title: "清單管理",
          body: "建立清單、快速加入品項、標記已購買並移除項目。"
        },
        {
          title: "帶有消耗動作的庫存",
          body: "追蹤家中數量，並透過 Used up 動作扣減庫存。"
        },
        {
          title: "離線優先的本地記憶",
          body: "在本地持續保存清單、庫存、別名與購買紀錄。"
        },
        {
          title: "商品身分正規化",
          body: "透過正規化與別名邏輯統一不同模組中的品項名稱。"
        },
        {
          title: "購買到庫存的對帳",
          body: "確保已購買項目正確反映到庫存中，包括補寫情境。"
        },
        {
          title: "Quick Add 單一入口",
          body: "透過一條乾淨的輸入路徑，快速新增項目與建立清單。"
        }
      ],
      [
        {
          title: "リスト管理",
          body: "リスト作成、項目の素早い追加、Purchased 記録、削除を行えます。"
        },
        {
          title: "消費アクション付き在庫",
          body: "自宅在庫を追跡し、Used up アクションで数量を減算します。"
        },
        {
          title: "オフライン優先のローカル記憶",
          body: "リスト、在庫、別名、購入記録をローカルに保持します。"
        },
        {
          title: "商品の同一性正規化",
          body: "正規化と別名ロジックで、モジュール間の品目名を統一します。"
        },
        {
          title: "購入から在庫への照合",
          body: "購入済み項目が在庫へ反映されることを保証し、後追い補完にも対応します。"
        },
        {
          title: "Quick Add の単一入口",
          body: "一つの整理された入力経路で、素早い品目追加とリスト作成を支えます。"
        }
      ]
    ),
    differentiation: {
      not: localized(
        [
          "an ordering app",
          "a retailer-specific cart",
          "a coupon aggregator",
          "a cloud AI shopping assistant",
          "a standard checklist app"
        ],
        ["下單 App", "特定零售商購物車", "優惠券聚合工具", "雲端 AI 購物助理", "標準待辦清單 App"],
        ["注文アプリ", "特定小売向けカート", "クーポン集約ツール", "クラウド AI 買い物アシスタント", "標準的なチェックリストアプリ"]
      ),
      value: localized(
        "Its value comes from turning checklist completion into a persistent household state machine.",
        "它的價值，在於把清單完成這件事轉成可持續運作的家庭狀態機。",
        "価値は、チェックリスト完了を持続する家庭状態マシンへ変える点にあります。"
      )
    },
    bentoAngle: {
      summary: localized(
        "You Wife List demonstrates Bento AIII's ability to build compact but complete stateful systems:",
        "You Wife List 展示了 Bento AIII 建立精簡但完整的有狀態系統的能力：",
        "You Wife List は、コンパクトでありながら完結したステートフルシステムを構築する Bento AIII の能力を示しています。"
      ),
      layers: localized(
        [
          {
            title: "Memory",
            body: "persistent local inventory and purchase history"
          },
          {
            title: "Execution",
            body: "purchase confirmation, reconciliation, and consumption updates"
          },
          {
            title: "Emerging Decision Logic",
            body: "future budget gates, replenishment rules, and planning automation"
          }
        ],
        [
          {
            title: "記憶",
            body: "持續保留的本地庫存與購買歷史"
          },
          {
            title: "執行",
            body: "購買確認、對帳與消耗更新"
          },
          {
            title: "逐步形成的決策邏輯",
            body: "未來的預算門檻、補貨規則與規劃自動化"
          }
        ],
        [
          {
            title: "記憶",
            body: "持続するローカル在庫と購入履歴"
          },
          {
            title: "実行",
            body: "購入確認、照合、消費更新"
          },
          {
            title: "立ち上がりつつある判断ロジック",
            body: "将来の予算ゲート、補充ルール、計画自動化"
          }
        ]
      ),
      conclusion: localized(
        "It is an application-layer household tool that exposes deeper system logic in identity unification, event reconciliation, and closed-loop state transitions.",
        "它是一個應用層的家庭工具，但同時也揭示了更深的系統邏輯：身分統一、事件對帳與閉環狀態轉換。",
        "これはアプリケーション層の家庭向けツールである一方で、同一性の統一、イベント照合、閉ループ状態遷移という深いシステムロジックも示しています。"
      )
    },
    currentStatus: {
      stage: localized(
        "MVP implementation with active UI and logic iteration",
        "MVP 實作階段，持續進行 UI 與邏輯迭代",
        "MVP 実装段階で、UI とロジックを継続的に改善中"
      ),
      alreadyLabel: localized("Already Built", "已完成", "すでに構築済み"),
      already: localized(
        [
          "lists with Purchased marking",
          "inventory with Used up actions",
          "local persistence",
          "alias normalization",
          "purchase-to-inventory sync and reconciliation",
          "Quick Add single-entry UX"
        ],
        ["可標記 Purchased 的清單", "帶 Used up 動作的庫存", "本地持久化", "別名正規化", "購買到庫存的同步與對帳", "Quick Add 單一入口體驗"],
        ["Purchased 記録付きリスト", "Used up アクション付き在庫", "ローカル永続化", "別名正規化", "購入から在庫への同期と照合", "Quick Add の単一入口 UX"]
      ),
      nextLabel: localized("Next", "下一步", "次"),
      next: localized(
        [
          "improve Quick Add targeting for active / recent lists",
          "add budget and price constraints",
          "introduce recipes-driven planning",
          "strengthen offline analytics for spend and stock health"
        ],
        ["改善 Quick Add 對當前 / 最近清單的指向", "加入預算與價格限制", "引入由食譜驅動的規劃", "強化離線分析以掌握支出與庫存健康度"],
        ["Quick Add の対象付けを利用中 / 最近のリスト向けに改善する", "予算と価格制約を追加する", "レシピ起点の計画を導入する", "支出と在庫健全性のためのオフライン分析を強化する"]
      )
    },
    visual: {
      availableMaterials: localized(
        ["Add Item UI", "List Detail with Purchased items", "Inventory with Used up actions", "omni-input overlay", "internal flow and UI iteration captures"],
        ["Add Item UI", "含 Purchased 項目的清單詳情", "帶 Used up 動作的 Inventory", "全域輸入浮層", "內部流程與 UI 迭代截圖"],
        ["Add Item UI", "Purchased 項目を含むリスト詳細", "Used up アクション付き Inventory", "オムニ入力オーバーレイ", "内部フローと UI 反復のキャプチャ"]
      ),
      publicDemo: localized("Not yet published", "尚未發布", "まだ公開されていません")
    },
    closingCta: localized(
      "Request access to the latest build and review the closed-loop workflow from List to Purchased to Inventory to Used up.",
      "申請查看最新版本，了解從 List 到 Purchased，再到 Inventory 與 Used up 的閉環流程。",
      "最新ビルドへのアクセスを依頼し、List から Purchased、Inventory、Used up まで続く閉ループを確認してください。"
    )
  }
];

function materializeProject(
  definition: LocalizedProjectDefinition,
  locale: Locale
): CommercialProjectView {
  return {
    slug: definition.slug,
    name: pick(definition.name, locale),
    alternateName: definition.alternateName ? pick(definition.alternateName, locale) : undefined,
    definition: pick(definition.definition, locale),
    heroLead: pick(definition.heroLead, locale),
    category: pick(definition.category, locale),
    status: definition.status,
    statusLabel: pick(projectStatusLabels[definition.status], locale),
    featured: definition.featured,
    problem: pick(definition.problem, locale),
    whatItDoes: pick(definition.whatItDoes, locale),
    coreWorkflow: pick(definition.coreWorkflow, locale),
    coreFeatures: pick(definition.coreFeatures, locale),
    differentiation: {
      not: pick(definition.differentiation.not, locale),
      value: pick(definition.differentiation.value, locale)
    },
    bentoAngle: {
      summary: pick(definition.bentoAngle.summary, locale),
      layers: pick(definition.bentoAngle.layers, locale),
      conclusion: pick(definition.bentoAngle.conclusion, locale)
    },
    currentStatus: {
      stage: pick(definition.currentStatus.stage, locale),
      alreadyLabel: pick(definition.currentStatus.alreadyLabel, locale),
      already: pick(definition.currentStatus.already, locale),
      nextLabel: pick(definition.currentStatus.nextLabel, locale),
      next: pick(definition.currentStatus.next, locale)
    },
    visual: {
      availableMaterials: pick(definition.visual.availableMaterials, locale),
      publicDemo: pick(definition.visual.publicDemo, locale),
      projectLink: definition.visual.projectLink ? pick(definition.visual.projectLink, locale) : undefined
    },
    closingCta: pick(definition.closingCta, locale)
  };
}

export function getProjectPresentationCopy(locale: Locale) {
  return projectPresentationCopy[locale];
}

export function getProjects(locale: Locale): CommercialProjectView[] {
  const projectOrder = ["immipilot", "shiok", "you-wife-list", "daigou-helper"];

  return projectDefinitions
    .map((project) => materializeProject(project, locale))
    .sort((left, right) => projectOrder.indexOf(left.slug) - projectOrder.indexOf(right.slug));
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projectDefinitions.map((project) => project.slug);
}
