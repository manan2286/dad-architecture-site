


export const metadata = { title: "Services | Khanna Architects" };

const services = [
  {
    title: "Architecture Design",
    points: ["Concept & planning", "Elevations & sections", "Construction drawings"],
  },
  {
    title: "Interiors",
    points: ["Layouts & elevations", "Materials & finishes", "Lighting guidance"],
  },
  {
    title: "Turnkey Support",
    points: ["Vendor alignment", "BOQ support", "Execution monitoring"],
  },
  {
    title: "Renovations",
    points: ["Space optimization", "Facade refresh", "Interior upgrades"],
  },
  {
    title: "Site Coordination",
    points: ["Quality checks", "On-site clarifications", "Issue resolution support"],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold md:text-4xl">Services</h1>
      <p className="mt-4 max-w-3xl text-white/75">
        Choose a complete package or a focused scope. We keep deliverables clear and timelines realistic.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
