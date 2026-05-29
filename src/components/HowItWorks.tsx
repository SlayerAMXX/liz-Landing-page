import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  const { secoes, passos, imagens } = siteConfig;
  const sec = secoes.comoFunciona;

  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          badge={sec.badge}
          titulo={sec.titulo}
          tituloDestaque={sec.tituloDestaque}
          descricao={sec.descricaoDesktop}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {passos.map((passo) => (
              <article
                key={passo.numero}
                className="flex gap-5 rounded-2xl border border-wine/10 bg-white/50 p-5 transition-shadow hover:shadow-lg hover:shadow-wine/5"
              >
                <span className="font-serif text-3xl font-bold text-gold">
                  {passo.numero}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-dark md:text-xl">
                    <span className="md:hidden">{passo.tituloMobile}</span>
                    <span className="hidden md:inline">
                      {passo.tituloCompleto}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark/60">
                    {passo.descricao}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl shadow-wine/10">
            <Image
              src={imagens.ceo}
              alt={sec.imagemCeo.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/20 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                {sec.imagemCeo.badge}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-cream md:text-3xl">
                {sec.imagemCeo.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                {sec.imagemCeo.descricao}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
