
// app/components/FreeDesignCTA.tsx
import Link from "next/link";

export default function FreeDesignCTA() {
  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Bold Blue */}
            <div className="relative overflow-hidden bg-blue-900 px-8 py-12 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-widest text-white/80">
                  NEW INITIATIVE
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Free Residential Design Initiative
                </h2>
                <p className="mt-4 max-w-md text-white/85">
                  We offer a limited number of free concept plans each month for
                  serious residential projects.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
                    ✅ 5 slots / month
                  </span>
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
                    ✅ 2D concept layout (free)
                  </span>
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
                    ✅ Upgrade to 3D anytime
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Tinted Blue */}
            <div className="relative bg-blue-50 px-8 py-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-blue-500/10 to-transparent" />
              <div className="relative">
                <div className="rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur">
                  <p className="text-sm font-medium text-black">
                    Who is this for?
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-black/70">
                    <li>• Plot owners planning a new home or major renovation</li>
                    <li>• Clear requirements + realistic timeline</li>
                    <li>• Site plan / plot size available</li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/free-design"
                      className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-950"
                    >
                      Apply for a Free Slot →
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 transition hover:bg-black/5"
                    >
                      View 3D & Full Design Services
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-black/50">
                    Note: We review applications and confirm availability on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
