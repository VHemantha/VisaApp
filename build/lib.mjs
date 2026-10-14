/* =========================================================================
   Shared helpers, icons and layout partials (header, footer, forms, SEO).
   ========================================================================= */
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { site } from './config.mjs';
import { images, destinations } from './content.mjs';

// Cache-busting: ?v=<hash> changes whenever styles.css or main.js change
const ver = (rel) => createHash('md5').update(readFileSync(new URL(`../${rel}`, import.meta.url))).digest('hex').slice(0, 8);
const V = { css: ver('assets/css/styles.css'), js: ver('assets/js/main.js') };

/* ---------- Basic helpers ---------- */
export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const fmtDate = (iso, opts = { day: 'numeric', month: 'long', year: 'numeric' }) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', opts);

export const waLink = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

/** Relative-path context for a page at a given folder depth. */
export function ctx(depth) {
  const prefix = '../'.repeat(depth);
  return {
    depth,
    /** Link to a site path such as 'pages/about/' ('' = home). */
    href: (p = '') => (prefix + p) || './',
    asset: (p) => prefix + p,
  };
}

/* ---------- Icons (inline SVG, 24px stroke set) ---------- */
const P = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  chevronL: '<path d="m15 18-6-6 6-6"/>',
  chevronR: '<path d="m9 18 6-6-6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6z"/>',
  building: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 10h.01M15 10h.01"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.2 13.8 7 22l5-3 5 3-1.2-8.2"/>',
  book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-2 5-4 5zM14 21c3 0 7-1 7-8V5h-7v8h4c0 4-2 5-4 5z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  wallet: '<path d="M20 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15v4M20 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="M22 11h-5a2 2 0 0 0 0 4h5z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
};
// Brand icons (filled)
const F = {
  whatsapp: '<path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12 9.8 9.8 0 1 1 12 21.8zM20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.3-8.5z"/>',
  facebook: '<path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/>',
  instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/>',
  linkedin: '<path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/>',
  youtube: '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>',
  tiktok: '<path d="M12.5 0h4c.2 2.1 1 3.6 2.6 4.6 1 .6 2.1.9 3.4 1v4a10 10 0 0 1-6-1.9v8.6A7.7 7.7 0 1 1 8.4 8.6v4.1a3.7 3.7 0 1 0 4.1 3.6z"/>',
};
export function icon(name, cls = 'icon') {
  if (F[name]) return `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${F[name]}</svg>`;
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || P.sparkle}</svg>`;
}

/* ---------- Images ---------- */
const unsplash = (id, w, h) => `https://images.unsplash.com/photo-${id}?fm=webp&q=65&fit=crop&w=${w}&h=${h}`;

/**
 * Responsive, lazy WebP image. `key` = name in content.images or a local path.
 * Width/height attributes are always set so there is no layout shift.
 */
export function img(c, key, { ratio = [3, 2], widths = [480, 800, 1200], sizes = '100vw', eager = false, cls = '', alt } = {}) {
  const data = images[key] || { src: key, alt: alt || '' };
  const altText = esc(alt ?? data.alt);
  const [rw, rh] = ratio;
  const H = (w) => Math.round((w * rh) / rw);
  const base = widths[Math.min(1, widths.length - 1)];
  const loading = eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"';
  const klass = cls ? ` class="${cls}"` : '';
  if (data.id) {
    const srcset = widths.map((w) => `${unsplash(data.id, w, H(w))} ${w}w`).join(', ');
    return `<img${klass} src="${unsplash(data.id, base, H(base))}" srcset="${srcset}" sizes="${sizes}" width="${base}" height="${H(base)}" alt="${altText}" ${loading}>`;
  }
  return `<img${klass} src="${c.asset(data.src)}" width="${base}" height="${H(base)}" alt="${altText}" ${loading}>`;
}

