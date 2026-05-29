import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  numero: string;
  mensagemPadrao: string;
  ariaLabel: string;
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
  numero,
  mensagemPadrao,
  ariaLabel,
  mensagem,
  children,
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(numero, mensagem ?? mensagemPadrao);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function NavLink({
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium text-cream/75 transition-colors hover:text-gold ${className}`}
    >
      {children}
    </Link>
  );
}
