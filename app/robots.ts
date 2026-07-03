import type { MetadataRoute } from "next";

// Served on both domains from the single deployment. Allows full crawl and
// points to the sitemap. (Submit each domain separately in Search Console.)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://giannisroussos.dev/sitemap.xml",
  };
}
