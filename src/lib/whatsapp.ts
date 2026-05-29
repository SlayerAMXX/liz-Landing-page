export function buildWhatsAppUrl(numero: string, mensagem: string): string {
  const params = new URLSearchParams({ text: mensagem });
  return `https://wa.me/${numero}?${params.toString()}`;
}
