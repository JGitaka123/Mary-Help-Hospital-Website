import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardList, Clock, HeartHandshake, MessageSquare, Wallet } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Patients & Visitors Guide",
  description:
    "Everything you need before you visit Mary Help of the Sick Mission Hospital, Thika: what to bring, admission, visiting hours, billing and payment, patient rights and how to give feedback.",
  path: "/patients",
});

const bring = [
  "National ID or passport (birth notification or clinic card for children)",
  "SHA card or number, or your insurance card and any pre-authorisation",
  "Referral letter, previous results, X-rays and discharge summaries",
  "A list of the medicines you currently take",
  "For admission: toiletries, nightwear, a towel and comfortable clothes",
];

const rights = [
  "Be treated with dignity, respect and compassion regardless of faith, background or ability to pay",
  "Receive clear information about your condition, treatment options and costs",
  "Give or withhold informed consent for treatment",
  "Privacy and confidentiality of your medical information",
  "Seek a second opinion and access your medical records",
  "Raise a concern or complaint and receive a response",
];

const responsibilities = [
  "Give accurate information about your health and medicines",
  "Follow the agreed treatment plan and keep appointments",
  "Treat staff, other patients and visitors with respect",
  "Observe visiting hours and hospital guidelines",
  "Settle your bill or provide valid insurance or SHA details",
];

export default function PatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patients & visitors"
        title="Your guide to visiting Mary Help"
        lead="We want your visit to be as calm as possible. Here is what to expect, what to bring, and how we care for you and your loved ones."
        crumbs={[{ name: "Patients & visitors", href: "/patients" }]}
        image="/images/entrance.jpg"
        imageAlt="The Accident and Emergency entrance"
        compact
      />

      <nav aria-label="On this page" className="border-b border-line bg-white">
        <div className="container-x flex gap-2 overflow-x-auto py-3 text-sm">
          {[
            ["#before", "Before you visit"],
            ["#admission", "Admission"],
            ["#visiting", "Visiting hours"],
            ["#billing", "Billing & payment"],
            ["#rights", "Rights & responsibilities"],
            ["#feedback", "Feedback"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="shrink-0 rounded-full border border-line px-4 py-2 font-medium text-navy transition hover:border-blue hover:text-blue">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <Section id="before" className="scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader eyebrow="Before you visit" title="What to bring" />
            <ul className="mt-8 space-y-3">
              {bring.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              No appointment is needed for emergency or general outpatient care. For specialist clinics and elective procedures, please{" "}
              <Link href="/contact#appointment" className="font-semibold text-blue hover:underline">book ahead</Link>.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Clock, t: "Opening hours", d: "Emergency, outpatient, maternity, lab, imaging and pharmacy are open 24 hours. Clinics and offices run weekdays 8:00 am to 5:00 pm.", href: "/contact" },
              { icon: Wallet, t: "Insurance & SHA", d: site.insurance.summary, href: "/patients/insurance" },
              { icon: ClipboardList, t: "FAQs", d: "Answers to the questions we hear most often about visiting, appointments, payment and maternity.", href: "/patients/faq" },
              { icon: HeartHandshake, t: "Chaplaincy", d: "Spiritual care, prayer and the sacraments are available to patients and families of every faith.", href: "/services/chaplaincy" },
            ].map(({ icon: Icon, t, d, href }) => (
              <Link key={t} href={href} className="card-hover rounded-2xl border border-line bg-white p-5 shadow-soft">
                <Icon className="h-6 w-6 text-blue" aria-hidden="true" />
                <h3 className="mt-3 text-lg">{t}</h3>
                <p className="mt-1.5 text-sm text-muted">{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section id="admission" tone="alt" className="scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <Image src="/images/ward.jpg" alt="A ward bay with curtained beds and the nursing station" width={1392} height={928} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[3/2] w-full object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Admission" title="Being admitted to the wards" />
            <ol className="mt-8 space-y-5">
              {[
                ["Doctor's decision", "Your treating doctor in outpatient, emergency or a clinic decides on admission and explains why."],
                ["Registration and cover", "At the admissions desk we confirm your details, SHA or insurance cover, and explain expected costs and any deposit."],
                ["Ward allocation", "You are shown to a general, semi-private or private room according to your needs and preference."],
                ["Daily care", "Nurses care for you around the clock with daily doctor rounds; consultants review specialist cases."],
                ["Discharge", "You receive a discharge summary, medicines, follow-up appointment and clear instructions for care at home."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg text-gold">{i + 1}</span>
                  <div>
                    <h3 className="text-lg">{t}</h3>
                    <p className="text-[0.95rem] text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="visiting" className="scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader eyebrow="Visiting hours" title="Visiting a patient" lead="Rest is part of recovery. Visiting hours help us keep the wards calm while making sure patients see the people they love." />
          <div className="grid gap-4 sm:grid-cols-2">
            {site.hours.visiting.map((v) => (
              <div key={v.label} className="rounded-2xl bg-navy p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{v.label}</p>
                <p className="mt-1 font-display text-3xl">{v.time}</p>
                <p className="mt-1 text-sm text-white/70">Every day</p>
              </div>
            ))}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:col-span-2">
              <h3 className="text-lg">Visitor guidelines</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
                <li>Maximum two visitors per patient at a time</li>
                <li>Children under 12 only by arrangement with the nurse in charge</li>
                <li>Please do not visit if you are unwell</li>
                <li>Newborn unit and HDU visiting is limited to parents or next of kin</li>
                <li>Wash or sanitise your hands on entering and leaving</li>
                <li>Keep phones on silent and voices low</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="billing" tone="alt" className="scroll-mt-24">
        <SectionHeader eyebrow="Billing & payment" title="Clear, fair and transparent" lead="As a not-for-profit mission hospital we keep our charges fair and explain expected costs before admission or elective procedures." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["SHA / SHIF", "Bring your ID and confirm that your registration and contributions are current so your cover can be verified."],
            ["Private insurance", "Bring your card and any pre-authorisation. Our billing team liaises directly with most major insurers."],
            ["Cash, M-Pesa and card", "Pay at the cashier's office. Ask for an itemised bill and receipt for every payment."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <h3 className="text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
        <ButtonLink href="/patients/insurance" variant="outline" className="mt-8">
          Insurance and payment details <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </Section>

      <Section id="rights" className="scroll-mt-24">
        <SectionHeader eyebrow="Patient charter" title="Your rights and responsibilities" />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-soft">
            <h3 className="text-2xl">As our patient you have the right to</h3>
            <ul className="mt-5 space-y-3">
              {rights.map((r) => (
                <li key={r} className="flex gap-3 text-[0.95rem]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-blue-mist p-8">
            <h3 className="text-2xl">We ask that you</h3>
            <ul className="mt-5 space-y-3">
              {responsibilities.map((r) => (
                <li key={r} className="flex gap-3 text-[0.95rem]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="feedback" tone="alt" className="scroll-mt-24" padding="tight">
        <div className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-8 shadow-soft md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <MessageSquare className="h-8 w-8 shrink-0 text-blue" aria-hidden="true" />
            <div>
              <h2 className="text-2xl">Feedback and complaints</h2>
              <p className="mt-1 text-muted">Tell us what went well and what we could do better. Speak to the nurse in charge, use the suggestion boxes, or write to us. Every complaint is reviewed by management.</p>
            </div>
          </div>
          <ButtonLink href="/contact" className="shrink-0">Send feedback</ButtonLink>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
