import type { MetadataRoute } from "next";

const DEV = "https://giannisroussos.dev"; // engineering portfolio
const COM = "https://giannisroussos.com"; // website-rescue business

// Static timestamp for lastModified; bump when content changes materially.
const LAST_MODIFIED = new Date("2026-07-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Portfolio (.dev)
    { url: `${DEV}/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    { url: `${DEV}/about`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${DEV}/projects/aegis`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    // Business (.com)
    { url: `${COM}/rescue`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${COM}/rescue-gr`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
  ];
}
