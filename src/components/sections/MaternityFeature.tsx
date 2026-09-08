import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const points = [
  "Antenatal clinics with ultrasound and risk screening",
  "Labour ward with 24-hour midwives, doctors and theatre cover",
  "Newborn unit and special care nursery for premature babies",
  "Postnatal care, immunisation and growth monitoring",
];

export function MaternityFeature() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-[1.5fr_1fr] gap-4">
          <div className="overflow-hidden rounded-lg shadow-soft">
            <Image
              src="/images/mother-child-centre-opening.jpg"
              alt="Archbishop Philip Anyolo cuts the ribbon to open the Mother and Child Centre"
              width={1800}
              height={1200}
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-lg shadow-soft">
              <Image src="/images/newborn-incubators.jpg" alt="Incubators in the newborn unit" width={1392} height={928} sizes="20vw" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-soft">
              <Image src="/images/mother-child-walkway.jpg" alt="The walkway to the Mother and Child Centre" width={1392} height={928} sizes="20vw" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Maternity &amp; newborn care</p>
          <h2 className="heading-rule mt-2 text-[1.75rem] leading-tight sm:text-3xl lg:text-[2.25rem]">
            Where Thika&rsquo;s mothers have trusted us for generations
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            We began as a maternity hospital, and safe motherhood is still at our heart. The Mother and Child Centre, opened in 2025, brings every service a mother and child need together in one wing, with a promise that no mother will face pregnancy alone.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-ink/90">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/maternity" size="lg">
              Maternity services
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/services/newborn-unit" variant="outline" size="lg">
              Newborn unit
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
