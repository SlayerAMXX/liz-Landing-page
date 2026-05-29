"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import MotionReveal from "./MotionReveal";
import ResponsiveText from "./ResponsiveText";
import type { SiteConfig } from "@/lib/site-config";

type Depoimento = SiteConfig["depoimentos"][number];

type TestimonialsProps = {
  secao: SiteConfig["secoes"]["depoimentos"];
  depoimentos: Depoimento[];
};

function DepoimentoCard({
  dep,
  labelDestaque,
}: {
  dep: Depoimento;
  labelDestaque: string;
}) {
  const isDestaque = dep.destaque;

  return (
    <article
      className={`mx-auto w-full max-w-2xl rounded-2xl p-6 md:p-8 ${
        isDestaque
          ? "border-2 border-gold/40 bg-dark-elevated shadow-xl shadow-wine/20"
          : "card-premium"
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        {isDestaque ? (
          <span className="rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            {labelDestaque}
          </span>
        ) : (
          <span className="text-xs font-semibold uppercase tracking-widest text-gold/80">
            {dep.servico}
          </span>
        )}
        <div className="flex shrink-0 gap-0.5 text-gold">
          {Array.from({ length: dep.avaliacao }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
      </div>

      <blockquote
        className={`border-l-4 border-gold/40 pl-4 leading-relaxed text-cream ${
          isDestaque ? "font-serif text-lg md:text-xl" : "text-sm md:text-base"
        }`}
      >
        &ldquo;
        <ResponsiveText mobile={dep.textoResumo} desktop={dep.textoCompleto} />
        &rdquo;
      </blockquote>

      <footer className="mt-6 flex items-center gap-4 border-t border-wine/20 pt-5">
        <div
          className={`flex items-center justify-center rounded-full bg-wine font-semibold text-gold ${
            isDestaque
              ? "h-12 w-12 text-base ring-2 ring-gold/40"
              : "h-10 w-10 text-sm"
          }`}
        >
          {dep.iniciais}
        </div>
        <div>
          <p className="font-semibold text-cream">{dep.nome}</p>
          <p className="text-sm text-cream/60">{dep.cargo}</p>
          <p className="text-sm font-semibold text-gold">{dep.resultado}</p>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials({ secao: sec, depoimentos }: TestimonialsProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = depoimentos.length;

  useEffect(() => {
    if (reduceMotion || total <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [reduceMotion, total]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 48 : -48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -48 : 48,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(1);

  return (
    <section
      id="depoimentos"
      className="border-y border-wine/20 bg-dark py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <MotionReveal>
          <SectionHeader
            badge={sec.badge}
            titulo={sec.titulo}
            tituloDestaque={sec.tituloDestaque}
            descricao={sec.descricaoDesktop}
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="mb-10 flex justify-center gap-4 rounded-2xl border border-wine/25 bg-dark-elevated py-5 sm:gap-8 md:mb-12">
            {sec.estatisticas.map((stat) => (
              <div key={stat.label} className="px-2 text-center sm:px-4">
                <p className="font-serif text-xl font-bold text-gold sm:text-2xl md:text-3xl">
                  {stat.valor}
                </p>
                <p className="text-[10px] font-medium text-cream/60 sm:text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>

        {total > 0 && (
          <div className="relative">
            <div className="overflow-hidden px-1 pb-2">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={depoimentos[index].nome}
                  custom={direction}
                  variants={reduceMotion ? undefined : slideVariants}
                  initial={reduceMotion ? false : "enter"}
                  animate="center"
                  exit={reduceMotion ? undefined : "exit"}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DepoimentoCard
                    dep={depoimentos[index]}
                    labelDestaque={sec.labelDestaque}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setDirection(-1);
                    setIndex((index - 1 + total) % total);
                  }}
                  className="absolute top-1/2 -left-1 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-dark-elevated text-gold shadow-lg transition-colors hover:border-gold/60 hover:bg-wine/30 md:-left-4 md:h-11 md:w-11"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDirection(1);
                    setIndex((index + 1) % total);
                  }}
                  className="absolute top-1/2 -right-1 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-dark-elevated text-gold shadow-lg transition-colors hover:border-gold/60 hover:bg-wine/30 md:-right-4 md:h-11 md:w-11"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={22} />
                </button>

                <div className="mt-6 flex items-center justify-center gap-2">
                  {depoimentos.map((dep, i) => (
                    <button
                      key={dep.nome}
                      type="button"
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-8 bg-gold"
                          : "w-2 bg-cream/25 hover:bg-cream/45"
                      }`}
                      aria-label={`Ir para depoimento ${i + 1}`}
                      aria-current={i === index ? "true" : undefined}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
