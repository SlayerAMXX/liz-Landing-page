"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton, { NavLink } from "./WhatsAppButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { navegacao, imagens, site } = siteConfig;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-wine/30 bg-dark/95 shadow-lg shadow-black/30 backdrop-blur-md">
      <div className="h-1 bg-gradient-to-r from-wine via-gold to-wine" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Image
            src={imagens.logo}
            alt={site.nome}
            width={140}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navegacao.links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <WhatsAppButton
            mensagem={siteConfig.contato.whatsapp.mensagemConsultoria}
            className="px-5 py-2.5 text-sm"
          >
            {navegacao.ctaNav}
          </WhatsAppButton>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-gold/30 bg-wine/20 p-2 text-gold md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-wine/25 bg-dark-elevated px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navegacao.links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                <span onClick={() => setOpen(false)}>{link.label}</span>
              </NavLink>
            ))}
            <WhatsAppButton
              mensagem={siteConfig.contato.whatsapp.mensagemConsultoria}
              className="w-full"
            >
              {navegacao.ctaNav}
            </WhatsAppButton>
          </div>
        </nav>
      )}
    </header>
  );
}
