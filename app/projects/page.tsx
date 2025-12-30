import Link from "next/link";
import { projects } from "../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-semibold">Projects</h1>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 hover:bg-white/15 transition"
            >
              <div className="text-sm text-white/70">
                {p.category} · {p.location}
              </div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-white/75">{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
