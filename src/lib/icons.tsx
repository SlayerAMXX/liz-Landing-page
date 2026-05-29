import {
  Briefcase,
  Handshake,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  TrendingUp,
  Handshake,
  Briefcase,
};

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? ShieldCheck;
}
