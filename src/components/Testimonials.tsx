"use client";

import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import SectionHeader from "./SectionHeader";
import MotionReveal from "./MotionReveal";

export default function Testimonials() {
  const { secoes, depoimentos } = siteConfig;
  const sec = secoes.depoimentos;
  const destaque = depoimentos.find((d) => d.destaque);
  const outros = depoimentos.filter((d) => !d.destaque);

  return (
    <section
      id="depoimentos"
      className="border-y border-wine/10 bg-gradient-to-b from-wine/10 via-cream to-gold/10 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          badge={sec.badge}
          titulo={sec.titulo}
          tituloDestaque={sec.tituloDestaque}
          descricao={sec.descricaoDesktop}
        />

        <div className="mb-10 flex justify-center gap-8 rounded-2xl border border-wine/15 bg-white/70 py-6 md:mb-14">
          {sec.estatisticas.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p className="font-serif text-2xl font-bold text-wine md:text-3xl">
                {stat.valor}
              </p>
              <p className="text-xs font-medium text-dark/60 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {destaque && (
          <MotionReveal>
            <article className="mb-8 rounded-2xl border-2 border-gold/50 bg-white p-6 shadow-xl shadow-wine/15 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-gold/40 bg-gold/25 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-wine">
                  {sec.labelDestaque}
                </span>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: destaque.avaliacao }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="border-l-4 border-wine/30 pl-4 font-serif text-lg leading-relaxed text-dark md:text-xl">
                &ldquo;
                <span className="md:hidden">{destaque.textoResumo}</span>
                <span className="hidden md:inline">
                  {destaque.textoCompleto}
                </span>
                &rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wine font-semibold text-gold ring-2 ring-gold/40">
                  {destaque.iniciais}
                </div>
                <div>
                  <p className="font-semibold text-dark">{destaque.nome}</p>
                  <p className="text-sm text-dark/60">{destaque.cargo}</p>
                  <p className="text-sm font-semibold text-wine">
                    {destaque.resultado}
                  </p>
                </div>
              </footer>
            </article>
          </MotionReveal>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {outros.map((dep, i) => (
            <MotionReveal key={dep.nome} delay={i * 0.08}>
              <article className="card-premium h-full rounded-2xl bg-white p-5 transition-all hover:-translate-y-0.5">
                <div className="mb-3 flex gap-0.5 text-gold">
                  {Array.from({ length: dep.avaliacao }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-dark/80">
                  &ldquo;
                  <span className="md:hidden">{dep.textoResumo}</span>
                  <span className="hidden md:inline">{dep.textoCompleto}</span>
                  &rdquo;
                </blockquote>
                <footer className="mt-4 flex items-center gap-3 border-t border-wine/15 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wine text-xs font-semibold text-gold">
                    {dep.iniciais}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      {dep.nome}
                    </p>
                    <p className="text-xs text-wine/80">{dep.servico}</p>
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
