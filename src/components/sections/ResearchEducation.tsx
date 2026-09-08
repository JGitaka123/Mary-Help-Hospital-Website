import Link from "next/link";
import { ArrowRight, GraduationCap, Microscope } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const cards = [
  {
    icon: Microscope,
    eyebrow: "Research & innovation",
    title: "Research born in Africa, to heal the world",
    text: "Our expanded Research Unit partners with universities on maternal health, non-communicable diseases and infectious disease, including grant-supported work on AI-assisted decision support.",
    href: "/research",
    cta: "Our research",
  },
  {
    icon: GraduationCap,
    eyebrow: "Education & training",
    title: "A living laboratory for tomorrow's clinicians",
    text: "We mentor students on clinical placement and are developing the Mary Help College of Nursing and Clinical Medicine, a hospital-embedded college rooted in our values.",
    href: "/education",
    cta: "Education at Mary Help",
  },
];

export function ResearchEducation() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Beyond the bedside"
        title="Learning, discovering and building the future of care"
        align="center"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {cards.map(({ icon: Icon, eyebrow, title, text, href, cta }) => (
          <Link
            key={href}
            href={href}
            className="card-hover group relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-soft sm:p-10"
          >
            <div className="hero-grid absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
              <h3 className="mt-2 text-2xl text-white sm:text-3xl">{title}</h3>
              <p className="mt-3 max-w-lg text-white/75">{text}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
                {cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
