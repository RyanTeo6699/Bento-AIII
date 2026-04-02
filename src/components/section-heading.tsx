import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className
      )}
    >
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}
