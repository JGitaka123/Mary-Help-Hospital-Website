import Image from "next/image";
import { CalendarCheck, Siren } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/entrance.jpg"
        alt="The Accident and Emergency entrance of Mary Help of the Sick Mission Hospital with its brick driveway and lawns"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/20" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/70 to-transparent" aria-hidden="true" />
      <div className="container-x relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="eyebrow text-blue-bright">{site.tagline}</p>
          <h1 className="mt-3 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]">
            Compassionate, affordable care for body, mind and spirit.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Mary Help of the Sick Mission Hospital has served Thika since 1963 with 24-hour emergency care,
            trusted maternity and newborn services, surgery, dialysis and specialist clinics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact#appointment" size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book an appointment
            </ButtonLink>
            <ButtonAnchor href={`tel:${site.phones.emergency.tel}`} variant="emergency" size="lg">
              <Siren className="h-5 w-5" aria-hidden="true" />
              Emergency {site.phones.emergency.display}
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
