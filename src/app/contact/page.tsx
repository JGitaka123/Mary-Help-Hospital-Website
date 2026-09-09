import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone, Siren } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonAnchor } from "@/components/ui/Button";
import { MapEmbed } from "@/components/sections/VisitUs";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Directions",
  description: `Contact Mary Help of the Sick Mission Hospital, Thika. Call ${site.phones.main.display}, email ${site.email}, or find us at Kimathi Estate off Kenyatta Highway, 1 km from Thika town. Book an appointment online.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We are here to help"
        lead="Call, write, or come in. Our emergency and outpatient departments are open every hour of every day."
        crumbs={[{ name: "Contact", href: "/contact" }]}
        compact
      />

      <Section padding="tight">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${site.phones.emergency.tel}`} className="card-hover rounded-2xl bg-terracotta p-6 text-white shadow-soft">
            <Siren className="h-6 w-6" aria-hidden="true" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Emergency 24/7</p>
            <p className="mt-1 font-display text-2xl">{site.phones.emergency.display}</p>
          </a>
          <a href={`tel:${site.phones.main.tel}`} className="card-hover rounded-2xl border border-line bg-white p-6 shadow-soft">
            <Phone className="h-6 w-6 text-blue" aria-hidden="true" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Main line</p>
            <p className="mt-1 font-display text-2xl text-navy">{site.phones.main.display}</p>
            <p className="mt-1 text-sm text-muted">or {site.phones.mobile.display}</p>
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="card-hover rounded-2xl border border-line bg-white p-6 shadow-soft">
            <MessageCircle className="h-6 w-6 text-green" aria-hidden="true" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">WhatsApp</p>
            <p className="mt-1 font-display text-2xl text-navy">{site.phones.main.display}</p>
          </a>
          <a href={`mailto:${site.email}`} className="card-hover rounded-2xl border border-line bg-white p-6 shadow-soft">
            <Mail className="h-6 w-6 text-blue" aria-hidden="true" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Email</p>
            <p className="mt-1 break-all font-sans text-[0.95rem] font-semibold text-navy">{site.email}</p>
          </a>
        </div>
      </Section>

      <Section id="appointment" className="scroll-mt-24" padding="tight">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="Appointments & enquiries" title="Send us a message" lead="Request an appointment, ask a question or share feedback. We respond during office hours, usually within one working day." />
            <div className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-surface-alt p-7">
              <h2 className="text-2xl">Find us</h2>
              <ul className="mt-5 space-y-4 text-[0.95rem]">
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">{site.address.street}, {site.address.town}</p>
                    <p className="text-muted">{site.address.landmark}. {site.address.distance}.</p>
                    <p className="text-muted">{site.address.postal}, {site.address.country}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">Emergency, outpatient, maternity, lab, imaging, pharmacy</p>
                    <p className="text-muted">24 hours, every day</p>
                    <p className="mt-2 font-semibold text-navy">Specialist clinics and offices</p>
                    <p className="text-muted">{site.hours.administration}</p>
                    <p className="mt-2 font-semibold text-navy">Visiting hours</p>
                    <p className="text-muted">{site.hours.visiting.map((v) => v.time).join(" and ")}</p>
                  </div>
                </li>
              </ul>
              <ButtonAnchor href={site.mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </ButtonAnchor>
            </div>
            <MapEmbed className="min-h-[20rem]" />
            <div className="rounded-3xl border border-line bg-white p-6 text-sm text-muted shadow-soft">
              <p className="font-semibold text-navy">Getting here</p>
              <p className="mt-2">From Thika town, take Kenyatta Highway towards Kimathi Estate. The hospital is opposite Munene Industries, near St Andrew&rsquo;s ACK Cathedral, about 1 km from the town centre. Matatus and boda-bodas from Thika town stop at the hospital gate.</p>
              <p className="mt-2">
                Satellite facility: {site.branch.name}, {site.branch.location}.{" "}
                <a href={`tel:${site.branch.phone.tel}`} className="font-semibold text-navy hover:text-blue">{site.branch.phone.display}</a>
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
