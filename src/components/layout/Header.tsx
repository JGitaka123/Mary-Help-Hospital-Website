"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CalendarCheck, ChevronDown, Menu, Siren, X } from "lucide-react";
import { navigation, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);

  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const linkClass = (active: boolean) =>
    cn(
      "inline-flex h-12 items-center gap-1 whitespace-nowrap border-b-[3px] px-3.5 font-display text-[0.9rem] font-medium transition hover:text-blue xl:px-4",
      active ? "border-terracotta text-navy" : "border-transparent text-ink",
    );

  return (
    <div className={cn("sticky top-0 z-50 bg-white", scrolled ? "shadow-soft" : "border-b border-line")}>
      <div className="container-x flex h-[4.75rem] items-center justify-between gap-4 lg:h-[5.25rem]">
        <Logo />
        <div className="hidden items-center gap-2 lg:flex">
          <ButtonAnchor href={`tel:${site.phones.emergency.tel}`} variant="emergency" size="sm">
            <Siren className="h-4 w-4" aria-hidden="true" />
            Emergency
          </ButtonAnchor>
          <ButtonLink href="/contact#appointment" size="sm">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book an appointment
          </ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy transition hover:bg-blue-light lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <nav ref={navRef} aria-label="Primary" className="hidden border-t border-line lg:block">
        <ul className="container-x flex items-stretch">
          {navigation.map((item) => {
            const active = isActive(item.href);
            const children = "children" in item ? item.children : undefined;
            return (
              <li key={item.label} className="relative">
                {children ? (
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className={linkClass(active)}
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className={cn("h-4 w-4 text-muted transition-transform", openMenu === item.label && "rotate-180")} />
                  </button>
                ) : (
                  <Link href={item.href} className={linkClass(active)}>
                    {item.label}
                  </Link>
                )}
                {children && openMenu === item.label && (
                  <div className="absolute left-0 top-full z-50 w-[21rem] border border-line bg-white p-2 shadow-lift">
                    <ul>
                      {children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block rounded-md px-3 py-2.5 transition hover:bg-blue-mist" onClick={() => setOpenMenu(null)}>
                            <span className="block font-display text-[0.9rem] font-medium text-navy">{child.label}</span>
                            <span className="block text-sm text-muted">{child.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div id="mobile-nav" hidden={!open} className="fixed inset-x-0 bottom-0 top-[4.75rem] z-40 overflow-y-auto border-t border-line bg-white lg:hidden">
        <nav aria-label="Mobile" className="container-x py-4">
          <ul className="divide-y divide-line">
            {navigation.map((item) => (
              <li key={item.label} className="py-2">
                <Link href={item.href} className={cn("block py-2 font-display text-lg font-semibold", isActive(item.href) ? "text-blue" : "text-navy")}>
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <ul className="mb-2 grid gap-1 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block py-2 text-[0.95rem] text-ink/80 hover:text-blue">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <ButtonLink href="/contact#appointment" size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book an appointment
            </ButtonLink>
            <ButtonAnchor href={`tel:${site.phones.emergency.tel}`} variant="emergency" size="lg">
              <Siren className="h-5 w-5" aria-hidden="true" />
              Emergency {site.phones.emergency.display}
            </ButtonAnchor>
          </div>
        </nav>
      </div>
    </div>
  );
}
