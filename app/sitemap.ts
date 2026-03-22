import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this base URL when you have a domain
  const baseUrl = "https://hiveandharvesthoney.com.au";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
