import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description: "How Mary Help of the Sick Mission Hospital handles personal information collected through this website.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy notice" lead="How we handle personal information collected through this website." crumbs={[{ name: "Privacy", href: "/privacy" }]} compact />
      <div className="container-x py-16">
        <article className="prose-hospital mx-auto max-w-3xl">
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;the hospital&rdquo;) respects your privacy and processes personal data in accordance with the Data Protection Act, 2019 of Kenya. This notice explains what we collect through this website and how we use it. It does not cover the medical records we hold as your healthcare provider, which are governed by our patient confidentiality policy.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li><strong>Contact and appointment forms:</strong> your name, phone number, email address (optional), the topic of your enquiry, preferred date and time, and your message.</li>
            <li><strong>Technical information:</strong> our hosting provider records standard server logs (IP address, browser type, pages requested) for security and performance. We do not use advertising cookies or trackers.</li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry, book your appointment or act on your feedback.</li>
            <li>To protect the website from abuse (for example rate-limiting repeated submissions).</li>
          </ul>
          <p>We do not sell personal data and we do not share it with third parties other than the service providers that deliver our email and hosting, who process it on our instructions.</p>
          <h2>Please do not send sensitive medical details</h2>
          <p>The website form is not a secure clinical channel. Please describe your need in general terms; our team will call you to discuss anything medical in confidence.</p>
          <h2>Retention</h2>
          <p>Form submissions are kept only as long as needed to respond and for a reasonable follow-up period, after which they are deleted.</p>
          <h2>Your rights</h2>
          <p>You may ask what information we hold about you, request correction or deletion, or object to processing, by writing to <a href={`mailto:${site.email}`}>{site.email}</a> or to the Hospital Administrator, {site.address.postal}.</p>
          <h2>Third-party links and maps</h2>
          <p>Our pages embed a Google Maps view and link to social media. Those services have their own privacy policies.</p>
          <p className="text-sm text-muted">Last updated: September 2026.</p>
        </article>
      </div>
    </>
  );
}
