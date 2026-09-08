import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const cards = [
  {
    eyebrow: "Research & innovation",
    title: "Research born in Africa, to heal the world",
    text: "Our expanded Research Unit partners with universities on maternal health, non-communicable diseases and infectious disease, including grant-supported work on AI-assisted decision support.",
    href: "/research",
    cta: "Our research",
    image: "/images/laboratory-staff.jpg",
    alt: "Laboratory technologists at work",
  },
  {
    eyebrow: "Education & training",
    title: "A living laboratory for tomorrow's clinicians",
    text: "We mentor students on clinical placement and are developing the Mary Help College of Nursing and Clinical Medicine, a hospital-embedded college rooted in our values.",
    href: "/education",
    cta: "Education at Mary Help",
    image: "/images/theatre.jpg",
    alt: "A theatre nurse preparing the operating theatre",
  },
];

export function ResearchEducation() {
  return (
    <Section>
      <SectionHeader eyebrow="Beyond the bedside" title="Learning, discovering and building the future of care" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="card-hover group grid overflow-hidden rounded-lg border border-line bg-white shadow-soft sm:grid-cols-[1fr_1.2fr]">
            <div className="relative aspect-[4/3] sm:aspect-auto">
              <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col p-6">
              <p className="eyebrow">{c.eyebrow}</p>
              <h3 className="mt-2 text-xl leading-snug group-hover:text-blue">{c.title}</h3>
              <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{c.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-medium text-blue">
                {c.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
