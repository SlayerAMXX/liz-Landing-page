"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function StickyWhatsApp() {
  const { botoes, contato } = siteConfig;
  const href = buildWhatsAppUrl(
    contato.whatsapp.numero,
    botoes.stickyMensagem
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.ui.whatsappAriaLabel}
      className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-2 bg-wine px-4 py-3.5 text-sm font-semibold text-cream shadow-[0_-4px_20px_rgba(107,0,0,0.3)] transition-colors hover:bg-wine-dark md:hidden"
    >
      <MessageCircle size={18} />
      {botoes.stickyMobile}
    </a>
  );
}
