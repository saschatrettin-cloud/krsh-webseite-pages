import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
} from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = fileURLToPath(new URL(".", import.meta.url));
const siteDir = resolve(scriptDir, "..");
const repoRoot = resolve(siteDir, "..");
const distDir = resolve(siteDir, "dist");
const preserve = new Set([
  ".git",
  ".github",
  "site",
  "README.md",
  ".gitignore",
  "assets",
  "fileadmin",
  "copilot-schulung-kanzlei.html",
]);
const requiredFiles = ["index.html", "CNAME", ".nojekyll"];

function copyDirectoryContents(sourceDir, targetDir) {
  mkdirSync(targetDir, { recursive: true });

  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = resolve(sourceDir, entry.name);
    const targetPath = resolve(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryContents(sourcePath, targetPath);
      continue;
    }

    copyFileSync(sourcePath, targetPath);
  }
}

if (!existsSync(distDir)) {
  console.error('Build-Ordner "dist/" wurde nicht gefunden. Bitte zuerst "npm run build" ausfuehren.');
  process.exit(1);
}

for (const file of requiredFiles) {
  if (!existsSync(resolve(distDir, file))) {
    console.error(`Erforderliche Build-Datei fehlt: ${file}`);
    process.exit(1);
  }
}

for (const entry of readdirSync(repoRoot, { withFileTypes: true })) {
  if (preserve.has(entry.name)) {
    continue;
  }

  rmSync(resolve(repoRoot, entry.name), { recursive: true, force: true });
}

copyDirectoryContents(distDir, repoRoot);
