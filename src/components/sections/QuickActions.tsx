import Link from "next/link";
import { Baby, CalendarCheck, Clock, Siren, Stethoscope, Wallet, type LucideIcon } from "lucide-react";

const actions: { icon: LucideIcon; label: string; description: string; href: string; tone?: "emergency" }[] = [
  { icon: Siren, label: "Emergency", description: "What to do and where to go", href: "/emergency", tone: "emergency" },
  { icon: CalendarCheck, label: "Book appointment", description: "Clinics and consultations", href: "/contact#appointment" },
  { icon: Stethoscope, label: "Find a service", description: "Our full clinical portfolio", href: "/services" },
  { icon: Baby, label: "Maternity", description: "Mother and Child Centre", href: "/maternity" },
  { icon: Wallet, label: "Insurance & SHA", description: "Cover and payment options", href: "/patients/insurance" },
  { icon: Clock, label: "Visiting hours", description: "Plan your visit", href: "/patients#visiting" },
];

export function QuickActions() {
  return (
    <section aria-label="Quick actions" className="relative z-10 container-x -mt-2 pt-10 sm:pt-12">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {actions.map(({ icon: Icon, label, description, href, tone }) => (
          <li key={href}>
            <Link
              href={href}
              className={`card-hover flex h-full flex-col gap-3 rounded-2xl border p-4 shadow-soft ${
                tone === "emergency"
                  ? "border-terracotta/20 bg-terracotta-light hover:border-terracotta/40"
                  : "border-line bg-white hover:border-blue/30"
              }`}
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                  tone === "emergency" ? "bg-terracotta text-white" : "bg-blue-light text-blue"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-navy">{label}</span>
                <span className="block text-xs text-muted">{description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
