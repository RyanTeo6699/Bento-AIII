import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getProjectPresentationCopy, getProjects } from "@/lib/project-commercial";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const projectCopy = getProjectPresentationCopy(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/projects")?.label ?? "Projects",
    description: projectCopy.heroDescription,
    path: "/projects"
  });
}

export default function ProjectsPage() {
  const locale = getCurrentLocale();
  const sharedCtas = getSharedCtas(locale);
  const projectCopy = getProjectPresentationCopy(locale);
  const projects = getProjects(locale);

  return (
    <>
      <section className="site-hero-section">
        <div className="shell">
          <div className="boxed-section site-hero-frame">
            <Reveal className="max-w-5xl space-y-6">
              <span className="section-kicker sticker-rotate-1">{projectCopy.heroEyebrow}</span>
              <h1 className="headline-page max-w-5xl">{projectCopy.heroTitle}</h1>
              <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--ink-soft))]">
                {projectCopy.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 grid gap-4 md:grid-cols-3">
              {projectCopy.sharedLogic.map((item, index) => (
                <div
                  key={item.title}
                  className={`surface p-5 ${index === 1 ? "sticker-rotate-1" : index === 2 ? "sticker-rotate-3" : ""}`}
                >
                  <p className="neo-microcopy">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.portfolioEyebrow}
              title={projectCopy.portfolioTitle}
              description={projectCopy.portfolioDescription}
              compact
            />
          </Reveal>

          <div className="mt-12 grid gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06 * index}>
                <ProjectCard
                  locale={locale}
                  project={project}
                  copy={{
                    stageLabel: projectCopy.stageLabel,
                    viewProject: projectCopy.viewProject
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={projectCopy.indexFinalEyebrow}
        title={projectCopy.indexFinalTitle}
        description={projectCopy.indexFinalDescription}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.aboutCompany}
        secondaryHref="/about"
      />
    </>
  );
}
