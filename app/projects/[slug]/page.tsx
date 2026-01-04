
// app/projects/[slug]/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { getNextProjectSlug, getProjectBySlug } from "@/app/lib/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const project = useMemo(() => getProjectBySlug(slug), [slug]);
  const nextSlug = useMemo(() => getNextProjectSlug(slug), [slug]);
  const nextProject = useMemo(() => getProjectBySlug(nextSlug), [nextSlug]);

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-2xl font-semibold text-neutral-900">Project not found</h1>
        <p className="mt-2 text-neutral-600">
          The project you’re looking for doesn’t exist.
        </p>
        <Link
          href="/projects"
          className="mt-6 inline-flex rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold tracking-widest text-white hover:bg-blue-800"
        >
          BACK TO PROJECTS
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white text-neutral-900">
      {/* Top header */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/projects"
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold tracking-widest text-neutral-900 hover:bg-neutral-50"
            >
              ← PROJECTS
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold tracking-widest text-white hover:bg-blue-800"
              >
                NEXT PROJECT →
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* Left content */}
            <div className="md:col-span-5">
              <p className="text-sm font-semibold tracking-widest text-blue-700">
                {project.category?.toUpperCase()}
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                {project.title}
              </h1>

              {project.subtitle ? (
                <p className="mt-3 text-base text-neutral-700">{project.subtitle}</p>
              ) : null}

              <p className="mt-4 text-sm text-neutral-600">
                {project.location}
                {project.year ? ` • ${project.year}` : ""}
              </p>

              {/* ✅ OPTION A: Key Facts Row */}
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { label: "Client", value: project.client ?? "—" },
                  { label: "Area", value: project.area ?? "—" },
                  { label: "Capacity", value: project.capacity ?? "—" },
                  { label: "Status", value: project.status ?? "—" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-[11px] font-semibold tracking-widest text-neutral-500">
                      {item.label.toUpperCase()}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-neutral-900">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div className="mt-6">
                <p className="text-sm font-semibold tracking-widest text-blue-700">
                  OVERVIEW
                </p>
                <p className="mt-3 text-base leading-relaxed text-neutral-700">
                  {project.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919810039775?text=Hi%20Khanna%20Architects%2C%20I%27m%20interested%20in%20this%20project%3A%20____%20%0ALocation%3A%20____%20%0APlot%20size%3A%20____%20%0ATimeline%3A%20____"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold tracking-widest text-white hover:bg-blue-800"
                >
                  WHATSAPP
                </a>
                <Link
                  href="/#contact"
                  className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold tracking-widest text-neutral-900 hover:bg-neutral-50"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Right hero image */}
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                  {/* subtle blue tint */}
                  <div className="absolute inset-0 bg-blue-900/10" />

                  {/* Next project overlay button */}
                  {nextProject ? (
                    <Link
                      href={`/projects/${nextProject.slug}`}
                      className="absolute right-4 top-4 rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold tracking-widest text-blue-700 shadow-sm backdrop-blur hover:bg-white"
                      title={`Next: ${nextProject.title}`}
                    >
                      NEXT PROJECT →
                    </Link>
                  ) : null}
                </div>
              </div>

              {/* Gallery */}
              {Array.isArray(project.gallery) && project.gallery.length > 1 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.gallery.slice(0, 4).map((img, idx) => (
                    <div
                      key={`${img}-${idx}`}
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} image ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Extra Details (from metrics[]) */}
      {Array.isArray(project.metrics) && project.metrics.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <p className="text-sm font-semibold tracking-widest text-blue-700">
              ADDITIONAL DETAILS
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.metrics.map((m) => (
                <div
                  key={`${m.label}-${m.value}`}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-neutral-900">
                    {m.label}
                  </div>
                  <div className="text-sm text-neutral-700">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/projects"
                className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold tracking-widest text-neutral-900 hover:bg-neutral-50"
              >
                ← BACK TO PROJECTS
              </Link>

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold tracking-widest text-white hover:bg-blue-800"
                >
                  NEXT PROJECT →
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/projects"
                className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold tracking-widest text-neutral-900 hover:bg-neutral-50"
              >
                ← BACK TO PROJECTS
              </Link>

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold tracking-widest text-white hover:bg-blue-800"
                >
                  NEXT PROJECT →
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