export const flag = (code, name) =>
  code === 'eu'
    ? `<span class="flag flag--eu" role="img" aria-label="${esc(name)}"><svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#1e40af"/>${Array.from({ length: 12 }, (_, i) => { const a = (i / 12) * Math.PI * 2; return `<circle cx="${(15 + 6 * Math.sin(a)).toFixed(2)}" cy="${(10 - 6 * Math.cos(a)).toFixed(2)}" r="0.9" fill="#facc15"/>`; }).join('')}</svg></span>`
    : `<img class="flag" src="https://flagcdn.com/w40/${code}.webp" srcset="https://flagcdn.com/w80/${code}.webp 2x" width="30" height="20" alt="Flag of ${esc(name)}" loading="lazy" decoding="async">`;

export const initials = (name) => name.split(/\s+/).map((p) => p[0]).join('').slice(0, 2).toUpperCase();

/* ---------- Small components ---------- */
export const sectionHead = ({ eyebrow, title, lead, center = false, id }) => `
      <div class="section-head${center ? ' section-head--center' : ''} reveal">
        ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
        <h2${id ? ` id="${id}"` : ''}>${title}</h2>
        ${lead ? `<p class="lead">${lead}</p>` : ''}
      </div>`;

export const btn = (href, label, variant = 'primary', { iconName, attrs = '' } = {}) =>
  `<a class="btn btn--${variant}" href="${href}"${attrs ? ' ' + attrs : ''}>${label}${iconName ? icon(iconName) : ''}</a>`;

export function breadcrumbs(c, trail) {
  // trail: [[label, path|null], ...] — last item is current page
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>
          <li><a href="${c.href('')}">Home</a></li>
          ${trail.map(([l, p], i) => i === trail.length - 1 ? `<li><span aria-current="page">${esc(l)}</span></li>` : `<li><a href="${c.href(p)}">${esc(l)}</a></li>`).join('\n          ')}
        </ol></nav>`;
}

export function breadcrumbSchema(trail) {
  const items = [['Home', ''], ...trail];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${site.url}/${path || ''}` })),
  };
}

