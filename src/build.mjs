import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { localeOrder, locales } from "./content.mjs";
import { renderPage, renderPrivacy } from "./template.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const gaId = process.env.GA_MEASUREMENT_ID || "G-HETCM80ZLX";

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, "public"), dist, { recursive: true });

for (const code of localeOrder) {
  const copy = locales[code];
  const localeDir = code === "en" ? dist : join(dist, code);
  await mkdir(join(localeDir, "privacy"), { recursive: true });
  await writeFile(join(localeDir, "index.html"), renderPage(copy, gaId));
  await writeFile(join(localeDir, "privacy", "index.html"), renderPrivacy(copy, gaId));
}

const indexable = ["en", "ru", "sq"].map((code) => {
  const route = locales[code].route;
  return `<url><loc>https://nuts.bid${route}</loc><lastmod>2026-10-21</lastmod><changefreq>monthly</changefreq><priority>${code === "en" ? "1.0" : "0.8"}</priority></url>`;
}).join("");
await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexable}</urlset>`);
await writeFile(join(dist, "robots.txt"), "User-agent: *\nAllow: /\nDisallow: /cu/\nDisallow: /la/\nDisallow: /elf/\nDisallow: /nut/\nSitemap: https://nuts.bid/sitemap.xml\n");
await writeFile(join(dist, "_headers"), "/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n/brand/*\n  Cache-Control: public, max-age=31536000, immutable\n/art/*\n  Cache-Control: public, max-age=31536000, immutable\n/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'\n");

console.log(`Built ${localeOrder.length} locales in ${dist}`);

