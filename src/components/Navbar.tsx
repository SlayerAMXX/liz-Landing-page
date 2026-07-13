"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SiteLogo from "./SiteLogo";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NavLink } from "./WhatsAppButton";
import type { SiteConfig } from "@/lib/site-config";

type NavbarProps = {
  links: SiteConfig["navegacao"]["links"];
  logoSrc: string;
  logoAlt: string;
};

export default function Navbar({ links, logoSrc, logoAlt }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-wine/30 bg-dark/95 shadow-lg shadow-black/30 backdrop-blur-md">
      <div className="h-1 bg-gradient-to-r from-wine via-gold to-wine" />
      <div className="mx-auto flex h-[3.75rem] max-w-6xl items-center justify-between gap-3 px-4 md:h-auto md:gap-4 md:px-6 md:py-2">
        <Link
          href="/"
          className="relative z-10 flex min-w-0 shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <SiteLogo variant="navbar" priority src={logoSrc} alt={logoAlt} />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-10 ml-auto shrink-0 rounded-lg border border-gold/30 bg-wine/20 p-2.5 text-gold transition-colors hover:bg-wine/40 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-wine/25 bg-dark-elevated md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <NavLink
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-wine/15"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
