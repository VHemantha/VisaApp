# Sitemap & design system

## Sitemap

```
/                                   Home
├── pages/about/                    About us: story, mission, team, accreditations, offices
├── pages/destinations/             Destination overview + comparison table
│   ├── finland/  sweden/  germany/  malaysia/  ireland/
│   │                               Country template: why, courses, costs, intakes, visa, work rights, FAQ
├── pages/services/                 8 detailed service cards + process
├── pages/migration/                Work permits, visitor (Schengen) and family visas
├── pages/scholarships/             Intake calendar + scholarships
├── pages/success-stories/          Filterable testimonials
├── pages/blog/                     Listing (featured + filter)
│   └── <slug>/                     Article template (6 sample posts)
├── pages/events/                   Fairs, webinars, workshops
├── pages/contact/                  WhatsApp, phone, email, hours, map
├── pages/privacy/                  Privacy policy (placeholder)
├── 404.html
├── sitemap.xml · robots.txt
```

## Colour

All colours come from the logo.

| Token | Hex | Use |
|---|---|---|
| `--c-bg` | `#F7F7F8` | Page background (the logo's background grey) |
| `--c-surface` | `#FFFFFF` | Cards, header pill, alternate sections, footer |
| `--c-ink` | `#1E1E1E` | Headings, body text, dark buttons (the "Prestige." wordmark) |
| `--c-dark` | `#111114` | Dark sections: why us, CTA band, help card, destination aside |
| `--c-brand` | `#5A73FF` | The "Migration" blue: serif accent words, glows, beams (large text only) |
| `--c-brand-soft` | `#8A9FE6` | The logo dot: eyebrow double-dot, accents on dark |
| `--c-primary` | `#3F5BF0` | Primary buttons, links, icons (5.3:1 with white) |
| `--c-primary-600 / 700` | `#3049D6` / `#2538AD` | Hover, badge text |
| `--c-primary-50 / 100` | `#EEF1FF` / `#DDE3FF` | Icon tiles, badges, tints |
| `--c-muted` | `#55565F` | Secondary text |
| `--c-border` | `#E5E6EC` | Card and table borders |

## Typography

- **Headings:** Plus Jakarta Sans 600/700/800, tight tracking (−0.025 to −0.045em).
- **Accent:** Instrument Serif italic in `--c-brand`, for one or two words per heading (`<em>` inside an h1/h2). It echoes the "Migration" lettering in the logo.
- **Body:** Inter 400/500/600, line height 1.7.

| Token | Size | Use |
|---|---|---|
| `--fs-4xl` | 40 → 66 px (fluid) | Home and destination hero h1 |
| `--fs-3xl` | 34 → 52 px | Page h1 |
| `--fs-2xl` | 28 → 40 px | Section h2 |
| `--fs-xl` | 20 → 22 px | Card h3 |
| `--fs-md / base / sm / xs` | 17 / 16 / 14 / 13 px | Lead, body, meta, labels |

## Spacing, shape and depth
- **Spacing:** 4 px base scale (`--sp-1` … `--sp-24`). Sections use fluid `--section-y` (64 → 104 px).
- **Container:** 1200 px with a 16 px (mobile) or 24 px (≥768) gutter.
- **Corner radius:** 8 / 12 / **20 (cards)** / 28 (images, panels, destination cards) / pill (buttons, header, chips).
- **Shadows:** `--shadow-sm` (resting), `--shadow` (hover/open), `--shadow-lg` (lifted cards, forms), `--shadow-blue` (primary button).
- **Breakpoints:** 640 / 768 / 1024 / 1100 (desktop nav) / 1200.

## Components (all in `assets/css/styles.css`)
| Component | Class | Notes |
|---|---|---|
| Buttons | `.btn--primary` `--outline` `--white` `--sm` `--block` | 48 px minimum height, pill shape, hover lift |
| Section header | `.section-head` (+ `--center`), `.eyebrow`, `.lead` | |
| Cards | `.card`, `.dest-card`, `.service-card`, `.event-card`, `.post-card`, `.testimonial` | Hover lift and image zoom |
| Badges and chips | `.badge` (`--teal`, `--light`), `.chip`, `.chip--btn` | Filter chips use `aria-pressed` |
| Lists | `.check-list`, `.feature-list`, `.num-list`, `.kv` | |
| Navigation | `.site-header`, `.nav__menu`, `.drawer` | Sticky header, accessible dropdowns, focus-trapped drawer |
| Data | `.table-wrap` + `.table`, `.stats`, `.quick-facts` | Scrollable on mobile, keyboard-focusable |
| Motion | `.reveal` | Rise-in on scroll, staggered per grid (Motion `inView` + `animate`) |

## Motion & 21st.dev-style components

Animations use [Motion](https://motion.dev), the vanilla JavaScript build of Framer Motion, vendored at `assets/js/vendor/motion.min.js` (MIT). The site stays static: the components below are vanilla HTML/CSS ports of popular 21st.dev patterns.

| Pattern | Where | Class / hook |
|---|---|---|
| Floating glass navbar with sliding "tubelight" highlight | Header | `.site-header__inner`, `[data-nav-pill]` |
| Shimmer-border announcement badge | Home hero | `.pill-badge` |
| Word-by-word blur-in headline | Home hero | `h1[data-split]` |
| Grid background + aurora glows | Heroes, dark sections | `.bg-grid`, `.glow` |
| Text rotate | Hero photo chip | `[data-rotator]` |
| Number ticker | Stats | `[data-count]` |
| Bento grid with photo cards | Destinations | `.dest-grid--feature`, `.dest-card` |
| Spotlight cards (cursor glow) | Every `.card` | `--mx` / `--my` |
| Scroll-linked timeline beam | Process steps | `[data-steps]`, `[data-beam]` |
| Testimonials marquee (two rows) | Home | `.t-marquee` |
| Shiny button sweep | Primary, dark and WhatsApp buttons | `.btn--primary` etc. |

Everything is shown statically if Motion fails to load or the visitor has "reduce motion" switched on (`.no-motion`).
