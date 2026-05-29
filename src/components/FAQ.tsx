"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeader from "./SectionHeader";
import MotionReveal from "./MotionReveal";
import type { SiteConfig } from "@/lib/site-config";

type FAQProps = {
  secao: SiteConfig["secoes"]["faq"];
  faq: SiteConfig["faq"];
  whatsappNumero: string;
  whatsappMensagemFaqExtra: string;
};

export default function FAQ({
  secao: sec,
  faq,
  whatsappNumero,
  whatsappMensagemFaqExtra,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const visibleFaq =
    isMobile && !showAll ? faq.slice(0, sec.quantidadeMobile) : faq;
  const hasMore = isMobile && faq.length > sec.quantidadeMobile && !showAll;

  return (
    <section id="faq" className="bg-section-alt py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <MotionReveal>
          <SectionHeader
            badge={sec.badge}
            titulo={sec.titulo}
            tituloDestaque={sec.tituloDestaque}
            descricao={sec.descricaoDesktop}
          />
        </MotionReveal>

        <div className="space-y-3">
          {visibleFaq.map((item, i) => (
            <FaqItem
              key={item.pergunta}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="mt-4 md:hidden">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="w-full rounded-xl border border-wine/30 bg-dark-elevated py-3 text-sm font-semibold text-gold transition-colors hover:border-gold/50 hover:bg-wine/10"
            >
              Ver todas as perguntas ({faq.length})
            </button>
          </div>
        )}

        <p className="mt-6 rounded-xl border border-wine/25 bg-dark-elevated p-4 text-center text-sm text-cream/70 md:mt-8">
          <span className="md:hidden">
            {sec.textoMaisDuvidasMobile}{" "}
            <a
              href={buildWhatsAppUrl(whatsappNumero, whatsappMensagemFaqExtra)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline"
            >
              {sec.linkMaisDuvidas}
            </a>
          </span>
          <span className="hidden md:inline">{sec.textoRodapeDesktop}</span>
        </p>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: { pergunta: string; resposta: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionReveal delay={index * 0.05} direction="up">
      <div
        className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
          isOpen
            ? "border-wine/40 bg-wine/15 shadow-md shadow-wine/10"
            : "card-surface"
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-semibold text-cream">{item.pergunta}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="shrink-0 text-gold"
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="border-t border-wine/20 px-5 pb-4 pt-2 text-sm leading-relaxed text-cream/65">
                {item.resposta}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionReveal>
  );
}
