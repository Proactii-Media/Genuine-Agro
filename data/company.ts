export const company = {
  name: "Genuine Agro Shade Net",
  shortName: "Genuine Agro",
  tagline: "Shaping Growth Under Shade",
  phone: "+91 98765 43210",
  email: "enquiry@genuineagroshade.com",
  owner: "Genuine Agro",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210",
  address: {
    line1: "PLOT NO 4301 B",
    line2: "Opposite Saloni Paper Machine Pvt Ltd",
    city: "Vapi",
    state: "Gujarat",
    pincode: "396193",
    country: "India",
    full: "PLOT NO 4301 B, Opposite Saloni Paper Machine Pvt Ltd, Vapi, Gujarat, 396193, India",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  stats: {
    years: 15,
    projects: 2500,
    customers: 1800,
    support: "24/7",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.905!3d20.371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIyJzE1LjYiTiA3MsKwNTQnMTguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;

export const whyChooseUs = [
  {
    title: "UV Protection",
    description:
      "Advanced UV-stabilized polymers shield crops from harmful radiation while optimizing light diffusion.",
    icon: "Sun" as const,
  },
  {
    title: "Premium Quality",
    description:
      "Manufactured with virgin HDPE materials meeting international agricultural standards.",
    icon: "Award" as const,
  },
  {
    title: "Weather Resistant",
    description:
      "Engineered to withstand extreme heat, rain, and wind across diverse Indian climates.",
    icon: "CloudRain" as const,
  },
  {
    title: "Long Life",
    description:
      "Built for durability with 5–8 year lifespan depending on application and shade percentage.",
    icon: "Clock" as const,
  },
  {
    title: "Custom Sizes",
    description:
      "Tailored dimensions and shade percentages to match your exact farming requirements.",
    icon: "Ruler" as const,
  },
  {
    title: "Fast Delivery",
    description:
      "Pan-India logistics network ensuring timely delivery to farms and nurseries nationwide.",
    icon: "Truck" as const,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Manufacturing",
    description:
      "State-of-the-art extrusion and weaving lines produce precision mesh with consistent quality.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    step: "02",
    title: "Quality Check",
    description:
      "Every batch undergoes rigorous tensile strength, UV stability, and dimensional testing.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d7?w=800&q=80",
  },
  {
    step: "03",
    title: "Packaging",
    description:
      "Premium roll packaging with protective wrapping ensures damage-free transit.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Nationwide dispatch with tracking — from our Vapi facility to your farm gate.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  },
];

export const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Nursery Owner, Gujarat",
    quote:
      "The shade net quality is exceptional. Our nursery productivity increased by 40% after switching to Genuine Agro nets.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Agricultural Consultant, Maharashtra",
    quote:
      "I recommend Genuine Agro to all my clients. Their UV-stabilized nets consistently outperform competitors.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Greenhouse Farmer, Rajasthan",
    quote:
      "Custom sizing and fast delivery made our greenhouse project seamless. Premium quality at competitive rates.",
    rating: 5,
  },
];

export const aboutTimeline = [
  {
    year: "2010",
    title: "Foundation",
    description:
      "Genuine Agro Shade Net established in Vapi, Gujarat with a vision to revolutionize agricultural protection.",
  },
  {
    year: "2014",
    title: "Expansion",
    description:
      "Expanded manufacturing capacity and introduced UV-stabilized shade net product line.",
  },
  {
    year: "2018",
    title: "Pan-India Reach",
    description:
      "Established distribution network across 15 states serving nurseries, farms, and greenhouse projects.",
  },
  {
    year: "2022",
    title: "Innovation",
    description:
      "Launched anti-bird, insect, and specialty nets with advanced polymer technology.",
  },
  {
    year: "2026",
    title: "Industry Leader",
    description:
      "Serving 1800+ customers with premium agricultural mesh solutions nationwide.",
  },
];
