import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ambulance, Navigation, Phone, Siren, TriangleAlert } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Emergency",
  description: `24-hour Accident & Emergency at Mary Help of the Sick Mission Hospital, Thika. Call ${site.phones.emergency.display}. What to do in an emergency, ambulance and directions.`,
  path: "/emergency",
});

const goToAE = [
  "Chest pain or pressure, or symptoms of a heart attack",
  "Difficulty breathing or choking",
  "Sudden weakness, numbness, confusion or slurred speech (stroke signs)",
  "Severe bleeding or serious injury, burns or fractures",
  "Loss of consciousness, fits or convulsions",
  "Severe abdominal pain, persistent vomiting or signs of poisoning",
  "A woman in labour, heavy bleeding in pregnancy or reduced baby movements",
  "A child with high fever, difficulty breathing, dehydration or fits",
];

export default function EmergencyPage() {
  return (
    <>
      <header className="bg-terracotta text-white">
        <div className="container-x py-12 sm:py-16">
          <Breadcrumbs items={[{ name: "Emergency", href: "/emergency" }]} tone="dark" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                <Siren className="h-4 w-4" aria-hidden="true" /> Accident &amp; Emergency, open 24 hours
              </p>
              <h1 className="mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">In an emergency, call us now.</h1>
              <p className="mt-4 max-w-xl text-lg text-white/90">Our emergency team is on site every hour of every day. Call while you are on your way so we can prepare to receive you.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonAnchor href={`tel:${site.phones.emergency.tel}`} variant="white" size="lg" className="text-terracotta">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {site.phones.emergency.display}
                </ButtonAnchor>
                <ButtonAnchor href={site.mapDirectionsUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  <Navigation className="h-5 w-5" aria-hidden="true" />
                  Directions to A&amp;E
                </ButtonAnchor>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <Image src="/images/ambulance.jpg" alt="The hospital's advanced life support ambulance" width={1280} height={576} priority sizes="(min-width:1024px) 40vw, 100vw" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="When to come to A&E" title="Come straight to Accident & Emergency if you or someone else has" />
            <ul className="mt-8 space-y-3">
              {goToAE.map((g) => (
                <li key={g} className="flex gap-3">
                  <TriangleAlert className="mt-1 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              For illnesses that are not life-threatening, our <Link href="/services/outpatient-department" className="font-semibold text-blue hover:underline">outpatient department</Link> is also open 24 hours.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <Ambulance className="h-8 w-8 text-terracotta" aria-hidden="true" />
              <h2 className="mt-4 text-2xl">Ambulance</h2>
              <p className="mt-2 text-muted">An advanced life support ambulance is available for emergency transfer to the hospital and for onward referral. Call the emergency line to request it and tell us the patient&rsquo;s condition and your exact location.</p>
            </div>
            <div className="rounded-3xl bg-blue-mist p-7">
              <h2 className="text-2xl">What happens when you arrive</h2>
              <ol className="mt-4 space-y-3 text-[0.95rem]">
                {[
                  "A nurse triages every patient on arrival so the most urgent cases are seen first.",
                  "Medical officers assess, stabilise and start treatment, with on-call consultants, theatre, HDU, laboratory and imaging available at all times.",
                  "You are admitted, referred to a clinic, or discharged with clear instructions. Payment and insurance are sorted out after the patient is stable.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <ButtonLink href="/services/accident-and-emergency" variant="outline">About our A&amp;E department</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
