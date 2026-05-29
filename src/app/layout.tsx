import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config.server";
import { getSiteUrl } from "@/lib/get-site-url";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

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
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-mesh-dark">{children}</body>
    </html>
  );
}
