"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import ResponsiveText from "./ResponsiveText";
import HeroStatCounter from "./HeroStatCounter";
import type { SiteConfig } from "@/lib/site-config";

type HeroProps = {
  hero: SiteConfig["hero"];
  estatisticas: SiteConfig["estatisticas"];
  imagens: SiteConfig["imagens"];
  ctaPrincipal: SiteConfig["ctaPrincipal"];
  whatsapp: SiteConfig["contato"]["whatsapp"];
  whatsappAriaLabel: string;
};

const easePremium = [0.22, 1, 0.36, 1] as const;

const headlineStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const headlineItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: easePremium },
  }),
};

export default function Hero({
  hero,
  estatisticas,
  imagens,
  ctaPrincipal,
  whatsapp,
  whatsappAriaLabel,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blobRightY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const blobLeftY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  const blobRightClass =
    "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-wine/15 blur-3xl";
  const blobLeftClass =
    "pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-wine/20 pt-36 pb-16 md:pt-44 md:pb-24"
    >
      {reduceMotion ? (
        <div className={blobRightClass} />
      ) : (
        <motion.div style={{ y: blobRightY }} className={blobRightClass} />
      )}
      {reduceMotion ? (
        <div className={blobLeftClass} />
      ) : (
        <motion.div style={{ y: blobLeftY }} className={blobLeftClass} />
      )}

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <div>
          {reduceMotion ? (
            <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-wine to-gold" />
          ) : (
            <motion.div
              initial={{ scaleX: 0, opacity: 0.5 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: easePremium }}
              style={{ originX: 0 }}
              className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-wine to-gold"
            />
          )}

          {reduceMotion ? (
            <h1 className="font-serif text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">
              {hero.headlineInicio}{" "}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                {hero.headlineDestaque}
              </span>{" "}
              {hero.headlineFim}
            </h1>
          ) : (
            <motion.h1
              variants={headlineStagger}
              initial="hidden"
              animate="show"
              className="font-serif text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl"
            >
              <motion.span variants={headlineItem} className="inline">
                {hero.headlineInicio}{" "}
              </motion.span>
              <motion.span variants={headlineItem} className="hero-headline-shimmer inline">
                {hero.headlineDestaque}
              </motion.span>{" "}
              <motion.span variants={headlineItem} className="inline">
                {hero.headlineFim}
              </motion.span>
            </motion.h1>
          )}

          {reduceMotion ? (
            <ResponsiveText
              as="p"
              mobile={hero.subtituloMobile}
              desktop={hero.subtituloDesktop}
              className="mt-5 text-base leading-relaxed text-cream/70 md:text-lg"
            />
          ) : (
            <motion.div
              custom={0.45}
              variants={{ hidden: { opacity: 0, y: 16 }, show: fadeUp.show }}
              initial="hidden"
              animate="show"
            >
              <ResponsiveText
                as="p"
                mobile={hero.subtituloMobile}
                desktop={hero.subtituloDesktop}
                className="mt-5 text-base leading-relaxed text-cream/70 md:text-lg"
              />
            </motion.div>
          )}

          {reduceMotion ? (
            <div className="mt-8 flex flex-col gap-3">
              <WhatsAppButton
                numero={whatsapp.numero}
                mensagemPadrao={whatsapp.mensagemPadrao}
                ariaLabel={whatsappAriaLabel}
                mensagem={ctaPrincipal.mensagem}
                className="w-full px-8 py-4 text-base transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                <MessageCircle size={20} />
                {ctaPrincipal.texto}
              </WhatsAppButton>
              <a
                href="#servicos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/30 px-6 py-2.5 text-sm font-medium text-cream/70 transition-all duration-300 hover:border-gold/50 hover:text-gold sm:w-auto"
              >
                {hero.ctaSecundario}
                <ArrowDown size={14} className="animate-bounce" />
              </a>
            </div>
          ) : (
            <motion.div
              custom={0.58}
              variants={{ hidden: { opacity: 0, y: 16 }, show: fadeUp.show }}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col gap-3"
            >
              <WhatsAppButton
                numero={whatsapp.numero}
                mensagemPadrao={whatsapp.mensagemPadrao}
                ariaLabel={whatsappAriaLabel}
                mensagem={ctaPrincipal.mensagem}
                className="w-full px-8 py-4 text-base transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                <MessageCircle size={20} />
                {ctaPrincipal.texto}
              </WhatsAppButton>
              <a
                href="#servicos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/30 px-6 py-2.5 text-sm font-medium text-cream/70 transition-all duration-300 hover:border-gold/50 hover:text-gold sm:w-auto"
              >
                {hero.ctaSecundario}
                <ArrowDown size={14} className="animate-bounce" />
              </a>
            </motion.div>
          )}

          <p className="mt-6 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold md:hidden">
            {hero.provaSocialMobile}
          </p>

          <div className="mt-10 hidden gap-8 md:flex">
            {estatisticas.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.75 + i * 0.1,
                  ease: easePremium,
                }}
                className="border-l-2 border-gold/50 pl-4 first:border-l-0 first:pl-0"
              >
                <p className="font-serif text-3xl font-bold text-gold">
                  <HeroStatCounter valor={stat.valor} />
                </p>
                <p className="text-sm text-cream/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          {reduceMotion ? (
            <>
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
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-wine/30 via-gold/20 to-wine/10 blur-sm"
              />
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.06,
                  clipPath: "inset(8% 8% 100% 8% round 1rem)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0% round 1rem)",
                }}
                transition={{ duration: 0.95, delay: 0.25, ease: easePremium }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gold/30 shadow-2xl shadow-wine/25"
              >
                <Image
                  src={imagens.equipe}
                  alt={hero.imagemEquipe.titulo}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-wine/20 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: easePremium }}
                  className="absolute bottom-4 left-4 right-4 rounded-xl border border-gold/20 bg-cream/95 p-4 backdrop-blur-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                    {hero.imagemEquipe.badge}
                  </span>
                  <p className="mt-1 font-serif text-lg font-bold text-dark">
                    {hero.imagemEquipe.titulo}
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: 0.85, ease: easePremium }}
                className="absolute -bottom-4 -left-4 hidden rounded-xl border border-gold/50 bg-dark p-4 shadow-xl md:block"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {hero.cardExcelencia.badge}
                </span>
                <p className="mt-1 text-sm font-medium text-cream">
                  {hero.cardExcelencia.titulo}
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {reduceMotion ? (
        <div className="relative mx-auto mt-10 max-w-6xl px-4 md:hidden">
          <div className="flex justify-around rounded-2xl border border-wine/25 bg-dark-elevated/90 px-4 py-4 backdrop-blur-sm">
            {estatisticas.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-gold">
                  <HeroStatCounter valor={stat.valor} />
                </p>
                <p className="text-xs text-cream/60">{stat.labelMobile}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: easePremium }}
          className="relative mx-auto mt-10 max-w-6xl px-4 md:hidden"
        >
          <div className="flex justify-around rounded-2xl border border-wine/25 bg-dark-elevated/90 px-4 py-4 backdrop-blur-sm">
            {estatisticas.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-gold">
                  <HeroStatCounter valor={stat.valor} />
                </p>
                <p className="text-xs text-cream/60">{stat.labelMobile}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
