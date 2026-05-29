import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

type WhatsAppButtonProps = {
  mensagem?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
};

const variants = {
  primary:
    "bg-wine text-cream hover:bg-wine-dark shadow-lg shadow-wine/20",
  outline:
    "border-2 border-gold text-gold hover:bg-gold hover:text-dark",
  ghost: "text-wine hover:bg-wine/5",
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
      className="text-sm text-dark/70 transition-colors hover:text-wine"
    >
      {children}
    </Link>
  );
}
