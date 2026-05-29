import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

type WhatsAppButtonProps = {
  mensagem?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "gold" | "outline" | "ghost";
};

const variants = {
  primary:
    "bg-wine text-cream hover:bg-wine-dark shadow-lg shadow-wine/30 border border-wine-dark/50",
  gold: "bg-gold text-dark hover:bg-gold-light shadow-lg shadow-gold/30 border border-gold-dark/40",
  outline:
    "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-dark",
  ghost: "text-wine hover:bg-wine/10",
};

export default function WhatsAppButton({
  mensagem,
  children,
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  const { numero, mensagemPadrao } = siteConfig.contato.whatsapp;
  const href = buildWhatsAppUrl(numero, mensagem ?? mensagemPadrao);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.ui.whatsappAriaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-cream/75 transition-colors hover:text-gold"
    >
      {children}
    </Link>
  );
}
