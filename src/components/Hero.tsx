"use client";

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";
import MotionReveal from "./MotionReveal";

export default function Hero() {
  const { hero, estatisticas, imagens } = siteConfig;

  return (
    <section className="relative overflow-hidden border-b border-wine/10 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-wine/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <MotionReveal>
          <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-wine to-gold" />
          <h1 className="font-serif text-4xl font-bold leading-tight text-dark md:text-5xl lg:text-6xl">
            {hero.headlineInicio}{" "}
            <span className="bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent">
              {hero.headlineDestaque}
            </span>{" "}
            {hero.headlineFim}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-dark/70 md:hidden">
            {hero.subtituloMobile}
          </p>
          <p className="mt-5 hidden text-lg leading-relaxed text-dark/70 md:block">
            {hero.subtituloDesktop}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              mensagem={siteConfig.contato.whatsapp.mensagemConsultoria}
              className="md:hidden"
            >
              <MessageCircle size={18} />
              {hero.ctaMobile}
            </WhatsAppButton>
            <WhatsAppButton
              mensagem={siteConfig.contato.whatsapp.mensagemConsultoria}
              className="hidden md:inline-flex"
            >
              <MessageCircle size={18} />
              {hero.ctaDesktop}
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-wine/30 bg-white/60 px-6 py-3 text-sm font-semibold text-wine backdrop-blur-sm transition-colors hover:border-wine hover:bg-wine hover:text-cream"
            >
              {hero.ctaSecundario}
              <ArrowDown size={16} />
            </a>
          </div>

          <p className="mt-6 inline-block rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-sm font-semibold text-wine md:hidden">
            {hero.provaSocialMobile}
          </p>

          <div className="mt-10 hidden gap-8 md:flex">
            {estatisticas.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-gold/50 pl-4 first:border-l-0 first:pl-0"
              >
                <p className="font-serif text-3xl font-bold text-wine">
                  {stat.valor}
                </p>
                <p className="text-sm text-dark/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-wine/30 via-gold/20 to-wine/10 blur-sm" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gold/30 shadow-2xl shadow-wine/25">
              <Image
                src={imagens.equipe}
                alt={hero.imagemEquipe.titulo}
                fill
                className="object-cover"
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

      <div className="relative mx-auto mt-10 flex justify-around rounded-2xl border border-wine/10 bg-white/50 px-4 py-4 backdrop-blur-sm md:hidden">
        {estatisticas.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-2xl font-bold text-wine">
              {stat.valor}
            </p>
            <p className="text-xs text-dark/60">{stat.labelMobile}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
