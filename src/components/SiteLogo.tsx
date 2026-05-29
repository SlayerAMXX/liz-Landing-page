import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const LOGO_SIZE = 500;

type SiteLogoProps = {
  variant?: "navbar" | "footer";
  priority?: boolean;
  className?: string;
};

/** Caixa de exibição + imagem maior com scale para compensar margem interna do PNG */
const variants = {
  navbar: {
    // Mantém o layout do nav compacto (caixa pequena),
    // mas aumenta a logo via transform (não altera a altura do header).
    box: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16",
    img: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 scale-[1.35]",
  },
  footer: {
    box: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20",
    img: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 scale-[1.3] brightness-0 invert",
  },
};

export default function SiteLogo({
  variant = "navbar",
  priority = false,
  className = "",
}: SiteLogoProps) {
  const { imagens, site } = siteConfig;
  const v = variants[variant];

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden ${v.box} ${className}`.trim()}
    >
      <Image
        src={imagens.logo}
        alt={site.nome}
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        priority={priority}
        className={`object-contain ${v.img}`}
      />
    </span>
  );
}
