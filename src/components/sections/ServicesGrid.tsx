import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { services, type Service } from "@/content/services";

const homeSlugs = [
  "accident-and-emergency",
  "maternity",
  "newborn-unit",
  "surgery-and-theatre",
  "renal-unit-and-dialysis",
  "specialist-clinics",
  "laboratory",
  "radiology-and-imaging",
];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.slug === "maternity" ? "/maternity" : `/services/${service.slug}`}
      className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft hover:border-blue/30"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-light text-blue transition group-hover:bg-blue group-hover:text-white">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl leading-snug">{service.shortName ?? service.name}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function ServicesGrid() {
  const list = homeSlugs.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  return (
    <Section id="services">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Our services"
          title="Comprehensive care under one roof"
          lead="From your first consultation to specialist treatment and recovery, our departments work together so you can complete your care in one trusted place."
        />
        <ButtonLink href="/services" variant="outline" className="shrink-0">
          View all services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((s) => (
          <li key={s.slug}>
            <ServiceCard service={s} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
