"use client";

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";
import MotionReveal from "./MotionReveal";
import ResponsiveText from "./ResponsiveText";

export default function Hero() {
  const { hero, estatisticas, imagens } = siteConfig;

  return (
    <section className="relative overflow-hidden border-b border-wine/20 pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-wine/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <MotionReveal direction="left">
          <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-wine to-gold" />
          <h1 className="font-serif text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">
            {hero.headlineInicio}{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              {hero.headlineDestaque}
            </span>{" "}
            {hero.headlineFim}
          </h1>

          <ResponsiveText
            as="p"
            mobile={hero.subtituloMobile}
            desktop={hero.subtituloDesktop}
            className="mt-5 leading-relaxed text-cream/70 text-base md:text-lg"
          />

          <div className="mt-8 flex flex-col gap-3">
            <WhatsAppButton
              mensagem={siteConfig.ctaPrincipal.mensagem}
              className="w-full px-8 py-4 text-base transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <MessageCircle size={20} />
              {siteConfig.ctaPrincipal.texto}
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/30 px-6 py-2.5 text-sm font-medium text-cream/70 transition-all duration-300 hover:border-gold/50 hover:text-gold sm:w-auto"
            >
              {hero.ctaSecundario}
              <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>

          <p className="mt-6 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold md:hidden">
            {hero.provaSocialMobile}
          </p>

          <div className="mt-10 hidden gap-8 md:flex">
            {estatisticas.map((stat, i) => (
              <MotionReveal key={stat.label} delay={0.2 + i * 0.1} direction="up">
                <div className="border-l-2 border-gold/50 pl-4 first:border-l-0 first:pl-0">
                  <p className="font-serif text-3xl font-bold text-gold">
                    {stat.valor}
                  </p>
                  <p className="text-sm text-cream/60">{stat.label}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12} direction="right">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-wine/30 via-gold/20 to-wine/10 blur-sm" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gold/30 shadow-2xl shadow-wine/25">
              <Image
                src={imagens.equipe}
                alt={hero.imagemEquipe.titulo}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-wine/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gold/20 bg-cream/95 p-4 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  {hero.imagemEquipe.badge}
                </span>
                <p className="mt-1 font-serif text-lg font-bold text-dark">
                  {hero.imagemEquipe.titulo}
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-gold/50 bg-dark p-4 shadow-xl md:block">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                {hero.cardExcelencia.badge}
              </span>
              <p className="mt-1 text-sm font-medium text-cream">
                {hero.cardExcelencia.titulo}
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>

      <MotionReveal delay={0.2} className="relative mx-auto mt-10 max-w-6xl px-4 md:hidden">
        <div className="flex justify-around rounded-2xl border border-wine/25 bg-dark-elevated/90 px-4 py-4 backdrop-blur-sm">
          {estatisticas.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl font-bold text-gold">
                {stat.valor}
              </p>
              <p className="text-xs text-cream/60">{stat.labelMobile}</p>
            </div>
          ))}
        </div>
      </MotionReveal>
    </section>
  );
}
