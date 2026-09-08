import Link from "next/link";
import { ArrowRight, GraduationCap, Microscope, type LucideIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const cards: { icon: LucideIcon; eyebrow: string; title: string; text: string; href: string; cta: string; points: string[] }[] = [
  {
    icon: Microscope,
    eyebrow: "Research & innovation",
    title: "Research born in Africa, to heal the world",
    text: "Our expanded Research Unit partners with universities on maternal health, non-communicable diseases and infectious disease.",
    points: ["Sickle-cell surveillance and genetic referral", "AI-supported chronic disease care (2024 award)", "Antimicrobial stewardship research"],
    href: "/research",
    cta: "Our research",
  },
  {
    icon: GraduationCap,
    eyebrow: "Education & training",
    title: "A living laboratory for tomorrow's clinicians",
    text: "We mentor students on placement and are developing the Mary Help College of Nursing and Clinical Medicine.",
    points: ["Clinical placements across every department", "Continuing professional development", "A hospital-embedded college in development"],
    href: "/education",
    cta: "Education at Mary Help",
  },
];

export function ResearchEducation() {
  return (
    <Section>
      <SectionHeader eyebrow="Beyond the bedside" title="Learning, discovering and building the future of care" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {cards.map(({ icon: Icon, eyebrow, title, text, points, href, cta }) => (
          <Link key={href} href={href} className="card-hover group flex gap-6 rounded-lg border border-line bg-white p-7 shadow-soft">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-md bg-blue text-white sm:inline-flex">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <div className="flex flex-1 flex-col">
              <p className="eyebrow">{eyebrow}</p>
              <h3 className="mt-2 text-xl leading-snug group-hover:text-blue">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{text}</p>
              <ul className="mt-3 space-y-1 text-sm text-ink/80">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-medium text-blue">
                {cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
