import { Phone } from "lucide-react";
import { site } from "@/content/site";

export function MobileCallButton() {
  return (
    <a
      href={`tel:${site.phones.emergency.tel}`}
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white shadow-lift ring-4 ring-white transition hover:bg-terracotta-dark lg:hidden"
      aria-label={`Call emergency line ${site.phones.emergency.display}`}
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
