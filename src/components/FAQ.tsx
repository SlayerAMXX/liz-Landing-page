"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeader from "./SectionHeader";
import WhatsAppButton from "./WhatsAppButton";
import MotionReveal from "./MotionReveal";

export default function FAQ() {
  const { secoes, faq, contato } = siteConfig;
  const sec = secoes.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqMobile = faq.slice(0, sec.quantidadeMobile);
  const faqDesktop = faq;

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeader
          badge={sec.badge}
          titulo={sec.titulo}
          tituloDestaque={sec.tituloDestaque}
          descricao={sec.descricaoDesktop}
        />

        <MotionReveal>
          <div className="space-y-3">
            <div className="md:hidden">
              {faqMobile.map((item, i) => (
                <FaqItem
                  key={item.pergunta}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
              <p className="mt-6 rounded-xl border border-wine/15 bg-wine/5 p-4 text-center text-sm text-dark/70">
                {sec.textoMaisDuvidasMobile}{" "}
                <a
                  href={buildWhatsAppUrl(
                    contato.whatsapp.numero,
                    contato.whatsapp.mensagemFaqExtra
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-wine underline"
                >
                  {sec.linkMaisDuvidas}
                </a>
              </p>
            </div>

            <div className="hidden md:block">
              {faqDesktop.map((item, i) => (
                <FaqItem
                  key={item.pergunta}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </MotionReveal>

        <div className="mt-10 hidden text-center md:block">
          <p className="mb-4 text-dark/65">{sec.textoRodapeDesktop}</p>
          <WhatsAppButton
            mensagem={contato.whatsapp.mensagemFaq}
            variant="primary"
          >
            <MessageCircle size={18} />
            {sec.cta}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { pergunta: string; resposta: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors ${
        isOpen
          ? "border-wine/30 bg-wine/5 shadow-md shadow-wine/5"
          : "border-wine/10 bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-dark">{item.pergunta}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-wine transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-wine/10 px-5 pb-4 pt-2 text-sm leading-relaxed text-dark/65">
            {item.resposta}
          </p>
        </div>
      </div>
    </div>
  );
}
