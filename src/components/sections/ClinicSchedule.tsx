import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { clinics, weekdays, type Clinic } from "@/content/clinics";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const dayNames: Record<string, string> = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday" };

export function ScheduleTable({ items, showLinks = true }: { items: Clinic[]; showLinks?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
      <table className="w-full min-w-[46rem] text-sm">
        <thead>
          <tr className="bg-surface-alt text-left text-xs uppercase tracking-wider text-muted">
            <th scope="col" className="px-5 py-3 font-semibold">Clinic</th>
            {weekdays.map((d) => (
              <th key={d} scope="col" className="px-2 py-3 text-center font-semibold">
                <abbr title={dayNames[d]} className="no-underline">{d}</abbr>
              </th>
            ))}
            <th scope="col" className="px-5 py-3 font-semibold">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {items.map((c) => (
            <tr key={c.name} className="hover:bg-blue-mist/60">
              <th scope="row" className="px-5 py-3 text-left font-semibold text-navy">
                {showLinks && c.serviceSlug ? (
                  <Link href={c.serviceSlug === "maternity" ? "/maternity" : `/services/${c.serviceSlug}`} className="hover:text-blue">
                    {c.name}
                  </Link>
                ) : (
                  c.name
                )}
                <span className="block text-xs font-normal text-muted">{c.specialty}</span>
              </th>
              {weekdays.map((d) => {
                const on = Array.isArray(c.days) && c.days.includes(d);
                return (
                  <td key={d} className="px-2 py-3 text-center">
                    {on ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-light text-green" aria-label={`${c.name} on ${dayNames[d]}`}>
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M3 8.5l3 3 7-7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-line" aria-hidden="true">·</span>
                    )}
                  </td>
                );
              })}
              <td className={cn("px-5 py-3 text-muted", c.days === "By appointment" && "italic")}>
                {c.days === "By appointment" ? "By appointment" : c.time ?? "Clinic hours"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ClinicSchedule() {
  const featured = clinics.filter((c) => Array.isArray(c.days)).slice(0, 6);
  return (
    <Section tone="alt">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Specialist clinics"
          title="Consultant clinics, on your doorstep"
          lead="Visiting consultants hold regular clinics so that patients see the right specialist without travelling to Nairobi."
        />
        <ButtonLink href="/specialist-clinics" variant="outline" className="shrink-0">
          Full clinic directory
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
      <div className="mt-10">
        <ScheduleTable items={featured} />
      </div>
      <p className="mt-4 inline-flex items-start gap-2 text-sm text-muted">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        Clinic days may change on public holidays or when a consultant is away. Please call ahead to confirm.
      </p>
    </Section>
  );
}
