import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { news } from "@/content/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/maternity", priority: 0.9, freq: "monthly" },
    { path: "/emergency", priority: 0.9, freq: "yearly" },
    { path: "/contact", priority: 0.9, freq: "monthly" },
    { path: "/specialist-clinics", priority: 0.8, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/about/leadership", priority: 0.5, freq: "yearly" },
    { path: "/patients", priority: 0.7, freq: "monthly" },
    { path: "/patients/insurance", priority: 0.7, freq: "monthly" },
    { path: "/patients/faq", priority: 0.6, freq: "monthly" },
    { path: "/research", priority: 0.5, freq: "monthly" },
    { path: "/education", priority: 0.5, freq: "monthly" },
    { path: "/news", priority: 0.6, freq: "weekly" },
    { path: "/careers", priority: 0.6, freq: "weekly" },
    { path: "/support-us", priority: 0.5, freq: "monthly" },
  ];

  return [
    ...staticRoutes.map((r) => ({ url: `${base}${r.path}`, lastModified: now, changeFrequency: r.freq, priority: r.priority })),
    ...services
      .filter((s) => s.slug !== "maternity")
      .map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...news.map((n) => ({ url: `${base}/news/${n.slug}`, lastModified: new Date(n.date), changeFrequency: "yearly" as const, priority: 0.4 })),
  ];
}
