import { access, readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { localeOrder, locales } from "./content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
execFileSync(process.execPath, [join(root, "src/build.mjs")], { stdio: "inherit" });
const failures = [];
for (const code of localeOrder) {
  const page = code === "en" ? join(root, "dist/index.html") : join(root, `dist/${code}/index.html`);
  try {
    const html = await readFile(page, "utf8");
    for (const marker of ["<h1", "data-contact-form", "hreflang=", "data-squirrel-stage"]) if (!html.includes(marker)) failures.push(`${code}: missing ${marker}`);
    if (html.includes("undefined")) failures.push(`${code}: contains undefined`);
    if (!html.includes(`lang="${locales[code].htmlLang}"`)) failures.push(`${code}: wrong lang`);
  } catch (error) { failures.push(`${code}: ${error.message}`); }
}
for (const asset of ["brand/nuts-games-logo.webp", "art/production-triptych.webp", "styles.css", "app.js", "sitemap.xml", "robots.txt"]) {
  try { await access(join(root, "dist", asset)); } catch { failures.push(`missing asset: ${asset}`); }
}
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("All route, asset and metadata checks passed.");

