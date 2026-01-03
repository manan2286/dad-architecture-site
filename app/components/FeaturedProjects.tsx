
import Link from "next/link";
import Image from "next/image";
import { projects } from "../lib/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Featured Projects
            </h2>
            <p className="mt-2 text-neutral-700">
              A snapshot of our planning, commercial, and residential work.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.heroImage}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-700">
                  {p.location} • {p.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
