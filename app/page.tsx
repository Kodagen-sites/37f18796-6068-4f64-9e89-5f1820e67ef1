import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomeSections from "@/components/home/HomeSections";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Lumière Salon & Spa — A full-service salon and spa, kept calm",
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.company.fullName,
  description: siteConfig.seo.description,
  url: siteConfig.seo.siteUrl,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
  },
  priceRange: "$$",
  sameAs: Object.values(siteConfig.socials),
  makesOffer: siteConfig.services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name, description: s.description },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <HomeSections />
    </main>
  );
}
