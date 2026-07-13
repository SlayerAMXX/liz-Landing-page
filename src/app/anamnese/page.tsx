import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionHeader from "@/components/SectionHeader";
import AnamneseForm from "@/components/AnamneseForm";
import { siteConfig } from "@/lib/site-config.server";

const { anamnese, navegacao, imagens, site, contato, ui, servicos } =
  siteConfig;

export const metadata: Metadata = {
  title: anamnese.seo.titulo,
  description: anamnese.seo.descricao,
};

export default function AnamnesePage() {
  return (
    <>
      <Navbar
        links={navegacao.links}
        logoSrc={imagens.logo}
        logoAlt={site.nome}
      />
      <main className="min-h-screen pt-[4.75rem] md:pt-24">
        <section className="bg-section-alt py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeader
              badge={anamnese.badge}
              titulo={anamnese.titulo}
              tituloDestaque={anamnese.tituloDestaque}
              descricao={anamnese.descricao}
            />
            <AnamneseForm
              anamnese={anamnese}
              servicos={servicos}
              whatsappNumero={contato.whatsapp.numero}
              whatsappIntro={contato.whatsapp.mensagemAnamnese}
            />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp
        numero={contato.whatsapp.numero}
        mensagemPadrao={contato.whatsapp.mensagemPadrao}
        ariaLabel={ui.whatsappAriaLabel}
      />
    </>
  );
}
