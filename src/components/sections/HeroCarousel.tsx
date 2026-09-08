"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Siren } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  position?: string;
}

const INTERVAL = 7000;

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const hovering = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = useCallback((n: number) => setIndex((i) => (i + n + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || reduced || slides.length < 2) return;
    const id = window.setInterval(() => {
      if (!hovering.current && document.visibilityState === "visible") go(1);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, reduced, go, slides.length]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Hospital highlights"
      className="relative isolate overflow-hidden bg-navy text-white"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onKeyDown={onKey}
    >
      <div className="relative min-h-[34rem] sm:min-h-[36rem] lg:min-h-[40rem]">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.image}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={!active}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-out",
                active ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none",
              )}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={cn("object-cover transition-transform duration-[9000ms] ease-out", active && !reduced ? "scale-105" : "scale-100")}
                style={{ objectPosition: s.position ?? "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/20" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />
              <div className="container-x relative flex min-h-[34rem] items-center py-20 sm:min-h-[36rem] lg:min-h-[40rem]">
                <div className={cn("max-w-2xl", active && !reduced && "animate-[fade-up_0.8s_ease-out_both]")}>
                  <p className="eyebrow text-blue-bright">{s.eyebrow}</p>
                  <h2 className="mt-3 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">{s.title}</h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{s.text}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink href={s.cta.href} size="lg" tabIndex={active ? 0 : -1}>
                      {s.cta.label}
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </ButtonLink>
                    <ButtonAnchor href={`tel:${site.phones.emergency.tel}`} variant="emergency" size="lg" tabIndex={active ? 0 : -1}>
                      <Siren className="h-5 w-5" aria-hidden="true" />
                      Emergency {site.phones.emergency.display}
                    </ButtonAnchor>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="container-x pointer-events-none absolute inset-x-0 bottom-6 z-20 flex items-end justify-between">
        <div className="pointer-events-auto flex items-center gap-3">
          <ul className="flex items-center gap-2" aria-label="Choose slide">
            {slides.map((s, i) => (
              <li key={s.image}>
                <button
                  type="button"
                  aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/80",
                  )}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20"
          >
            {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
        <div className="pointer-events-auto hidden items-center gap-2 sm:flex">
          <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next slide" className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}: {slides[index].title}
      </p>
      <Link href="#services" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-navy">
        Skip slideshow
      </Link>
    </section>
  );
}
