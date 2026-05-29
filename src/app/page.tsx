import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config.server";

export default function Home() {
  const { navegacao, imagens, site, hero, estatisticas, ctaPrincipal, contato, ui, secoes, faq, depoimentos } =
    siteConfig;

  return (
    <>
      <Navbar
        links={navegacao.links}
        logoSrc={imagens.logo}
        logoAlt={site.nome}
      />
      <main>
        <Hero
          hero={hero}
          estatisticas={estatisticas}
          imagens={imagens}
          ctaPrincipal={ctaPrincipal}
          whatsapp={contato.whatsapp}
          whatsappAriaLabel={ui.whatsappAriaLabel}
        />
        <Benefits />
        <HowItWorks />
        <Testimonials secao={secoes.depoimentos} depoimentos={depoimentos} />
        <FAQ
          secao={secoes.faq}
          faq={faq}
          whatsappNumero={contato.whatsapp.numero}
          whatsappMensagemFaqExtra={contato.whatsapp.mensagemFaqExtra}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
