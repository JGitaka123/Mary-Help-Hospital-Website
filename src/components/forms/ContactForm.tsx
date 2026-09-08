"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

const departments = [
  "General enquiry",
  "Book an appointment: outpatient",
  "Book an appointment: specialist clinic",
  "Maternity and antenatal",
  "Renal unit and dialysis",
  "Surgery and theatre",
  "Laboratory and imaging",
  "Billing and insurance",
  "Feedback or complaint",
  "Research and partnerships",
  "Careers",
  "Support and donations",
];

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success"; message: string } | { kind: "error"; message: string };

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-sm placeholder:text-muted/70 focus:border-blue focus:outline-none focus:ring-4 focus:ring-blue/15";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; message: string };
      if (!res.ok || !json.ok) throw new Error(json.message || "Something went wrong.");
      setStatus({ kind: "success", message: json.message });
      form.reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error && err.message
            ? err.message
            : `We could not send your message. Please call ${site.phones.main.display} or email ${site.email}.`,
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div role="status" className="rounded-3xl border border-green/20 bg-green-light p-8">
        <CheckCircle2 className="h-10 w-10 text-green" aria-hidden="true" />
        <h3 className="mt-4 text-2xl">Thank you</h3>
        <p className="mt-2 text-ink/85">{status.message}</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus({ kind: "idle" })}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div className="sm:col-span-2 -mb-2 text-sm text-muted">
        Fields marked <span className="text-terracotta">*</span> are required. For emergencies, please call{" "}
        <a href={`tel:${site.phones.emergency.tel}`} className="font-semibold text-terracotta">{site.phones.emergency.display}</a> instead of using this form.
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Full name <span className="text-terracotta">*</span>
        </label>
        <input id="name" name="name" required autoComplete="name" maxLength={120} className={inputClass} placeholder="Jane Wanjiru" />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-navy">
          Phone number <span className="text-terracotta">*</span>
        </label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" maxLength={30} className={inputClass} placeholder="07XX XXX XXX" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Email address
        </label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={160} className={inputClass} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="department" className="text-sm font-semibold text-navy">
          What is this about? <span className="text-terracotta">*</span>
        </label>
        <select id="department" name="department" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date" className="text-sm font-semibold text-navy">
          Preferred date (for appointments)
        </label>
        <input id="date" name="date" type="date" className={inputClass} />
      </div>
      <div>
        <label htmlFor="time" className="text-sm font-semibold text-navy">
          Preferred time
        </label>
        <select id="time" name="time" className={inputClass} defaultValue="">
          <option value="">No preference</option>
          <option>Morning (8 am – 12 pm)</option>
          <option>Afternoon (12 pm – 5 pm)</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message <span className="text-terracotta">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} maxLength={2000} className={inputClass} placeholder="Tell us how we can help. Please do not include sensitive medical details; our team will call you." />
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          By sending this form you agree to our <a href="/privacy" className="underline">privacy notice</a>. We use your details only to respond to your request.
        </p>
        <Button type="submit" size="lg" disabled={status.kind === "sending"} className="shrink-0">
          {status.kind === "sending" ? (
            <>
              <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" /> Send message
            </>
          )}
        </Button>
      </div>

      {status.kind === "error" && (
        <div role="alert" className="sm:col-span-2 flex gap-3 rounded-2xl border border-terracotta/30 bg-terracotta-light p-4 text-sm text-ink">
          <TriangleAlert className="h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
          {status.message}
        </div>
      )}
    </form>
  );
}
