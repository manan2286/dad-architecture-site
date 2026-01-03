

// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import { projects } from "../lib/projects";

export const metadata = {
  title: "Projects | Khanna Architects",
  description:
    "Selected architectural work by Khanna Architects across planning, commercial, and residential projects.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Header / Hero-lite */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-sm font-semibold tracking-widest text-blue-700">
                PROJECTS
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                Selected Work
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700">
                A curated set of projects spanning master planning, commercial developments, and
                residential work—designed with clarity, buildability, and detail.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold tracking-widest text-white hover:bg-blue-800"
                >
                  CONTACT
                </Link>
                <Link
                  href="/"
                  className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold tracking-widest text-neutral-900 hover:bg-neutral-50"
                >
                  HOME
                </Link>
              </div>
            </div>

            {/* Right accent panel to echo hero */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-blue-700 p-6 text-white shadow-sm">
                <p className="text-sm font-semibold tracking-widest text-white/80">
                  KHANNA ARCHITECTS
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug">
                  40+ years of experience delivering practical, build-ready architecture.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-white/85">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
                  Residential
                  <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
                  Commercial
                  <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
                  Planning
                </div>

                {/* subtle glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full bg-neutral-100">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Blue tint overlay on hover (echo hero) */}
                  <div className="absolute inset-0 bg-blue-900/0 transition duration-300 group-hover:bg-blue-900/15" />

                  {/* Top-left tag */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-widest text-blue-700 shadow-sm">
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-700">
                    {p.location} • {p.year}
                  </p>

                  {/* Bottom row */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="h-2 w-2 rounded-full bg-blue-700" />
                      Detailed Documentation
                    </div>

                    <span className="text-sm font-semibold tracking-widest text-blue-700 transition group-hover:text-blue-800">
                      VIEW →
                    </span>
                  </div>
                </div>

                {/* Accent border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-blue-700/0 transition group-hover:ring-2 group-hover:ring-blue-700/40" />
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-center gap-3 rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-10 text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-700">
              HAVE A PROJECT IN MIND?
            </p>
            <p className="max-w-2xl text-base text-neutral-700">
              Share your site location, plot size (if known), and timeline. We’ll respond with next
              steps and a clear plan.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/919810039775?text=Hi%20Khanna%20Architects%2C%20I%27d%20like%20to%20discuss%20a%20project.%20Project%20type%3A%20____%20Location%3A%20____%20Timeline%3A%20____"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold tracking-widest text-white hover:bg-blue-800"
              >
                WHATSAPP
              </a>
              <Link
                href="/#contact"
                className="rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold tracking-widest text-neutral-900 hover:bg-neutral-50"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
