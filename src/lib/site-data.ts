export type NavItem = {
  href: string;
  label: string;
};

export type Capability = {
  title: string;
  description: string;
  bullets: string[];
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  stage: string;
  sector: string;
  featured: boolean;
  outcome: string;
  detail: {
    problem: string;
    system: string;
    architecture: string[];
    currentFocus: string;
  };
};

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const companyProfile = {
  name: "Bento AIII",
  positioning:
    "A technology company focused on AI applications and large language model systems, building practical products, workflows, and digital experiences.",
  description:
    "Bento AIII works where model capability meets real business operations. We design and build AI products that help teams search, decide, automate, and ship with more clarity.",
  mission:
    "Turn language model capability into reliable software, operator workflows, and product systems that hold up in production."
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" }
];

export const heroSignals = [
  {
    label: "Focus",
    value: "AI applications, LLM systems, workflow tooling"
  },
  {
    label: "Approach",
    value: "Product thinking, systems design, practical delivery"
  },
  {
    label: "Output",
    value: "Interfaces, pipelines, assistants, internal platforms"
  }
];

export const capabilityPillars: Capability[] = [
  {
    title: "AI Product Engineering",
    description:
      "We frame the product, design the interaction model, and ship the interface around the model rather than treating AI as a feature bolt-on.",
    bullets: ["Product scoping", "Operator surfaces", "Frontend delivery"]
  },
  {
    title: "LLM Systems",
    description:
      "We build the retrieval, prompt, evaluation, and orchestration layer that makes large language models usable in live workflows.",
    bullets: ["RAG systems", "Agent workflows", "Guardrails and evals"]
  },
  {
    title: "Workflow Automation",
    description:
      "We translate repetitive business motion into reviewable AI-assisted workflows with human checkpoints where they matter.",
    bullets: ["Approval flows", "Task routing", "Operational tooling"]
  },
  {
    title: "Delivery for Real Teams",
    description:
      "Bento AIII is built for actual business conditions: legacy systems, mixed stakeholders, uneven inputs, and the need for trust.",
    bullets: ["Incremental rollout", "Auditability", "Maintainable handoff"]
  }
];

