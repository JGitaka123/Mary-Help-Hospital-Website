import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";

const pillars = [
  { title: "Rooted in faith and compassion", text: "We continue the healing ministry of Christ. Every patient is received with dignity, whatever their faith or means." },
  { title: "Affordable, transparent care", text: "As a not-for-profit mission hospital our charges are fair, our billing is clear and SHA cover is accepted." },
  { title: "Experienced clinical teams", text: "Full-time doctors, clinical officers and midwives supported by more than twenty visiting consultants." },
  { title: "A growing platform of care", text: "Two modern theatres, a renal unit, laparoscopic surgery, a high dependency unit and the new Mother and Child Centre." },
];

export function WhyMaryHelp() {
  return (
    <Section tone="alt">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2 className="heading-rule mt-2 text-[1.75rem] leading-tight sm:text-3xl lg:text-[2.25rem]">
            Healthcare with a heart, in the heart of Thika
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            Mary Help of the Sick Mission Hospital is a Catholic mission hospital owned by the Archdiocese of Nairobi and managed by the Salesian Missionaries of Mary Immaculate (SMMI) Sisters. For over six decades we have combined clinical experience with a calm, green campus made for healing.
          </p>
          <ul className="mt-7 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[1.05rem] leading-snug">{p.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-display font-medium text-blue hover:underline">
            More about the hospital
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg shadow-soft">
            <Image
              src="/images/team-2026.jpg"
              alt="Doctors, nurses, Sisters and administrative staff of Mary Help of the Sick Mission Hospital gathered on the hospital grounds"
              width={1280}
              height={590}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-[1fr_1.4fr] gap-4">
            <div className="overflow-hidden rounded-lg shadow-soft">
              <Image src="/images/grotto-wide.jpg" alt="The Marian grotto in the hospital grounds" width={1392} height={928} sizes="20vw" className="aspect-[4/5] w-full object-cover" />
            </div>
            <blockquote className="flex flex-col justify-center rounded-lg bg-navy p-6 text-white">
              <p className="font-display text-[1.05rem] font-medium leading-snug">
                &ldquo;To answer the call of Christ by providing holistic, affordable and compassionate healthcare.&rdquo;
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-bright">Our mission</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}
