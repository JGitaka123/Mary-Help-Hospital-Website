import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, CalendarCheck, Check, Clock, DoorOpen, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/Icon";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
    image: service.image ?? "/images/entrance.jpg",
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (slug === "maternity") redirect("/maternity");
  const service = getService(slug);
  if (!service) notFound();

  const related = (service.related ?? []).map((r) => getService(r)).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={service.group}
        title={service.name}
        lead={service.summary}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.shortName ?? service.name, href: `/services/${service.slug}` },
        ]}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <ButtonLink href="/contact#appointment" variant="white" size="lg">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Book an appointment
        </ButtonLink>
        <ButtonAnchor href={`tel:${site.phones.main.tel}`} variant="ghost" size="lg" className="text-white hover:bg-white/10">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {site.phones.main.display}
        </ButtonAnchor>
      </PageHero>
      {service.imageCredit && <p className="container-x py-2 text-right text-[0.7rem] text-muted">{service.imageCredit}</p>}

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr] sm:py-24">
        <article className="prose-hospital">
          {service.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <h2>What we offer</h2>
          <ul className="!list-none !pl-0 grid gap-3 sm:grid-cols-2">
            {service.offerings.map((o) => (
              <li key={o} className="flex gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[0.95rem]">{o}</span>
              </li>
            ))}
          </ul>

          <h2>How to access this service</h2>
          <p>{service.access}</p>

        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-light text-blue">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-navy">Hours</dt>
                  <dd className="text-muted">{service.hours}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <DoorOpen className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-navy">Where</dt>
                  <dd className="text-muted">
                    {site.address.street}, {site.address.town}. Ask at reception for directions within the hospital.
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-navy">Enquiries</dt>
                  <dd className="text-muted">
                    <a href={`tel:${site.phones.main.tel}`} className="hover:text-blue">{site.phones.main.display}</a>
                    <br />
                    <a href={`mailto:${site.email}`} className="hover:text-blue">{site.email}</a>
                  </dd>
                </div>
              </div>
            </dl>
            <ButtonLink href="/contact#appointment" className="mt-6 w-full">
              Request an appointment
            </ButtonLink>
          </div>

          {related.length > 0 && (
            <div className="rounded-3xl bg-surface-alt p-6">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">Related services</h2>
              <ul className="mt-4 divide-y divide-line">
                {related.map((r) => (
                  <li key={r!.slug}>
                    <Link
                      href={r!.slug === "maternity" ? "/maternity" : `/services/${r!.slug}`}
                      className="group flex items-center justify-between gap-3 py-3 font-medium text-navy hover:text-blue"
                    >
                      {r!.shortName ?? r!.name}
                      <ArrowRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-blue" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
      <CtaBanner />
    </>
  );
}
