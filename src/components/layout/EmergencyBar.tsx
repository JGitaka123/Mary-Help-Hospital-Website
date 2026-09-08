import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export function EmergencyBar() {
  return (
    <div className="bg-navy-deep text-white">
      <div className="container-x flex min-h-10 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 text-[0.8rem]">
        <a
          href={`tel:${site.phones.emergency.tel}`}
          className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-gold"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75" aria-hidden="true" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-terracotta" aria-hidden="true" />
          </span>
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          Emergency 24/7: {site.phones.emergency.display}
        </a>
        <div className="hidden items-center gap-6 text-white/75 sm:flex">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Outpatient &amp; emergency open 24 hours
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Kimathi Estate, Thika
          </span>
        </div>
      </div>
    </div>
  );
}
