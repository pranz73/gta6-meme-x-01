const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  const source = path.join(botDir, 'POST.json');
  const destination = path.join(outputDir, 'POST.json');

  await fs.mkdir(outputDir, { recursive: true });
  await fs.copyFile(source, destination);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Error: ${message}\n`);
  process.exitCode = 1;
});
