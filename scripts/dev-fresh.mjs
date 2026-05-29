/**
 * Limpa o cache .next e inicia o servidor de desenvolvimento.
 * Use quando aparecer erro 500 ou routes-manifest.json ausente.
 */
import { rmSync } from "fs";
import { spawn } from "child_process";

try {
  rmSync(".next", { recursive: true, force: true });
  console.log("Cache .next removido.");
} catch {
  /* pasta inexistente */
}

const cmd = process.platform === "win32" ? "npx.cmd" : "npx";
const child = spawn(cmd, ["next", "dev"], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
