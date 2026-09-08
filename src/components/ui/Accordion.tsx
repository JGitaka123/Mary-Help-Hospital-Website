"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: string;
}

export function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.title}>
            <h3 className="font-sans text-base">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy transition hover:bg-surface-alt sm:px-6"
              >
                <span>{item.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn("h-5 w-5 shrink-0 text-blue transition-transform duration-300", isOpen && "rotate-180")}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-[0.98rem] leading-relaxed text-ink/85 sm:px-6"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
