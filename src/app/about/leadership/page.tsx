import type { Metadata } from "next";
import { Building2, Church, Landmark, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { governance, leaders, managementRoles } from "@/content/leadership";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leadership & Governance",
  description:
    "How Mary Help of the Sick Mission Hospital is governed: owned by the Archdiocese of Nairobi, managed by the SMMI Sisters, overseen by a Board of Directors with clinical leadership from the Chief Medical Officer.",
  path: "/about/leadership",
});

const icons = [Church, Landmark, ShieldCheck, Building2, Users];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Leadership and governance"
        lead="Strong governance keeps us faithful to our mission, accountable for quality and safety, and sustainable for the generations to come."
        crumbs={[
          { name: "About", href: "/about" },
          { name: "Leadership & governance", href: "/about/leadership" },
        ]}
        image="/images/team-2026.jpg"
        imageAlt="Hospital staff gathered on the grounds"
        compact
      />
      <Section>
        <SectionHeader eyebrow="Governance structure" title="Who is responsible for what" />
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {governance.map((g, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={g.name} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue">{g.role}</p>
                <h3 className="mt-1 text-xl">{g.name}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{g.description}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader eyebrow="Clinical leadership" title="Medical leadership" />
            <ul className="mt-8 space-y-6">
              {leaders.map((l) => (
                <li key={l.name} className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                  <h3 className="text-2xl">{l.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">{l.title}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{l.bio}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Hospital Management Team" title="Running the hospital every day" />
            <ul className="mt-8 divide-y divide-line rounded-3xl border border-line bg-white shadow-soft">
              {managementRoles.map((r) => (
                <li key={r} className="px-6 py-4 font-medium text-navy">{r}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">Visiting consultants are credentialed through the Medical Advisory Committee under the hospital&rsquo;s Admitting Rights Policy and Code of Conduct.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Quality and safety" title="How we assure the quality of care" lead="Quality is a standing responsibility of the Board, delivered by management and lived by every member of staff." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Board oversight", "A Quality Improvement Sub-Committee reviews quality and patient-safety performance and reports to the full Board."],
            ["Quality improvement teams", "Hospital and work-improvement teams run audit cycles, learn from incidents and act on patient feedback."],
            ["Clinical governance", "Credentialing, defined privileges, clinical documentation standards, safe prescribing, consent and referral pathways."],
            ["Infection prevention", "An infection prevention and control team, hand-hygiene programme and antimicrobial stewardship aligned to national guidelines."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-blue-mist p-6">
              <h3 className="text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
