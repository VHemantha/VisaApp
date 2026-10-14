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
├── pages/contact/                  Form, phone, WhatsApp, email, hours, map, branches
├── pages/privacy/                  Privacy policy (placeholder)
├── pages/thank-you/                Form success page (noindex)
├── 404.html
├── sitemap.xml · robots.txt
```

## Colour

| Token | Hex | Use |
|---|---|---|
| `--c-bg` | `#FFF9E0` | Light yellow page background |
| `--c-bg-alt` | `#FFF3C4` | Deeper yellow for alternate sections, footer |
| `--c-surface` | `#FFFDF2` | Warm near-white for cards, inputs, header, menus |
| `--c-primary` | `#2563EB` | Primary buttons, links, icons (5.2:1 with white) |
| `--c-primary-600 / 700` | `#1D4ED8` / `#1E40AF` | Hover, CTA gradient, badge text |
| `--c-primary-50 / 100` | `#EFF6FF` / `#DBEAFE` | Icon tiles, badges, tints |
| `--c-accent` | `#FF7A59` | Warm coral, decorative only (eyebrow dash, glow, award icon) |
| `--c-teal` | `#0F766E` | Check icons, success badges (AA on white) |
| `--c-text` | `#0F172A` | Headings and body |
| `--c-muted` | `#475569` | Secondary text (7.5:1 on white) |
| `--c-border` | `#EEE2B6` | Warm card and table borders |

## Typography

- **Headings:** Plus Jakarta Sans 600/700/800, tracking −0.02em, line height 1.15.
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
- **Corner radius:** 8 / 12 / **16 (cards)** / 24 (images, panels) / pill (buttons, chips).
- **Shadows:** `--shadow-sm` (resting), `--shadow` (hover/open), `--shadow-lg` (lifted cards, forms), `--shadow-blue` (primary button).
- **Breakpoints:** 640 / 768 / 1024 / 1100 (desktop nav) / 1200.

## Components (all in `assets/css/styles.css`)
| Component | Class | Notes |
|---|---|---|
| Buttons | `.btn--primary` `--outline` `--white` `--sm` `--block` | 48 px minimum height, pill shape, hover lift |
| Section header | `.section-head` (+ `--center`), `.eyebrow`, `.lead` | |
| Cards | `.card`, `.dest-card`, `.service-card`, `.event-card`, `.post-card`, `.testimonial` | Hover lift and image zoom |
| Badges and chips | `.badge` (`--teal`, `--light`), `.chip`, `.chip--btn` | Filter chips use `aria-pressed` |
| Form fields | `.field`, `.field__error`, `.form__status` | Inline validation with `aria-invalid` and live messages |
| Lists | `.check-list`, `.feature-list`, `.num-list`, `.kv` | |
| Navigation | `.site-header`, `.nav__menu`, `.drawer` | Sticky header, accessible dropdowns, focus-trapped drawer |
| Data | `.table-wrap` + `.table`, `.stats`, `.quick-facts` | Scrollable on mobile, keyboard-focusable |
| Motion | `.reveal` | Fade/slide on scroll. Disabled under `prefers-reduced-motion` |
