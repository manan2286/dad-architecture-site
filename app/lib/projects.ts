export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  heroImage?: string;
  summary: string;
  highlights: string[];
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "wellness-centre-rishikesh",
    title: "Wellness Centre",
    category: "Institutional",
    location: "Rishikesh, Uttarakhand",
    heroImage: "/hero.jpg",
    summary:
      "Wellness Centre in Rishikesh, Uttarakhand is envisioned as an exclusive 30-bed boutique wellness destination, spread over an area of approximately 2,500 sq. m. The project is located in the tranquil foothills of the Himalayas and offers panoramic views of the Ganges River, creating a serene environment for healing, relaxation, and rejuvenation.",
    highlights: [
      "Exclusive 30-bed boutique wellness facility",
      "Total built-up area of approximately 2,500 sq. m.",
      "Located in the serene foothills of the Himalayas",
      "Panoramic views overlooking the Ganges River",
      "Contemporary architectural language blended with nature",
      "Signature curved glass façade with stone-clad volumes",
      "Well-defined arrival sequence with dedicated drop-off zone",
      "Design focused on calmness, privacy, and wellness experience",
    ],
    scope: [
      "Architectural concept design",
      "Master planning and site zoning",
      "Space planning and functional layouts",
      "Façade and elevation design",
      "Interior planning coordination",
      "Material selection and detailing",
      "Design development and construction documentation",
    ],
  },
  {
    slug: "luxury-villa-south-delhi",
    title: "Luxury Residential Villa",
    category: "Residential",
    location: "South Delhi",
    summary:
      "A high-end private residence designed with a focus on privacy, natural light, cross-ventilation, and timeless interiors, tailored to the lifestyle requirements of the client.",
    highlights: [
      "Privacy-oriented spatial zoning",
      "Optimized natural light and ventilation",
      "Seamless indoor–outdoor connection",
      "Premium material palette and detailing",
    ],
    scope: [
      "Architectural design",
      "Interior planning",
      "Design development drawings",
      "Client coordination",
    ],
  },
  {
    slug: "office-building-gurgaon",
    title: "Commercial Office Building",
    category: "Commercial",
    location: "Gurgaon",
    summary:
      "A contemporary commercial office building designed with efficient floor plates, modern elevations, and durable materials suitable for long-term operational efficiency.",
    highlights: [
      "Efficient and flexible floor plate design",
      "Modern façade treatment",
      "Durable and low-maintenance materials",
      "Clear circulation and service planning",
    ],
    scope: [
      "Architectural design",
      "Façade design",
      "Planning and coordination support",
    ],
  },
];





export function getProject(slug: string) {
  const clean = decodeURIComponent(String(slug || ""))
    .trim()
    .toLowerCase();

  return projects.find((p) => p.slug.trim().toLowerCase() === clean);
}


