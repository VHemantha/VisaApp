/* =========================================================================
   Static site generator — zero dependencies (Node 18+).
   Usage:  node build/build.mjs
   Writes every page as <clean-url>/index.html, plus sitemap.xml & robots.txt.
   ========================================================================= */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './config.mjs';
import { destinations, posts } from './content.mjs';
import * as P from './pages.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// Minify assets/css/styles.css -> styles.min.css (simple, safe whitespace/comment strip)
const css = readFileSync(join(ROOT, 'assets/css/styles.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{};,>])\s*/g, '$1')
  .replace(/:\s+/g, ':') // keep the space BEFORE ':' (".a :focus" ≠ ".a:focus")
  .replace(/;}/g, '}')
  .trim();
writeFileSync(join(ROOT, 'assets/css/styles.min.css'), css);

const pages = [
  P.home(), P.about(), P.destinationsIndex(), ...destinations.map(P.destinationPage),
  P.servicesPage(), P.migrationPage(), P.scholarshipsPage(), P.storiesPage(),
  P.blogIndex(), ...posts.map(P.articlePage), P.eventsPage(), P.contactPage(),
  P.privacyPage(),
];

const write = (rel, content) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

for (const { path, html } of pages) write(join(path, 'index.html'), html);
write('404.html', P.notFoundPage().html);

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = pages.map((p) => {
  const priority = p.path === '' ? '1.0' : p.path.split('/').length > 3 ? '0.6' : '0.8';
  return `  <url><loc>${site.url}/${p.path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
});
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${pages.length + 1} pages + sitemap.xml + robots.txt`);
