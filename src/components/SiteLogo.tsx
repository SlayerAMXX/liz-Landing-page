import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const LOGO_SIZE = 500;

type SiteLogoProps = {
  variant?: "navbar" | "footer";
  priority?: boolean;
  className?: string;
};

const variantClasses = {
  navbar: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16",
  footer: "h-14 w-14 brightness-0 invert md:h-[4.5rem] md:w-[4.5rem]",
};

export default function SiteLogo({
  variant = "navbar",
  priority = false,
  className = "",
}: SiteLogoProps) {
  const { imagens, site } = siteConfig;

  return (
    <Image
      src={imagens.logo}
      alt={site.nome}
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      priority={priority}
      className={`object-contain ${variantClasses[variant]} ${className}`.trim()}
    />
  );
}
