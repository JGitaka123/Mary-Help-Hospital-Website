import { site } from "@/content/site";

export const runtime = "nodejs";

interface Payload {
  name?: string;
  phone?: string;
  email?: string;
  department?: string;
  date?: string;
  time?: string;
  message?: string;
  website?: string; // honeypot
}

// Simple in-memory rate limit per instance (best-effort on serverless).
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, message: "Too many requests. Please try again later or call us." }, { status: 429 });
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept.
  if (clean(body.website, 10)) {
    return Response.json({ ok: true, message: "Thank you. We will be in touch shortly." });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 160);
  const department = clean(body.department, 80);
  const date = clean(body.date, 20);
  const time = clean(body.time, 40);
  const message = clean(body.message, 2000);

  if (!name || !phone || !department || !message) {
    return Response.json({ ok: false, message: "Please fill in your name, phone number, topic and message." }, { status: 400 });
  }
  if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) {
    return Response.json({ ok: false, message: "Please enter a valid phone number." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Mary Help Hospital Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set; message not delivered:", { name, phone, department });
    return Response.json({
      ok: true,
      message: `Thank you, ${name}. Online messaging is not yet active, so please call ${site.phones.main.display} or email ${site.email} and we will help you right away.`,
    });
  }

  const rows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "—"],
    ["Topic", department],
    ["Preferred date", date || "—"],
    ["Preferred time", time || "—"],
  ]
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#5b6b7a">${k}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`)
    .join("");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#16202a;max-width:640px">
      <h2 style="color:#0f2e48;margin:0 0 12px">New website enquiry: ${escapeHtml(department)}</h2>
      <table style="border-collapse:collapse">${rows}</table>
      <p style="margin:16px 0 4px;color:#5b6b7a">Message</p>
      <p style="white-space:pre-wrap;border-left:3px solid #d9a441;padding-left:12px">${escapeHtml(message)}</p>
      <p style="margin-top:24px;font-size:12px;color:#5b6b7a">Sent from ${site.url} · IP ${escapeHtml(ip)}</p>
    </div>`;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email || undefined,
      subject: `[Website] ${department} from ${name}`,
      html,
      text: `New website enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "-"}\nTopic: ${department}\nPreferred date: ${date || "-"}\nPreferred time: ${time || "-"}\n\n${message}`,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contact] send failed", err);
    return Response.json(
      { ok: false, message: `We could not send your message. Please call ${site.phones.main.display} or email ${site.email}.` },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: `Thank you, ${name}. We have received your message and will call or email you shortly. For anything urgent, call ${site.phones.main.display}.`,
  });
}
