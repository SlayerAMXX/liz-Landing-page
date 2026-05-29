import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import MotionReveal from "./MotionReveal";

export default function Footer() {
  const { footer, contato, imagens, site, navegacao, servicos } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="border-t-2 border-gold/30 bg-dark py-8 md:border-t-4 md:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <MotionReveal>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:gap-10 md:text-left lg:grid-cols-4">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src={imagens.logo}
                alt={site.nome}
                width={200}
                height={72}
                className="mb-3 h-12 w-auto min-w-[140px] brightness-0 invert md:mb-4 md:h-14"
              />
              <p className="max-w-xs text-xs leading-relaxed text-cream/55 md:max-w-none md:text-sm">
                {footer.descricao}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-left md:contents">
              <div className="mx-auto w-full max-w-[140px] md:max-w-none">
                <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gold md:mb-4 md:text-sm">
                  {footer.colunaServicos}
                </h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {servicos.map((s) => (
                    <li key={s.titulo}>
                      <a
                        href="#servicos"
                        className="text-xs text-cream/60 transition-colors hover:text-gold md:text-sm"
                      >
                        {s.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mx-auto w-full max-w-[140px] md:max-w-none">
                <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gold md:mb-4 md:text-sm">
                  {footer.colunaEmpresa}
                </h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {navegacao.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-xs text-cream/60 transition-colors hover:text-gold md:text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gold md:mb-4 md:text-sm">
                {footer.colunaContato}
              </h3>
              <ul className="flex flex-col items-center gap-2.5 md:items-start md:gap-3">
                <li>
                  <a
                    href={buildWhatsAppUrl(
                      contato.whatsapp.numero,
                      contato.whatsapp.mensagemPadrao
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-cream/60 transition-colors hover:text-gold md:text-sm"
                  >
                    <Phone size={14} className="shrink-0 text-gold md:size-4" />
                    {contato.telefone.exibicao}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contato.email}`}
                    className="inline-flex items-center gap-2 text-xs text-cream/60 transition-colors hover:text-gold md:text-sm"
                  >
                    <Mail size={14} className="shrink-0 text-gold md:size-4" />
                    {contato.email}
                  </a>
                </li>
                <li>
                  <a
                    href={contato.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-cream/60 transition-colors hover:text-gold md:text-sm"
                  >
                    <Instagram size={14} className="shrink-0 text-gold md:size-4" />
                    {contato.instagram.usuario}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 border-t border-cream/10 pt-6 text-center md:mt-10 md:flex-row md:justify-between md:gap-4 md:pt-8 md:text-left">
            <p className="text-[10px] leading-relaxed text-cream/40 md:text-xs">
              © {year} {footer.copyright}
            </p>
            <p className="text-[10px] text-cream/40 md:text-xs">
              CNPJ: {contato.cnpj}
            </p>
          </div>
        </MotionReveal>
      </div>
    </footer>
  );
}
