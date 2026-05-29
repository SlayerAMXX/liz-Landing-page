import { siteConfig } from "@/lib/site-config";
import { getServiceIcon } from "@/lib/icons";
import SectionHeader from "./SectionHeader";
import MotionReveal from "./MotionReveal";

export default function Benefits() {
  const { secoes, servicos } = siteConfig;
  const sec = secoes.servicos;

  return (
    <section id="servicos" className="bg-mesh-wine py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          badge={sec.badge}
          titulo={sec.titulo}
          tituloDestaque={sec.tituloDestaque}
          descricao={sec.descricaoDesktop}
          dark
        />

        <p className="mb-8 text-center text-sm font-medium text-gold/80 md:hidden">
          {sec.tagsMobile}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico, i) => {
            const Icon = getServiceIcon(servico.icone);
            return (
              <MotionReveal key={servico.titulo} delay={i * 0.08}>
                <article className="group card-premium h-full rounded-2xl bg-cream/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-cream/15">
                  <div className="mb-4 inline-flex rounded-xl bg-wine p-3 text-gold shadow-lg shadow-wine/40 transition-transform group-hover:scale-105">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-cream">
                    {servico.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65 md:hidden">
                    {servico.resumoMobile}
                  </p>
                  <p className="mt-2 hidden text-sm leading-relaxed text-cream/65 md:block">
                    {servico.descricao}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
