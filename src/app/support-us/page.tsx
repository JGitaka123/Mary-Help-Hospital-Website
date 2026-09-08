import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Church, Gift, HandHeart, Handshake, Droplet } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Support Us",
  description:
    "Support Mary Help of the Sick Mission Hospital, Thika: donate, give equipment, partner with us, donate blood or pray for our mission of affordable, compassionate care.",
  path: "/support-us",
  image: "/images/grotto-wide.jpg",
});

const projects = [
  { t: "Maternal and newborn care", d: "Specialist cover, newborn unit equipment and a dependable emergency pathway for mothers and babies." },
  { t: "Renal and continuing care", d: "More dialysis capacity and stronger follow-up across renal, medical, nutrition and rehabilitation services." },
  { t: "Diagnostics and specialist units", d: "Equipment, maintenance and clinical teams that grow in step with demand." },
  { t: "Research collaboration", d: "Data systems, laboratory partnerships and protected research time so that local evidence shapes local care." },
  { t: "Tomorrow's cancer centre and ICU", d: "Long-term aspirations so that advanced care is available right here in Thika, not only in Nairobi or abroad." },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support us"
        title="Be part of the healing"
        lead="Every expansion in our history has been carried by the community: the Archdiocese, the Sisters, partners, friends and patients who believed. Join them."
        crumbs={[{ name: "Support us", href: "/support-us" }]}
        image="/images/grotto-wide.jpg"
        imageAlt="The Marian grotto in the hospital grounds"
      />

      <Section>
        <SectionHeader eyebrow="Ways to give" title="How you can help" align="center" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Gift, t: "Donate", d: "One-off or regular gifts fund equipment, patient welfare and the care of those who cannot pay in full." },
            { icon: HandHeart, t: "Give in kind", d: "Medical equipment, consumables, linen, furniture and vehicles make an immediate difference on the wards." },
            { icon: Handshake, t: "Partner with us", d: "Corporate, institutional, diaspora and faith-based partnerships for specific projects and outreach." },
            { icon: Droplet, t: "Donate blood", d: "Our regular blood drives save mothers, accident victims and surgical patients. Changia damu, okoa maisha." },
          ].map(({ icon: Icon, t, d }) => (
            <li key={t} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-light text-navy">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">{t}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-3xl bg-blue-mist p-8 text-center">
          <p className="text-lg text-navy">To make a gift or discuss a partnership, please contact the Hospital Administrator.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <ButtonAnchor href={`mailto:${site.email}?subject=Supporting%20Mary%20Help%20Hospital`}>Email {site.email}</ButtonAnchor>
            <ButtonAnchor href={`tel:${site.phones.main.tel}`} variant="outline">Call {site.phones.main.display}</ButtonAnchor>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image src="/images/renal-unit.jpg" alt="The Renal Unit building, opened in 2022" width={1392} height={928} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Priority projects" title="Where your support goes" lead="Your gift is a catalyst: it funds a hospital, transforms lives and fosters a healthier community." />
            <ol className="mt-8 space-y-4">
              {projects.map((p, i) => (
                <li key={p.t} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">{i + 1}</span>
                  <div>
                    <h3 className="text-lg">{p.t}</h3>
                    <p className="text-[0.95rem] text-muted">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-navy p-8 text-white md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <Church className="h-8 w-8 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <h2 className="text-2xl text-white">Pray with us</h2>
              <p className="mt-1 text-white/80">Prayer is the oldest form of support for this hospital. Remember our patients, staff and Sisters in your prayers, and join us for Mass and the annual Thanksgiving celebration on the hospital grounds.</p>
            </div>
          </div>
          <ButtonLink href="/services/chaplaincy" variant="white" className="shrink-0">
            Chaplaincy <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>
      <CtaBanner title="Thank you for standing with us." lead="Together, we will heal. Together, we will rise." />
    </>
  );
}
