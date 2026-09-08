import type { Metadata } from "next";
import { site } from "@/content/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, path, image, noIndex }: BuildMetadataOptions): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = path === "/" ? `${site.name} | Thika, Kenya` : `${title} | ${site.shortName}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_KE",
      type: "website",
      ...(image ? { images: [{ url: image, width: 1800, height: 1200, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
