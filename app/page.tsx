
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* ================= BACKGROUND ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-[1.03]"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        {/* ================= STICKY NAV ================= */}
        <div className="sticky top-0 z-50">
          <div className="backdrop-blur-md bg-black/35 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="font-semibold tracking-wide">
                Khanna Architects
              </div>

              <nav className="hidden md:flex gap-7 text-sm text-white/80">
                <a href="#work" className="hover:text-white transition">
                  Works
                </a>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </nav>

              <a
                href="#contact"
                className="hidden md:inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-500 transition"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-10">
          {/* ================= HERO CARD ================= */}
          <div className="mt-10 md:mt-16">
            {/* Outer white frame */}
            <div className="rounded-[44px] p-[10px] bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_80px_rgba(0,0,0,0.65)]">
              {/* Glow ring */}
              <div className="rounded-[38px] p-[2px] bg-gradient-to-br from-white/70 via-white/30 to-white/10">
                {/* Inner DARK glass card */}
                <div className="rounded-[36px] bg-gradient-to-b from-black/60 via-black/50 to-black/65 border border-white/15 backdrop-blur-xl overflow-hidden">
                  <div className="px-8 py-12 md:px-14 md:py-16">
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.65)]">
                      Architecture, Interior
                      <br /> & Exterior Design
                    </h1>

                    <p className="mt-5 text-white/90 max-w-2xl drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
                      A dedicated team of designers and architects to implement
                      your project with clarity, quality, and timeless
                      aesthetics.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-lg bg-red-600 px-7 py-3 font-medium hover:bg-red-500 transition shadow-[0_14px_35px_rgba(220,38,38,0.4)]"
                      >
                        Request a quote
                      </a>

                      <a
                        href="#services"
                        className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/5 px-7 py-3 font-medium text-white/95 hover:bg-white/10 transition"
                      >
                        Learn more
                      </a>
                    </div>

                    <div className="mt-6 text-sm text-white/85 drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
                      Delhi, India · 40+ years of experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= WORKS ================= */}
          <div
            id="work"
            className="mt-12 md:mt-16 rounded-[44px] bg-white text-[#111] shadow-[0_25px_80px_rgba(0,0,0,0.55)] overflow-hidden"
          >
            <div className="px-8 py-12 md:px-14 md:py-14">
              <div className="text-center">
                <div className="text-xs tracking-widest text-gray-500 uppercase">
                  Get Inspired
                </div>
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
                  See Our Latest Works
                </h2>
              </div>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {/* Project 1 */}
                <div className="rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-48">
                    <img
                      src="/hero.jpg"
                      alt="Wellness Centre Rishikesh"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-xs text-white/85">
                        Featured Project
                      </div>
                      <div className="text-white font-semibold">
                        Wellness Centre, Rishikesh
                      </div>
                    </div>
                  </div>
                  <div className="p-5 text-sm text-gray-600">
                    Contemporary façade with glass curvature and stone massing.
                  </div>
                </div>

                {/* Project 2 */}
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="text-sm text-gray-500">Residential</div>
                  <div className="mt-1 font-semibold">
                    Luxury Villa · South Delhi
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Natural light, ventilation, and privacy-focused planning.
                  </div>
                </div>

                {/* Project 3 */}
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="text-sm text-gray-500">Commercial</div>
                  <div className="mt-1 font-semibold">
                    Office Building · Gurgaon
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Efficient floor plates with modern elevations.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div
            id="services"
            className="mt-12 md:mt-16 rounded-[44px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="px-8 py-12 md:px-14 md:py-14">
              <h3 className="text-2xl md:text-3xl font-semibold">Services</h3>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                  <div className="font-semibold">Architecture</div>
                  <div className="mt-2 text-sm text-white/80">
                    Residential, commercial & institutional projects.
                  </div>
                </div>

                <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                  <div className="font-semibold">Interior Design</div>
                  <div className="mt-2 text-sm text-white/80">
                    Space planning, materials, and turnkey interiors.
                  </div>
                </div>

                <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                  <div className="font-semibold">Exterior & Façade</div>
                  <div className="mt-2 text-sm text-white/80">
                    Elevation design and façade detailing.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div
            id="contact"
            className="mt-12 md:mt-16 rounded-[44px] bg-white text-[#111] shadow-[0_25px_80px_rgba(0,0,0,0.55)] overflow-hidden"
          >
            <div className="px-8 py-12 md:px-14 md:py-14">
              <h3 className="text-2xl md:text-3xl font-semibold">Contact</h3>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="text-sm text-gray-500">Phone / WhatsApp</div>
                  <div className="mt-1 font-semibold text-lg">
                    +91 9810039775
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="mt-1 font-semibold text-lg">
                    contactskhanna@yahoo.com
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                Location: Delhi, India
              </div>
            </div>
          </div>

          {/* WhatsApp floating */}
          <a
            href="https://wa.me/919810039775"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold shadow-[0_18px_45px_rgba(0,0,0,0.5)] hover:bg-green-500 transition"
          >
            WhatsApp
          </a>

          <footer className="mt-10 pb-8 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Khanna Architects. All rights reserved.
          </footer>
        </div>
      </section>
    </main>
  );
}