export function faqSchema(list) {
  return {
    '@type': 'FAQPage',
    mainEntity: list.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export function faqList(list, name = 'faq') {
  return `<div class="faq">
${list.map(([q, a], i) => `          <details class="faq__item reveal"${i === 0 ? ' open' : ''}>
            <summary><span>${esc(q)}</span>${icon('chevron', 'icon faq__icon')}</summary>
            <div class="faq__body"><p>${esc(a)}</p></div>
          </details>`).join('\n')}
        </div>`;
}

/** Interior page hero */
export function pageHero(c, { title, lead, trail, eyebrow, actions = '' }) {
  return `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbs(c, trail)}
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
      ${actions ? `<div class="btn-row">${actions}</div>` : ''}
    </div>
  </section>`;
}

/* ---------- Enquiry form ---------- */
const opt = (list, ph) => `<option value="">${ph}</option>` + list.map((v) => `<option>${esc(v)}</option>`).join('');

export function enquiryForm(c, { id = 'enquiry', title = 'Book your free consultation', compact = false, preselect } = {}) {
  const f = site.forms;
  const isNetlify = f.provider === 'netlify';
  const action = isNetlify ? c.href('pages/thank-you/') : `https://formspree.io/f/${f.formspreeId}`;
  const netlifyAttrs = isNetlify ? ` name="${id}" data-netlify="true" netlify-honeypot="bot-field"` : '';
  const dest = site.formDestinations.map((d) => `<option${d === preselect ? ' selected' : ''}>${esc(d)}</option>`).join('');
  return `<form class="form${compact ? ' form--compact' : ''}" id="${id}" action="${action}" method="POST" novalidate data-provider="${f.provider}" data-form-name="${id}"${netlifyAttrs}>
          ${title ? `<h2 class="form__title">${esc(title)}</h2>` : ''}
          ${isNetlify ? `<input type="hidden" name="form-name" value="${id}">` : '<input type="hidden" name="_subject" value="New enquiry from website">'}
          <p class="visually-hidden" aria-hidden="true"><label>Leave this empty <input name="${isNetlify ? 'bot-field' : '_gotcha'}" tabindex="-1" autocomplete="off"></label></p>
          <div class="form__grid">
            <div class="field">
              <label for="${id}-name">Full name <span aria-hidden="true">*</span></label>
              <input id="${id}-name" name="name" type="text" autocomplete="name" required minlength="2">
              <p class="field__error" id="${id}-name-err" aria-live="polite"></p>
            </div>
            <div class="field">
              <label for="${id}-email">Email <span aria-hidden="true">*</span></label>
              <input id="${id}-email" name="email" type="email" autocomplete="email" required>
              <p class="field__error" id="${id}-email-err" aria-live="polite"></p>
            </div>
            <div class="field">
              <label for="${id}-phone">Phone / WhatsApp <span aria-hidden="true">*</span></label>
              <input id="${id}-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+94 7X XXX XXXX" required pattern="^[+0-9 ()-]{9,18}$">
              <p class="field__error" id="${id}-phone-err" aria-live="polite"></p>
            </div>
            <div class="field">
              <label for="${id}-destination">Preferred destination</label>
              <select id="${id}-destination" name="destination"><option value="">Select a destination</option>${dest}</select>
            </div>
            ${compact ? '' : `<div class="field">
              <label for="${id}-level">Study level</label>
              <select id="${id}-level" name="study_level">${opt(site.studyLevels, 'Select a level')}</select>
            </div>
            <div class="field">
              <label for="${id}-intake">Preferred intake</label>
              <select id="${id}-intake" name="intake">${opt(site.intakes, 'Select an intake')}</select>
            </div>`}
            <div class="field field--full">
              <label for="${id}-message">Message</label>
              <textarea id="${id}-message" name="message" rows="${compact ? 3 : 4}" placeholder="Tell us about your goals, qualifications or questions"></textarea>
            </div>
          </div>
          <button class="btn btn--primary btn--block" type="submit">Request free consultation ${icon('arrow')}</button>
          <p class="form__note">We reply within one working day. By submitting, you agree to our <a href="${c.href('pages/privacy/')}">privacy policy</a>.</p>
          <div class="form__status" role="status" aria-live="polite"></div>
        </form>`;
}

/* ---------- Navigation ---------- */
export const nav = [
  { label: 'Destinations', key: 'destinations', path: 'pages/destinations/', children: [
    ...destinations.map((d) => ({ label: d.name, path: `pages/destinations/${d.slug}/`, flag: d.flag })),
    { label: 'Compare all destinations', path: 'pages/destinations/', all: true },
  ] },
  { label: 'Services', key: 'services', path: 'pages/services/' },
  { label: 'Migration', key: 'migration', path: 'pages/migration/' },
  { label: 'Scholarships', key: 'scholarships', path: 'pages/scholarships/' },
  { label: 'Resources', key: 'resources', children: [
    { label: 'Success stories', path: 'pages/success-stories/', desc: 'Real student journeys' },
    { label: 'Events', path: 'pages/events/', desc: 'Fairs, webinars & open days' },
    { label: 'Blog & news', path: 'pages/blog/', desc: 'Guides and visa updates' },
  ] },
  { label: 'About', key: 'about', path: 'pages/about/' },
  { label: 'Contact', key: 'contact', path: 'pages/contact/' },
];

export const logo = (c) => `<a class="logo" href="${c.href('')}">
        <svg class="logo__mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="11" fill="#2563EB"/><path d="M20 8l3.2 8.8L32 20l-8.8 3.2L20 32l-3.2-8.8L8 20l8.8-3.2z" fill="#fff"/><circle cx="20" cy="20" r="2.6" fill="#2563EB"/></svg>
        <span class="logo__text">${esc(site.shortName)}<small>Education &amp; Migration</small></span>
      </a>`;

function header(c, active) {
  const desktop = nav.map((item) => {
    const isActive = item.key === active ? ' is-active' : '';
    if (!item.children) return `<li><a class="nav__link${isActive}" href="${c.href(item.path)}"${isActive ? ' aria-current="page"' : ''}>${item.label}</a></li>`;
    const menuId = `menu-${item.key}`;
    const wide = item.key === 'destinations';
    return `<li class="nav__has-menu">
            <button class="nav__link nav__toggle${isActive}" type="button" aria-expanded="false" aria-controls="${menuId}">${item.label}${icon('chevron', 'icon nav__chev')}</button>
            <div class="nav__menu${wide ? ' nav__menu--wide' : ''}" id="${menuId}">
              <ul>
              ${item.children.map((ch) => `<li><a class="${ch.all ? 'nav__menu-all' : ''}" href="${c.href(ch.path)}">${ch.flag ? flag(ch.flag, ch.label) : ''}<span>${esc(ch.label)}${ch.desc ? `<small>${esc(ch.desc)}</small>` : ''}</span>${ch.all ? icon('arrow') : ''}</a></li>`).join('\n              ')}
              </ul>
            </div>
          </li>`;
  }).join('\n          ');

  const mobile = nav.map((item) => !item.children
    ? `<li><a href="${c.href(item.path)}"${item.key === active ? ' aria-current="page"' : ''}>${item.label}</a></li>`
    : `<li class="drawer__group"><p class="drawer__label">${item.label}</p><ul>${item.children.map((ch) => `<li><a href="${c.href(ch.path)}">${ch.flag ? flag(ch.flag, ch.label) : ''}${esc(ch.label)}</a></li>`).join('')}</ul></li>`).join('\n          ');

  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" data-header>
    <div class="container site-header__inner">
      ${logo(c)}
      <nav class="nav" aria-label="Main">
        <ul class="nav__list">
          ${desktop}
        </ul>
      </nav>
      <div class="site-header__actions">
        <a class="btn btn--primary btn--sm site-header__cta" href="${c.href('pages/contact/')}#consultation">Free Consultation</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="drawer" aria-label="Open menu" data-menu-open>${icon('menu')}</button>
      </div>
    </div>
  </header>

  <div class="drawer" id="drawer" aria-hidden="true" data-drawer>
    <div class="drawer__overlay" data-menu-close></div>
    <div class="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
      <div class="drawer__top">
        ${logo(c)}
        <button class="menu-btn" type="button" aria-label="Close menu" data-menu-close>${icon('close')}</button>
      </div>
      <nav aria-label="Mobile">
        <ul class="drawer__list">
          ${mobile}
        </ul>
      </nav>
      <div class="drawer__cta">
        <a class="btn btn--primary btn--block" href="${c.href('pages/contact/')}#consultation">Book a Free Consultation</a>
        <a class="btn btn--outline btn--block" href="${waLink()}" target="_blank" rel="noopener">${icon('whatsapp')} Chat on WhatsApp</a>
      </div>
    </div>
  </div>`;
}

function footer(c) {
  const ho = site.offices[0];
  const socials = Object.entries(site.social).map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${site.name} on ${k[0].toUpperCase() + k.slice(1)}">${icon(k)}</a>`).join('');
  const f = site.forms;
  const isNetlify = f.provider === 'netlify';
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          ${logo(c)}
          <p>${esc(site.tagline)} Independent, honest guidance for Sri Lankan students and families since ${site.foundedYear}.</p>
          <div class="socials">${socials}</div>
        </div>
        <div>
          <h2 class="site-footer__title">Explore</h2>
          <ul class="site-footer__links">
            <li><a href="${c.href('pages/about/')}">About us</a></li>
            <li><a href="${c.href('pages/services/')}">Services</a></li>
            <li><a href="${c.href('pages/migration/')}">Migration</a></li>
            <li><a href="${c.href('pages/scholarships/')}">Scholarships &amp; intakes</a></li>
            <li><a href="${c.href('pages/success-stories/')}">Success stories</a></li>
            <li><a href="${c.href('pages/events/')}">Events</a></li>
            <li><a href="${c.href('pages/blog/')}">Blog &amp; news</a></li>
          </ul>
        </div>
        <div>
          <h2 class="site-footer__title">Destinations</h2>
          <ul class="site-footer__links">
            ${destinations.map((d) => `<li><a href="${c.href(`pages/destinations/${d.slug}/`)}">Study in ${esc((d.the ? 'the ' : '') + d.name)}</a></li>`).join('\n            ')}
          </ul>
        </div>
        <div>
          <h2 class="site-footer__title">Contact</h2>
          <ul class="site-footer__contact">
            <li>${icon('pin')}<span>${esc(ho.street)}, ${esc(ho.city)}, Sri Lanka</span></li>
            <li>${icon('phone')}<a href="tel:${site.phoneHref}">${esc(site.phone)}</a></li>
            <li>${icon('whatsapp')}<a href="${waLink()}" target="_blank" rel="noopener">WhatsApp us</a></li>
            <li>${icon('mail')}<a href="mailto:${site.email}">${esc(site.email)}</a></li>
          </ul>
          <form class="newsletter" id="newsletter" action="${isNetlify ? c.href('pages/thank-you/') : `https://formspree.io/f/${f.formspreeId}`}" method="POST" novalidate data-provider="${f.provider}" data-form-name="newsletter"${isNetlify ? ' name="newsletter" data-netlify="true"' : ''}>
            ${isNetlify ? '<input type="hidden" name="form-name" value="newsletter">' : '<input type="hidden" name="_subject" value="Newsletter signup">'}
            <label class="site-footer__title" for="newsletter-email">Intake alerts &amp; scholarship news</label>
            <div class="newsletter__row">
              <input id="newsletter-email" name="email" type="email" placeholder="Your email" autocomplete="email" required>
              <button class="btn btn--primary btn--sm" type="submit">Subscribe</button>
            </div>
            <p class="field__error" id="newsletter-email-err" aria-live="polite"></p>
            <div class="form__status" role="status" aria-live="polite"></div>
          </form>
        </div>
      </div>
      <div class="site-footer__bottom">
        <p>© <span data-year>${new Date().getFullYear()}</span> ${esc(site.legalName)}. All rights reserved.</p>
        <p><a href="${c.href('pages/privacy/')}">Privacy policy</a> · <a href="${c.href('sitemap.xml')}">Sitemap</a></p>
      </div>
    </div>
  </footer>

  <a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${icon('whatsapp')}<span class="wa-float__label">Chat with us</span></a>`;
}

/* ---------- Page layout ---------- */
export function layout(c, { title, description, path, active, body, schema = [], ogImage, bodyClass = '', noindex = false }) {
  const canonical = `${site.url}/${path}`;
  const fullTitle = path === '' ? `${site.name} | Study Abroad Consultants in Sri Lanka` : `${title} | ${site.name}`;
  const og = ogImage || `${site.url}/assets/images/og-image.jpg`;
  const graph = schema.length ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schema })}</script>` : '';
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  ${noindex ? '<meta name="robots" content="noindex">' : ''}
  <meta name="theme-color" content="#ffffff">
  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:title" content="${esc(fullTitle)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${og}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_GB">
  <meta name="twitter:card" content="summary_large_image">
  <!-- Icons -->
  <link rel="icon" href="${c.asset('assets/images/favicon.svg')}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${c.asset('assets/images/apple-touch-icon.png')}">
  <!-- Performance: early image connection, preloaded self-hosted fonts, minified CSS -->
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="preload" href="${c.asset('assets/fonts/plus-jakarta-sans-latin-var.woff2')}" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="${c.asset('assets/fonts/inter-latin-var.woff2')}" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${c.asset('assets/css/styles.min.css')}?v=${V.css}">
  <script>document.documentElement.classList.add('js')</script>
  <script src="${c.asset('assets/js/main.js')}?v=${V.js}" defer></script>
  ${graph}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
${header(c, active)}
  <main id="main">
${body}
  </main>
${footer(c)}
</body>
</html>
`;
}

/* ---------- Organisation schema (reused) ---------- */
export function orgSchema() {
  const ho = site.offices[0];
  return {
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: `${site.url}/`,
    logo: `${site.url}/assets/images/logo.svg`,
    image: `${site.url}/assets/images/og-image.jpg`,
    telephone: site.phoneHref,
    email: site.email,
    foundingDate: String(site.foundedYear),
    priceRange: 'Free consultation',
    address: { '@type': 'PostalAddress', streetAddress: ho.street, addressLocality: ho.city, addressRegion: ho.region, postalCode: ho.postcode, addressCountry: ho.country },
    ...(ho.geo ? { geo: { '@type': 'GeoCoordinates', latitude: ho.geo.lat, longitude: ho.geo.lng } } : {}),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
    ],
    areaServed: 'LK',
    sameAs: Object.values(site.social),
  };
}
