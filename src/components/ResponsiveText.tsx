import type { ElementType, ReactNode } from "react";

type ResponsiveTextProps = {
  mobile: ReactNode;
  desktop: ReactNode;
  as?: ElementType;
  className?: string;
};

/** Exibe só uma variante por breakpoint (evita texto duplicado no DOM visível) */
export default function ResponsiveText({
  mobile,
  desktop,
  as: Tag = "span",
  className = "",
}: ResponsiveTextProps) {
  const base = className;
  return (
    <>
      <Tag className={`block md:hidden ${base}`.trim()}>{mobile}</Tag>
      <Tag className={`hidden md:block ${base}`.trim()}>{desktop}</Tag>
    </>
  );
}
