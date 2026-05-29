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
    box: "h-[3.75rem] w-[3.75rem] sm:h-[4.25rem] sm:w-[4.25rem] md:h-28 md:w-28",
    img: "h-[5.25rem] w-[5.25rem] sm:h-24 sm:w-24 md:h-36 md:w-36 scale-[1.12]",
  },
  footer: {
    box: "h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32",
    img: "h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 scale-[1.1] brightness-0 invert",
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
