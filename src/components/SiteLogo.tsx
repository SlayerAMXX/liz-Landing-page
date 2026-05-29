import Image from "next/image";

const LOGO_SIZE = 500;

type SiteLogoProps = {
  src: string;
  alt: string;
  variant?: "navbar" | "footer";
  priority?: boolean;
  className?: string;
};

/** Caixa de exibição + scale para compensar margem interna do PNG */
const variants = {
  navbar: {
    box: "h-14 w-14 md:h-16 md:w-16",
    img: "h-14 w-14 scale-[1.48] md:h-16 md:w-16 md:scale-[1.35]",
  },
  footer: {
    box: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20",
    img: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 scale-[1.3] brightness-0 invert",
  },
};

export default function SiteLogo({
  src,
  alt,
  variant = "navbar",
  priority = false,
  className = "",
}: SiteLogoProps) {
  const v = variants[variant];
  const overflowClass = variant === "navbar" ? "overflow-visible" : "overflow-hidden";

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${overflowClass} ${v.box} ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        priority={priority}
        className={`object-contain ${v.img}`}
      />
    </span>
  );
}
