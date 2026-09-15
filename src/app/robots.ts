import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Generated from content modules at build time, so it can be prerendered; the
// static export (STATIC_EXPORT=1) requires this to be explicit.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
