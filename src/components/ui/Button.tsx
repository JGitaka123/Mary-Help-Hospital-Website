import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "emergency" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white shadow-soft hover:bg-blue-dark hover:shadow-lift",
  secondary: "bg-navy text-white shadow-soft hover:bg-navy-deep",
  outline: "border border-navy/20 bg-white text-navy hover:border-navy/40 hover:bg-surface-alt",
  ghost: "text-blue hover:bg-blue-light",
  emergency: "bg-terracotta text-white shadow-soft hover:bg-terracotta-dark hover:shadow-lift",
  white: "bg-white text-navy shadow-soft hover:bg-blue-light",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-[0.95rem]",
  lg: "min-h-12 px-7 text-base",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ variant = "primary", size = "md", className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}

interface ButtonAnchorProps extends ComponentProps<"a"> {
  variant?: Variant;
  size?: Size;
}

export function ButtonAnchor({ variant = "primary", size = "md", className, children, ...props }: ButtonAnchorProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "primary", size = "md", className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
