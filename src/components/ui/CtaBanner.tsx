import { CalendarCheck, Phone } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "./Button";
import { site } from "@/content/site";

interface CtaBannerProps {
  title?: string;
  lead?: string;
}

export function CtaBanner({
  title = "Ready to see us?",
  lead = "Book an appointment, ask a question or simply come in. Our outpatient and emergency departments are open every hour of every day.",
}: CtaBannerProps) {
  return (
    <section className="container-x py-16 sm:py-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-navy px-6 py-12 text-white shadow-lift sm:px-12 sm:py-16">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">We are here for you</p>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-white/80">{lead}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="/contact#appointment" variant="white" size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book an appointment
            </ButtonLink>
            <ButtonAnchor href={`tel:${site.phones.main.tel}`} variant="emergency" size="lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {site.phones.main.display}
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
