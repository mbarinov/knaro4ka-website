import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";

export const pageMetadata = {
  "/": {
    title: "Knara Sobchak — Product Designer",
    description:
      "Product designer with 5 years of experience creating B2B and B2C digital products. Explore selected work in UX/UI, design systems, and AI-powered apps.",
  },
  "/about": {
    title: "About — Knara Sobchak, Product Designer",
    description:
      "Product designer based in Tbilisi with 5 years of experience across B2B and B2C startups, specializing in UX research, interaction design, and design systems.",
  },
  "/vocao": {
    title: "Vocao — Product Design Case Study — Knara Sobchak",
    description:
      "Designing Vocao, an AI language-learning app focused on speaking practice. A case study in conversational interfaces, lesson flows, and interaction design.",
  },
  "/cycle-aura": {
    title: "Cycle Aura — Product Design Case Study — Knara Sobchak",
    description:
      "Designing and building Cycle Aura, a cycle-tracking wellness app, from product concept and visual identity to user flows and a working product.",
  },
} as const;

export function createPageMetadata(path: keyof typeof pageMetadata): Metadata {
  const { title, description } = pageMetadata[path];
  const image = {
    url: "/og/knara-sobchak.png",
    width: 1200,
    height: 630,
    alt: "Knara Sobchak — Product Designer",
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Knara Sobchak",
      title,
      description,
      url: new URL(path, siteUrl).href,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const personId = `${siteUrl}/#person`;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Knara Sobchak",
  url: siteUrl,
  about: { "@id": personId },
};

export const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profile`,
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Person",
    "@id": personId,
    name: "Knara Sobchak",
    jobTitle: "Product Designer",
    url: siteUrl,
    sameAs: ["https://www.linkedin.com/in/knara-sobchak/"],
  },
};
