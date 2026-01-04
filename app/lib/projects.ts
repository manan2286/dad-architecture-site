
export type Project = {
  slug: string;
  title: string;
  location: string;
  year?: string;
  category: string;
  status?: string;
  subtitle?: string;

  // ✅ Normalized key facts (used by Option A row)
  client?: string;
  area?: string;
  capacity?: string;

  description: string;
  heroImage: string;
  gallery: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "medicity-master-plan",
    title: "Medicity Master Plan",
    subtitle: "Integrated Healthcare & Wellness Ecosystem",
    location: "India",
    category: "Urban / Master Planning",
    status: "Concept / Planning",

    client: "—",
    area: "14 acres",
    capacity: "300 beds",

    description:
      "A 14-acre Medicity master plan envisioning a comprehensive healthcare and wellness ecosystem. The development integrates a 300-bed multi-specialty hospital, residential zones for doctors, staff and nurses, a dedicated senior living community, and supporting infrastructure. The campus is planned with clear circulation, accessibility, and long-term scalability at its core.",
    heroImage: "/images/medicity.jpg",
    gallery: ["/images/medicity.jpg"],
    metrics: [
      { label: "Key Components", value: "Hospital, Staff Housing, Senior Living" },
      { label: "Planning Focus", value: "Integrated healthcare campus" },
    ],
  },

  {
    slug: "care-homes-senior-living",
    title: "Care Homes Senior Living",
    subtitle: "Senior Living Community – CARE HOMES",
    location: "India",
    category: "Residential / Healthcare",
    status: "Design Development",

    client: "Ashiana Housing Limited",
    area: "3,500 sq m",
    capacity: "30 beds",

    description:
      "This project involves the comprehensive architectural and spatial design of CARE HOMES within a senior living community for 30 beds. Commissioned by Ashiana Housing Limited—one of India’s leading developers in the senior living sector—the development spans approximately 3,500 sq m and is designed with a strong focus on accessibility, safety, and dignified living for seniors.",
    heroImage: "/images/care-homes.jpg",
    gallery: ["/images/care-homes.jpg"],
    metrics: [
      { label: "Project Type", value: "Senior living / care homes" },
      { label: "Design Focus", value: "Accessibility, safety, dignity" },
    ],
  },

  {
    slug: "luxury-seafront-housing-nigeria",
    title: "Luxury Seafront Housing",
    subtitle: "High-Rise Seafront Residential Development",
    location: "Nigeria",
    category: "Residential",
    status: "Concept",

    client: "—",
    area: "60,000 sq m",
    capacity: "120 units",

    description:
      "High-rise luxury seafront living comprising 120 residential units in Nigeria, overlooking the sea. The project integrates premium residential planning with local cultural and market-relevant architectural elements, ensuring contextual relevance while delivering a high-end living experience. The development spans an area of approximately 60,000 sq m.",
    heroImage: "/images/nigeria-seafront-housing.jpg",
    gallery: ["/images/nigeria-seafront-housing.jpg"],
    metrics: [
      { label: "Key Feature", value: "Seafront living with panoramic views" },
      { label: "Design Intent", value: "Local cultural + market relevance" },
    ],
  },

  {
    slug: "wellness-centre-rishikesh",
    title: "Wellness Centre Rishikesh",
    subtitle: "Boutique Wellness Retreat in the Himalayas",
    location: "Rishikesh, Uttarakhand, India",
    category: "Wellness / Hospitality",
    status: "Concept",

    client: "—",
    area: "2,500 sq m (covered)",
    capacity: "30 beds",

    description:
      "The Wellness Centre in Rishikesh, Uttarakhand is envisioned as an exclusive 30-bed boutique wellness destination. Spread over a covered area of approximately 2,500 sq m, the project is located in the tranquil foothills of the Himalayas, offering panoramic views of the Ganges River and a serene, nature-driven retreat experience.",
    heroImage: "/images/wellness-centre-rishikesh.jpg",
    gallery: ["/images/wellness-centre-rishikesh.jpg"],
    metrics: [
      { label: "Setting", value: "Himalayan foothills" },
      { label: "Views", value: "Panoramic views of the Ganges" },
    ],
  },

  {
    slug: "spice-mall-multiplex-noida",
    title: "Spice Mall & Multiplex",
    subtitle: "Integrated Retail & Entertainment Destination",
    location: "Noida, Uttar Pradesh, India",
    category: "Commercial / Retail",
    status: "Completed",

    client: "—",
    area: "20,000 sq m",
    capacity: "8 screens",

    description:
      "A multi-storeyed Spice Shopping Mall and 8-screen multiplex developed as a prominent commercial and entertainment destination in Noida, Uttar Pradesh. Spread over an area of approximately 20,000 sq m, the integrated retail and leisure complex caters to a wide cross-section of consumers and serves as a key landmark within the area.",
    heroImage: "/images/spice-mall-multiplex.jpg",
    gallery: ["/images/spice-mall-multiplex.jpg"],
    metrics: [
      { label: "Development", value: "Shopping mall + multiplex" },
      { label: "Positioning", value: "Prominent landmark destination" },
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
