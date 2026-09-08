import Link from "next/link";
import { Baby, CalendarCheck, Clock, Siren, Stethoscope, Wallet, type LucideIcon } from "lucide-react";

const actions: { icon: LucideIcon; label: string; description: string; href: string; tone?: "emergency" }[] = [
  { icon: Siren, label: "Emergency", description: "Open 24 hours", href: "/emergency", tone: "emergency" },
  { icon: CalendarCheck, label: "Book appointment", description: "Clinics & consultations", href: "/contact#appointment" },
  { icon: Stethoscope, label: "Our services", description: "Departments & clinics", href: "/services" },
  { icon: Baby, label: "Maternity", description: "Mother & Child Centre", href: "/maternity" },
  { icon: Wallet, label: "Insurance & SHA", description: "Cover & payment", href: "/patients/insurance" },
  { icon: Clock, label: "Visiting hours", description: "Plan your visit", href: "/patients#visiting" },
];

export function QuickActions() {
  return (
    <section aria-label="Quick links" className="border-b border-line bg-white">
      <ul className="container-x grid grid-cols-2 divide-line sm:grid-cols-3 lg:grid-cols-6 lg:divide-x">
        {actions.map(({ icon: Icon, label, description, href, tone }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex h-full items-center gap-3 border-b border-line px-3 py-4 transition hover:bg-blue-mist lg:border-b-0 lg:px-4 lg:py-5"
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${
                  tone === "emergency" ? "bg-terracotta text-white" : "bg-blue-light text-blue group-hover:bg-blue group-hover:text-white"
                } transition`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[0.92rem] font-medium leading-tight text-navy">{label}</span>
                <span className="block truncate text-xs text-muted">{description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
