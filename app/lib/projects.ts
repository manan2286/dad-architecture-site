
export type Project = {
  slug: string;
  title: string;
  location: string;
  year?: string;
  category: string;
  status?: string; // ✅ ADD THIS
    subtitle?: string; // ✅ ADD THIS LINE
  description: string;
  heroImage: string;
  gallery: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "medicity-master-plan",
    title: "Medicity Master Plan",
    location: "India",
    category: "Urban / Master Planning",
    status: "Concept / Planning",
    description:
      "A large-scale healthcare-centric master plan integrating hospitals, research, housing, and public realm with strong circulation planning.",
    heroImage: "/images/medicity.jpg",
    gallery: ["/images/medicity.jpg"],
    metrics: [
      { label: "Type", value: "Master Plan" },
      { label: "Focus", value: "Healthcare Ecosystem" },
      { label: "Scale", value: "Large campus development" },
    ],
  },
  {
    slug: "care-homes-senior-living",
    title: "Care Homes Senior Living",
    location: "India",
    category: "Residential / Healthcare",
    status: "Design Development",
    description:
      "Senior living housing designed with accessibility, safety, and community-focused spaces.",
    heroImage: "/images/care-homes.jpg",
    gallery: ["/images/care-homes.jpg"],
    metrics: [
      { label: "Type", value: "Senior Living" },
      { label: "Design", value: "Universal Access" },
      { label: "Experience", value: "Community-centric" },
    ],
  },
  {
    slug: "luxury-seafront-housing-nigeria",
    title: "Luxury Seafront Housing",
    location: "Nigeria",
    category: "Residential",
    status: "Concept",
    description:
      "Luxury residential towers along the seafront with uninterrupted views and climate-responsive architecture.",
    heroImage: "/images/nigeria-seafront-housing.jpg",
    gallery: ["/images/nigeria-seafront-housing.jpg"],
    metrics: [
      { label: "Type", value: "Luxury Housing" },
      { label: "Location", value: "Seafront" },
      { label: "Climate", value: "Tropical responsive" },
    ],
  },
  {
    slug: "wellness-centre-rishikesh",
    title: "Wellness Centre Rishikesh",
    location: "Rishikesh, India",
    category: "Wellness / Hospitality",
    status: "Concept",
    description:
      "A tranquil wellness retreat designed around nature, silence, and spiritual calm.",
    heroImage: "/images/wellness-centre-rishikesh.jpg",
    gallery: ["/images/wellness-centre-rishikesh.jpg"],
    metrics: [
      { label: "Type", value: "Wellness Centre" },
      { label: "Setting", value: "Nature-led" },
      { label: "Mood", value: "Calm & restorative" },
    ],
  },
  {
    slug: "spice-mall-multiplex-noida",
    title: "Spice Mall & Multiplex",
    location: "Noida, India",
    category: "Commercial / Retail",
    status: "Completed",
    description:
      "Retail and multiplex development with strong frontage, visibility, and efficient circulation.",
    heroImage: "/images/spice-mall-multiplex.jpg",
    gallery: ["/images/spice-mall-multiplex.jpg"],
    metrics: [
      { label: "Type", value: "Retail + Multiplex" },
      { label: "Focus", value: "Footfall & visibility" },
      { label: "Planning", value: "Efficient circulation" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProjectSlug(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return projects[0]?.slug ?? "";
  return projects[(idx + 1) % projects.length]?.slug ?? "";
}
