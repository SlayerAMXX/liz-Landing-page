import { siteConfig } from "@/lib/site-config";
import { getServiceIcon } from "@/lib/icons";
import SectionHeader from "./SectionHeader";

export default function Benefits() {
  const { secoes, servicos } = siteConfig;
  const sec = secoes.servicos;

  return (
    <section id="servicos" className="bg-dark py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          badge={sec.badge}
          titulo={sec.titulo}
          tituloDestaque={sec.tituloDestaque}
          descricao={sec.descricaoDesktop}
          dark
        />

        <p className="mb-8 text-center text-sm text-cream/60 md:hidden">
          {sec.tagsMobile}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico) => {
            const Icon = getServiceIcon(servico.icone);
            return (
              <article
                key={servico.titulo}
                className="group rounded-2xl border border-gold/10 bg-cream/5 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-cream/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-wine/20 p-3 text-gold transition-colors group-hover:bg-wine">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-cream">
                  {servico.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60 md:hidden">
                  {servico.resumoMobile}
                </p>
                <p className="mt-2 hidden text-sm leading-relaxed text-cream/60 md:block">
                  {servico.descricao}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
