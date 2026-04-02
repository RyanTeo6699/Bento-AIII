import Link from "next/link";

import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface pixel-corner flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="signal-chip">{project.stage}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {project.sector}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
        <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
        <p className="text-sm leading-7 text-slate-400">{project.description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <Link href={`/projects/${project.slug}`} className="button-secondary">
          View details
        </Link>
      </div>
    </article>
  );
}
