
// app/free-design/page.tsx
"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  whatsapp: string;
  city: string;
  plotSize: string;
  floors: string;
  timeline: string;
  style: string;
  budget: string;
  notes: string;
};

export default function FreeDesignPage() {
  // Change this to your dad's WhatsApp number if different
  // Format: countrycode + number, no plus sign. Example India: 919810039775
  const WHATSAPP_NUMBER = "919810039775";

  const [form, setForm] = useState<FormState>({
    name: "",
    whatsapp: "",
    city: "",
    plotSize: "",
    floors: "",
    timeline: "",
    style: "Modern",
    budget: "",
    notes: "",
  });

  const [slots] = useState(5); // display only (no backend tracking)

  const message = useMemo(() => {
    return [
      "Hi Khanna Architects 👋",
      "",
      "I want to apply for the *Free Residential Design Initiative*.",
      "",
      `Name: ${form.name || "-"}`,
      `My WhatsApp: ${form.whatsapp || "-"}`,
      `City: ${form.city || "-"}`,
      `Plot size: ${form.plotSize || "-"}`,
      `Floors needed: ${form.floors || "-"}`,
      `Preferred timeline: ${form.timeline || "-"}`,
      `Style preference: ${form.style || "-"}`,
      `Budget range (optional): ${form.budget || "-"}`,
      "",
      `Notes: ${form.notes || "-"}`,
      "",
      "Please confirm if a free slot is available this month and next steps.",
    ].join("\n");
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submitToWhatsApp() {
    const text = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left bold blue */}
              <div className="relative overflow-hidden bg-blue-900 px-8 py-12 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10" />
                <div className="relative">
                  <p className="text-xs font-semibold tracking-widest text-white/80">
                    FREE DESIGN INITIATIVE
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Apply for a Free Residential Concept Plan
                  </h1>
                  <p className="mt-4 max-w-md text-white/85">
                    Limited slots each month for serious residential projects. We
                    review your details and confirm availability on WhatsApp.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
                      ✅ {slots} slots / month
                    </span>
                    <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
                      ✅ 2D concept (free)
                    </span>
                    <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
                      ✅ 3D is paid upgrade
                    </span>
                  </div>
                </div>
              </div>

              {/* Right tinted blue */}
              <div className="relative bg-blue-50 px-8 py-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-blue-500/10 to-transparent" />
                <div className="relative">
                  <div className="rounded-2xl border border-black/10 bg-white/80 p-6 text-sm text-black/70 backdrop-blur">
                    <p className="font-medium text-black">What you get (Free)</p>
                    <ul className="mt-3 space-y-2">
                      <li>• One 2D concept layout based on your requirements</li>
                      <li>• Basic space planning guidance</li>
                      <li>• 1 round of minor revision</li>
                    </ul>

                    <div className="mt-5 h-px w-full bg-black/10" />

                    <p className="mt-5 font-medium text-black">Paid upgrades</p>
                    <ul className="mt-3 space-y-2">
                      <li>• 3D exterior views</li>
                      <li>• Walkthrough / flythrough</li>
                      <li>• Full drawings for execution</li>
                    </ul>

                    <p className="mt-5 text-xs text-black/50">
                      We may decline if requirements are unclear or the monthly
                      slots are full.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-black">
            Application Details
          </h2>
          <p className="mt-2 text-sm text-black/60">
            Fill this once — then tap “Submit on WhatsApp”. Attach your site plan
            directly in WhatsApp after it opens.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Full Name">
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              />
            </Field>

            <Field label="Your WhatsApp Number">
              <input
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
                placeholder="+91..."
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              />
            </Field>

            <Field label="City">
              <input
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="Delhi / Noida / Gurugram..."
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              />
            </Field>

            <Field label="Plot Size">
              <input
                value={form.plotSize}
                onChange={(e) => update("plotSize", e.target.value)}
                placeholder='Example: "30x50 ft" or "2500 sq ft"'
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              />
            </Field>

            <Field label="Floors Needed">
              <input
                value={form.floors}
                onChange={(e) => update("floors", e.target.value)}
                placeholder='Example: "G+1" / "G+2"'
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              />
            </Field>

            <Field label="Timeline">
              <input
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
                placeholder='Example: "Start in 2 months"'
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              />
            </Field>

            <Field label="Style Preference">
              <select
                value={form.style}
                onChange={(e) => update("style", e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              >
                <option>Modern</option>
                <option>Contemporary</option>
                <option>Classic</option>
                <option>Minimal</option>
                <option>Traditional</option>
              </select>
            </Field>

            <Field label="Budget Range (optional)">
              <input
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                placeholder="Example: ₹60L–₹90L"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
              />
            </Field>

            <div className="md:col-span-2">
              <Field label="Notes (optional)">
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Any special requirements: vastu, parking, number of bedrooms, etc."
                  rows={4}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-blue-900/30"
                />
              </Field>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-black/50">
              After WhatsApp opens, you can attach: site plan, plot photo, or sketch.
            </p>

            <button
              onClick={submitToWhatsApp}
              className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-950"
            >
              Submit on WhatsApp →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-black">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
