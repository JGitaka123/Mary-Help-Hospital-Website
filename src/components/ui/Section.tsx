import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "alt" | "navy" | "blue-mist";
  padding?: "normal" | "tight" | "loose";
}

const tones = {
  white: "bg-surface",
  alt: "bg-surface-alt",
  navy: "bg-navy text-white",
  "blue-mist": "bg-blue-mist",
};

const paddings = {
  tight: "py-12 sm:py-16",
  normal: "py-16 sm:py-24",
  loose: "py-20 sm:py-32",
};

export function Section({ id, children, className, tone = "white", padding = "normal" }: SectionProps) {
  return (
    <section id={id} className={cn(tones[tone], paddings[padding], className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeader({ eyebrow, title, lead, align = "left", tone = "light", className, as = "h2" }: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", tone === "dark" && "text-gold", align === "center" && "justify-center")}>{eyebrow}</p>
      )}
      <Heading
        className={cn(
          "mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p className={cn("mt-4 text-lg leading-relaxed", tone === "dark" ? "text-white/80" : "text-muted")}>{lead}</p>
      )}
    </div>
  );
}
