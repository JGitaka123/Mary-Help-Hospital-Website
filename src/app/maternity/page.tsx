import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, CalendarCheck, Check, HeartPulse, Phone, Stethoscope, Syringe } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Maternity & Newborn Care",
  description:
    "Trusted maternity care in Thika: antenatal clinics, 24-hour delivery with obstetric and theatre cover, caesarean section, postnatal care, a newborn unit for premature babies and the new Mother and Child Centre.",
  path: "/maternity",
  image: "/images/mother-child-centre-opening.jpg",
});

const journey = [
  {
    icon: Stethoscope,
    title: "Antenatal care",
    text: "Book early. Routine visits include blood tests, ultrasound scans, blood pressure checks, nutrition advice and screening for high-risk pregnancy. Clinics run on weekdays and every Saturday morning.",
    href: "/services/mother-and-child-centre",
  },
  {
    icon: HeartPulse,
    title: "Labour and delivery",
    text: "Midwives and medical officers are on the labour ward day and night, with obstetrician-gynaecologist cover and two operating theatres for caesarean sections and emergencies.",
    href: "/services/maternity",
  },
  {
    icon: Baby,
    title: "Newborn care",
    text: "Healthy babies room in with their mothers. Babies who need extra help are cared for in our newborn unit and special care nursery, which also receives referrals from across Thika.",
    href: "/services/newborn-unit",
  },
  {
    icon: Syringe,
    title: "After the birth",
    text: "Postnatal reviews, breastfeeding support, family planning, immunisation and growth monitoring continue in the child welfare clinic through your child's early years.",
    href: "/services/mother-and-child-centre",
  },
];

const packing = [
  "Antenatal booklet, national ID and SHA or insurance card",
  "Two or three loose nightdresses and a shawl",
  "Sanitary pads, toiletries and a towel",
  "Baby clothes, blankets, nappies and cotton wool",
  "A birth companion of your choice",
];

export default function MaternityPage() {
  const maternityFaqs = faqs.filter((f) => f.category === "Maternity");
  return (
    <>
      <JsonLd data={faqSchema(maternityFaqs)} />
      <PageHero
        eyebrow="Maternity & newborn care"
        title="Safe motherhood, from the first scan to first steps"
        lead="We began as a maternity hospital and it remains the heart of who we are. Mothers across Thika, Kiambu and Murang'a trust us for antenatal care, safe delivery and the care of their newborns."
        crumbs={[{ name: "Maternity & newborn", href: "/maternity" }]}
        image="/images/mother-child-walkway.jpg"
        imageAlt="The covered walkway to the Mother and Child Centre"
      >
        <ButtonLink href="/contact#appointment" variant="white" size="lg">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Book antenatal clinic
        </ButtonLink>
        <ButtonAnchor href={`tel:${site.phones.emergency.tel}`} variant="emergency" size="lg">
          <Phone className="h-5 w-5" aria-hidden="true" />
          In labour? Call {site.phones.emergency.display}
        </ButtonAnchor>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Your journey with us"
          title="Care at every step of pregnancy and beyond"
          lead="One team, one campus, one record. Our maternity, theatre, newborn and child health services work together so nothing falls through the gaps."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {journey.map(({ icon: Icon, title, text, href }, i) => (
            <li key={title} className="relative rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="absolute -top-3 left-6 rounded-md bg-blue px-2.5 py-0.5 font-display text-xs font-semibold text-white">Step {i + 1}</span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{text}</p>
              <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline">
                Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="blue-mist">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/newborn-incubators.jpg"
              alt="Incubators in the newborn unit ready to receive premature babies"
              width={1392}
              height={928}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Newborn unit</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Extra care for the smallest patients</h2>
            <p className="mt-4 text-lg text-muted">
              Our newborn unit and special care nursery is one of the few in the area equipped to care for premature and sick babies. Paediatricians and specially trained nurses provide incubator care, phototherapy, oxygen therapy and feeding support, and we welcome referrals from other facilities in Thika and neighbouring areas.
            </p>
            <ButtonLink href="/services/newborn-unit" className="mt-6">
              About the newborn unit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Mother and Child Centre</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Every service a mother and child need, in one wing</h2>
            <p className="mt-4 text-lg text-muted">
              On 25 March 2025 His Grace Archbishop Philip Anyolo opened the Mother and Child Centre, bringing antenatal, postnatal, immunisation, growth monitoring and nutrition services together in one purpose-built wing, with a promise that no mother will face pregnancy alone.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/images/mother-child-centre-opening.jpg"
                alt="Archbishop Philip Anyolo cutting the ribbon at the opening of the Mother and Child Centre"
                width={1800}
                height={1200}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 shadow-soft">
            <h2 className="text-2xl">What to pack for delivery</h2>
            <ul className="mt-5 space-y-3">
              {packing.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl">Insurance and payment</h3>
            <p className="mt-2 text-muted">
              Maternity care is covered by SHA for registered members. We also accept private insurance, corporate schemes, cash and M-Pesa. Please confirm your cover during your antenatal visits so there are no surprises on the big day.
            </p>
            <ButtonLink href="/patients/insurance" variant="outline" className="mt-6">
              Insurance &amp; payment
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="Questions" title="Maternity FAQs" />
        <div className="mt-8 max-w-3xl">
          <Accordion items={maternityFaqs.map((f) => ({ title: f.question, content: f.answer }))} />
        </div>
      </Section>

      <CtaBanner title="Expecting? Let us walk with you." lead="Book your antenatal visit today. Our maternity team is available every hour of every day." />
    </>
  );
}