export const projects: Project[] = [
  {
    slug: "atlas-desk",
    name: "Atlas Desk",
    summary:
      "An AI operations workspace that routes requests, context, and decisions in one surface.",
    description:
      "Built for service teams that need faster handling without losing traceability or review quality.",
    tags: ["Next.js", "Python", "RAG", "OpenAI"],
    stage: "Live",
    sector: "Operations",
    featured: true,
    outcome:
      "Consolidated intake, retrieval, and review into a single operator flow with clear decision history.",
    detail: {
      problem:
        "Support and operations teams were jumping between ticketing, documentation, and chat to resolve repetitive work with inconsistent context.",
      system:
        "Bento AIII designed a shared workspace with retrieval, task memory, policy-aware prompt chains, and approval checkpoints for higher-risk actions.",
      architecture: [
        "Operator dashboard for triage, drafting, and review history",
        "Retrieval layer connected to policy notes, case memory, and internal documentation",
        "Action pipeline that routes follow-up work into existing systems"
      ],
      currentFocus:
        "Expanding reporting depth and adding evaluation coverage for escalation quality."
    }
  },
  {
    slug: "lexicon-flow",
    name: "Lexicon Flow",
    summary:
      "A multilingual knowledge assistant for internal documentation and fast policy lookup.",
    description:
      "Designed for distributed teams that need retrieval quality across languages, teams, and document formats.",
    tags: ["TypeScript", "Search", "Embeddings", "Knowledge Base"],
    stage: "Expansion",
    sector: "Knowledge",
    featured: true,
    outcome:
      "Improved answer consistency and reduced search friction for globally distributed support teams.",
    detail: {
      problem:
        "Documentation was scattered across wikis, manuals, and operating notes, making internal lookup slow and unreliable.",
      system:
        "The project combined structured retrieval, source ranking, and answer grounding so users could find policy-backed responses with clear citations.",
      architecture: [
        "Unified ingestion flow for docs, PDFs, and structured records",
        "Answer layer with grounded response generation and confidence cues",
        "Feedback loop for editors to tune weak responses and source quality"
      ],
      currentFocus:
        "Adding domain-specific search views for legal, operations, and customer success teams."
    }
  },
  {
    slug: "signal-qa",
    name: "Signal QA",
    summary:
      "A review pipeline that scores conversations, flags risk, and surfaces coaching signals.",
    description:
      "Built for teams that want quality assurance at scale without reviewing every interaction by hand.",
    tags: ["LLM Eval", "Analytics", "Transcripts", "Node.js"],
    stage: "Pilot",
    sector: "Quality",
    featured: true,
    outcome:
      "Created a repeatable QA loop with faster sample review and clearer coaching priorities.",
    detail: {
      problem:
        "Managers lacked a consistent way to review large volumes of support conversations and identify coaching opportunities.",
      system:
        "Bento AIII built a pipeline that ingests transcripts, applies evaluation criteria, and groups output into actionable quality themes.",
      architecture: [
        "Transcript processing and segmentation for review-ready units",
        "Criteria engine for policy, tone, and resolution quality",
        "Reporting layer for managers to inspect trends and representative examples"
      ],
      currentFocus:
        "Testing rubric calibration against human review samples before full rollout."
    }
  },
  {
    slug: "forge-console",
    name: "Forge Console",
    summary:
      "A workflow orchestrator for back-office approvals and document-driven decisions.",
    description:
      "Made for internal teams that need AI assistance while keeping sign-off, routing, and accountability intact.",
    tags: ["Workflow", "React", "APIs", "Human Review"],
    stage: "Build",
    sector: "Back Office",
    featured: false,
    outcome:
      "Reduced repetitive manual preparation while preserving reviewer control at each decision point.",
    detail: {
      problem:
        "Approval-heavy teams were spending too much time summarizing documents, preparing handoff notes, and routing packages manually.",
      system:
        "The platform structures inbound data, drafts summaries, and guides reviewers through a staged approval flow.",
      architecture: [
        "Submission workspace with document parsing and draft generation",
        "Review queue with assignment, status tracking, and approval history",
        "Outbound connectors for follow-up actions and archive storage"
      ],
      currentFocus:
        "Stabilizing integrations and expanding role-based views for multi-team usage."
    }
  },
  {
    slug: "bento-studio",
    name: "Bento Studio",
    summary:
      "A reusable component and prompt system for teams building multiple AI products.",
    description:
      "A shared layer for interface patterns, prompt primitives, and launch-ready AI product modules.",
    tags: ["Design System", "Prompt Ops", "Next.js", "Docs"],
    stage: "Active Development",
    sector: "Internal Platform",
    featured: false,
    outcome:
      "Shortened the path from prototype to shipped interface by standardizing common AI product patterns.",
    detail: {
      problem:
        "Teams were rebuilding the same chat, retrieval, feedback, and review patterns from scratch for each new AI initiative.",
      system:
        "Bento Studio provides a shared design and engineering layer for common UI, prompt, and evaluation concerns.",
      architecture: [
        "Composable UI patterns for chat, search, review, and traceability",
        "Prompt templates aligned to product and operations use cases",
        "Reference documentation for teams shipping new AI features"
      ],
      currentFocus:
        "Growing the pattern library into a full internal platform for product teams."
    }
  },
  {
    slug: "meridian-brief",
    name: "Meridian Brief",
    summary:
      "An executive summary engine for turning fragmented project updates into decision-ready briefs.",
    description:
      "Intended for leadership teams that need signal extraction from scattered project, delivery, and risk updates.",
    tags: ["Summarization", "Dashboards", "Integrations", "LLM"],
    stage: "Discovery",
    sector: "Leadership",
    featured: false,
    outcome:
      "Created a structured direction for executive reporting without adding another manual reporting layer.",
    detail: {
      problem:
        "Leadership updates were trapped in meeting notes, slide decks, and inconsistent status documents, making synthesis slow.",
      system:
        "The concept organizes updates by workstream, risk, and milestone before generating concise decision briefs.",
      architecture: [
        "Ingestion model for project notes, metrics, and status summaries",
        "Prompted synthesis with emphasis on variance, blockers, and next decisions",
        "Review layer for PMO and leadership teams before distribution"
      ],
      currentFocus:
        "Validating data freshness expectations and preferred review workflow with stakeholders."
    }
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Ryan Chen",
    role: "Founder, Product Engineering",
    specialty: "AI application architecture, delivery systems, product direction",
    bio:
      "Turns ambiguous AI opportunity space into scoped products, clear interfaces, and shippable engineering plans.",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Portfolio", href: "https://example.com/" }
    ]
  },
  {
    name: "Mina Park",
    role: "AI Systems Lead",
    specialty: "Retrieval systems, evaluation loops, model behavior design",
    bio:
      "Owns the system layer behind retrieval quality, prompt orchestration, and model reliability in production.",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Portfolio", href: "https://example.com/" }
    ]
  },
  {
    name: "Julian Costa",
    role: "Full-Stack Engineer",
    specialty: "TypeScript platforms, service integrations, frontend systems",
    bio:
      "Builds the product surfaces and application layer that connect model capability to operational tools.",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Portfolio", href: "https://example.com/" }
    ]
  },
  {
    name: "Avery Lin",
    role: "Design Systems and Product UX",
    specialty: "Interaction design, information hierarchy, design systems",
    bio:
      "Shapes clear, trustworthy AI interfaces with a focus on operator speed, readability, and brand consistency.",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Portfolio", href: "https://example.com/" }
    ]
  },
  {
    name: "Noor Rahman",
    role: "ML Operations",
    specialty: "Data preparation, runtime monitoring, deployment quality",
    bio:
      "Connects experiments to production by handling operational quality, rollout discipline, and system feedback loops.",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Portfolio", href: "https://example.com/" }
    ]
  }
];

