import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, site } from "@/content/site";
import { Logo } from "./Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg font-medium">
            In an emergency, call <a href={`tel:${site.phones.emergency.tel}`} className="text-white underline decoration-terracotta decoration-2 underline-offset-4">{site.phones.emergency.display}</a>. Accident &amp; Emergency is open 24 hours.
          </p>
          <p className="text-sm text-white/70">{site.tagline}</p>
        </div>
      </div>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" size="lg" />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/80">
            A Catholic mission hospital continuing the healing ministry of Christ through holistic, affordable and compassionate care. {site.ownership}. {site.management}.
          </p>
          <ul className="mt-6 space-y-3 text-[0.95rem]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-bright" aria-hidden="true" />
              <span>
                {site.address.street}, {site.address.town}
                <br />
                {site.address.landmark}
                <br />
                {site.address.postal}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-bright" aria-hidden="true" />
              <span>
                <a href={`tel:${site.phones.main.tel}`} className="hover:underline">{site.phones.main.display}</a>
                {" · "}
                <a href={`tel:${site.phones.mobile.tel}`} className="hover:underline">{site.phones.mobile.display}</a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-bright" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-bright" aria-hidden="true" />
              <span>Emergency, outpatient, maternity, laboratory, imaging and pharmacy: 24 hours</span>
            </li>
          </ul>
          <SocialLinks tone="light" className="mt-6" />
        </div>

        <FooterColumn title="Hospital" links={footerLinks.hospital} />
        <FooterColumn title="Care" links={footerLinks.care} />
        <FooterColumn title="Patients" links={footerLinks.patients} />
      </div>

      <div className="border-t border-white/10 bg-navy-deep">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. {site.level}. All rights reserved.</p>
          <p className="font-display text-white/75">Mary Help of the Sick, pray for us.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-blue-bright">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/85 transition hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
