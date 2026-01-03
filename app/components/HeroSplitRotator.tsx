
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  images?: string[];
  intervalMs?: number;
  tintClassName?: string; // lets you control tint easily
};

export default function HeroSplitRotator({
  images,
  intervalMs = 5000,
  // LESS tinted than before:
  // was: bg-blue-900/60, now: bg-blue-900/25
  tintClassName = "bg-blue-900/25",
}: Props) {
  const slides = useMemo(
    () =>
      images?.length
        ? images
        : [
            "/images/hero.jpg",
            "/images/hero-2.jpg",
            "/images/hero-3.jpg",
          ],
    [images]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  return (
    <section className="relative">
      <div className="grid min-h-[560px] grid-cols-1 md:grid-cols-2">
        {/* LEFT — Solid Blue */}
        <div className="flex items-center bg-blue-700">
          <div className="mx-auto max-w-xl px-6 py-14 md:px-12">
            <p className="text-sm font-semibold tracking-widest text-white/80">
              KHANNA ARCHITECTS
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
              A highly qualified
              <br />
              architect with an
              <br />
              excellent eye
              <br />
              for detail
            </h1>

            <div className="mt-8 flex gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-4 text-sm font-semibold tracking-widest text-white hover:bg-neutral-800"
              >
                VIEW PROJECTS
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-sm font-semibold tracking-widest text-white hover:bg-white/10"
              >
                VIEW SERVICES
              </Link>
            </div>

            {/* little slider dots */}
            {slides.length > 1 && (
              <div className="mt-10 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      i === index ? "bg-white" : "bg-white/45 hover:bg-white/70",
                    ].join(" ")}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — Rotating Image with LIGHT tint */}
        <div className="relative min-h-[360px] md:min-h-[560px]">
          {/* Crossfade stack */}
          {slides.map((src, i) => (
            <div
              key={src}
              className={[
                "absolute inset-0 transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <Image
                src={src}
                alt="Architecture hero"
                fill
                priority={i === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}

          {/* Lighter blue tint overlay */}
          <div className={["absolute inset-0", tintClassName].join(" ")} />

          {/* Keep subtle depth (optional). This is already light. */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-950/15" />
        </div>
      </div>
    </section>
  );
}
