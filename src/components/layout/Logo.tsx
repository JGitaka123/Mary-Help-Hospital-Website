import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className, ring = false }: { className?: string; ring?: boolean }) {
  return (
    <Image
      src={ring ? "/images/logo-mark-white-ring.png" : "/images/logo-mark.png"}
      alt=""
      width={96}
      height={96}
      priority
      className={cn("rounded-full", className)}
    />
  );
}

export function Logo({ tone = "dark", className, size = "md" }: { tone?: "dark" | "light"; className?: string; size?: "md" | "lg" }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Mary Help of the Sick Mission Hospital, home">
      <span className={cn("shrink-0 rounded-full p-[3px]", tone === "dark" ? "bg-blue" : "bg-white")}>
        <LogoMark className={cn("ring-2 ring-white", size === "lg" ? "h-14 w-14" : "h-11 w-11 sm:h-12 sm:w-12")} />
      </span>
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className={cn("font-display font-semibold tracking-tight", size === "lg" ? "text-xl" : "text-[1.05rem] sm:text-lg", tone === "dark" ? "text-navy" : "text-white")}>
          Mary Help of the Sick
        </span>
        <span className={cn("mt-1 font-display text-[0.7rem] font-medium uppercase tracking-[0.14em]", tone === "dark" ? "text-blue" : "text-white/80")}>
          Mission Hospital
        </span>
      </span>
    </Link>
  );
}
