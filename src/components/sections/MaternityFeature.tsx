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
    <section className="bg-blue-mist py-16 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/mother-child-centre-opening.jpg"
              alt="Archbishop Philip Anyolo cuts the ribbon to open the Mother and Child Centre, surrounded by staff and balloons"
              width={1800}
              height={1200}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 rounded-2xl bg-gold px-5 py-3 text-navy shadow-lift sm:right-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">Opened 2025</p>
            <p className="font-display text-lg">Mother and Child Centre</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Maternity &amp; newborn care</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Where Thika&rsquo;s mothers have trusted us for generations
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            We began as a maternity hospital, and safe motherhood is still at our heart. Our Mother and Child
            Centre brings every service a mother and child need together in one wing, with a promise that no
            mother will face pregnancy alone.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-ink/90">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                  <Check className="h-4 w-4" aria-hidden="true" />
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
