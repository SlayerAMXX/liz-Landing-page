"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type FloatingWhatsAppProps = {
  numero: string;
  mensagemPadrao: string;
  ariaLabel: string;
};

export default function FloatingWhatsApp({
  numero,
  mensagemPadrao,
  ariaLabel,
}: FloatingWhatsAppProps) {
  const reduceMotion = useReducedMotion();
  const href = buildWhatsAppUrl(numero, mensagemPadrao);

  return (
    <motion.div
      className="fixed bottom-5 right-4 z-40 md:bottom-8 md:right-8"
      initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {!reduceMotion && (
        <>
          <span className="wa-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
          <span className="wa-pulse-ring wa-pulse-ring-delay absolute inset-0 rounded-full bg-[#25D366]" />
        </>
      )}

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 ring-2 ring-white/20 transition-shadow hover:shadow-2xl hover:shadow-[#25D366]/50 md:h-16 md:w-16"
        whileHover={reduceMotion ? undefined : { scale: 1.08 }}
        whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        animate={reduceMotion ? undefined : { scale: [1, 1.05, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { scale: { repeat: Infinity, duration: 2.8, ease: "easeInOut" } }
        }
      >
        <MessageCircle size={30} strokeWidth={2} className="md:hidden" />
        <MessageCircle size={34} strokeWidth={2} className="hidden md:block" />
      </motion.a>
    </motion.div>
  );
}
