import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/get-site-url";
import "./globals.css";

const { seo, site } = siteConfig;
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.titulo,
  description: seo.descricao,
  keywords: seo.palavrasChave,
  openGraph: {
    title: seo.titulo,
    description: seo.descricao,
    url: siteUrl,
    siteName: site.nome,
    images: [{ url: seo.imagemCompartilhamento }],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
