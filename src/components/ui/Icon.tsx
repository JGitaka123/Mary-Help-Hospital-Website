import {
  Accessibility,
  Activity,
  Apple,
  Baby,
  Bed,
  Bone,
  Brain,
  Droplets,
  Ear,
  Eye,
  FlaskConical,
  HeartPulse,
  MessageCircle,
  Pill,
  ScanLine,
  Scissors,
  Siren,
  Smile,
  Stethoscope,
  Syringe,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/services";

const icons: Record<IconName, React.ComponentType<LucideProps>> = {
  siren: Siren,
  stethoscope: Stethoscope,
  baby: Baby,
  "heart-pulse": HeartPulse,
  bed: Bed,
  scissors: Scissors,
  activity: Activity,
  droplets: Droplets,
  eye: Eye,
  smile: Smile,
  flask: FlaskConical,
  scan: ScanLine,
  pill: Pill,
  accessibility: Accessibility,
  brain: Brain,
  apple: Apple,
  "message-circle": MessageCircle,
  ear: Ear,
  bone: Bone,
  syringe: Syringe,
};

export function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name] ?? Stethoscope;
  return <Cmp aria-hidden="true" {...props} />;
}
