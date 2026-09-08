import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  compact?: boolean;
}

export function PageHero({ eyebrow, title, lead, crumbs, image, imageAlt, children, compact }: PageHeroProps) {
  return (
    <header className="relative isolate overflow-hidden bg-navy text-white">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" aria-hidden="true" />
        </>
      )}
      {!image && <div className="hero-grid absolute inset-0" aria-hidden="true" />}
      <div className={cn("container-x relative", compact ? "py-12 sm:py-16" : "py-16 sm:py-24")}>
        <Breadcrumbs items={crumbs} tone="dark" />
        <div className="mt-8 max-w-3xl">
          {eyebrow && <p className="eyebrow text-gold">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </header>
  );
}
