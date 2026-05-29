type SectionHeaderProps = {
  badge: string;
  titulo: string;
  tituloDestaque?: string;
  descricao?: string;
  /** Seção com fundo vinho (badge/texto adaptados) */
  onWine?: boolean;
};

export default function SectionHeader({
  badge,
  titulo,
  tituloDestaque,
  descricao,
  onWine = false,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <span
        className={`mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
          onWine
            ? "border-gold/40 bg-gold/15 text-gold"
            : "border-gold/30 bg-gold/10 text-gold"
        }`}
      >
        {badge}
      </span>
      <div className="gold-divider mb-5" />
      <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
        {titulo}{" "}
        {tituloDestaque && (
          <span className="text-gold">{tituloDestaque}</span>
        )}
      </h2>
      {descricao && (
        <p className="mt-4 text-base leading-relaxed text-cream/70 md:text-lg">
          {descricao}
        </p>
      )}
    </div>
  );
}
