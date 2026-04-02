import Link from "next/link";

import { FinalCta } from "@/components/final-cta";
import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import {
  capabilityPillars,
  companyProfile,
  heroSignals,
  projects,
  teamMembers,
  values
} from "@/lib/site-data";

const featuredProjects = projects.filter((project) => project.featured);
const featuredTeam = teamMembers.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_24%,rgba(46,232,255,0.16),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(139,96,255,0.12),transparent_22%)]" />
        <div className="shell relative grid gap-14 pb-20 pt-10 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.98fr)] lg:items-center">
          <div className="max-w-2xl">
            <Reveal className="space-y-5">
              <span className="section-kicker">Pixel Neo Corporate Tech</span>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Bento AIII builds AI applications and LLM systems that fit real operations.
              </h1>
              <p className="text-lg leading-8 text-slate-300">
                {companyProfile.positioning}
              </p>
              <p className="max-w-xl text-base leading-7 text-slate-400">
                We shape product surfaces, system architecture, and workflow tooling for
                companies that need AI to be useful, reviewable, and ready to ship.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="button-primary">
                Explore projects
              </Link>
              <Link href="/contact" className="button-secondary">
                Contact Bento AIII
              </Link>
            </Reveal>

            <Reveal
              delay={0.16}
              className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
            >
              {heroSignals.map((signal) => (
                <div key={signal.label} className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {signal.label}
                  </p>
                  <p className="text-sm leading-7 text-slate-300">{signal.value}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:pl-8">
            <HeroScene />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Company"
              title="A build partner for practical AI products, systems, and operator workflows."
              description={companyProfile.description}
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.06} className="surface pixel-corner p-6">
              <p className="section-kicker text-[0.58rem]">Mission</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                {companyProfile.mission}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="surface pixel-corner p-6">
              <p className="section-kicker text-[0.58rem]">Operating principles</p>
              <div className="mt-4 space-y-4">
                {values.slice(0, 3).map((value) => (
                  <div key={value.title} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Core capability areas across product, system design, and delivery."
              description="Each track is designed to support AI products that need more than a prototype. We build the layer around the model as carefully as the model interaction itself."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilityPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6 md:p-7"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-accent/80">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {pillar.description}
                </p>
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

      <section className="py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Projects"
                title="Selected systems and product directions."
                description="A mix of live systems, pilots, and platform work across knowledge, operations, review, and internal tooling."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/projects" className="button-secondary">
                See all projects
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Team"
                title="A compact team built around product clarity, systems thinking, and delivery."
                description="Bento AIII brings together product, design, full-stack engineering, and AI systems work so projects can move from concept to operating software."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/team" className="button-secondary">
                Meet the team
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredTeam.map((member, index) => (
              <Reveal key={member.name} delay={0.06 * index}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Start"
        title="If the workflow is real, the product should be too."
        description="Bring Bento AIII a process, internal tool, or AI product direction that needs clear shape and dependable execution."
        primaryLabel="Start a project conversation"
        primaryHref="/contact"
        secondaryLabel="Read about Bento AIII"
        secondaryHref="/about"
      />
    </>
  );
}
