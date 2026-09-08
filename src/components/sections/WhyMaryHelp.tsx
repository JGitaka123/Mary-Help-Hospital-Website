import Image from "next/image";
import { Cross, HandHeart, Sparkles, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const pillars = [
  {
    icon: Cross,
    title: "Rooted in faith and compassion",
    text: "We continue the healing ministry of Christ. Every patient is received with dignity, whatever their faith or means.",
  },
  {
    icon: HandHeart,
    title: "Affordable, transparent care",
    text: "As a not-for-profit mission hospital our charges are fair, our billing is clear and SHA cover is accepted.",
  },
  {
    icon: Users,
    title: "Experienced clinical teams",
    text: "Full-time doctors, clinical officers and midwives supported by more than twenty visiting consultants across the specialties.",
  },
  {
    icon: Sparkles,
    title: "A growing platform of care",
    text: "Two modern theatres, a renal unit, laparoscopic surgery, a high dependency unit and a new Mother and Child Centre.",
  },
];

export function WhyMaryHelp() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/team-2026.jpg"
              alt="Doctors, nurses, Sisters and administrative staff of Mary Help of the Sick Mission Hospital gathered on the hospital grounds"
              width={1280}
              height={590}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <blockquote className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-navy p-5 text-white shadow-lift sm:left-8 sm:right-auto sm:max-w-sm">
            <p className="font-display text-lg italic leading-snug">
              &ldquo;To answer the call of Christ by providing holistic, affordable and compassionate healthcare.&rdquo;
            </p>
            <footer className="mt-2 text-xs uppercase tracking-[0.18em] text-gold">Our mission</footer>
          </blockquote>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="Why Mary Help"
            title="Healthcare with a heart, in the heart of Thika"
            lead="Owned by the Archdiocese of Nairobi and managed by the SMMI Sisters, we combine decades of clinical experience with a calm, green campus that is made for healing."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-light text-navy">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg leading-snug">{title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
