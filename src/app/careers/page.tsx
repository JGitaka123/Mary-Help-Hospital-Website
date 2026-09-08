import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, HeartHandshake, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers & Volunteering",
  description:
    "Join Mary Help of the Sick Mission Hospital in Thika: careers for doctors, nurses, clinical officers and allied health professionals, visiting consultant admitting rights, and volunteer opportunities.",
  path: "/careers",
  image: "/images/team-2026.jpg",
});

/** Open roles are maintained here. Leave empty to show the standing invitation. */
const openRoles: { title: string; type: string; closing?: string }[] = [];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work where care has a heart"
        lead="Join a mission-driven team of doctors, nurses, midwives, clinical officers, technologists and support staff who touch lives every day."
        crumbs={[{ name: "Careers", href: "/careers" }]}
        image="/images/team-2026.jpg"
        imageAlt="Hospital staff gathered on the grounds"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader eyebrow="Why Mary Help" title="A place to grow, serve and belong" />
            <ul className="mt-8 space-y-5">
              {[
                { icon: HeartHandshake, t: "Mission and meaning", d: "Serve a community that has trusted this hospital for over six decades, in a culture shaped by the SMILES values." },
                { icon: Sparkles, t: "A growing platform", d: "Work with modern theatres, a renal unit, laparoscopy, HDU, a new Mother and Child Centre and an active research programme." },
                { icon: Users, t: "Mentorship and development", d: "Regular CPD, clinical audit, research opportunities and supportive multidisciplinary teams." },
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
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image src="/images/laboratory-staff.jpg" alt="Laboratory staff at work" width={1392} height={928} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </Section>

      <Section tone="alt" id="vacancies">
        <SectionHeader eyebrow="Vacancies" title="Current openings" />
        {openRoles.length ? (
          <ul className="mt-8 divide-y divide-line rounded-3xl border border-line bg-white shadow-soft">
            {openRoles.map((r) => (
              <li key={r.title} className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg">{r.title}</h3>
                  <p className="text-sm text-muted">{r.type}{r.closing ? ` · Closes ${r.closing}` : ""}</p>
                </div>
                <ButtonAnchor href={`mailto:${site.email}?subject=Application: ${encodeURIComponent(r.title)}`} size="sm">Apply</ButtonAnchor>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-3xl border border-line bg-white p-8 shadow-soft">
            <div className="flex gap-4">
              <BriefcaseBusiness className="h-8 w-8 shrink-0 text-blue" aria-hidden="true" />
              <div>
                <h3 className="text-xl">No advertised vacancies right now</h3>
                <p className="mt-2 text-muted">
                  We are always glad to hear from qualified nurses, midwives, medical officers, clinical officers, laboratory technologists, pharmacists, radiographers, therapists and administrative professionals. Send your CV and a short cover letter to{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-blue hover:underline">{site.email}</a> with the subject line &ldquo;Expression of interest&rdquo;.
                </p>
              </div>
            </div>
          </div>
        )}
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-navy p-8 text-white">
            <p className="eyebrow text-gold">Visiting consultants</p>
            <h2 className="mt-3 text-2xl text-white">Admitting rights and privileges</h2>
            <p className="mt-3 text-white/80">
              Specialists wishing to admit and treat patients at the hospital are credentialed under our Doctors&rsquo; Admitting Rights Policy and Code of Conduct. This covers verified credentials, defined privileges, availability and on-call cover, documentation standards, safe prescribing and consent.
            </p>
            <ButtonLink href="/contact" variant="white" className="mt-6">
              Enquire about admitting rights <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="rounded-3xl bg-blue-mist p-8">
            <p className="eyebrow">Volunteering</p>
            <h2 className="mt-3 text-2xl">Give your time and skills</h2>
            <p className="mt-3 text-muted">
              Volunteers support patient welfare, health education, outreach and chaplaincy. Health professionals from abroad are welcome for short-term clinical volunteering, subject to registration with the relevant Kenyan regulatory body.
            </p>
            <ButtonLink href="/support-us" variant="outline" className="mt-6">
              Ways to support us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
