import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export function TopBar() {
  return (
    <div className="bg-blue text-white">
      <div className="container-x flex min-h-9 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1 text-[0.8rem]">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href={`tel:${site.phones.main.tel}`} className="inline-flex items-center gap-1.5 hover:underline">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {site.phones.main.display}
          </a>
          <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 hover:underline sm:inline-flex">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {site.email}
          </a>
          <span className="hidden items-center gap-1.5 text-white/85 md:inline-flex">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Kimathi Estate, off Kenyatta Highway, Thika
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-white/85 lg:inline-flex">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Outpatient &amp; emergency open 24 hours
          </span>
          <a href={`tel:${site.phones.emergency.tel}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
            <span className="inline-block h-2 w-2 rounded-full bg-terracotta ring-2 ring-white/60" aria-hidden="true" />
            Emergency: {site.phones.emergency.display}
          </a>
        </div>
      </div>
    </div>
  );
}
