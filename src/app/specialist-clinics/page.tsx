import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScheduleTable } from "@/components/sections/ClinicSchedule";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { clinics } from "@/content/clinics";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Specialist Clinics & Schedule",
  description:
    "Directory and weekly schedule of specialist and consultant clinics at Mary Help of the Sick Mission Hospital, Thika: gynaecology, paediatrics, surgery, orthopaedics, ENT, ophthalmology, renal, dental and more.",
  path: "/specialist-clinics",
});

export default function ClinicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialist clinics"
        title="Consultant clinic directory"
        lead="More than twenty visiting consultants hold clinics at the hospital alongside our full-time team, so patients see the right specialist without travelling to Nairobi."
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Specialist clinics", href: "/specialist-clinics" },
        ]}
        image="/images/ward.jpg"
        imageAlt="The outpatient treatment area"
        compact
      />
      <Section>
        <SectionHeader
          eyebrow="Weekly schedule"
          title="When each clinic runs"
          lead="Clinics marked 'By appointment' run on a rotating consultant schedule. Call to be booked on the next available date."
        />
        <div className="mt-10">
          <ScheduleTable items={clinics} />
        </div>
        <p className="mt-4 inline-flex items-start gap-2 text-sm text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Clinic days may change on public holidays or when a consultant is away. Please call ahead to confirm before travelling.
        </p>
      </Section>
      <Section tone="alt" padding="tight">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { t: "How to book", d: "Call the main line, use the appointment form, or ask at the outpatient desk to be booked into the next clinic." },
            { t: "What to bring", d: "Your ID, SHA or insurance card, referral letter if you have one, previous results and a list of current medicines." },
            { t: "Referring clinicians", d: "We welcome referrals from other facilities. Send a referral note with the patient or call ahead for urgent cases." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <h2 className="text-xl">{c.t}</h2>
              <p className="mt-2 text-[0.95rem] text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
