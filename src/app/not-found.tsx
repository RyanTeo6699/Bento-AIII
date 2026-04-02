import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center pt-24">
      <div className="shell">
        <div className="surface pixel-corner max-w-3xl p-8 md:p-12">
          <span className="section-kicker">404</span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            This route does not exist in the current Bento AIII map.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            The page may have moved, or the link may still be a placeholder while the site
            structure evolves.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="button-primary">
              Return home
            </Link>
            <Link href="/projects" className="button-secondary">
              Browse projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
