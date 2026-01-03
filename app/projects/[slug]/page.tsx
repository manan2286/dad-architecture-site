
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "../../lib/projects";

function findProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-3 text-black/70">
          The project you’re looking for doesn’t exist.
        </p>
        <Link
          href="/projects"
          className="mt-6 inline-block rounded-full bg-blue-700 px-5 py-2.5 text-sm font-medium text-white"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  // Next project logic (kept)
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject =
    currentIndex >= 0 && projects.length > 1
      ? projects[(currentIndex + 1) % projects.length]
      : null;

  // Fields used in the Project Details box (kept)
  const location = project.location ?? "—";
  const siteArea = (project as any).siteArea ?? (project as any).site_area ?? "—";
  const builtUpArea =
    (project as any).builtUpArea ?? (project as any).built_up_area ?? "—";
  const status = project.status ?? "—";

  const overview =
    (project as any).overview ??
    project.description ??
    "This project was designed with a focus on practical circulation, clean proportions, and a build-ready approach that aligns stakeholders early.";

  const overview2 =
    (project as any).overview2 ??
    "We emphasize clarity in drawings, site coordination, and details that translate smoothly from concept to execution—reducing rework and accelerating decisions.";

  return (
    <main className="bg-white">
      {/* Top header row */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Back to Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-sm font-medium text-black hover:opacity-80"
            >
              <span className="grid grid-cols-3 gap-[2px]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-[2px] bg-black" />
                ))}
              </span>
              <span>Back to Projects</span>
            </Link>

            {/* Next project (working) */}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-3 text-sm font-medium text-black hover:opacity-80"
                title={`Next: ${nextProject.title}`}
              >
                <span>Next project</span>
                <span className="grid grid-cols-3 gap-[2px]">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-[2px] bg-black" />
                  ))}
                </span>
              </Link>
            ) : (
              <span className="text-sm font-medium text-black/40">
                Next project
              </span>
            )}
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black md:text-4xl">
            {project.title}
          </h1>
          {project.subtitle ? (
            <p className="mt-2 text-sm text-black/60">{project.subtitle}</p>
          ) : null}
        </div>
      </section>

      {/* HERO: Overview (left) + Image (right) */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT: Overview moved here */}
          <div className="md:pt-2">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Overview
            </h2>
            <p className="mt-5 text-black/70">{overview}</p>
            <p className="mt-6 text-black/70">{overview2}</p>

            {/* Buttons moved below Overview */}
            <div className="mt-8 flex gap-4">
              <a
                href="#gallery"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                View Gallery
              </a>
              <a
                href="#details"
                className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:border-blue-700/30"
              >
                Project Details
              </a>
            </div>
          </div>

          {/* RIGHT: Hero image */}
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details card (unchanged) */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left column intentionally empty now (keeps spacing consistent on desktop) */}
          <div />

          {/* Project Details */}
          <div id="details" className="md:pt-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">Project Details</h3>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="text-black/60">Location</span>
                  <span className="font-medium text-black">{location}</span>
                </div>

                <div className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="text-black/60">Site Area</span>
                  <span className="font-medium text-black">{siteArea}</span>
                </div>

                <div className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="text-black/60">Built-Up Area</span>
                  <span className="font-medium text-black">{builtUpArea}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-black/60">Status</span>
                  <span className="font-medium text-black">{status}</span>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                  <p className="text-sm font-semibold text-black">
                    Want a similar design?
                  </p>
                  <p className="mt-2 text-sm text-black/70">
                    Share your site location, plot size (if known), and timeline on WhatsApp.
                  </p>

                  <a
                    href="https://wa.me/919810039775"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Message on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (unchanged) */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-black">
          Gallery
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(project.gallery ?? []).map((src: string) => (
            <div
              key={src}
              className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`${project.title} gallery`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
