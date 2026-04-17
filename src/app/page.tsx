import Link from "next/link";
import type { Metadata } from "next";

import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/motion/reveal";
import { getCurrentLocale } from "@/lib/get-locale";
import { getHomepageCoreCopy } from "@/lib/homepage-core-copy";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import { getSystemSiteCopy } from "@/lib/system-site-copy";

function formatModuleTitle(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function HomeSectionHeader({
  eyebrow,
  title,
  lead,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  lead: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto flex max-w-4xl flex-col items-center gap-4 text-center"
          : "flex max-w-3xl flex-col gap-4"
      }
    >
      <p className="home-section-kicker">{eyebrow}</p>
      <h2 className="home-section-title">{title}</h2>
      <p className="home-section-lead">{lead}</p>
    </div>
  );
}

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const systemCopy = getSystemSiteCopy(locale);

  return createPageMetadata({
    locale,
    title:
      locale === "en"
        ? "Adaptive Decision-and-Execution System Core"
        : locale === "zh-Hant"
          ? "自適應決策與執行系統核心"
          : "適応型 Decision-and-Execution System Core",
    description: systemCopy.company.positioning,
    path: "/"
  });
}

export default function HomePage() {
  const locale = getCurrentLocale();
  const systemCopy = getSystemSiteCopy(locale);
  const homepageCopy = getHomepageCoreCopy(locale);
  const homePath = buildLocalizedPath(locale, "/");
  const architectureReviewHref = buildLocalizedPath(locale, homepageCopy.closing.primaryHref);
  const deploymentDirectionsHref = buildLocalizedPath(locale, homepageCopy.closing.secondaryHref);
  const deploymentDiscussionHref = buildLocalizedPath(locale, homepageCopy.hero.secondaryHref);

  const architectureModules = systemCopy.home.modules.items.map((module) => {
    const meta = homepageCopy.architecture.moduleMeta[module.id];

    return {
      ...module,
      displayTitle: meta?.displayTitle ?? formatModuleTitle(module.title),
      descriptor: meta?.descriptor ?? "Core module",
      status: meta?.status ?? "LIVE",
      headline: meta?.headline ?? module.summary,
      focus: meta?.focus ?? module.summary,
      flow: meta?.flow ?? module.bullets.join(" -> "),
      tone: meta?.tone ?? "secondary"
    };
  });

  return (
    <div className="homepage-shell">
      <section className="site-hero-section homepage-hero-section" id="system-entry">
        <div className="shell">
          <div className="homepage-hero-frame">
            <div className="homepage-hero-grid">
              <Reveal className="homepage-hero-copy" y={20}>
                <p className="home-section-kicker">{homepageCopy.hero.eyebrow}</p>
                <h1 className="homepage-hero-title">{homepageCopy.hero.title}</h1>
                <p className="homepage-hero-support">{homepageCopy.hero.support}</p>

                <div className="homepage-contrast-block">
                  {homepageCopy.hero.contrast.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className="homepage-action-row">
                  <Link href={`${homePath}#system-core`} className="homepage-primary-action">
                    {homepageCopy.hero.primaryLabel}
                  </Link>
                  <Link href={deploymentDiscussionHref} className="homepage-secondary-action">
                    {homepageCopy.hero.secondaryLabel}
                  </Link>
                </div>
              </Reveal>

              <Reveal className="homepage-preview-shell" delay={0.08} y={20}>
                <div className="homepage-preview-grid" />

                <svg
                  className="homepage-preview-lines"
                  viewBox="0 0 600 460"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M300 230 C246 186 196 154 130 110" />
                  <path d="M300 230 C354 186 404 154 470 110" />
                  <path d="M300 230 C244 256 194 286 124 336" />
                  <path d="M300 230 C356 256 406 286 476 336" />
                </svg>

                <div className="homepage-preview-center">
                  <p className="homepage-preview-kicker">{homepageCopy.hero.previewLabel}</p>
                  <h2 className="homepage-preview-title">{homepageCopy.hero.previewTitle}</h2>
                  <p className="homepage-preview-summary">{homepageCopy.hero.previewSummary}</p>
                </div>

                {homepageCopy.hero.previewSignals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className={`homepage-preview-node homepage-preview-node-${index + 1}`}
                  >
                    <p className="homepage-preview-node-label">{signal.label}</p>
                    <p className="homepage-preview-node-value">{signal.value}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-tight homepage-section" id="problem-core">
        <div className="shell">
          <div className="homepage-brief-grid">
            <Reveal className="homepage-brief-panel" y={18}>
              <p className="home-section-kicker">{homepageCopy.problemField.eyebrow}</p>
              <h2 className="homepage-panel-title">{homepageCopy.problemField.title}</h2>
              <p className="homepage-panel-copy">{homepageCopy.problemField.lead}</p>

              <div className="homepage-chip-list">
                {homepageCopy.problemField.signals.map((item) => (
                  <span key={item} className="homepage-utility-chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="homepage-brief-panel homepage-brief-panel-strong" delay={0.06} y={18}>
              <p className="home-section-kicker">{homepageCopy.coreStatement.eyebrow}</p>
              <h2 className="homepage-panel-title">{homepageCopy.coreStatement.title}</h2>
              <p className="homepage-panel-copy">{homepageCopy.coreStatement.lead}</p>

              <ul className="homepage-bullet-stack">
                {homepageCopy.coreStatement.support.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section homepage-section" id="system-core">
        <div className="shell">
          <div className="homepage-architecture-shell">
            <Reveal>
              <HomeSectionHeader
                eyebrow={homepageCopy.architecture.eyebrow}
                title={homepageCopy.architecture.title}
                lead={homepageCopy.architecture.description}
              />
            </Reveal>

            <Reveal delay={0.08} className="mt-12" y={20}>
              <HeroScene
                modules={architectureModules}
                core={{
                  label: homepageCopy.architecture.coreLabel,
                  headline: homepageCopy.architecture.coreHeadline,
                  summary: homepageCopy.architecture.coreText,
                  chips: homepageCopy.architecture.coreChips,
                  primaryActionLabel: homepageCopy.architecture.primaryActionLabel,
                  primaryActionHref: homepageCopy.architecture.primaryActionHref,
                  secondaryActionLabel: homepageCopy.architecture.secondaryActionLabel,
                  secondaryActionHref: homepageCopy.architecture.secondaryActionHref,
                  context: systemCopy.company.description
                }}
                labels={{
                  activeModule: homepageCopy.architecture.activeModuleLabel,
                  currentRole: homepageCopy.architecture.currentRoleLabel,
                  executionPath: homepageCopy.architecture.executionPathLabel,
                  systemContext: homepageCopy.architecture.systemContextLabel
                }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section-tight homepage-section" id="execution-loop">
        <div className="shell">
          <Reveal>
            <HomeSectionHeader
              eyebrow={homepageCopy.executionLoop.eyebrow}
              title={homepageCopy.executionLoop.title}
              lead={homepageCopy.executionLoop.lead}
            />
          </Reveal>

          <Reveal className="homepage-loop-shell" delay={0.08} y={18}>
            <div className="homepage-loop-track" />
            <div className="homepage-loop-grid">
              {homepageCopy.executionLoop.steps.map((step, index) => (
                <div key={step.label} className="homepage-loop-step">
                  <div className="homepage-loop-step-head">
                    <span className="homepage-loop-index">0{index + 1}</span>
                    <p className="homepage-loop-label">{step.label}</p>
                  </div>
                  <p className="homepage-loop-copy">{step.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="homepage-loop-closing" delay={0.12} y={14}>
            {homepageCopy.executionLoop.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight homepage-section" id="why-it-matters">
        <div className="shell">
          <Reveal>
            <HomeSectionHeader
              eyebrow={homepageCopy.whyItMatters.eyebrow}
              title={homepageCopy.whyItMatters.title}
              lead={homepageCopy.whyItMatters.lead}
            />
          </Reveal>

          <div className="homepage-comparison-grid">
            <Reveal className="homepage-comparison-panel" delay={0.04} y={16}>
              <p className="homepage-comparison-label">{homepageCopy.whyItMatters.leftLabel}</p>
              <ul className="homepage-comparison-list">
                {homepageCopy.whyItMatters.leftItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="homepage-comparison-panel homepage-comparison-panel-active" delay={0.08} y={16}>
              <p className="homepage-comparison-label">{homepageCopy.whyItMatters.rightLabel}</p>
              <ul className="homepage-comparison-list">
                {homepageCopy.whyItMatters.rightItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section homepage-section" id="domain-adaptation">
        <div className="shell">
          <Reveal>
            <HomeSectionHeader
              eyebrow={homepageCopy.domainAdaptation.eyebrow}
              title={homepageCopy.domainAdaptation.title}
              lead={homepageCopy.domainAdaptation.lead}
            />
          </Reveal>

          <div className="homepage-domain-grid">
            {homepageCopy.domainAdaptation.items.map((item, index) => (
              <Reveal key={item} delay={0.04 * index} y={16}>
                <div className="homepage-domain-card">
                  <p className="homepage-domain-index">0{index + 1}</p>
                  <p className="homepage-domain-name">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="homepage-domain-closing" delay={0.1} y={12}>
            {homepageCopy.domainAdaptation.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight homepage-section" id="company-position">
        <div className="shell">
          <Reveal className="homepage-position-panel">
            <div className="homepage-position-copy">
              <p className="home-section-kicker">{homepageCopy.companyPosition.eyebrow}</p>
              <h2 className="homepage-panel-title">{homepageCopy.companyPosition.title}</h2>
              <p className="homepage-panel-copy">{homepageCopy.companyPosition.lead}</p>
            </div>

            <div className="homepage-position-grid">
              {homepageCopy.companyPosition.support.map((item) => (
                <div key={item.label} className="homepage-position-item">
                  <p className="homepage-position-item-label">{item.label}</p>
                  <p className="homepage-position-item-value">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section homepage-section" id="next-action">
        <div className="shell">
          <Reveal className="homepage-closing-panel">
            <HomeSectionHeader
              eyebrow={homepageCopy.closing.eyebrow}
              title={homepageCopy.closing.title}
              lead={homepageCopy.closing.lead}
              align="center"
            />

            <div className="homepage-closing-actions">
              <Link href={architectureReviewHref} className="homepage-primary-action">
                {homepageCopy.closing.primaryLabel}
              </Link>
              <Link href={deploymentDirectionsHref} className="homepage-secondary-action">
                {homepageCopy.closing.secondaryLabel}
              </Link>
            </div>

            <p className="homepage-closing-signal">{homepageCopy.closing.signalLine}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
