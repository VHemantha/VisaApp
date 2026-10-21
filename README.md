# Prestige Migrations: study abroad website

A fast, accessible static website for a Sri Lankan education and migration consultancy. It uses semantic HTML, modern CSS and about 4 KB (gzipped) of vanilla JS, with no frameworks and no backend.

- `docs/BENCHMARK.md`: competitor review and takeaways
- `docs/DESIGN-SYSTEM.md`: sitemap, colours, type scale, spacing, components

## Folder structure

```
index.html, 404.html, sitemap.xml, robots.txt   ← generated
pages/…/index.html                               ← generated (clean URLs: /pages/about/)
assets/css/styles.css                            ← all styles (design tokens at the top)
assets/js/main.js                                ← all interactivity
assets/images/                                   ← logo, favicon, OG image
build/config.mjs                                 ← brand name, phone, email, offices, stats, form settings
build/content.mjs                                ← all page copy: destinations, services, FAQs, blog posts…
build/lib.mjs, pages.mjs, build.mjs              ← templates and generator
```

## Editing content

The HTML pages are **generated**. To change anything:

1. Edit `build/config.mjs` (brand and contact details) or `build/content.mjs` (copy).
2. Run `node build/build.mjs` (Node 18+, no `npm install` needed).

> ⚠️ Edits made directly to the generated `.html` files are overwritten on the next build.

To add a blog post, append an object to `posts` in `content.mjs` and rebuild. The listing, article page, related posts and sitemap all update automatically. Destinations and events work the same way.

Destinations currently offered: **Finland, Sweden, Germany, Malaysia and Ireland**. If you **remove** a destination or post, also delete its old folder under `pages/` (the build writes new files but doesn't delete old ones), and update `formDestinations` in `config.mjs`.

## Before going live: replace every placeholder

Search the `build/` folder for `PLACEHOLDER`:

- [ ] Brand name, tagline, legal name, founding year
- [ ] Phone, WhatsApp number, email, office addresses and map queries
- [ ] Production URL (`site.url`), used for canonical links, Open Graph and the sitemap
- [ ] Stats and accreditations: **use only figures and accreditations you can substantiate**
- [ ] Testimonials (sample content; replace with real reviews, with the students' consent)
- [ ] Team names and bios, partner university logos
- [ ] Social profile links
- [ ] Privacy policy (have it reviewed under Sri Lanka's PDPA)
- [x] Logo and favicons added from `assets/images/logo-original.jpg` (`logo.png/.webp`, `logo-large.png`, `logo-mark.png`, `favicon.ico`, `favicon-32/192/512.png`, `apple-touch-icon.png`, `og-image.jpg`)
- [ ] Optional: replace Unsplash photos with your own. Put WebP files in `assets/images/` and use the path as the image key in `content.mjs`

Destination costs and visa rules are **indicative 2026 figures**. Review them each intake.

## Loading screen & animations

A branded loading screen ("Preparing your journey…") shows while the page starts. Set `loader` in `build/config.mjs`:
- `'session'` (default): shown on the first page a visitor opens, so browsing between pages stays instant
- `'always'`: shown on every page load
- `'off'`: never shown (gives the best Lighthouse performance score)

The loader shows for at least 0.7 s and hides as soon as the page is ready. CSS also hides it after 4 s if JavaScript fails.

The other animations are the hero entrance, scroll reveals, the timeline drawing in, counters, hover effects, a scroll progress bar and the WhatsApp pulse. All of them are turned off for visitors who choose “reduce motion” in their device settings.

## Contact & forms

There is no enquiry form. Every page has a contact card instead, with a one-tap **WhatsApp** button (`site.whatsapp`, currently 074 144 1113) that opens a pre-filled message, plus a call button, the address and opening hours. On destination pages the message names the country, and on the Events page each "Reserve a seat" link names the event.

The only form left is the footer **newsletter signup**. To make it send, set `site.forms` in `build/config.mjs`:

- **Formspree** (any host): create a form at formspree.io, paste its ID into `formspreeId`, then rebuild.
- **Netlify Forms** (Netlify only): set `provider: 'netlify'`, then rebuild.

Until then it runs in **demo mode**: it shows a success message but sends nothing.

## Preview locally

Clean URLs need a local server (opening files directly won't resolve `/pages/about/`):

```bash
python -m http.server 8000      # or: npx serve .
# open http://localhost:8000
```

## Deploy

**Netlify** (recommended, because it also handles forms)
1. Push the folder to a GitHub repo.
2. In Netlify, choose *Add new site → Import from Git* and pick the repo. `netlify.toml` already sets the build command (`node build/build.mjs`) and the publish directory (`.`).
3. Add your custom domain under *Domain settings*. HTTPS is automatic.
   *No Git?* Drag the whole folder onto app.netlify.com/drop.

**Vercel**
1. Push to GitHub, then choose *Add New → Project* in Vercel and import the repo.
2. `vercel.json` sets the build, clean URLs and cache headers. Choose framework preset **Other**.

**GitHub Pages**
1. Push to GitHub and open *Settings → Pages*. Choose *Deploy from a branch*, then `main` / `root`.
2. `.nojekyll` is included. Internal links are relative, so the site also works at `username.github.io/repo/`. (The 404 page uses root links, so it works best on a custom domain.)
3. GitHub Pages doesn't run the build, so run `node build/build.mjs` locally and commit the output.

After deploying, submit `https://yourdomain/sitemap.xml` in Google Search Console and check the structured data with Google's Rich Results Test.

## What's built in
- **Performance:** responsive WebP images via `srcset`, lazy loading, explicit width/height (no layout shift), preconnects, one CSS and one deferred JS file, content-hashed cache busting.
- **Accessibility:** skip link, landmarks, one h1 per page, visible focus states, keyboard-accessible dropdowns, focus-trapped mobile menu, ARIA live form errors, AA contrast, `prefers-reduced-motion` support.
- **SEO:** a unique title and description on every page, canonical links, Open Graph and Twitter tags, and JSON-LD for EducationalOrganization + LocalBusiness, FAQPage, BreadcrumbList, BlogPosting, Event and Service. Also `sitemap.xml` and `robots.txt`.
