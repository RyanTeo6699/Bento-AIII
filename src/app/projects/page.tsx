import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProjectPresentationCopy,
  getProjects as getCommercialProjects
} from "@/lib/project-commercial";
import { getCompanyProfile } from "@/lib/site-data";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/projects")?.label ?? "Projects",
    description: dictionary.projects.hero.description,
    path: "/projects"
  });
}

export default function ProjectsPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectPresentationCopy = getProjectPresentationCopy(locale);
  const companyProfile = getCompanyProfile(locale);
  const projects = getCommercialProjects(locale);

  const stageSummary = [
    {
      label: dictionary.common.statusLabels.Prototype,
      value: `${projects.filter((project) => project.status === "Prototype").length} ${dictionary.projects.stageUnit}`
    },
    {
      label: dictionary.common.statusLabels.Internal,
      value: `${projects.filter((project) => project.status === "Internal").length} ${dictionary.projects.stageUnit}`
    },
    {
      label: dictionary.common.statusLabels.Concept,
      value: `${projects.filter((project) => project.status === "Concept").length} ${dictionary.projects.stageUnit}`
    }
  ];

  return (
    <>
      <PageHero
        eyebrow={dictionary.projects.hero.eyebrow}
        title={dictionary.projects.hero.title}
        description={dictionary.projects.hero.description}
        metrics={[
          {
            label: dictionary.projects.hero.metrics[0].label,
            value: `${projects.length} ${dictionary.projects.hero.metrics[0].value}`
          },
          dictionary.projects.hero.metrics[1],
          dictionary.projects.hero.metrics[2]
        ]}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.projects.portfolio.eyebrow}
              title={dictionary.projects.portfolio.title}
              description={dictionary.projects.portfolio.description}
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-8 surface pixel-corner p-6">
            <p className="section-kicker text-[0.58rem]">
              {dictionary.projects.readAsIntended.kicker}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {companyProfile.disclosure}
            </p>
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
                <ProjectCard
                  locale={locale}
                  project={project}
                  copy={{
                    viewDetail: dictionary.common.viewDetail,
                    idealUsers: projectPresentationCopy.idealUsers,
                    deliveryScope: projectPresentationCopy.deliveryScope,
                    keyOutcome: projectPresentationCopy.keyOutcome,
                    valueCase: projectPresentationCopy.valueCase,
                    statusLabels: dictionary.common.statusLabels
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.projects.howToRead.eyebrow}
              title={dictionary.projects.howToRead.title}
              description={dictionary.projects.howToRead.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {dictionary.projects.howToRead.cards.map((item, index) => (
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
        locale={locale}
        eyebrow={dictionary.projects.finalCta.eyebrow}
        title={dictionary.projects.finalCta.title}
        description={dictionary.projects.finalCta.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.aboutCompany}
        secondaryHref="/about"
      />
    </>
  );
}
