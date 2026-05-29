"use client";

import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import MotionReveal from "./MotionReveal";
import ResponsiveText from "./ResponsiveText";
import type { SiteConfig } from "@/lib/site-config";

type TestimonialsProps = {
  secao: SiteConfig["secoes"]["depoimentos"];
  depoimentos: SiteConfig["depoimentos"];
};

export default function Testimonials({ secao: sec, depoimentos }: TestimonialsProps) {
  const destaque = depoimentos.find((d) => d.destaque);
  const outros = depoimentos.filter((d) => !d.destaque);

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
          <div className="mb-10 flex justify-center gap-4 rounded-2xl border border-wine/25 bg-dark-elevated py-5 sm:gap-8 md:mb-14">
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

        {destaque && (
          <MotionReveal delay={0.15}>
            <article className="mb-8 rounded-2xl border-2 border-gold/40 bg-dark-elevated p-6 shadow-xl shadow-wine/20 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                  {sec.labelDestaque}
                </span>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: destaque.avaliacao }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="border-l-4 border-gold/40 pl-4 font-serif text-lg leading-relaxed text-cream md:text-xl">
                &ldquo;
                <ResponsiveText
                  mobile={destaque.textoResumo}
                  desktop={destaque.textoCompleto}
                />
                &rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wine font-semibold text-gold ring-2 ring-gold/40">
                  {destaque.iniciais}
                </div>
                <div>
                  <p className="font-semibold text-cream">{destaque.nome}</p>
                  <p className="text-sm text-cream/60">{destaque.cargo}</p>
                  <p className="text-sm font-semibold text-gold">
                    {destaque.resultado}
                  </p>
                </div>
              </footer>
            </article>
          </MotionReveal>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {outros.map((dep, i) => (
            <MotionReveal key={dep.nome} delay={0.1 + i * 0.08} direction="up">
              <article className="card-premium h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div className="mb-3 flex gap-0.5 text-gold">
                  {Array.from({ length: dep.avaliacao }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-cream/80">
                  &ldquo;
                  <ResponsiveText
                    mobile={dep.textoResumo}
                    desktop={dep.textoCompleto}
                  />
                  &rdquo;
                </blockquote>
                <footer className="mt-4 flex items-center gap-3 border-t border-wine/25 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wine text-xs font-semibold text-gold">
                    {dep.iniciais}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cream">
                      {dep.nome}
                    </p>
                    <p className="text-xs text-gold/80">{dep.servico}</p>
                  </div>
                </footer>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
