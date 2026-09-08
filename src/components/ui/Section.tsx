import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "alt" | "navy" | "blue-mist" | "blue";
  padding?: "normal" | "tight" | "loose";
}

const tones = {
  white: "bg-surface",
  alt: "bg-surface-alt",
  navy: "bg-navy text-white",
  blue: "bg-blue text-white",
  "blue-mist": "bg-blue-mist",
};

const paddings = {
  tight: "py-10 sm:py-14",
  normal: "py-14 sm:py-20",
  loose: "py-20 sm:py-28",
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
      {eyebrow && <p className={cn("eyebrow", tone === "dark" && "text-blue-bright")}>{eyebrow}</p>}
      <Heading
        className={cn(
          "mt-2 text-[1.75rem] leading-tight sm:text-3xl lg:text-[2.25rem]",
          align === "center" ? "heading-rule-center" : "heading-rule",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Heading>
      {lead && <p className={cn("mt-4 text-lg leading-relaxed", tone === "dark" ? "text-white/85" : "text-muted")}>{lead}</p>}
    </div>
  );
}
