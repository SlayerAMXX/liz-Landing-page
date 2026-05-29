type SectionHeaderProps = {
  badge: string;
  titulo: string;
  tituloDestaque?: string;
  descricao?: string;
  dark?: boolean;
};

export default function SectionHeader({
  badge,
  titulo,
  tituloDestaque,
  descricao,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <span
        className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
          dark
            ? "bg-gold/20 text-gold"
            : "bg-wine/10 text-wine"
        }`}
      >
        {badge}
      </span>
      <h2
        className={`font-serif text-3xl font-bold md:text-4xl lg:text-5xl ${
          dark ? "text-cream" : "text-dark"
        }`}
      >
        {titulo}{" "}
        {tituloDestaque && (
          <span className={dark ? "text-gold" : "text-wine"}>
            {tituloDestaque}
          </span>
        )}
      </h2>
      {descricao && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            dark ? "text-cream/70" : "text-dark/60"
          }`}
        >
          {descricao}
        </p>
      )}
    </div>
  );
}
