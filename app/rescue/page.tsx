import type { Metadata } from "next";
import RescueContent from "./RescueContent";

const SITE = "https://giannisroussos.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Website Rescue — Your Site Fixed in 48 Hours, Flat Fee",
  description:
    "Broken, slow, or embarrassing website? I triage it, fix what's critical, and hand it back working in 48 hours — one flat fee, no hourly billing. Free audit, no obligation. Built by an ICU-nurse-turned-engineer: triage, fix, verify.",
  keywords: [
    "website rescue",
    "fix my website",
    "website repair",
    "broken website fix",
    "website speed optimization",
    "mobile responsive fix",
    "Next.js developer",
    "React developer",
    "Ruby on Rails developer",
    "Rails web development",
    "freelance web developer",
    "flat fee web development",
    "48 hour website fix",
  ],
  alternates: {
    canonical: "/rescue",
    languages: {
      en: `${SITE}/rescue`,
      el: `${SITE}/rescue-gr`,
      "x-default": `${SITE}/rescue`,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE}/rescue`,
    siteName: "Giannis Roussos — Website Rescue",
    title: "Your Website. Fixed in 48 Hours. Flat Fee.",
    description:
      "Triage, fix, verify — I fix broken, slow, or dated websites in 48 hours for a flat fee. Free audit, no obligation.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Rescue — Fixed in 48 Hours, Flat Fee",
    description:
      "I triage, fix, and redeploy broken or slow websites in 48 hours. Free audit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Service structured data — helps search engines surface the offering with rich detail.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Rescue",
  serviceType: "Website repair, rebuild, and AI integration",
  description:
    "Flat-fee website rescue: broken, slow, or dated sites triaged, fixed, and redeployed in 48 hours.",
  provider: {
    "@type": "Person",
    name: "Giannis Roussos",
    url: "https://giannisroussos.dev",
  },
  areaServed: "Worldwide",
  url: `${SITE}/rescue`,
  offers: [
    {
      "@type": "Offer",
      name: "48-Hour Rescue",
      price: "1200",
      priceCurrency: "USD",
      description: "Triage and fix what's critical, redeployed in 48 hours.",
    },
    {
      "@type": "Offer",
      name: "The Rebuild",
      price: "3500",
      priceCurrency: "USD",
      description: "A clean, fast, modern rebuild in Next.js / React or Ruby on Rails.",
    },
    {
      "@type": "Offer",
      name: "AI Upgrade",
      price: "1800",
      priceCurrency: "USD",
      description: "Add a resilient AI layer — chat, content, or workflow automation.",
    },
  ],
};

export default function RescuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <RescueContent />
    </>
  );
}
