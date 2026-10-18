import React from "react";
import { getSiteConfig } from "@/lib/content";

export function OrganizationJsonLd() {
  const site = getSiteConfig();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.name,
    legalName: "ARCTUREAL - Sociedade Gestora de Arquitetura, Lda.",
    url: site.brand.siteUrl,
    logo: `${site.brand.siteUrl}/icon.svg`,
    description: site.brand.tagline,
    email: site.contacts.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contacts.city,
      addressCountry: "PT"
    },
    sameAs: site.socials.map((s) => s.url)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbsJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
