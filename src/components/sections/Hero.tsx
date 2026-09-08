import Image from "next/image";
import { ArrowRight, CalendarCheck, Clock, Cross, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

const chips = [
  { icon: Clock, label: "24/7 emergency & outpatient" },
  { icon: ShieldCheck, label: "SHA accredited · Level 4" },
  { icon: Cross, label: "Catholic mission hospital" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-blue/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
        <div className="reveal">
          <p className="eyebrow text-gold">{site.foundedText}</p>
          <h1 className="mt-4 text-4xl leading-[1.04] text-white sm:text-5xl lg:text-[4rem]">
            Compassionate care for <span className="text-gold">body, mind</span> and spirit.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Mary Help of the Sick Mission Hospital is a Catholic mission hospital in the heart of Thika, offering
            round-the-clock emergency care, trusted maternity and newborn services, surgery, dialysis and specialist
            clinics that are affordable and close to home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact#appointment" variant="white" size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book an appointment
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Explore our services
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal reveal-delay-2 relative">
          <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/10">
            <Image
              src="/images/entrance.jpg"
              alt="The Accident and Emergency entrance of Mary Help of the Sick Mission Hospital, with its brick driveway and green lawns"
              width={1280}
              height={853}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-4 text-navy shadow-lift sm:left-auto sm:right-6 sm:w-72">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">Accident &amp; Emergency</p>
            <p className="mt-1 font-display text-lg leading-snug">Open every hour, every day.</p>
            <a href={`tel:${site.phones.emergency.tel}`} className="mt-2 inline-flex items-center gap-2 font-semibold text-terracotta hover:underline">
              {site.phones.emergency.display}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
