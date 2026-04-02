import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { teamMembers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Team",
  description: "The Bento AIII team across product, design, engineering, and AI systems."
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="A team designed around product clarity and systems execution."
        description="Bento AIII combines product engineering, AI systems, design, and operations thinking in a compact delivery model."
        metrics={[
          { label: "Composition", value: "Product, design, engineering, ML ops" },
          { label: "Strength", value: "Cross-functional AI product delivery" },
          { label: "Working style", value: "Tight loops, clear ownership, real shipping" }
        ]}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core team"
              title="People shaping Bento AIII systems and product work."
              description="Each team member is presented as a clear profile card with role, strengths, short bio, and external links."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={0.05 * index}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="The team stays small, but the working model is structured."
              description="Bento AIII projects typically move through a few tightly connected lanes instead of handoffs between isolated departments."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Frame the product",
                copy: "Clarify the workflow, users, operating constraints, and success conditions before building the system."
              },
              {
                title: "Design the system",
                copy: "Define retrieval, prompting, integrations, evaluation, and review controls in parallel with the UI."
              },
              {
                title: "Ship and refine",
                copy: "Roll out with staged delivery, operational visibility, and adjustments based on actual usage."
              }
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">Who we work with</span>
            <p className="mt-4 text-2xl font-semibold text-white">
              Teams building AI products for actual business motion.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The best fit is usually a company that already knows where the friction is:
              knowledge bottlenecks, repetitive decision paths, fragmented internal tools, or
              a product idea that needs structure.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="surface pixel-corner p-8">
            <span className="section-kicker">Collaboration style</span>
            <p className="mt-4 text-2xl font-semibold text-white">
              Close to the problem, not detached from it.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Bento AIII works well with founders, product leads, operations teams, and
              internal platform groups that want a build partner with both product judgment
              and technical depth.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta
        eyebrow="Connect"
        title="Need a team that can bridge design, engineering, and AI systems?"
        description="Bring Bento AIII into the conversation when the project needs more than a prototype and less than a disconnected vendor chain."
        primaryLabel="Contact the team"
        primaryHref="/contact"
        secondaryLabel="Browse project work"
        secondaryHref="/projects"
      />
    </>
  );
}
