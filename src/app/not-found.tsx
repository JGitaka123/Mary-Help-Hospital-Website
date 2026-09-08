import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center sm:py-32">
      <p className="eyebrow justify-center">Page not found</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">We could not find that page</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-muted">
        The link may be out of date. Try one of the options below, or call us on{" "}
        <a href={`tel:${site.phones.main.tel}`} className="font-semibold text-blue">{site.phones.main.display}</a>.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
        <ButtonLink href="/services" variant="outline">Browse services</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact us</ButtonLink>
      </div>
      <p className="mt-10 text-sm text-muted">
        In an emergency go to <Link href="/emergency" className="font-semibold text-terracotta">Accident &amp; Emergency</Link>.
      </p>
    </section>
  );
}
