"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import {
  buildAnamneseMessage,
  initialAnamneseFormData,
  type AnamneseFormData,
} from "@/lib/anamnese";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { SiteConfig } from "@/lib/site-config";
import MotionReveal from "./MotionReveal";

type AnamneseFormProps = {
  anamnese: SiteConfig["anamnese"];
  servicos: SiteConfig["servicos"];
  whatsappNumero: string;
  whatsappIntro: string;
};

const inputClass =
  "w-full rounded-lg border border-gold/25 bg-dark-elevated px-4 py-3 text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20";

const labelClass = "mb-1.5 block text-sm font-medium text-cream/85";

export default function AnamneseForm({
  anamnese,
  servicos,
  whatsappNumero,
  whatsappIntro,
}: AnamneseFormProps) {
  const [form, setForm] = useState<AnamneseFormData>(initialAnamneseFormData);
  const [submitting, setSubmitting] = useState(false);

  function updateField<K extends keyof AnamneseFormData>(
    field: K,
    value: AnamneseFormData[K]
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const mensagem = buildAnamneseMessage(
      form,
      anamnese,
      servicos,
      whatsappIntro
    );
    const url = buildWhatsAppUrl(whatsappNumero, mensagem);

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  return (
    <MotionReveal>
      <form
        onSubmit={handleSubmit}
        className="card-premium mx-auto max-w-2xl rounded-2xl p-6 md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="nomeCompleto" className={labelClass}>
              {anamnese.campos.nomeCompleto} *
            </label>
            <input
              id="nomeCompleto"
              name="nomeCompleto"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
              value={form.nomeCompleto}
              onChange={(e) => updateField("nomeCompleto", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="telefone" className={labelClass}>
              {anamnese.campos.telefone} *
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              className={inputClass}
              value={form.telefone}
              onChange={(e) => updateField("telefone", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              {anamnese.campos.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cpf" className={labelClass}>
              {anamnese.campos.cpf}
            </label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              inputMode="numeric"
              placeholder="000.000.000-00"
              className={inputClass}
              value={form.cpf}
              onChange={(e) => updateField("cpf", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="tipoPessoa" className={labelClass}>
              {anamnese.campos.tipoPessoa} *
            </label>
            <select
              id="tipoPessoa"
              name="tipoPessoa"
              required
              className={inputClass}
              value={form.tipoPessoa}
              onChange={(e) => updateField("tipoPessoa", e.target.value)}
            >
              <option value="">Selecione</option>
              {anamnese.opcoes.tipoPessoa.map((opt) => (
                <option key={opt.valor} value={opt.valor}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="cidade" className={labelClass}>
              {anamnese.campos.cidade}
            </label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              autoComplete="address-level2"
              className={inputClass}
              value={form.cidade}
              onChange={(e) => updateField("cidade", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="estado" className={labelClass}>
              {anamnese.campos.estado}
            </label>
            <input
              id="estado"
              name="estado"
              type="text"
              maxLength={2}
              autoComplete="address-level1"
              placeholder="BA"
              className={`${inputClass} uppercase`}
              value={form.estado}
              onChange={(e) =>
                updateField("estado", e.target.value.toUpperCase())
              }
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="servicoInteresse" className={labelClass}>
              {anamnese.campos.servicoInteresse} *
            </label>
            <select
              id="servicoInteresse"
              name="servicoInteresse"
              required
              className={inputClass}
              value={form.servicoInteresse}
              onChange={(e) => updateField("servicoInteresse", e.target.value)}
            >
              <option value="">Selecione um serviço</option>
              {servicos.map((s) => (
                <option key={s.titulo} value={s.titulo}>
                  {s.titulo}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="restricaoNome" className={labelClass}>
              {anamnese.campos.restricaoNome} *
            </label>
            <select
              id="restricaoNome"
              name="restricaoNome"
              required
              className={inputClass}
              value={form.restricaoNome}
              onChange={(e) => updateField("restricaoNome", e.target.value)}
            >
              <option value="">Selecione</option>
              {anamnese.opcoes.restricaoNome.map((opt) => (
                <option key={opt.valor} value={opt.valor}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="valorDividas" className={labelClass}>
              {anamnese.campos.valorDividas} *
            </label>
            <select
              id="valorDividas"
              name="valorDividas"
              required
              className={inputClass}
              value={form.valorDividas}
              onChange={(e) => updateField("valorDividas", e.target.value)}
            >
              <option value="">Selecione uma faixa</option>
              {anamnese.opcoes.valorDividas.map((opt) => (
                <option key={opt.valor} value={opt.valor}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="score" className={labelClass}>
              {anamnese.campos.score}
            </label>
            <input
              id="score"
              name="score"
              type="text"
              inputMode="numeric"
              placeholder="Ex.: 450"
              className={inputClass}
              value={form.score}
              onChange={(e) => updateField("score", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="observacoes" className={labelClass}>
              {anamnese.campos.observacoes}
            </label>
            <textarea
              id="observacoes"
              name="observacoes"
              rows={4}
              className={`${inputClass} resize-y min-h-[120px]`}
              placeholder="Descreva brevemente sua situação, principais dívidas ou objetivos..."
              value={form.observacoes}
              onChange={(e) => updateField("observacoes", e.target.value)}
            />
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-cream/50 md:text-sm">
          {anamnese.avisoPrivacidade}
        </p>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-wine-dark/50 bg-wine px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-wine/30 transition-all duration-300 hover:bg-wine-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              anamnese.botaoEnviando
            ) : (
              <>
                <MessageCircle size={18} />
                {anamnese.botaoEnviar}
                <Send size={16} className="opacity-80" />
              </>
            )}
          </button>
        </div>
      </form>
    </MotionReveal>
  );
}
