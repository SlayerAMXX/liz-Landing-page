import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config.server";

const LOGO_PATH = join(process.cwd(), "public", siteConfig.imagens.logo.replace(/^\//, ""));

export async function getBrandLogoDataUrl(): Promise<string> {
  const buffer = await readFile(LOGO_PATH);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export const brandIconBackground = "#111111";
