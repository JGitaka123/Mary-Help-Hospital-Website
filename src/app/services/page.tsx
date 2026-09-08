import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { serviceGroups, servicesByGroup } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Services",
  description:
    "Explore the full range of services at Mary Help of the Sick Mission Hospital, Thika: 24/7 emergency, maternity and newborn care, surgery, renal dialysis, diagnostics, specialist clinics and rehabilitation.",
  path: "/services",
  image: "/images/entrance.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Comprehensive care, close to home"
        lead="Emergency, maternity, surgery, dialysis, diagnostics, specialist clinics and rehabilitation, all on one calm, green campus in the heart of Thika."
        crumbs={[{ name: "Services", href: "/services" }]}
        image="/images/campus-fountain.jpg"
        imageAlt="The fountain and outpatient buildings at Mary Help of the Sick Mission Hospital"
      />
      <nav aria-label="Service groups" className="border-b border-line bg-white">
        <div className="container-x flex gap-2 overflow-x-auto py-3 text-sm">
          {serviceGroups.map((g) => (
            <a
              key={g.name}
              href={`#${slugify(g.name)}`}
              className="shrink-0 rounded-full border border-line px-4 py-2 font-medium text-navy transition hover:border-blue hover:text-blue"
            >
              {g.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="container-x space-y-20 py-16 sm:py-24">
        {serviceGroups.map((g) => (
          <section key={g.name} id={slugify(g.name)} className="scroll-mt-28">
            <div className="max-w-2xl">
              <p className="eyebrow">Department group</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{g.name}</h2>
              <p className="mt-3 text-lg text-muted">{g.blurb}</p>
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByGroup(g.name).map((s) => (
                <li key={s.slug}>
                  <ServiceCard service={s} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CtaBanner />
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
