export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path: string, base: string) {
  return new URL(path, base).toString();
}
