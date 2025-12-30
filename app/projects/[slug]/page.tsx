import Link from "next/link";
import { getProject } from "../../lib/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

  // If project not found, show a friendly message instead of hard 404
  if (!project) {
    return (
      <main className="min-h-screen bg-[#070A0F] text-white px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-3 text-white/75">
            The slug <span className="text-white">{params.slug}</span> does not
            match any project in <code>app/lib/projects.ts</code>.
          </p>

          <Link
            href="/projects"
            className="inline-block mt-6 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <div className="text-sm text-white/70">
              {project.category} · {project.location}
            </div>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold">
              {project.title}
            </h1>
          </div>

          <Link
            href="/projects"
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            ← All Projects
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 pb-12">
        <div className="rounded-[36px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl">
          <div className="relative h-[260px] md:h-[420px] bg-black/40">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <p className="text-white/90 max-w-3xl">{project.summary}</p>
            </div>
          </div>

          <div className="p-7 md:p-10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 rounded-3xl border border-white/10 bg-black/25 p-6">
                <h2 className="text-xl font-semibold">Highlights</h2>
                <ul className="mt-4 space-y-2 text-white/80">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-red-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
                <h2 className="text-xl font-semibold">Scope of Work</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.scope.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">
                  Interested in a similar project?
                </div>
                <div className="text-sm text-white/75 mt-1">
                  Contact Khanna Architects for architecture, interior, and
                  façade design services.
                </div>
              </div>
              <a
                href="mailto:contactskhanna@yahoo.com"
                className="rounded-lg bg-red-600 px-5 py-3 text-sm font-medium hover:bg-red-500 transition"
              >
                Email for Quote
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Khanna Architects. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

