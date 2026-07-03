import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageShell from "./components/PageShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://giannisroussos.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Giannis Roussos — Full-Stack Software Engineer (AI, React, TypeScript)",
    template: "%s — Giannis Roussos",
  },
  description:
    "Full-stack software engineer in North Carolina (US citizen) specializing in AI orchestration, resilient systems, and healthcare interoperability. I build production AI with React, TypeScript, Next.js, and Ruby on Rails, and evaluate frontier models for leading AI labs. Open to new opportunities.",
  keywords: [
    "Giannis Roussos",
    "Full-Stack Software Engineer",
    "AI Engineer",
    "Software Engineer",
    "React developer",
    "TypeScript",
    "Next.js",
    "Ruby on Rails",
    "AI orchestration",
    "LLM",
    "frontier model evaluation",
    "FHIR",
    "healthcare interoperability",
    "North Carolina",
    "open to work",
  ],
  authors: [{ name: "Giannis Roussos", url: SITE }],
  creator: "Giannis Roussos",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Giannis Roussos",
    title: "Giannis Roussos — Full-Stack Software Engineer (AI, React, TypeScript)",
    description:
      "Full-stack engineer specializing in AI orchestration and resilient systems. Building production AI with React/TypeScript/Next.js and evaluating frontier models for leading AI labs. Open to opportunities.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giannis Roussos — Full-Stack Software Engineer",
    description:
      "AI orchestration & resilient systems. React/TypeScript/Next.js. Evaluating frontier models for leading AI labs. Open to opportunities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/transparent-logo.svg",
  },
};

// Person structured data — lets Google and recruiter tools index role, skills, and profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Giannis Roussos",
  url: SITE,
  image: `${SITE}/ME.jpg`,
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-stack software engineer specializing in AI orchestration, resilient systems, and healthcare interoperability.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "North Carolina",
    addressCountry: "US",
  },
  knowsAbout: [
    "Full-Stack Software Engineering",
    "AI Orchestration",
    "Large Language Models",
    "Frontier Model Evaluation",
    "React",
    "TypeScript",
    "Next.js",
    "Ruby on Rails",
    "Python",
    "FHIR / HL7 Healthcare Interoperability",
  ],
  sameAs: [
    "https://github.com/iroussos25",
    "https://www.linkedin.com/in/giannisr",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