export const values = [
  {
    title: "Practical Intelligence",
    description:
      "We focus on useful systems, not demos that collapse outside ideal conditions."
  },
  {
    title: "Readable Systems",
    description:
      "Operators and stakeholders should be able to understand what the system is doing and why."
  },
  {
    title: "Production Discipline",
    description:
      "Evaluation, traceability, and rollout strategy matter as much as the model call itself."
  },
  {
    title: "Shared Ownership",
    description:
      "The best AI products are built with design, engineering, and operations aligned from the start."
  }
];

export const roadmap = [
  {
    phase: "Phase 01",
    title: "Productized Delivery Stack",
    description:
      "Expand Bento Studio into a repeatable layer for AI application launch, review, and operations."
  },
  {
    phase: "Phase 02",
    title: "Industry Workflow Modules",
    description:
      "Package proven workflow patterns for service operations, knowledge systems, and back-office review."
  },
  {
    phase: "Phase 03",
    title: "Evaluation and Governance Layer",
    description:
      "Standardize measurement, approval, and operating controls for enterprise AI systems."
  },
  {
    phase: "Phase 04",
    title: "Platform Partnerships",
    description:
      "Integrate with teams that need dedicated AI product capability without building the whole stack alone."
  }
];

export const contactChannels = [
  {
    label: "General",
    value: "hello@bentoaiii.com",
    href: "mailto:hello@bentoaiii.com",
    note: "General inquiries, introductions, and project conversations"
  },
  {
    label: "Partnerships",
    value: "partners@bentoaiii.com",
    href: "mailto:partners@bentoaiii.com",
    note: "Business partnerships and delivery collaboration"
  },
  {
    label: "Location",
    value: "Edmonton and remote",
    href: "https://maps.google.com/?q=Edmonton",
    note: "Distributed delivery across product, engineering, and systems work"
  }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" }
];
