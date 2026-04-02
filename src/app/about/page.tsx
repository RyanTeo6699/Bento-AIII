import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { capabilityPillars, companyProfile, roadmap, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Company profile, mission, capabilities, and roadmap for Bento AIII."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Bento AIII is built for practical AI delivery."
        description={companyProfile.positioning}
        metrics={[
          { label: "Company", value: "AI applications and LLM systems" },
          { label: "Mission", value: "Useful products with production discipline" },
          { label: "Mode", value: "Design, engineer, and ship with teams" }
        ]}
      />

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">Company brief</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">What Bento AIII does</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {companyProfile.description}
            </p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              We focus on AI products that have to survive contact with real data, mixed
              stakeholders, and production constraints. The work usually spans interface
              design, system architecture, prompt and retrieval behavior, and rollout logic.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="surface pixel-corner p-8">
            <span className="section-kicker">Mission</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">Build for clarity and use.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {companyProfile.mission}
            </p>
            <div className="mt-8 space-y-4">
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Vision
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Practical AI should feel like good software: legible, structured, and
                  genuinely useful to the people doing the work.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Business direction
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Build application products, internal systems, and workflow tooling that turn
                  language models into operating capability.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Business directions"
              title="The company is organized around a few high-value build tracks."
              description="Bento AIII stays deliberately focused: products around the model, systems behind the model, and workflows that make the result usable."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilityPillars.slice(0, 3).map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent/80">
                  Track 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Technical capability"
              title="Capability is not just model access. It is the surrounding system."
              description="Bento AIII works across product, engineering, and system operations so that AI features become stable software instead of isolated demos."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilityPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={0.05 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.bullets.map((item) => (
                    <span key={item} className="signal-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="A few principles shape how the company works."
              description="These are the operating values behind product decisions, technical choices, and project execution."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={0.05 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="A placeholder growth path for the next phase of the company."
              description="This roadmap is intentionally directional. It can be replaced later with live milestones, launches, and partnership updates."
            />
          </Reveal>

          <div className="mt-12 space-y-5">
            {roadmap.map((item, index) => (
              <Reveal
                key={item.phase}
                delay={0.05 * index}
                className="surface pixel-corner grid gap-5 p-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start"
              >
                <div>
                  <p className="section-kicker text-[0.58rem]">{item.phase}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Contact"
        title="Need a company that can shape both the interface and the system?"
        description="Bento AIII works best on projects where product clarity, technical rigor, and operational realism all matter at the same time."
        primaryLabel="Talk to Bento AIII"
        primaryHref="/contact"
        secondaryLabel="View projects"
        secondaryHref="/projects"
      />
    </>
  );
}
