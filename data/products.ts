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
    slug: "shade-net",
    name: "Shade Net",
    tagline: "Precision Light Control for Optimal Growth",
    shortDescription:
      "Premium UV-stabilized shade nets for nurseries, floriculture, and crop protection.",
    description:
      "Our signature shade nets are engineered with virgin HDPE monofilament yarn, offering superior light diffusion and UV protection. Available in multiple shade percentages from 30% to 90%, these nets create the ideal microclimate for sensitive crops, nurseries, and polyhouse applications.",
    heroImage:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=85",
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
    slug: "tape-net",
    name: "Tape Net",
    tagline: "Superior Strength with Tape Yarn Technology",
    shortDescription:
      "Flat tape yarn nets offering enhanced durability and wider coverage.",
    description:
      "Tape nets utilize flat HDPE tape yarn for increased tensile strength and broader shade coverage. Ideal for large-scale agricultural applications requiring robust protection against sun, wind, and hail.",
    heroImage: "/tape-net.jpg",
    gallery: ["/tape-net.jpg", "/agri2.jpg", "/agri3.jpg"],
    benefits: [
      "Higher tensile strength",
      "Better wind resistance",
      "Cost-effective for large areas",
      "Excellent hail protection",
    ],
    applications: [
      "Large farm shade structures",
      "Parking shade",
      "Cattle & poultry sheds",
      "Construction site covers",
    ],
    specifications: [
      { label: "Material", value: "HDPE Flat Tape Yarn" },
      { label: "Shade Percentage", value: "50% – 95%" },
      { label: "Width", value: "2m – 8m" },
      { label: "Weight", value: "120 – 280 GSM" },
      { label: "Tensile Strength", value: "High" },
      { label: "Life Span", value: "6 – 8 Years" },
    ],
    sizes: ["3m × 50m", "4m × 50m", "6m × 50m", "8m × 50m", "Custom"],
    material: "HDPE Tape Yarn",
    color: "Green, Black, Blue",
    features: [
      "Flat tape construction",
      "Heavy-duty edges",
      "Wind load resistant",
      "Multi-purpose application",
    ],
    shadePercentage: "50% – 95%",
    faqs: [
      {
        question: "What's the difference between shade net and tape net?",
        answer:
          "Tape nets use flat yarn for higher strength and are better for large structures. Shade nets use round monofilament for finer light diffusion.",
      },
    ],
  },
  {
    slug: "anti-bird-net",
    name: "Anti Bird Net",
    tagline: "Protect Your Harvest from Avian Damage",
    shortDescription:
      "Fine mesh nets designed to keep birds away without harming them.",
    description:
      "Our anti-bird nets feature a fine mesh structure that prevents birds from accessing crops while maintaining airflow and light penetration. Humane, effective, and built to last through multiple seasons.",
    heroImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      "https://images.unsplash.com/photo-1464226187744-643ea711933c?w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    ],
    benefits: [
      "Humane bird deterrent",
      "Maintains crop airflow",
      "Reusable for multiple seasons",
      "Easy to drape over structures",
    ],
    applications: [
      "Fruit orchards",
      "Grape vineyards",
      "Vegetable gardens",
      "Fish ponds",
      "Building facades",
    ],
    specifications: [
      { label: "Material", value: "HDPE / Nylon" },
      { label: "Mesh Size", value: "15mm – 25mm" },
      { label: "Width", value: "2m – 10m" },
      { label: "Weight", value: "40 – 80 GSM" },
      { label: "Color", value: "Black, Green, White" },
      { label: "Life Span", value: "3 – 5 Years" },
    ],
    sizes: ["2m × 50m", "4m × 50m", "6m × 50m", "10m × 50m", "Custom"],
    material: "HDPE / Nylon",
    color: "Black, Green, White",
    features: [
      "Fine mesh aperture",
      "Lightweight & flexible",
      "UV resistant",
      "Knotless construction",
    ],
    faqs: [
      {
        question: "Will anti-bird net block pollinators?",
        answer:
          "Standard mesh sizes allow bees and smaller pollinators through while deterring larger birds. We can recommend mesh size based on your crop.",
      },
    ],
  },
  {
    slug: "greenhouse-net",
    name: "Greenhouse Net",
    tagline: "Climate-Controlled Growing Environments",
    shortDescription:
      "Specialized nets for greenhouse and polyhouse applications.",
    description:
      "Designed specifically for controlled environment agriculture, our greenhouse nets optimize light transmission, humidity control, and temperature regulation for year-round crop production.",
    heroImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      "https://images.unsplash.com/photo-1574943320215-4d4bbb5090ea?w=800&q=80",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
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
    slug: "safety-net",
    name: "Safety Net",
    tagline: "Industrial-Grade Fall Protection",
    shortDescription:
      "Heavy-duty safety nets for construction and industrial applications.",
    description:
      "Engineered to meet safety standards, our safety nets provide reliable fall protection for construction sites, scaffolding, and industrial environments. High tensile strength with certified load capacity.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d7?w=800&q=80",
    ],
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
    slug: "coconut-support-net",
    name: "Coconut Support Net",
    tagline: "Secure Climbing Support for Coconut Palms",
    shortDescription:
      "Specialized support nets for coconut tree climbing and harvesting safety.",
    description:
      "Purpose-built nets for coconut plantations providing secure footholds and support during climbing and harvesting operations. Durable, weather-resistant, and designed for tropical conditions.",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1464226187744-643ea711933c?w=800&q=80",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    ],
    benefits: [
      "Secure climbing support",
      "Reduces harvest accidents",
      "Tropical climate rated",
      "Easy installation on trunks",
    ],
    applications: [
      "Coconut plantations",
      "Palm oil estates",
      "Areaca nut farms",
      "Tree maintenance",
    ],
    specifications: [
      { label: "Material", value: "HDPE Braided Rope Net" },
      { label: "Mesh Size", value: "150mm × 150mm" },
      { label: "Load Capacity", value: "150 kg+ per point" },
      { label: "Width", value: "1m – 2m rolls" },
      { label: "UV Treatment", value: "Yes" },
      { label: "Life Span", value: "4 – 6 Years" },
    ],
    sizes: ["1m × 50m", "2m × 50m", "Custom lengths"],
    material: "HDPE Braided Rope",
    color: "Green, Natural",
    features: [
      "Braided rope construction",
      "High grip surface",
      "Salt-water resistant",
      "Custom trunk sizing",
    ],
    faqs: [
      {
        question: "How is the net installed on coconut trees?",
        answer:
          "Nets are wrapped around the trunk at climbing height and secured with UV-resistant ties. Our team provides installation guidance.",
      },
    ],
  },
  {
    slug: "insect-net",
    name: "Insect Net",
    tagline: "Barrier Protection Against Crop Pests",
    shortDescription:
      "Ultra-fine mesh nets blocking insects while allowing air and light flow.",
    description:
      "Our insect nets create a physical barrier against whiteflies, aphids, thrips, and other crop pests. Fine aperture design maintains ventilation and pollination while eliminating chemical dependency.",
    heroImage:
      "https://images.unsplash.com/photo-1464226187744-643ea711933c?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1464226187744-643ea711933c?w=800&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      "https://images.unsplash.com/photo-1574943320215-4d4bbb5090ea?w=800&q=80",
    ],
    benefits: [
      "Chemical-free pest control",
      "Maintains airflow",
      "Reduces crop loss",
      "Reusable season after season",
    ],
    applications: [
      "Vegetable farming",
      "Organic agriculture",
      "Seed production",
      "Research plots",
      "Greenhouse sidewalls",
    ],
    specifications: [
      { label: "Material", value: "HDPE Monofilament" },
      { label: "Mesh Size", value: "0.8mm – 1.6mm aperture" },
      { label: "Width", value: "2m – 5m" },
      { label: "Weight", value: "60 – 120 GSM" },
      { label: "Light Transmission", value: "85%+" },
      { label: "Life Span", value: "3 – 5 Years" },
    ],
    sizes: ["2m × 50m", "3m × 50m", "4m × 50m", "5m × 50m", "Custom"],
    material: "HDPE Monofilament",
    color: "White, Grey, Green",
    features: [
      "Ultra-fine mesh",
      "Anti-UV treated",
      "Anti-static option",
      "Easy repair patches",
    ],
    faqs: [
      {
        question: "What mesh size blocks whiteflies?",
        answer:
          "A 0.8mm aperture effectively blocks whiteflies, aphids, and thrips while allowing beneficial insects and airflow.",
      },
    ],
  },
  {
    slug: "hdpe-net",
    name: "HDPE Net",
    tagline: "Versatile High-Density Polyethylene Mesh",
    shortDescription:
      "Multi-purpose HDPE nets for diverse agricultural and industrial uses.",
    description:
      "Our general-purpose HDPE nets offer versatile protection for fencing, packaging, aquaculture, and general agricultural applications. Available in various mesh sizes and GSM weights.",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d7?w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
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
