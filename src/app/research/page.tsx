import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Award, Dna, FlaskConical, Microscope, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Research & Innovation",
  description:
    "Mary Help of the Sick Mission Hospital conducts clinical research with university partners on maternal health, non-communicable diseases, sickle-cell surveillance, antimicrobial stewardship and AI-assisted clinical decision support.",
  path: "/research",
  image: "/images/laboratory-staff.jpg",
});

const pillars = [
  {
    icon: Dna,
    title: "Sickle-cell surveillance",
    status: "Reported programme",
    text: "The hospital has established and sustained sickle-cell surveillance with referral for genetic counselling and medical management, activity reported in the annual reports of the NHGRI International Summit on Human Genetics and Genomics.",
  },
  {
    icon: Award,
    title: "AI-supported NCD care",
    status: "2024 grant award",
    text: "A Mary Help researcher was selected in the 2024 Science for Africa Foundation cohort on Artificial Intelligence in Global Health, for work integrating a medical language model with existing information systems to support diabetes and hypertension care in Kiambu County.",
  },
  {
    icon: FlaskConical,
    title: "Antimicrobial stewardship",
    status: "Published expertise",
    text: "Our Chief Medical Officer is a co-author of published research on antibiotic prescribing patterns, stewardship implementation and antimicrobial resistance in Kenyan hospitals, expertise that informs our own prescribing audits and laboratory-pharmacy collaboration.",
  },
  {
    icon: Microscope,
    title: "Maternal health research",
    status: "Collaboration",
    text: "Staff and donors at Mary Help have contributed to collaborative studies on placental malaria led by university partners, reflecting our commitment to research that answers questions relevant to the mothers we serve.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & innovation"
        title="Research born in Africa, to heal the world"
        lead="Mary Help conducts and hosts clinical research with academic partners, turning local evidence into better care for our patients and home-grown solutions for our population."
        crumbs={[{ name: "Research", href: "/research" }]}
        image="/images/laboratory-equipment.jpg"
        imageAlt="Diagnostic analysers in the hospital laboratory"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="prose-hospital">
            <p className="eyebrow">Mary Help research activities</p>
            <h2 className="!mt-3 text-3xl sm:text-4xl">A research-active hospital is a stronger hospital</h2>
            <p>
              Mary Help conducts and hosts clinical research in partnership with academic institutions, including Mount Kenya University and its Centre for Research in Infectious Diseases, and the Centre for Research in Tropical Medicine and Community Development. Our work spans clinical surveillance, non-communicable disease innovation, antimicrobial stewardship and maternal health.
            </p>
            <p>
              Externally supported studies bring tangible benefits into the hospital: laboratory equipment, stronger data systems, and structured training and career development for clinical, laboratory and nursing staff. The evidence they generate translates directly into better diagnosis and treatment for the mothers, newborns and patients we serve.
            </p>
            <p>
              Every study is conducted with ethical approval, informed consent and rigorous data governance. Research never comes before patient care; it exists to improve it.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image src="/images/laboratory-staff.jpg" alt="Laboratory technologists at work in the hospital laboratory" width={1392} height={928} sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="Research programme" title="Where we have experience" lead="Our work spans clinical surveillance, non-communicable disease innovation, antimicrobial stewardship and maternal health." />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, status, text }) => (
            <li key={title} className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-light text-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-gold-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">{status}</span>
              </div>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
            <p className="eyebrow text-gold">Our commitment</p>
            <h2 className="mt-3 text-3xl text-white">Home-grown solutions for our population</h2>
            <p className="mt-4 text-white/80">
              Mary Help is committed to collaborating with clinical and public health researchers to develop home-grown solutions for the people we serve. By studying the conditions our patients actually face, in the setting where they are treated, we turn local evidence into better diagnosis, treatment and prevention for Thika and beyond.
            </p>
          </div>
          <div>
            <SectionHeader eyebrow="Work with us" title="Partner, collaborate, study" />
            <ul className="mt-8 space-y-5">
              {[
                { icon: Users, t: "Academic and funding partners", d: "We welcome collaboration on ethically approved studies aligned to our patients' needs: maternal and newborn health, non-communicable diseases, infectious disease and health systems." },
                { icon: Microscope, t: "Students and fellows", d: "Supervised research placements and clinical learning for postgraduate students from partner universities." },
                { icon: FlaskConical, t: "Laboratory partnerships", d: "Point-of-care diagnostics, surveillance and quality-assured laboratory collaboration." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-light text-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg">{t}</h3>
                    <p className="text-[0.95rem] text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" className="mt-8">
              Contact the Research Unit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Section>
      <CtaBanner title="Interested in partnering with us?" lead="Write to the Research Unit through our contact page and we will respond within a few working days." />
    </>
  );
}
