

// app/page.tsx
import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";
import Container from "./components/Container";
import Section from "./components/Section";
import FreeDesignCTA from "./components/FreeDesignCTA";

/* =========================
   HERO SPLIT BLUE BACKGROUND
   (height clipped to match hero/image)
========================= */
function HeroSplitBlueTint() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520px] overflow-hidden md:h-full"
    >
      {/* Exact 50/50 split */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-900/45" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-500/22" />

      {/* Soft wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/25 to-white/55" />

      {/* Subtle glow accents */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-700/18 blur-3xl" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-blue-500/16 blur-3xl" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO (Utley-style) */}
      <section className="relative isolate overflow-hidden border-b border-black/10">
        <HeroSplitBlueTint />

        <div className="relative z-10">
          <Container>
            <div className="grid items-stretch gap-10 py-14 md:grid-cols-2 md:py-20">
              {/* LEFT */}
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-widest text-blue-700">
                  KHANNA ARCHITECTS • DELHI, INDIA
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black md:text-5xl">
                  Timeless architecture,
                  <span className="text-blue-700"> designed to last</span>.
                </h1>

                <p className="mt-5 max-w-xl text-base text-black/70">
                  40+ years of experience across planning, residential, commercial,
                  and wellness projects—balancing functionality, elegance, and
                  buildability.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/projects"
                    className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                  >
                    View Projects
                  </Link>

                  <a
                    href="#contact"
                    className="rounded-full border border-black/15 bg-white/70 px-5 py-2.5 text-sm font-medium text-black shadow-sm backdrop-blur transition hover:border-blue-700/30"
                  >
                    Contact
                  </a>
                </div>

                {/* Mini stats */}
                <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm">
                  <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur">
                    <div className="text-lg font-semibold text-black">40+</div>
                    <div className="text-black/60">Years</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur">
                    <div className="text-lg font-semibold text-black">Planning</div>
                    <div className="text-black/60">to Execution</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur">
                    <div className="text-lg font-semibold text-black">Trusted</div>
                    <div className="text-black/60">Practice</div>
                  </div>
                </div>
              </div>

              {/* RIGHT (image size unchanged) */}
              <div className="relative self-stretch">
                <div className="absolute inset-0 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                  <HeroSlideshow
                    intervalMs={5000}
                    images={[
                      "/images/hero.jpg",
                      "/images/medicity.jpg",
                      "/images/care-homes.jpg",
                      "/images/spice-mall-multiplex.jpg",
                      "/images/nigeria-seafront-housing.jpg",
                    ]}
                  />
                </div>

                {/* Height anchor (controls hero height on small screens) */}
                <div aria-hidden className="h-[520px] md:h-full" />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="ABOUT"
        title="A legacy of thoughtful design"
        subtitle="We focus on clean lines, pragmatic planning, and spaces that feel calm, functional, and premium."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Planning-first",
              desc: "Layouts that work in real life—circulation, light, and proportions considered early.",
            },
            {
              title: "Buildable details",
              desc: "Design decisions guided by execution reality and long-term maintenance.",
            },
            {
              title: "Client clarity",
              desc: "Clear drawings, transparent decisions, and confidence through every stage.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <h3 className="text-base font-semibold text-black">{c.title}</h3>
              <p className="mt-2 text-sm text-black/70">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="SERVICES"
        title="What we do"
        subtitle="End-to-end support—from master planning to detailed design and coordination."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Architecture Design",
            "Urban / Master Planning",
            "Residential & Commercial Projects",
            "Interiors Coordination",
            "Site/Execution Support",
            "Consultation & Reviews",
          ].map((s) => (
            <div
              key={s}
              className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur"
            >
              <span className="text-sm font-medium text-black">{s}</span>
              <span className="text-sm text-blue-700">→</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ✅ FREE DESIGN INITIATIVE (Option C) */}
      <FreeDesignCTA />

      {/* CONTACT */}
      <section
        id="contact"
        className="relative isolate overflow-hidden border-t border-black/10"
      >
        <HeroSplitBlueTint />

        <div className="relative z-10">
          <Container>
            <div className="py-14 md:py-20">
              <p className="text-xs font-semibold tracking-widest text-blue-700">
                CONTACT
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black md:text-3xl">
                Let’s discuss your project
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-black/70">
                Share your requirement and timeline. We’ll respond with next steps
                and an initial direction.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
                  <div className="text-xs font-semibold tracking-widest text-black/60">
                    PHONE / WHATSAPP
                  </div>
                  <div className="mt-2 text-sm font-medium text-black">
                    +91 9810039775
                  </div>
                </div>

                <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
                  <div className="text-xs font-semibold tracking-widest text-black/60">
                    EMAIL
                  </div>
                  <div className="mt-2 text-sm font-medium text-black">
                    Contactskhanna@yahoo.com
                  </div>
                </div>

                <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
                  <div className="text-xs font-semibold tracking-widest text-black/60">
                    LOCATION
                  </div>
                  <div className="mt-2 text-sm font-medium text-black">
                    Delhi, India
                  </div>
                </div>
              </div>

              <div className="mt-10 text-xs text-black/55">
                © {new Date().getFullYear()} Khanna Architects. All rights reserved.
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
