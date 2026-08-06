export type Product = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  benefits: string[];
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  sizes: string[];
  material: string;
  color: string;
  features: string[];
  shadePercentage?: string;
  faqs: { question: string; answer: string }[];
};

export const products: Product[] = [
  {
    slug: "/6-gauge",
    name: "Shade Net",
    tagline: "Precision Light Control for Optimal Growth",
    shortDescription:
      "Premium UV-stabilized shade nets for nurseries, floriculture, and crop protection.",
    description:
      "Our signature shade nets are engineered with virgin HDPE monofilament yarn, offering superior light diffusion and UV protection. Available in multiple shade percentages from 30% to 90%, these nets create the ideal microclimate for sensitive crops, nurseries, and polyhouse applications.",
    heroImage: "/agri.png",
    gallery: ["/tape-net.jpg", "/agri2.jpg", "/agri3.jpg"],
    benefits: [
      "Reduces heat stress on crops",
      "Uniform light diffusion",
      "UV stabilized for 5+ years",
      "Breathable mesh structure",
    ],
    applications: [
      "Nurseries & sapling protection",
      "Floriculture & ornamental plants",
      "Vegetable farming",
      "Polyhouse & shade house",
      "Tea & coffee plantations",
    ],
    specifications: [
      { label: "Material", value: "Virgin HDPE Monofilament" },
      { label: "Shade Percentage", value: "30% – 90%" },
      { label: "Width", value: "1m – 6m (Custom available)" },
      { label: "Weight", value: "80 – 200 GSM" },
      { label: "UV Stabilization", value: "800 – 1200 KLY" },
      { label: "Life Span", value: "5 – 8 Years" },
    ],
    sizes: ["2m × 50m", "3m × 50m", "4m × 50m", "6m × 50m", "Custom"],
    material: "Virgin HDPE",
    color: "Green, Black, White, Dual Color",
    features: [
      "Knitted lock-stitch construction",
      "Reinforced edges",
      "Anti-rot & anti-fungal",
      "Easy installation eyelets",
    ],
    shadePercentage: "30% – 90%",
    faqs: [
      {
        question: "What shade percentage should I choose?",
        answer:
          "For nurseries, 50–75% is ideal. For vegetables, 30–50%. For sensitive floriculture, 75–90%. Our team can recommend the best option for your crop.",
      },
      {
        question: "How long does shade net last?",
        answer:
          "With proper installation and maintenance, our UV-stabilized nets last 5–8 years depending on shade percentage and exposure.",
      },
    ],
  },

  {
    slug: "/9-gauge",
    name: "Greenhouse Shade Net",
    tagline: "Climate-Controlled Growing Environments",
    shortDescription:
      "Specialized nets for greenhouse and polyhouse applications.",
    description:
      "Designed specifically for controlled environment agriculture, our greenhouse nets optimize light transmission, humidity control, and temperature regulation for year-round crop production.",
    heroImage: "/products/greenhouse-net1.jpg",
    gallery: [
      "/products/greenhouse-net1.jpg",
      "/products/greenhouse-net2.jpg",
      "/products/greenhouse-net3.jpg",
    ],
    benefits: [
      "Optimized light transmission",
      "Humidity regulation",
      "Pest barrier integration",
      "Extended growing seasons",
    ],
    applications: [
      "Commercial greenhouses",
      "Polyhouse farming",
      "Hydroponic systems",
      "Seed production",
      "Research facilities",
    ],
    specifications: [
      { label: "Material", value: "UV HDPE / Aluminet" },
      { label: "Shade Percentage", value: "30% – 70%" },
      { label: "Width", value: "4m – 8m" },
      { label: "Reflectivity", value: "High (Aluminet option)" },
      { label: "Diffusion", value: "Uniform" },
      { label: "Life Span", value: "5 – 7 Years" },
    ],
    sizes: ["4m × 100m", "6m × 100m", "8m × 100m", "Custom"],
    material: "UV HDPE / Aluminet",
    color: "White, Aluminet Silver, Green",
    features: [
      "Climate-optimized weave",
      "Anti-condensation coating",
      "Compatible with ventilation",
      "Professional grade",
    ],
    shadePercentage: "30% – 70%",
    faqs: [
      {
        question: "What is Aluminet?",
        answer:
          "Aluminet is a reflective shade material that diffuses light and reduces heat buildup — ideal for hot climate greenhouses.",
      },
    ],
  },
  {
    slug: "/6-gauge",
    name: "Safety Shade Net",
    tagline: "Industrial-Grade Fall Protection",
    shortDescription:
      "Heavy-duty safety nets for construction and industrial applications.",
    description:
      "Engineered to meet safety standards, our safety nets provide reliable fall protection for construction sites, scaffolding, and industrial environments. High tensile strength with certified load capacity.",
    heroImage: "/safety.jpg",
    gallery: ["/safety.jpg", "/safety2.jpg", "/safety3.jpg"],
    benefits: [
      "Certified load capacity",
      "High visibility options",
      "Weather resistant",
      "Quick deployment",
    ],
    applications: [
      "Construction scaffolding",
      "Building facades",
      "Bridge work",
      "Stadium & arena projects",
      "Industrial facilities",
    ],
    specifications: [
      { label: "Material", value: "HDPE / Nylon Knotted" },
      { label: "Mesh Size", value: "100mm – 150mm" },
      { label: "Breaking Strength", value: "≥ 30 kN" },
      { label: "Width", value: "2m – 6m" },
      { label: "Standards", value: "IS / EN compliant" },
      { label: "Life Span", value: "5+ Years" },
    ],
    sizes: ["2m × 10m", "3m × 10m", "4m × 10m", "6m × 10m", "Custom"],
    material: "HDPE / Nylon Knotted",
    color: "Green, Orange, Blue",
    features: [
      "Knotted mesh construction",
      "Border rope reinforcement",
      "Energy absorption design",
      "UV treated",
    ],
    faqs: [
      {
        question: "Are your safety nets certified?",
        answer:
          "Yes, our safety nets are manufactured to meet relevant Indian and international safety standards. Certificates available on request.",
      },
    ],
  },

  {
    slug: "6-gauge",
    name: "HDPE Shade Net",
    tagline: "Versatile High-Density Polyethylene Mesh",
    shortDescription:
      "Multi-purpose HDPE nets for diverse agricultural and industrial uses.",
    description:
      "Our general-purpose HDPE nets offer versatile protection for fencing, packaging, aquaculture, and general agricultural applications. Available in various mesh sizes and GSM weights.",
    heroImage: "/products/nursery-net3.jpg",
    gallery: [
      "/products/nursery-net3.jpg",
      "/products/nursery-net2.jpg",
      "/products/nursery-net1.jpg",
    ],
    benefits: [
      "Multi-purpose versatility",
      "Cost-effective solution",
      "High chemical resistance",
      "Easy to cut and install",
    ],
    applications: [
      "Aquaculture & fish farming",
      "Poultry fencing",
      "Packaging & wrapping",
      "Erosion control",
      "General farm fencing",
    ],
    specifications: [
      { label: "Material", value: "100% Virgin HDPE" },
      { label: "Mesh Size", value: "5mm – 50mm" },
      { label: "Width", value: "1m – 6m" },
      { label: "Weight", value: "50 – 300 GSM" },
      { label: "Color", value: "Green, Black, White, Custom" },
      { label: "Life Span", value: "4 – 7 Years" },
    ],
    sizes: ["1m × 50m", "2m × 50m", "3m × 50m", "6m × 50m", "Custom"],
    material: "100% Virgin HDPE",
    color: "Green, Black, White, Custom",
    features: [
      "Knitted or woven options",
      "Chemical resistant",
      "Non-toxic & food safe grades",
      "Bulk order discounts",
    ],
    faqs: [
      {
        question: "Is HDPE net safe for aquaculture?",
        answer:
          "Yes, our food-grade HDPE nets are non-toxic and safe for fish farming, pond covers, and aquaculture applications.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}
