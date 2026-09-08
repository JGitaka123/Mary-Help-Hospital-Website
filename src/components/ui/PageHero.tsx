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
  if (!image) {
    return (
      <header className="border-b border-line bg-blue-mist">
        <div className={cn("container-x", compact ? "py-10 sm:py-12" : "py-12 sm:py-16")}>
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="heading-rule mt-2 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h1>
            {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>}
            {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative isolate overflow-hidden bg-navy text-white">
      <Image src={image} alt={imageAlt ?? ""} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-terracotta" aria-hidden="true" />
      <div className={cn("container-x relative", compact ? "py-12 sm:py-16" : "py-16 sm:py-24")}>
        <Breadcrumbs items={crumbs} tone="dark" />
        <div className="mt-8 max-w-3xl">
          {eyebrow && <p className="eyebrow text-blue-bright">{eyebrow}</p>}
          <h1 className="mt-2 text-3xl leading-tight text-white sm:text-4xl lg:text-[2.9rem]">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </header>
  );
}
