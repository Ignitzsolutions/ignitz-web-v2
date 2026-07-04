import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: new URL("/brand/ignitz-logo.png", site.url).toString(),
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "4th Floor, Plot No-12, Survey No 1009, KPHB Phase 6, Kukatpally",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500085",
      addressCountry: "IN",
    },
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    url: new URL(path, site.url).toString(),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
