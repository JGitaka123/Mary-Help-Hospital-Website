import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { timeline, values } from "@/content/timeline";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Mary Help of the Sick Mission Hospital is a Catholic mission hospital in Thika, Kenya, owned by the Archdiocese of Nairobi and managed by the SMMI Sisters, serving the community for over six decades.",
  path: "/about",
  image: "/images/grotto-wide.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Over six decades of healing in Thika"
        lead="We are a Catholic mission hospital that continues the healing ministry of Christ: holistic, affordable and compassionate care for body, mind and spirit."
        crumbs={[{ name: "About", href: "/about" }]}
        image="/images/grotto-wide.jpg"
        imageAlt="The Marian grotto in the hospital grounds"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="prose-hospital">
            <p className="eyebrow">Who we are</p>
            <h2 className="!mt-3 text-3xl sm:text-4xl">A hospital built by faith and community</h2>
            <p>
              Mary Help of the Sick Mission Hospital began in the early 1960s as a maternity hospital serving the mothers and newborns of Thika. Today it is a KEPH Level 4 hospital with 24-hour emergency, outpatient, maternity, surgical, renal, diagnostic and rehabilitation services, owned by the Archdiocese of Nairobi and managed by the Salesian Missionaries of Mary Immaculate (SMMI) Sisters.
            </p>
            <p>
              A decade ago the hospital was a modest facility with weather-beaten buildings and a single outpatient room. Driven by faith and a community that rallied behind every expansion, it has grown into a modern campus with a bustling outpatient wing, two operating theatres, a renal unit, a high dependency unit, and in 2025 a new Mother and Child Centre, Speech Therapy Unit and expanded Research Unit.
            </p>
            <p>
              Through it all, one thing has not changed: every patient is received with dignity, whatever their faith, background or ability to pay.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <Image src="/images/team-2026.jpg" alt="Doctors, nurses, Sisters and staff of Mary Help of the Sick Mission Hospital" width={1280} height={590} sizes="(min-width:1024px) 45vw, 100vw" className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <Image src="/images/fountain.jpg" alt="The Sacred Heart fountain at the centre of the hospital campus" width={1280} height={853} sizes="25vw" className="aspect-square w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <Image src="/images/grotto-team-portrait.jpg" alt="Sisters and staff at the Marian grotto" width={1200} height={1440} sizes="25vw" className="aspect-square w-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="blue-mist" padding="tight">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="mx-auto w-40 overflow-hidden rounded-lg shadow-lift ring-4 ring-white sm:w-48">
            <Image src="/images/mary-help-of-the-sick.jpg" alt="Painting of the Virgin Mary holding the child Jesus, the image of Mary Help of the Sick used by the hospital" width={388} height={518} sizes="12rem" className="w-full" />
          </div>
          <div className="max-w-2xl">
            <p className="eyebrow">Our patroness</p>
            <h2 className="heading-rule mt-2 text-[1.75rem] leading-tight sm:text-3xl">Mary Help of the Sick, pray for us</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              The hospital is placed under the patronage of the Blessed Virgin Mary under her title Help of the Sick (Salus Infirmorum), invoked in the Litany of Loreto for all who suffer illness. Her image welcomes every patient at our gate, and the Marian grotto in the hospital grounds is a place of quiet prayer for patients, families and staff of every faith.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-gold">Our mission</p>
            <p className="mt-3 font-display text-2xl leading-snug">To answer the call of Christ by providing holistic, affordable and compassionate healthcare, upholding the dignity, respect and individuality of each patient.</p>
          </div>
          <div>
            <p className="eyebrow text-gold">Our vision</p>
            <p className="mt-3 font-display text-2xl leading-snug">A society that is healthy in body, mind and spirit: a centre of excellence in care for the whole person.</p>
          </div>
          <div>
            <p className="eyebrow text-gold">Our identity</p>
            <p className="mt-3 font-display text-2xl leading-snug">A Catholic mission hospital continuing the healing ministry of Christ, consistent with Catholic traditions and values, open to all.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our core values" title="SMILES: the values that guide us" lead="These six values shape our strategic decisions, our interactions with patients and partners, and the culture of our hospital." align="center" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.name + i} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-light font-display text-2xl text-navy">{v.letter}</span>
              <h3 className="mt-4 text-xl">{v.name}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{v.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="Our story" title="Milestones on the journey" />
        <ol className="relative mt-12 space-y-10 border-l border-line pl-8">
          {timeline.map((m) => (
            <li key={m.title} className="relative">
              <span className="absolute -left-[2.35rem] top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-4 border-surface-alt bg-gold" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">{m.period}</p>
              <h3 className="mt-1 text-xl">{m.title}</h3>
              <p className="mt-1.5 max-w-2xl text-[0.95rem] text-muted">{m.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image src="/images/community-outreach.jpg" alt="Hospital staff with members of the community during an outreach visit" width={1280} height={720} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[16/10] w-full object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Community" title="Rooted in Thika, reaching beyond" lead="From blood drives and health education to outreach in surrounding communities and our satellite health centre at St Cyril Mukuyu-ini in Gatundu North, our care extends far beyond our gates." />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/about/leadership">
                Leadership &amp; governance <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/support-us" variant="outline">Support our mission</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
