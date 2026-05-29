import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const { footer, contato, imagens, site, navegacao, servicos } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-gold/30 bg-dark py-12 md:py-16">
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="mx-auto max-w-6xl px-4 pt-10 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src={imagens.logo}
              alt={site.nome}
              width={140}
              height={48}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-cream/60">
              {footer.descricao}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              {footer.colunaServicos}
            </h3>
            <ul className="space-y-2">
              {servicos.map((s) => (
                <li key={s.titulo}>
                  <a
                    href="#servicos"
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              {footer.colunaEmpresa}
            </h3>
            <ul className="space-y-2">
              {navegacao.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              {footer.colunaContato}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={buildWhatsAppUrl(
                    contato.whatsapp.numero,
                    contato.whatsapp.mensagemPadrao
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <Phone size={16} className="text-gold" />
                  {contato.telefone.exibicao}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contato.email}`}
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <Mail size={16} className="text-gold" />
                  {contato.email}
                </a>
              </li>
              <li>
                <a
                  href={contato.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <Instagram size={16} className="text-gold" />
                  {contato.instagram.usuario}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/40">
            © {year} {footer.copyright}
          </p>
          <p className="text-xs text-cream/40">CNPJ: {contato.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
