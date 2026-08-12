import type { Metadata } from "next";
import ClinicsContent from "./ClinicsContent";

const SITE = "https://giannisroussos.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Practice Website Check — Tracking Leaks, Booking Drop-Off, Form Safety",
  description:
    "Free check for independent practices and clinics: what your website transmits to third parties, where patients drop out of your booking flow, and how your forms handle health information. Written report in two business days, no sales call. By an ICU nurse turned software engineer.",
  keywords: [
    "medical practice website",
    "clinic website audit",
    "healthcare website tracking pixels",
    "patient data leak website",
    "medical website compliance check",
    "practice website booking flow",
    "clinic website developer",
    "healthcare web developer",
    "patient acquisition website",
  ],
  alternates: { canonical: "/clinics" },
  openGraph: {
    type: "website",
    url: `${SITE}/clinics`,
    siteName: "Giannis Roussos — Practice Website Check",
    title: "Is your practice website sending patient data to Facebook?",
    description:
      "Free check: third-party tracking, booking drop-off, and form safety. Written report in two business days, no sales call.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Website Check — Free, No Sales Call",
    description:
      "What your site transmits, where patients drop off, how your forms handle health information. Report in two business days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Structured data. The free check is modelled as its own $0 offer so it can surface
// independently of the paid tiers, which is the thing prospects actually search for.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Practice Website Check",
  serviceType: "Healthcare website technical assessment and repair",
  description:
    "Technical assessment of independent practice websites: third-party tracking scripts on pages handling health information, mobile booking drop-off, and contact form handling. Followed by flat-fee repair.",
  provider: {
    "@type": "Person",
    name: "Giannis Roussos",
    url: "https://giannisroussos.dev",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Independent medical, dental, and wellness practices",
  },
  areaServed: "US",
  url: `${SITE}/clinics`,
  offers: [
    {
      "@type": "Offer",
      name: "Free Website Check",
      price: "0",
      priceCurrency: "USD",
      description:
        "Written report covering third-party scripts, booking flow drop-off, and form handling. Delivered in two business days.",
    },
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
      name: "Keep It Working — Website Maintenance",
      priceCurrency: "USD",
      description:
        "Ongoing maintenance: updates, daily backups, security and uptime monitoring, two content edits a month, and a monthly report.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "150",
        priceCurrency: "USD",
        unitText: "MONTH",
        billingIncrement: 1,
      },
    },
  ],
};

export default function ClinicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ClinicsContent />
    </>
  );
}
