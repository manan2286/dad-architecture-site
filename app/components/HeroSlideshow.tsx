
// app/components/HeroSlideshow.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type HeroSlideshowProps = {
  images?: string[];
  intervalMs?: number; // default 5000
  className?: string;  // optional for extra styling from parent
};

export default function HeroSlideshow({
  images,
  intervalMs = 5000,
  className = "",
}: HeroSlideshowProps) {
  const slides = useMemo(
    () =>
      (images && images.length > 0
        ? images
        : [
            "/images/hero.jpg",
            "/images/medicity.jpg",
            "/images/care-homes.jpg",
            "/images/spice-mall-multiplex.jpg",
            "/images/wellness-centre-rishikesh.jpg",
          ]
      ).filter(Boolean),
    [images]
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  return (
    <div className={["relative h-full w-full overflow-hidden", className].join(" ")}>
      {/* This now fills whatever parent height/width you give it */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Khanna Architects work"
            fill
            className={[
              "object-cover transition-opacity duration-700",
              i === idx ? "opacity-100" : "opacity-0",
            ].join(" ")}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        ))}
      </div>

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 backdrop-blur">
          {slides.map((_, i) => (
            <span
              key={i}
              className={[
                "h-1.5 w-1.5 rounded-full",
                i === idx ? "bg-white" : "bg-white/40",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
