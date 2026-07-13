import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/get-site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().replace(/\/$/, "");

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/anamnese`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
