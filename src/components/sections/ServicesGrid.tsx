import Image from "next/image";
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

/**
 * Photo assignments per context. Each map uses every photograph at most once
 * so that no image repeats within a page. Services without a genuine photo
 * render a designed icon panel instead of a recycled picture.
 */
export const homeImages: Record<string, string> = {
  "accident-and-emergency": "/images/ward.jpg",
  maternity: "/images/mother-child-walkway.jpg",
  "newborn-unit": "/images/newborn-incubators.jpg",
  "surgery-and-theatre": "/images/theatre-2.jpg",
  "renal-unit-and-dialysis": "/images/dialysis-unit.jpg",
  "specialist-clinics": "/images/stock-clinician.jpg",
  laboratory: "/images/laboratory-staff.jpg",
  "radiology-and-imaging": "/images/laboratory-equipment.jpg",
};

export const indexImages: Record<string, string> = {
  "accident-and-emergency": "/images/entrance.jpg",
  "outpatient-department": "/images/campus-fountain.jpg",
  "ambulance-services": "/images/ambulance-als.jpg",
  maternity: "/images/mother-child-walkway.jpg",
  "newborn-unit": "/images/newborn-incubators.jpg",
  "mother-and-child-centre": "/images/mother-child-centre-opening.jpg",
  "inpatient-wards": "/images/ward.jpg",
  "surgery-and-theatre": "/images/theatre.jpg",
  "laparoscopic-surgery": "/images/theatre-2.jpg",
  "renal-unit-and-dialysis": "/images/dialysis-unit.jpg",
  "specialist-clinics": "/images/stock-clinician.jpg",
  optical: "/images/optical-shop.jpg",
  laboratory: "/images/laboratory-staff.jpg",
  "radiology-and-imaging": "/images/laboratory-equipment.jpg",
  "mental-health-and-counselling": "/images/mental-health-illustration.svg",
  chaplaincy: "/images/chapel.jpg",
};

export function serviceHref(service: Service) {
  return service.slug === "maternity" ? "/maternity" : `/services/${service.slug}`;
}

export function ServiceCard({ service, image }: { service: Service; image?: string }) {
  return (
    <Link
      href={serviceHref(service)}
      className="card-hover group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-soft"
    >
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            unoptimized={image.endsWith(".svg")}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/95 text-blue shadow-soft">
            <ServiceIcon name={service.icon} className="h-4.5 w-4.5" />
          </span>
        </div>
      ) : (
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-mist to-blue-light">
          <svg className="absolute -right-8 -top-8 h-48 w-48 text-blue/10" viewBox="0 0 48 48" aria-hidden="true">
            <path
              d="M24 11c-1.6 0-2.8 1.2-2.8 2.8V20h-6.4c-1.6 0-2.8 1.2-2.8 2.8v2.4c0 1.6 1.2 2.8 2.8 2.8h6.4v6.2c0 1.6 1.2 2.8 2.8 2.8s2.8-1.2 2.8-2.8V28h6.4c1.6 0 2.8-1.2 2.8-2.8v-2.4c0-1.6-1.2-2.8-2.8-2.8h-6.4v-6.2C26.8 12.2 25.6 11 24 11Z"
              fill="currentColor"
            />
          </svg>
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue shadow-soft ring-4 ring-blue/10 transition group-hover:bg-blue group-hover:text-white">
            <ServiceIcon name={service.icon} className="h-9 w-9" />
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg leading-snug group-hover:text-blue">{service.shortName ?? service.name}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-medium text-blue">
          Learn more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
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
          All services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((s) => (
          <li key={s.slug}>
            <ServiceCard service={s} image={homeImages[s.slug]} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
