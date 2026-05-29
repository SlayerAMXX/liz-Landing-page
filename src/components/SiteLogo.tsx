import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const LOGO_SIZE = 500;

type SiteLogoProps = {
  variant?: "navbar" | "footer";
  priority?: boolean;
  className?: string;
};

const variantClasses = {
  navbar: "h-[4.25rem] w-[4.25rem] sm:h-[4.75rem] sm:w-[4.75rem] md:h-24 md:w-24",
  footer:
    "h-20 w-20 brightness-0 invert sm:h-[5.5rem] sm:w-[5.5rem] md:h-28 md:w-28",
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
