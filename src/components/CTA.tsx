import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";

export default function CTA() {
  const { secoes } = siteConfig;
  const sec = secoes.cta;

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-wine py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-gold)_0%,_transparent_50%)] opacity-10" />

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
          {sec.badge}
        </span>

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

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
          {sec.descricaoDesktop}
        </p>

        <WhatsAppButton
          mensagem={siteConfig.contato.whatsapp.mensagemConsultoria}
          className="mt-8 bg-gold text-dark hover:bg-gold-light"
        >
          <MessageCircle size={18} />
          {sec.botao}
        </WhatsAppButton>

        <p className="mt-5 text-sm text-cream/50">{sec.rodape}</p>
      </div>
    </section>
  );
}
