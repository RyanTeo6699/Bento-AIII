import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import type { Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import type { CommercialProjectView } from "@/lib/project-commercial";

type ProjectCardProps = {
  locale: Locale;
  project: CommercialProjectView;
  copy: {
    viewDetail: string;
    idealUsers: string;
    deliveryScope: string;
    keyOutcome: string;
    valueCase: string;
    statusLabels: Record<string, string>;
  };
};

export function ProjectCard({ locale, project, copy }: ProjectCardProps) {
  return (
    <article className="surface pixel-corner flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <StatusBadge status={project.status} label={copy.statusLabels[project.status]} />
        <span className="neo-microcopy text-right">{project.track}</span>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
        <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
        <p className="text-sm leading-7 text-slate-400">
          {project.commercial.operationalProblem}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[0.85rem] border border-white/10 px-3 py-1 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
        <div>
          <p className="neo-microcopy">{copy.idealUsers}</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {project.commercial.idealUsers}
          </p>
        </div>
        <div className="border-t border-white/10 pt-4">
          <p className="neo-microcopy">{copy.deliveryScope}</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            {project.commercial.deliveryScope}
          </p>
        </div>
        <div className="border-t border-white/10 pt-4">
          <p className="neo-microcopy">{copy.keyOutcome}</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">{project.outcome}</p>
        </div>
        <div className="border-t border-white/10 pt-4">
          <p className="neo-microcopy">{copy.valueCase}</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            {project.commercial.valueCase}
          </p>
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-500">{project.disclosure}</p>
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={buildLocalizedPath(locale, `/projects/${project.slug}`)}
          className="button-secondary"
        >
          {copy.viewDetail}
        </Link>
      </div>
    </article>
  );
}
