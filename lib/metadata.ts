import type { Metadata } from "next";
import { company } from "@/data/company";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://genuineagroshade.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Premium agricultural shade nets and mesh solutions. UV-stabilized shade nets, anti-bird nets, greenhouse nets, and more. Manufactured in Vapi, Gujarat.",
  keywords: [
    "shade net",
    "agricultural shade net",
    "HDPE net",
    "greenhouse net",
    "anti bird net",
    "insect net",
    "Vapi Gujarat",
    "Genuine Agro",
  ],
  authors: [{ name: company.owner }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description:
      "Premium agricultural shade nets and mesh solutions for modern farming.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description:
      "Premium agricultural shade nets and mesh solutions for modern farming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createProductMetadata(product: {
  name: string;
  shortDescription: string;
  heroImage: string;
  slug: string;
}): Metadata {
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${company.name}`,
      description: product.shortDescription,
      images: [{ url: product.heroImage, alt: product.name }],
      url: `/products/${product.slug}`,
    },
    twitter: {
      title: `${product.name} | ${company.name}`,
      description: product.shortDescription,
      images: [product.heroImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.tagline,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "sales",
    },
  };
}

export function productSchema(product: {
  name: string;
  shortDescription: string;
  heroImage: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.heroImage,
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.name,
    },
    url: `${siteUrl}/products/${product.slug}`,
  };
}
