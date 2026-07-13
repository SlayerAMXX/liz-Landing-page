import type { SiteConfig } from "./site-config";

export type AnamneseFormData = {
  nomeCompleto: string;
  telefone: string;
  email: string;
  cpf: string;
  tipoPessoa: string;
  cidade: string;
  estado: string;
  servicoInteresse: string;
  restricaoNome: string;
  valorDividas: string;
  score: string;
  observacoes: string;
};

export const initialAnamneseFormData: AnamneseFormData = {
  nomeCompleto: "",
  telefone: "",
  email: "",
  cpf: "",
  tipoPessoa: "",
  cidade: "",
  estado: "",
  servicoInteresse: "",
  restricaoNome: "",
  valorDividas: "",
  score: "",
  observacoes: "",
};

function labelForOption(
  options: { valor: string; label: string }[],
  value: string
): string {
  return options.find((o) => o.valor === value)?.label ?? value;
}

export function buildAnamneseMessage(
  data: AnamneseFormData,
  config: SiteConfig["anamnese"],
  servicos: SiteConfig["servicos"],
  intro: string
): string {
  const lines = [
    intro,
    "",
    "📋 *ANAMNESE FINANCEIRA*",
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    `👤 *${config.campos.nomeCompleto}:* ${data.nomeCompleto}`,
    `📱 *${config.campos.telefone}:* ${data.telefone}`,
  ];

  if (data.email.trim()) {
    lines.push(`📧 *${config.campos.email}:* ${data.email}`);
  }

  if (data.cpf.trim()) {
    lines.push(`🪪 *${config.campos.cpf}:* ${data.cpf}`);
  }

  if (data.tipoPessoa) {
    lines.push(
      `🏷️ *${config.campos.tipoPessoa}:* ${labelForOption(config.opcoes.tipoPessoa, data.tipoPessoa)}`
    );
  }

  if (data.cidade.trim() || data.estado.trim()) {
    const local = [data.cidade.trim(), data.estado.trim().toUpperCase()]
      .filter(Boolean)
      .join(" - ");
    lines.push(`📍 *Localização:* ${local}`);
  }

  if (data.servicoInteresse) {
    const servico =
      servicos.find((s) => s.titulo === data.servicoInteresse)?.titulo ??
      data.servicoInteresse;
    lines.push(`💼 *${config.campos.servicoInteresse}:* ${servico}`);
  }

  if (data.restricaoNome) {
    lines.push(
      `⚠️ *${config.campos.restricaoNome}:* ${labelForOption(config.opcoes.restricaoNome, data.restricaoNome)}`
    );
  }

  if (data.valorDividas) {
    lines.push(
      `💰 *${config.campos.valorDividas}:* ${labelForOption(config.opcoes.valorDividas, data.valorDividas)}`
    );
  }

  if (data.score.trim()) {
    lines.push(`📊 *${config.campos.score}:* ${data.score}`);
  }

  if (data.observacoes.trim()) {
    lines.push("", `📝 *${config.campos.observacoes}:*`, data.observacoes.trim());
  }

  lines.push("", "━━━━━━━━━━━━━━━━━━━━", "Enviado pelo site Lizaviê");

  return lines.join("\n");
}
