import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import SectionHeader from "./SectionHeader";
import MotionReveal from "./MotionReveal";
import ResponsiveText from "./ResponsiveText";

export default function HowItWorks() {
  const { secoes, passos, imagens } = siteConfig;
  const sec = secoes.comoFunciona;

  return (
    <section id="como-funciona" className="bg-section-alt py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <MotionReveal>
          <SectionHeader
            badge={sec.badge}
            titulo={sec.titulo}
            tituloDestaque={sec.tituloDestaque}
            descricao={sec.descricaoDesktop}
          />
        </MotionReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {passos.map((passo, i) => (
              <MotionReveal key={passo.numero} delay={i * 0.08} direction="left">
                <article className="card-surface flex gap-5 rounded-2xl p-5 transition-all duration-300 hover:border-wine/40 hover:shadow-lg hover:shadow-wine/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-wine font-serif text-lg font-bold text-gold">
                    {passo.numero}
                  </span>
                  <div>
                    <ResponsiveText
                      as="h3"
                      mobile={passo.tituloMobile}
                      desktop={passo.tituloCompleto}
                      className="font-serif text-lg font-bold text-cream md:text-xl"
                    />
                    <p className="mt-1 text-sm leading-relaxed text-cream/65">
                      {passo.descricao}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={0.15} direction="right">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-wine/30 shadow-2xl shadow-black/40">
              <Image
                src={imagens.ceo}
                alt={sec.imagemCeo.titulo}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/30 to-wine/10" />
              <div className="absolute bottom-0 p-6 md:p-8">
                <span className="rounded-full border border-gold/40 bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                  {sec.imagemCeo.badge}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-cream md:text-3xl">
                  {sec.imagemCeo.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/85">
                  {sec.imagemCeo.descricao}
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
