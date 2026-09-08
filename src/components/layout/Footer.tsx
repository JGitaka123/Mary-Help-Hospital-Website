import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { footerLinks, site } from "@/content/site";
import { Logo } from "./Logo";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            A Catholic mission hospital continuing the healing ministry of Christ: holistic, affordable and compassionate care for body, mind and spirit. {site.ownership}, {site.management.toLowerCase()}.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {site.address.street}, {site.address.town}
                <br />
                {site.address.landmark}
                <br />
                {site.address.postal}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                <a href={`tel:${site.phones.main.tel}`} className="hover:text-gold">
                  {site.phones.main.display}
                </a>
                {" · "}
                <a href={`tel:${site.phones.mobile.tel}`} className="hover:text-gold">
                  {site.phones.mobile.display}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>Emergency, outpatient, maternity, lab, imaging and pharmacy: 24 hours</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold hover:text-navy"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold hover:text-navy"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <FooterColumn title="Hospital" links={footerLinks.hospital} />
        <FooterColumn title="Care" links={footerLinks.care} />
        <FooterColumn title="Patients" links={footerLinks.patients} />
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.level}. All rights reserved.
          </p>
          <p className="font-display italic text-white/70">&ldquo;Mary Help of the Sick, pray for us.&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/80 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
