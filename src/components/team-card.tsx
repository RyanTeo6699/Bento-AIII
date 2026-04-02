import type { TeamMember } from "@/lib/site-data";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="surface pixel-corner flex h-full flex-col p-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-accent/80">
          {member.role}
        </p>
        <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
        <p className="text-sm leading-7 text-slate-300">{member.specialty}</p>
        <p className="text-sm leading-7 text-slate-400">{member.bio}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {member.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="button-secondary !px-4 !py-2"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
