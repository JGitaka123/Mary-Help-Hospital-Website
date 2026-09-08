import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="44" height="44" rx="12" fill="currentColor" />
      <path
        d="M24 11c-1.6 0-2.8 1.2-2.8 2.8V20h-6.4c-1.6 0-2.8 1.2-2.8 2.8v2.4c0 1.6 1.2 2.8 2.8 2.8h6.4v6.2c0 1.6 1.2 2.8 2.8 2.8s2.8-1.2 2.8-2.8V28h6.4c1.6 0 2.8-1.2 2.8-2.8v-2.4c0-1.6-1.2-2.8-2.8-2.8h-6.4v-6.2C26.8 12.2 25.6 11 24 11Z"
        fill="#fff"
      />
      <circle cx="24" cy="24" r="3.2" fill="#d9a441" />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Mary Help of the Sick Mission Hospital, home">
      <LogoMark className={cn("h-11 w-11 shrink-0 transition group-hover:scale-105", tone === "dark" ? "text-navy" : "text-white")} />
      <span className="flex flex-col whitespace-nowrap leading-tight">
        <span className={cn("font-display text-[1rem] font-semibold tracking-tight sm:text-[1.1rem]", tone === "dark" ? "text-navy" : "text-white")}>
          Mary Help of the Sick
        </span>
        <span className={cn("text-[0.62rem] font-semibold uppercase tracking-[0.18em]", tone === "dark" ? "text-blue" : "text-gold")}>
          Mission Hospital · Thika
        </span>
      </span>
    </Link>
  );
}
