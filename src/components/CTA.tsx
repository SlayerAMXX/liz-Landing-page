import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";
import MotionReveal from "./MotionReveal";

export default function CTA() {
  const { secoes } = siteConfig;
  const sec = secoes.cta;

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-mesh-wine py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-wine-light blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <MotionReveal>
          <span className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            {sec.badge}
          </span>
          <div className="gold-divider mb-6" />

          <h2 className="font-serif text-3xl font-bold text-cream md:text-5xl">
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

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            {sec.descricaoDesktop}
          </p>

          <WhatsAppButton
            mensagem={siteConfig.contato.whatsapp.mensagemConsultoria}
            variant="gold"
            className="mt-8 px-8 py-4 text-base"
          >
            <MessageCircle size={18} />
            {sec.botao}
          </WhatsAppButton>

          <p className="mt-5 text-sm text-cream/55">{sec.rodape}</p>
        </MotionReveal>
      </div>
    </section>
  );
}
