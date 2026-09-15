import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Generated from content modules at build time, so it can be prerendered; the
// static export (STATIC_EXPORT=1) requires this to be explicit.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b6fc2",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }, { src: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  };
}
