import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project index for Bento AIII AI applications, systems, and workflow tooling."
};

const stageSummary = [
  {
    label: "Live and expansion",
    value: `${projects.filter((project) => project.stage === "Live" || project.stage === "Expansion").length} active tracks`
  },
  {
    label: "Pilot and build",
    value: `${projects.filter((project) => project.stage === "Pilot" || project.stage === "Build").length} structured pilots`
  },
  {
    label: "Platform and discovery",
    value: `${projects.filter((project) => project.stage === "Active Development" || project.stage === "Discovery").length} internal directions`
  }
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects across knowledge, operations, QA, and internal tooling."
        description="Each project card is structured as a product or system direction with a clear stage, short summary, technology signal, and detail page."
        metrics={[
          { label: "Projects", value: `${projects.length} total concepts and systems` },
          { label: "Featured", value: `${projects.filter((project) => project.featured).length} highlighted tracks` },
          { label: "Coverage", value: "Product, system, and workflow layers" }
        ]}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio view"
              title="A compact view of current Bento AIII project directions."
              description="The list spans live work, platform development, and concept-stage systems that illustrate the kind of problems Bento AIII is built to solve."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stageSummary.map((item, index) => (
              <Reveal
                key={item.label}
                delay={0.06 * index}
                className="surface pixel-corner p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.04 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="How projects ship"
              title="Bento AIII usually works across three layers."
              description="The project structure stays consistent even when the product category changes."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Product surface",
                copy: "Design the interface, information hierarchy, and operator flow around the actual job to be done."
              },
              {
                title: "System layer",
                copy: "Build the retrieval, orchestration, evaluation, and integration logic that supports the feature."
              },
              {
                title: "Operational rollout",
                copy: "Add review paths, ownership, and staged release strategy so the system can survive production use."
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

      <FinalCta
        eyebrow="Contact"
        title="If one of these project patterns matches your workflow, start there."
        description="Bento AIII can take a concept, a rough internal tool, or a broken workflow and shape it into a more reliable product direction."
        primaryLabel="Discuss a project"
        primaryHref="/contact"
        secondaryLabel="Learn about the company"
        secondaryHref="/about"
      />
    </>
  );
}
