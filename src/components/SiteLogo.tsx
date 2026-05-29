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
    box: "h-[4.25rem] w-[4.25rem] sm:h-20 sm:w-20 md:h-32 md:w-32",
    img: "h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-40 scale-[1.14]",
  },
  footer: {
    box: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36",
    img: "h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 scale-[1.12] brightness-0 invert",
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
