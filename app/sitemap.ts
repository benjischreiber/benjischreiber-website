import type { MetadataRoute } from "next";

const BASE_URL = "https://www.benjischreiber.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/conditions", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/medicolegal", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/fees", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/consulting-rooms", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/reviews", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const conditionPages = [
    "/conditions/rheumatoid-arthritis",
    "/conditions/psoriatic-arthritis",
    "/conditions/ankylosing-spondylitis",
    "/conditions/lupus",
    "/conditions/osteoporosis",
    "/conditions/gout",
    "/conditions/fibromyalgia",
    "/conditions/polymyalgia-rheumatica",
    "/conditions/giant-cell-arteritis",
    "/conditions/pulmonary-hypertension",
  ];

  return [
    ...staticPages.map(({ url, priority, changeFrequency }) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...conditionPages.map((url) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
