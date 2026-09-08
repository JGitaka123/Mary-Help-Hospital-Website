import { CalendarCheck, Phone } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "./Button";
import { site } from "@/content/site";

interface CtaBannerProps {
  title?: string;
  lead?: string;
}

export function CtaBanner({
  title = "Need care today?",
  lead = "Book an appointment, ask a question or simply come in. Our outpatient and emergency departments are open every hour of every day.",
}: CtaBannerProps) {
  return (
    <section className="bg-blue text-white">
      <div className="container-x grid gap-8 py-12 lg:grid-cols-[1.4fr_1fr] lg:items-center sm:py-14">
        <div>
          <h2 className="text-2xl text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-xl text-white/85">{lead}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <ButtonLink href="/contact#appointment" variant="white" size="lg">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book an appointment
          </ButtonLink>
          <ButtonAnchor href={`tel:${site.phones.main.tel}`} variant="secondary" size="lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {site.phones.main.display}
          </ButtonAnchor>
        </div>
      </div>
    </section>
  );
}
