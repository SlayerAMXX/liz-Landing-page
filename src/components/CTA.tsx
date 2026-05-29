import { siteConfig } from "@/lib/site-config";
import MotionReveal from "./MotionReveal";

/** Seção de reforço visual — o único botão de WhatsApp fica no Hero */
export default function CTA() {
  const { secoes } = siteConfig;
  const sec = secoes.cta;

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-mesh-wine py-12 md:py-16"
    >
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <MotionReveal>
          <span className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            {sec.badge}
          </span>
          <div className="gold-divider mb-6" />

          <h2 className="font-serif text-2xl font-bold text-cream md:text-4xl">
            <span className="md:hidden">
              {sec.tituloMobileInicio}
              <span className="text-gold">{sec.tituloDestaque}</span>
              {sec.tituloMobileFim}
            </span>
            <span className="hidden md:inline">
              {sec.titulo}{" "}
              <span className="text-gold">{sec.tituloDestaque}</span>
              {sec.tituloDesktopFim}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/75 md:text-base">
            {sec.descricaoDesktop}
          </p>

          <p className="mt-4 text-xs text-cream/50 md:text-sm">{sec.rodape}</p>
        </MotionReveal>
      </div>
    </section>
  );
}
