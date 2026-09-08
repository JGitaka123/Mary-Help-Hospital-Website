import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, HeartHandshake, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Education & Training",
  description:
    "Clinical training and mentorship at Mary Help of the Sick Mission Hospital, Thika, and the proposed Mary Help College of Nursing and Clinical Medicine, a hospital-embedded college rooted in Catholic values.",
  path: "/education",
  image: "/images/team-2026.jpg",
});

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education & training"
        title="A living laboratory for tomorrow's clinicians"
        lead="Our competition has classrooms; we have a working, mission-driven hospital where students learn compassion and competence at the bedside."
        crumbs={[{ name: "Education", href: "/education" }]}
        image="/images/theatre.jpg"
        imageAlt="A theatre nurse preparing the operating theatre"
      />

      <Section>
        <SectionHeader eyebrow="Training today" title="Learning happens here every day" lead="Students on clinical placement, interns and new staff are mentored by experienced nurses, midwives, clinical officers and doctors across every department." />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Stethoscope, t: "Clinical placements", d: "Nursing, midwifery, clinical medicine and allied health students from partner institutions rotate through our wards, maternity, theatre, laboratory and rehabilitation services." },
            { icon: BookOpen, t: "Continuing professional development", d: "Regular CPD sessions, clinical audit, morbidity and mortality reviews, infection prevention training and antimicrobial stewardship education for our staff." },
            { icon: HeartHandshake, t: "Values-inspired formation", d: "Our Catholic tradition of compassionate service and human dignity is not just taught; it is lived and modelled by the Sisters and staff every day." },
          ].map(({ icon: Icon, t, d }) => (
            <li key={t} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">{t}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-gold">Project in development</p>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl">Mary Help College of Nursing and Clinical Medicine</h2>
            <p className="mt-5 text-lg text-white/80">
              Kenya&rsquo;s nursing and midwifery density remains well below what universal health coverage requires, and demand for well-trained Kenyan nurses is strong at home and abroad. We are developing a hospital-embedded college that turns our greatest asset, our clinical environment, into our most powerful classroom.
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              {[
                "Proposed first programme: Diploma in Nursing Science, aligned with Nursing Council of Kenya standards",
                "Blended learning with a skills and simulation laboratory, problem-based learning and extensive clinical rotations",
                "Pillars: evidence-based practice, holistic care of body, mind and spirit, ethical leadership and interdisciplinary collaboration",
                "Located in Thika, at the centre of the Nairobi–Kiambu growth corridor with a rich network of universities and hospitals",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">The college is a project under development, subject to Board approval, regulatory accreditation and feasibility review. Details will be published here as they are confirmed.</p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image src="/images/team-2026.jpg" alt="Hospital staff gathered on the grounds" width={1280} height={590} sizes="(min-width:1024px) 50vw, 100vw" className="w-full object-cover" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-8 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl">Interested in training with us?</h2>
            <p className="mt-1 text-muted">Institutions seeking placement agreements and individuals interested in future college programmes can register their interest.</p>
          </div>
          <ButtonLink href="/contact" className="shrink-0">
            Register interest <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
