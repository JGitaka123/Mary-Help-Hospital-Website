import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-line bg-surface-alt shadow-soft ${className}`}>
      <iframe
        src={site.mapEmbedUrl}
        title="Map showing the location of Mary Help of the Sick Mission Hospital in Thika"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full min-h-[22rem] w-full border-0"
      />
    </div>
  );
}

export function VisitUs() {
  return (
    <Section id="visit">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
        <div>
          <SectionHeader eyebrow="Visit us" title="Find us in Kimathi Estate, Thika" />
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">{site.address.street}</p>
                <p className="text-muted">
                  {site.address.landmark}. {site.address.distance}.
                </p>
                <p className="text-muted">{site.address.postal}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <div>
                <p>
                  <a href={`tel:${site.phones.main.tel}`} className="font-semibold text-navy hover:text-blue">
                    {site.phones.main.display}
                  </a>{" "}
                  <span className="text-muted">(main line / WhatsApp)</span>
                </p>
                <p>
                  <a href={`tel:${site.phones.mobile.tel}`} className="font-semibold text-navy hover:text-blue">
                    {site.phones.mobile.display}
                  </a>{" "}
                  <span className="text-muted">(second line)</span>
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="font-semibold text-navy hover:text-blue">
                {site.email}
              </a>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">Emergency, outpatient and maternity: 24 hours</p>
                <p className="text-muted">Specialist clinics and offices: {site.hours.administration}</p>
                <p className="text-muted">
                  Visiting: {site.hours.visiting.map((v) => v.time).join(" and ")}
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonAnchor href={site.mapDirectionsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions
            </ButtonAnchor>
            <ButtonLink href="/contact" variant="outline">
              Contact page
            </ButtonLink>
          </div>
        </div>
        <MapEmbed />
      </div>
    </Section>
  );
}
