import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs, type Faq } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Mary Help of the Sick Mission Hospital, Thika: location, hours, appointments, SHA and insurance, visiting hours, maternity and emergencies.",
  path: "/patients/faq",
});

const order: Faq["category"][] = ["General", "Appointments", "Payment & insurance", "Visiting", "Maternity", "Emergency"];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Patients & visitors"
        title="Frequently asked questions"
        lead="Quick answers to the questions we hear most often. Can't find yours? Call us or send a message and we will help."
        crumbs={[
          { name: "Patients & visitors", href: "/patients" },
          { name: "FAQs", href: "/patients/faq" },
        ]}
        compact
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[14rem_1fr]">
          <nav aria-label="FAQ categories" className="lg:sticky lg:top-24 lg:self-start">
            <ul className="flex flex-wrap gap-2 lg:flex-col">
              {order.map((c) => (
                <li key={c}>
                  <a href={`#${c.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="inline-block rounded-full border border-line px-4 py-2 text-sm font-medium text-navy transition hover:border-blue hover:text-blue">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-12">
            {order.map((c) => {
              const items = faqs.filter((f) => f.category === c);
              if (!items.length) return null;
              return (
                <section key={c} id={c.toLowerCase().replace(/[^a-z]+/g, "-")} className="scroll-mt-28">
                  <h2 className="text-2xl">{c}</h2>
                  <div className="mt-4">
                    <Accordion items={items.map((f) => ({ title: f.question, content: f.answer }))} defaultOpen={null} />
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
