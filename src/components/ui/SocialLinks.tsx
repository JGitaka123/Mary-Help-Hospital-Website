import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const icons = {
  facebook: (
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3Z" />
  ),
  x: (
    <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.3L1.5 3H8l4.4 5.9L17.5 3Zm-1.1 16.2h1.7L7.2 4.7H5.4l11 14.5Z" />
  ),
  instagram: (
    <path d="M12 2.2c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 3.7 5.3 2.4 8 2.3c1-.1 1.3-.1 4-.1ZM12 0C9.3 0 8.9 0 7.9.1 4.2.2 2.2 2.2 2.1 5.9 2 6.9 2 7.3 2 10s0 3.1.1 4.1c.2 3.7 2.2 5.7 5.9 5.9 1 .1 1.3.1 4.1.1s3.1 0 4.1-.1c3.7-.2 5.7-2.2 5.9-5.9.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1C21.9 2.2 19.9.2 16.2.1 15.1 0 14.7 0 12 0Zm0 4.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
  ),
  youtube: (
    <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.4.5-5.4s0-3.6-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  ),
  whatsapp: (
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8ZM12 0a12 12 0 0 0-10.2 18.3L0 24l5.9-1.5A12 12 0 1 0 12 0Z" />
  ),
};

const links: { key: keyof typeof icons; label: string; href: string }[] = [
  { key: "facebook", label: "Facebook", href: site.social.facebook },
  { key: "x", label: "X (Twitter)", href: site.social.x },
  { key: "instagram", label: "Instagram", href: site.social.instagram },
  { key: "youtube", label: "YouTube", href: site.social.youtube },
  { key: "whatsapp", label: "WhatsApp", href: site.whatsapp },
];

export function SocialLinks({ tone = "dark", size = "md", className }: { tone?: "dark" | "light" | "onblue"; size?: "sm" | "md"; className?: string }) {
  const box = size === "sm" ? "h-7 w-7" : "h-10 w-10";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-[1.15rem] w-[1.15rem]";
  const tones = {
    dark: "bg-blue-light text-blue hover:bg-blue hover:text-white",
    light: "bg-white/10 text-white hover:bg-blue-bright",
    onblue: "text-white/85 hover:bg-white/15 hover:text-white",
  };
  return (
    <ul className={cn("flex items-center gap-1.5", className)} aria-label="Social media">
      {links.map((l) => (
        <li key={l.key}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.label} (opens in a new tab)`}
            title={l.label}
            className={cn("inline-flex items-center justify-center rounded-md transition", box, tones[tone])}
          >
            <svg viewBox="0 0 24 24" className={icon} fill="currentColor" aria-hidden="true">
              {icons[l.key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
