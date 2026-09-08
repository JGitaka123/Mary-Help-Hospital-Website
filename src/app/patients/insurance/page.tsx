import type { Metadata } from "next";
import { Check, CreditCard, ShieldCheck, Smartphone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insurance, SHA & Payment",
  description:
    "Mary Help of the Sick Mission Hospital is SHA accredited and accepts major private medical insurers, corporate schemes, cash, M-Pesa and card payments. Learn how to use your cover in Thika.",
  path: "/patients/insurance",
});

export default function InsurancePage() {
  const items = faqs.filter((f) => f.category === "Payment & insurance");
  return (
    <>
      <PageHero
        eyebrow="Patients & visitors"
        title="Insurance, SHA and payment"
        lead={site.insurance.summary}
        crumbs={[
          { name: "Patients & visitors", href: "/patients" },
          { name: "Insurance & payment", href: "/patients/insurance" },
        ]}
        compact
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Social Health Authority (SHA)", d: "We are SHA accredited. Outpatient, maternity, inpatient, surgery and dialysis benefits apply for registered members with current contributions. Bring your national ID." },
            { icon: CreditCard, t: "Private and corporate insurance", d: "We accept major private medical insurers and corporate or institutional schemes. Because panels change, confirm your specific cover with the billing office before treatment." },
            { icon: Smartphone, t: "Cash, M-Pesa and card", d: "Pay at the cashier's office by cash, M-Pesa or card. Ask for an itemised statement. Deposits for admission are explained clearly at the admissions desk." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-light text-blue">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl">{t}</h2>
              <p className="mt-2 text-[0.95rem] text-muted">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Using your cover" title="Before you are treated" />
            <ol className="mt-6 space-y-4">
              {[
                "Present your ID and SHA number, or your insurance card, at registration.",
                "Our billing team verifies your cover and any pre-authorisation needed for procedures or admission.",
                "You are told what is covered and any balance you may need to pay yourself.",
                "For elective surgery and admissions, we obtain approval from your insurer in advance where required.",
              ].map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">{i + 1}</span>
                  <p className="text-ink/90">{s}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-blue-mist p-8">
            <h2 className="text-2xl">Accepted payment options</h2>
            <ul className="mt-5 space-y-3">
              {site.insurance.accepted.map((a) => (
                <li key={a} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Questions about a bill or cover? Call {site.phones.main.display} and ask for the billing office, or email {site.email}.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="alt">
        <SectionHeader eyebrow="Questions" title="Payment and insurance FAQs" />
        <div className="mt-8 max-w-3xl">
          <Accordion items={items.map((f) => ({ title: f.question, content: f.answer }))} />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
