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

const fallbackImages: Record<string, string> = {
  "specialist-clinics": "/images/ward.jpg",
  "outpatient-department": "/images/ward.jpg",
  paediatrics: "/images/community-children.jpg",
  physiotherapy: "/images/theatre-2.jpg",
  "occupational-therapy": "/images/ward.jpg",
  "speech-therapy": "/images/community-children.jpg",
  nutrition: "/images/mother-child-walkway.jpg",
  "mental-health-and-counselling": "/images/grotto-wide.jpg",
  pharmacy: "/images/laboratory-equipment.jpg",
  dental: "/images/ward.jpg",
};

export function serviceHref(service: Service) {
  return service.slug === "maternity" ? "/maternity" : `/services/${service.slug}`;
}

export function ServiceCard({ service, photo = true }: { service: Service; photo?: boolean }) {
  const image = service.image ?? fallbackImages[service.slug];
  return (
    <Link
      href={serviceHref(service)}
      className="card-hover group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-soft"
    >
      {photo && image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
          <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/95 text-blue shadow-soft">
            <ServiceIcon name={service.icon} className="h-4.5 w-4.5" />
          </span>
        </div>
      ) : (
        <span className="ml-5 mt-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-light text-blue">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </span>
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
            <ServiceCard service={s} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
