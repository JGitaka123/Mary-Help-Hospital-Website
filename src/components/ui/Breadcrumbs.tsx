import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  const text = tone === "dark" ? "text-white/70 hover:text-white" : "text-muted hover:text-navy";
  const current = tone === "dark" ? "text-white" : "text-navy";
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={`font-medium ${current}`}>
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className={`transition ${text}`}>
                  {c.name}
                </Link>
              )}
              {!last && <ChevronRight aria-hidden="true" className={`h-3.5 w-3.5 ${tone === "dark" ? "text-white/40" : "text-muted/60"}`} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
