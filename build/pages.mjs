/* =========================================================================
   Page renderers. Each returns { path, html }.
   `path` is the clean URL ('' = home, 'pages/about/' etc.).
   ========================================================================= */
import { site } from './config.mjs';
import {
  destinations, services, steps, testimonials, events, faqs, team, accreditations,
  migration, posts, intakeTable, scholarships, images,
} from './content.mjs';
import {
  esc, ctx, icon, img, flag, breadcrumbs, initials, sectionHead, btn, pageHero, faqList, faqSchema,
  breadcrumbSchema, enquiryForm, layout, orgSchema, waLink, fmtDate,
} from './lib.mjs';

const depthOf = (path) => (path === '' ? 0 : path.split('/').filter(Boolean).length);
const destBy = (slug) => destinations.find((d) => d.slug === slug);
const inName = (d) => (d.the ? 'the ' : '') + d.name; // "in the United Kingdom"

/* ---------- Reusable sections ---------- */
function destinationCards(c, list = destinations) {
  return `<div class="grid grid--3">
${list.map((d) => `        <a class="dest-card reveal" href="${c.href(`pages/destinations/${d.slug}/`)}">
          <div class="dest-card__media">${img(c, d.img, { ratio: [4, 3], widths: [400, 600, 800], sizes: '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw' })}</div>
          <div class="dest-card__body">
            <div class="dest-card__title">${flag(d.flag, d.name)}<h3>Study in ${esc(inName(d))}</h3></div>
            <p>${esc(d.benefit)}</p>
            <span class="link-arrow">Explore ${esc(d.short)} ${icon('arrow')}</span>
          </div>
        </a>`).join('\n')}
      </div>`;
}

function stepsTimeline() {
  return `<ol class="steps">
${steps.map(([t, d], i) => `        <li class="step reveal">
          <span class="step__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <h3>${esc(t)}</h3>
          <p>${esc(d)}</p>
        </li>`).join('\n')}
      </ol>`;
}

function testimonialCard(t, c) {
  const d = destBy(t.dest);
  return `<figure class="testimonial" data-dest="${t.dest}">
            <div class="testimonial__stars" role="img" aria-label="5 out of 5 stars">${icon('star').repeat(5)}</div>
            <blockquote><p>“${esc(t.quote)}”</p></blockquote>
            <figcaption>
              <span class="avatar" aria-hidden="true">${initials(t.name)}</span>
              <span><strong>${esc(t.name)}</strong><small>${esc(t.course)} · ${esc(t.uni)}</small></span>
              ${d ? flag(d.flag, d.name) : ''}
            </figcaption>
          </figure>`;
}

function testimonialSlider(c) {
  return `<div class="slider reveal" data-slider>
        <div class="slider__track" tabindex="0" role="region" aria-label="Student testimonials (scrollable)">
          ${testimonials.map((t) => `<div class="slider__slide">${testimonialCard(t, c)}</div>`).join('\n          ')}
        </div>
        <div class="slider__controls">
          <button class="icon-btn" type="button" data-slider-prev aria-label="Previous testimonial">${icon('chevronL')}</button>
          <button class="icon-btn" type="button" data-slider-next aria-label="Next testimonial">${icon('chevronR')}</button>
        </div>
      </div>`;
}

function logoMarquee() {
  // PLACEHOLDER partner logos — replace with real SVG/PNG logos (with permission).
  const cities = ['London', 'Melbourne', 'Toronto', 'Auckland', 'Boston', 'Berlin', 'Dublin', 'Sydney', 'Vancouver', 'Manchester', 'Helsinki', 'Brisbane'];
  const item = (city) => `<li class="logo-tile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5zM6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg><span>University<small>${city}</small></span></li>`;
  return `<div class="marquee" aria-label="Partner universities (logos coming soon)">
        <ul class="marquee__track">
          ${cities.map(item).join('')}
        </ul>
        <ul class="marquee__track" aria-hidden="true">
          ${cities.map(item).join('')}
        </ul>
      </div>`;
}

function eventCard(c, e) {
  const d = new Date(e.date + 'T00:00:00');
  return `<article class="event-card reveal">
          <div class="event-card__media">${img(c, e.img, { ratio: [16, 9], widths: [400, 640, 900], sizes: '(min-width: 1024px) 380px, 100vw' })}<span class="badge badge--light">${esc(e.type)}</span></div>
          <div class="event-card__body">
            <div class="event-card__date"><time datetime="${e.date}"><strong>${d.getDate()}</strong>${d.toLocaleDateString('en-GB', { month: 'short' })}</time></div>
            <div>
              <h3>${esc(e.title)}</h3>
              <ul class="meta">
                <li>${icon('clock')}${esc(e.time)}</li>
                <li>${icon('pin')}${esc(e.place)}</li>
              </ul>
              <p>${esc(e.desc)}</p>
              <a class="link-arrow" href="${c.href('pages/contact/')}?event=${encodeURIComponent(e.title)}#consultation">Reserve a free seat ${icon('arrow')}</a>
            </div>
          </div>
        </article>`;
}

function ctaBand(c, { title = 'Ready to start your journey?', lead = 'Book a free, no-obligation consultation with an experienced counsellor. We’ll map out your options, costs and timeline — in person, by phone or on Zoom.', preselect } = {}) {
  return `
  <section class="section cta-band" id="consultation" aria-labelledby="cta-title">
    <div class="container cta-band__inner">
      <div class="cta-band__copy reveal">
        <p class="eyebrow eyebrow--light">Free consultation</p>
        <h2 id="cta-title">${title}</h2>
        <p>${lead}</p>
        <ul class="check-list check-list--light">
          <li>${icon('check')}Personal study plan with full cost breakdown</li>
          <li>${icon('check')}Scholarship and intake guidance</li>
          <li>${icon('check')}Visa success strategy for your profile</li>
        </ul>
        <div class="cta-band__contact">
          <a href="tel:${site.phoneHref}">${icon('phone')}${esc(site.phone)}</a>
          <a href="${waLink()}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp us</a>
        </div>
      </div>
      <div class="card form-card reveal">
        ${enquiryForm(c, { id: 'cta-form', preselect })}
      </div>
    </div>
  </section>`;
}

/* =========================================================================
   HOME
   ========================================================================= */
export function home() {
  const path = '';
  const c = ctx(0);
  const body = `
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="badge">${icon('sparkle')} Applications open for 2027 intakes</p>
        <h1>Your future abroad, <span class="text-gradient">thoughtfully planned.</span></h1>
        <p class="hero__lead">Honest, expert guidance for Sri Lankan students — from choosing the right course to landing in the UK, Australia, Canada, New Zealand, the USA or Europe.</p>
        <div class="btn-row">
          ${btn('#consultation', 'Book a Free Consultation', 'primary', { iconName: 'arrow' })}
          ${btn('#destinations', 'Explore Destinations', 'outline')}
        </div>
        <ul class="hero__points">
          <li>${icon('checkCircle')}No-obligation advice</li>
          <li>${icon('checkCircle')}Transparent fees</li>
          <li>${icon('checkCircle')}Colombo · Kandy · Kurunegala</li>
        </ul>
      </div>
      <div class="hero__media">
        <div class="hero__img">${img(c, 'heroGrads', { ratio: [5, 6], widths: [400, 600, 900], sizes: '(min-width: 1024px) 520px, 90vw', eager: true })}</div>
        <div class="float-card float-card--top">
          <span class="float-card__icon">${icon('calendar')}</span>
          <span><strong>Next intake</strong><small>January 2027 — apply now</small></span>
        </div>
        <div class="float-card float-card--bottom">
          <span class="float-card__icon float-card__icon--teal">${icon('shield')}</span>
          <span><strong>Visa guidance</strong><small>Every step, every document</small></span>
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="stats reveal" aria-label="Our track record">
        ${site.stats.map((s) => `<li class="stat"><span class="stat__value" data-count="${s.value}" data-suffix="${s.suffix}">${s.value.toLocaleString('en-GB')}${s.suffix}</span><span class="stat__label">${esc(s.label)}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="section" id="destinations" aria-labelledby="dest-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Study destinations', title: 'Where would you like to study?', lead: 'Six destinations, hundreds of universities and one team that knows each one inside out.', id: 'dest-title' })}
      ${destinationCards(c)}
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="services-title">
    <div class="container">
      <div class="split-head">
        ${sectionHead({ eyebrow: 'What we do', title: 'End-to-end support, under one roof', lead: 'Everything you need to go from “thinking about it” to “boarding the plane”.', id: 'services-title' })}
        ${btn(c.href('pages/services/'), 'All services', 'outline', { iconName: 'arrow' })}
      </div>
      <div class="grid grid--4">
${services.map((s) => `        <article class="card service-card reveal">
          <span class="icon-tile">${icon(s.icon)}</span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.short)}</p>
        </article>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="why-title">
    <div class="container split">
      <div class="split__media reveal">
        ${img(c, 'counselling', { ratio: [4, 3], widths: [480, 800, 1100], sizes: '(min-width: 1024px) 560px, 100vw' })}
      </div>
      <div class="split__copy">
        ${sectionHead({ eyebrow: 'Why choose us', title: 'Advice that puts your future first', id: 'why-title' })}
        <ul class="feature-list">
          <li class="reveal">${icon('target', 'icon icon--blue')}<div><h3>Honest recommendations</h3><p>We recommend what’s right for you — including cheaper options — not the university that pays the most commission.</p></div></li>
          <li class="reveal">${icon('award', 'icon icon--blue')}<div><h3>Certified counsellors</h3><p>Our team is trained and accredited by leading international education bodies.</p></div></li>
          <li class="reveal">${icon('wallet', 'icon icon--blue')}<div><h3>Transparent fees</h3><p>A clear written fee schedule before you start. No hidden charges, ever.</p></div></li>
          <li class="reveal">${icon('heart', 'icon icon--blue')}<div><h3>Support after you land</h3><p>We stay in touch through your first semester — because the journey doesn’t end at the airport.</p></div></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="how-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'How it works', title: 'Five clear steps to your offer and visa', lead: 'A simple, predictable process — you always know what happens next.', center: true, id: 'how-title' })}
      ${stepsTimeline()}
    </div>
  </section>

  <section class="section section--tight" aria-labelledby="partners-title">
    <div class="container">
      <h2 class="partners-title" id="partners-title">Trusted by <strong>150+ universities</strong> across six destinations</h2>
      ${logoMarquee()}
    </div>
  </section>

  <section class="section" aria-labelledby="stories-title">
    <div class="container">
      <div class="split-head">
        ${sectionHead({ eyebrow: 'Success stories', title: 'Students who made it happen', lead: 'Real journeys from Sri Lankan students now studying around the world.', id: 'stories-title' })}
        ${btn(c.href('pages/success-stories/'), 'Read more stories', 'outline', { iconName: 'arrow' })}
      </div>
      ${testimonialSlider(c)}
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="events-title">
    <div class="container">
      <div class="split-head">
        ${sectionHead({ eyebrow: 'Events & intakes', title: 'Upcoming fairs and webinars', lead: 'Meet universities, get your profile assessed and ask anything — free.', id: 'events-title' })}
        ${btn(c.href('pages/events/'), 'All events', 'outline', { iconName: 'arrow' })}
      </div>
      <div class="grid grid--3">
        ${events.slice(0, 3).map((e) => eventCard(c, e)).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="faq-title">
    <div class="container faq-layout">
      <div>
        ${sectionHead({ eyebrow: 'FAQ', title: 'Questions students ask us most', lead: 'Can’t find your answer? Our counsellors reply within one working day.', id: 'faq-title' })}
        <div class="btn-row reveal">
          ${btn(waLink(), `${icon('whatsapp')} Ask on WhatsApp`, 'outline', { attrs: 'target="_blank" rel="noopener"' })}
        </div>
      </div>
      ${faqList(faqs)}
    </div>
  </section>
${ctaBand(c)}`;

  return {
    path,
    html: layout(c, {
      title: 'Home', path, active: 'home',
      description: `${site.name} is a Sri Lankan study abroad consultancy. Free counselling, university applications, scholarships and visas for the UK, Australia, Canada, New Zealand, USA and Europe.`,
      body,
      schema: [orgSchema(), { '@type': 'WebSite', '@id': `${site.url}/#website`, url: `${site.url}/`, name: site.name, publisher: { '@id': `${site.url}/#organization` } }, faqSchema(faqs)],
    }),
  };
}

/* =========================================================================
   ABOUT
   ========================================================================= */
export function about() {
  const path = 'pages/about/';
  const c = ctx(depthOf(path));
  const trail = [['About us', path]];
  const body = `${pageHero(c, { title: 'Guiding Sri Lankan students to the world since ' + site.foundedYear, lead: 'We are an independent education and migration consultancy built on one simple idea: every student deserves honest advice.', trail, eyebrow: 'About us' })}

  <section class="section">
    <div class="container split">
      <div class="split__copy">
        ${sectionHead({ eyebrow: 'Our story', title: 'Started by students, for students' })}
        <div class="prose reveal">
          <p>${esc(site.name)} began when our founder — after navigating a confusing, expensive study abroad process themselves — decided Sri Lankan families deserved better. What started as a small office in Colombo has grown into a team of certified counsellors across three branches.</p>
          <p>Today we help thousands of students each year choose the right course, secure scholarships and obtain visas, while keeping the personal, transparent service we started with.</p>
        </div>
      </div>
      <div class="split__media reveal">${img(c, 'studentsGroup', { ratio: [4, 3], widths: [480, 800, 1100], sizes: '(min-width: 1024px) 560px, 100vw' })}</div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="grid grid--3">
        <article class="card reveal"><span class="icon-tile">${icon('target')}</span><h3>Our mission</h3><p>To give every student clear, honest guidance and the support to succeed at a world-class university.</p></article>
        <article class="card reveal"><span class="icon-tile">${icon('eye')}</span><h3>Our vision</h3><p>To be Sri Lanka’s most trusted education consultancy — measured by our students’ success, not our sales.</p></article>
        <article class="card reveal"><span class="icon-tile">${icon('heart')}</span><h3>Our values</h3><p>Integrity, transparency, care and expertise in every conversation, every application and every visa file.</p></article>
      </div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="container">
      <ul class="stats stats--flat reveal" aria-label="Our track record">
        ${site.stats.map((s) => `<li class="stat"><span class="stat__value" data-count="${s.value}" data-suffix="${s.suffix}">${s.value.toLocaleString('en-GB')}${s.suffix}</span><span class="stat__label">${esc(s.label)}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="section" aria-labelledby="team-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Our team', title: 'Meet the counsellors', lead: 'Experienced, certified and genuinely invested in your success.', center: true, id: 'team-title' })}
      <div class="grid grid--4">
${team.map((m) => `        <article class="card team-card reveal">
          <span class="avatar avatar--lg" aria-hidden="true">${initials(m.role)}</span>
          <h3>${esc(m.name)}</h3>
          <p class="team-card__role">${esc(m.role)}</p>
          <p>${esc(m.bio)}</p>
        </article>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="acc-title">
    <div class="container split split--top">
      <div>
        ${sectionHead({ eyebrow: 'Accreditations', title: 'Qualified, accountable, recognised', lead: 'Our counsellors hold internationally recognised certifications and follow strict codes of ethics.', id: 'acc-title' })}
      </div>
      <ul class="acc-list">
        ${accreditations.map((a) => `<li class="card reveal">${icon('shield', 'icon icon--blue')}<span>${esc(a)}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="section" aria-labelledby="offices-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Visit us', title: 'Our offices', center: true, id: 'offices-title' })}
      ${officeCards(c)}
    </div>
  </section>
${ctaBand(c)}`;
  return { path, html: layout(c, { title: 'About Us', path, active: 'about', body, description: `Meet the team behind ${site.name}: certified study abroad counsellors with offices in Colombo, Kandy and Kurunegala.`, schema: [orgSchema(), breadcrumbSchema(trail)] }) };
}

function officeCards(c) {
  return `<div class="grid grid--3">
${site.offices.map((o) => `        <article class="card office-card reveal">
          <h3>${esc(o.name)}</h3>
          <ul class="meta meta--stack">
            <li>${icon('pin')}${esc(o.street)}, ${esc(o.city)}</li>
            <li>${icon('phone')}<a href="tel:${o.phone.replace(/\s/g, '')}">${esc(o.phone)}</a></li>
          </ul>
          <a class="link-arrow" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(o.mapQuery)}" target="_blank" rel="noopener">Get directions ${icon('arrow')}</a>
        </article>`).join('\n')}
      </div>`;
}

/* =========================================================================
   DESTINATIONS (overview + one page per country)
   ========================================================================= */
export function destinationsIndex() {
  const path = 'pages/destinations/';
  const c = ctx(depthOf(path));
  const trail = [['Destinations', path]];
  const body = `${pageHero(c, { title: 'Study destinations', lead: 'Compare the world’s most popular study destinations for Sri Lankan students — costs, intakes, work rights and post-study options.', trail, eyebrow: 'Where to study' })}

  <section class="section">
    <div class="container">
      ${destinationCards(c)}
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="compare-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'At a glance', title: 'Compare destinations', lead: 'Indicative figures for 2026–27. Rules change frequently — we confirm the latest during your consultation.', id: 'compare-title' })}
      <div class="table-wrap reveal" tabindex="0" role="region" aria-labelledby="compare-title">
        <table class="table">
          <thead><tr><th scope="col">Destination</th><th scope="col">Typical tuition (per year)</th><th scope="col">Main intakes</th><th scope="col">Work during study</th><th scope="col">After graduation</th></tr></thead>
          <tbody>
${destinations.map((d) => `            <tr><th scope="row"><a href="${c.href(`pages/destinations/${d.slug}/`)}">${flag(d.flag, d.name)}${esc(d.short)}</a></th><td>${esc(d.costs[0][1])}</td><td>${d.intakes.slice(0, 2).map((i) => esc(i[0])).join(', ')}</td><td>${esc(d.work[0][1])}</td><td>${esc(d.work[1][1])}</td></tr>`).join('\n')}
          </tbody>
        </table>
      </div>
    </div>
  </section>
${ctaBand(c, { title: 'Not sure which country is right for you?', lead: 'Tell us about your goals and budget. We’ll compare your options honestly, side by side.' })}`;
  return { path, html: layout(c, { title: 'Study Destinations', path, active: 'destinations', body, description: 'Compare studying in the UK, Australia, Canada, New Zealand, USA and Europe: tuition, intakes, work rights and post-study visas for Sri Lankan students.', schema: [breadcrumbSchema(trail)] }) };
}

export function destinationPage(d) {
  const path = `pages/destinations/${d.slug}/`;
  const c = ctx(depthOf(path));
  const trail = [['Destinations', 'pages/destinations/'], [d.name, path]];
  const others = destinations.filter((x) => x.slug !== d.slug).slice(0, 3);
  const sections = [['why', 'Why study here'], ['courses', 'Popular courses'], ['costs', 'Costs'], ['intakes', 'Intakes'], ['visa', 'Visa overview'], ['work', 'Work rights'], ['faq', 'FAQ']];
  const body = `
  <section class="dest-hero">
    <div class="dest-hero__bg">${img(c, d.img, { ratio: [16, 7], widths: [800, 1400, 2000], sizes: '100vw', eager: true, alt: '' })}</div>
    <div class="container dest-hero__inner">
      ${breadcrumbs_(c, trail)}
      <p class="eyebrow eyebrow--light">${flag(d.flag, d.name)} Study destination</p>
      <h1>Study in ${esc(inName(d))}</h1>
      <p class="lead">${esc(d.intro)}</p>
      <div class="btn-row">
        ${btn('#consultation', 'Book a Free Consultation', 'primary', { iconName: 'arrow' })}
        ${btn(waLink(`Hi! I'd like to know more about studying in ${inName(d)}.`), `${icon('whatsapp')} Ask on WhatsApp`, 'white', { attrs: 'target="_blank" rel="noopener"' })}
      </div>
    </div>
  </section>

  <div class="container">
    <ul class="quick-facts reveal">
      <li><span>${icon('calendar')}Intakes</span><strong>${d.intakes.slice(0, 2).map((i) => esc(i[0])).join(' · ')}</strong></li>
      <li><span>${icon('wallet')}Tuition from</span><strong>${esc(d.costs[0][1].split('–')[0].trim())}</strong></li>
      <li><span>${icon('briefcase')}Work while studying</span><strong>Yes</strong></li>
      <li><span>${icon('award')}Post-study work</span><strong>Available</strong></li>
    </ul>
  </div>

  <div class="container dest-layout">
    <nav class="toc" aria-label="On this page">
      <p class="toc__title">On this page</p>
      <ul>${sections.map(([id, l]) => `<li><a href="#${id}">${l}</a></li>`).join('')}</ul>
    </nav>

    <div class="dest-content">
      <section id="why" class="dest-section" aria-labelledby="why-h">
        <h2 id="why-h">Why study in ${esc(inName(d))}?</h2>
        <div class="grid grid--2">
${d.why.map(([t, p]) => `          <article class="card card--flat reveal">${icon('checkCircle', 'icon icon--blue')}<h3>${esc(t)}</h3><p>${esc(p)}</p></article>`).join('\n')}
        </div>
      </section>

      <section id="courses" class="dest-section" aria-labelledby="courses-h">
        <h2 id="courses-h">Popular courses</h2>
        <ul class="chips reveal">${d.courses.map((x) => `<li class="chip">${esc(x)}</li>`).join('')}</ul>
      </section>

      <section id="costs" class="dest-section" aria-labelledby="costs-h">
        <h2 id="costs-h">Costs</h2>
        <dl class="kv reveal">${d.costs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
        <p class="note">${icon('info')}Indicative figures for 2026–27, provided as a guide only. Costs vary by institution, course and city — we give you exact figures for your shortlist.</p>
      </section>

      <section id="intakes" class="dest-section" aria-labelledby="intakes-h">
        <h2 id="intakes-h">Intakes</h2>
        <div class="grid grid--3">${d.intakes.map(([m, n]) => `<div class="intake reveal"><strong>${esc(m)}</strong><span>${esc(n)}</span></div>`).join('')}</div>
      </section>

      <section id="visa" class="dest-section" aria-labelledby="visa-h">
        <h2 id="visa-h">Visa overview</h2>
        <div class="card card--flat reveal"><p>${esc(d.visa)}</p></div>
      </section>

      <section id="work" class="dest-section" aria-labelledby="work-h">
        <h2 id="work-h">Work rights</h2>
        <dl class="kv reveal">${d.work.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      </section>

      <section id="faq" class="dest-section" aria-labelledby="faq-h">
        <h2 id="faq-h">Frequently asked questions</h2>
        ${faqList(d.faqs)}
      </section>
    </div>

    <aside class="dest-aside">
      <div class="card aside-card">
        <h2 class="h3">Start your ${esc(d.short)} application</h2>
        <p>Get a free profile assessment and a personalised shortlist within 48 hours.</p>
        ${btn('#consultation', 'Book a Free Consultation', 'primary')}
        <a class="aside-card__phone" href="tel:${site.phoneHref}">${icon('phone')}${esc(site.phone)}</a>
      </div>
    </aside>
  </div>

  <section class="section section--alt" aria-labelledby="other-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Keep exploring', title: 'Other destinations', id: 'other-title' })}
      ${destinationCards(c, others)}
    </div>
  </section>
${ctaBand(c, { title: `Ready to study in ${esc(inName(d))}?`, preselect: site.formDestinations.find((x) => x.includes(d.short)) || d.name })}`;
  return {
    path,
    html: layout(c, {
      title: `Study in ${inName(d)} from Sri Lanka`, path, active: 'destinations', body,
      description: `Study in ${inName(d)} from Sri Lanka: why study there, popular courses, costs, intakes, student visa and work rights. Free consultation with ${site.name}.`,
      schema: [breadcrumbSchema(trail), faqSchema(d.faqs)],
    }),
  };
}
// Light breadcrumbs variant for dark hero
function breadcrumbs_(c, trail) {
  return `<nav class="breadcrumbs breadcrumbs--light" aria-label="Breadcrumb"><ol><li><a href="${c.href('')}">Home</a></li>${trail.map(([l, p], i) => i === trail.length - 1 ? `<li><span aria-current="page">${esc(l)}</span></li>` : `<li><a href="${c.href(p)}">${esc(l)}</a></li>`).join('')}</ol></nav>`;
}

/* =========================================================================
   SERVICES
   ========================================================================= */
export function servicesPage() {
  const path = 'pages/services/';
  const c = ctx(depthOf(path));
  const trail = [['Services', path]];
  const body = `${pageHero(c, { title: 'Everything you need to study abroad', lead: 'From your first question to your first lecture — expert support at every stage.', trail, eyebrow: 'Our services', actions: btn('#consultation', 'Book a Free Consultation', 'primary', { iconName: 'arrow' }) })}

  <section class="section">
    <div class="container">
      <div class="grid grid--2">
${services.map((s) => `        <article class="card service-detail reveal" id="${s.icon}">
          <span class="icon-tile">${icon(s.icon)}</span>
          <div>
            <h2 class="h3">${esc(s.title)}</h2>
            <p>${esc(s.short)}</p>
            <ul class="check-list">${s.points.map((p) => `<li>${icon('check')}${esc(p)}</li>`).join('')}</ul>
          </div>
        </article>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="how-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Our process', title: 'How we work with you', center: true, id: 'how-title' })}
      ${stepsTimeline()}
    </div>
  </section>
${ctaBand(c)}`;
  return { path, html: layout(c, { title: 'Study Abroad Services', path, active: 'services', body, description: 'Career counselling, university selection, applications, visa assistance, scholarships, IELTS/PTE guidance, pre-departure briefings and accommodation support.', schema: [breadcrumbSchema(trail), { '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Service', name: s.title, description: s.short, provider: { '@id': `${site.url}/#organization` } } })) }] }) };
}

/* =========================================================================
   MIGRATION
   ========================================================================= */
export function migrationPage() {
  const path = 'pages/migration/';
  const c = ctx(depthOf(path));
  const trail = [['Migration', path]];
  const body = `${pageHero(c, { title: 'Migration & visa services', lead: 'Skilled migration, visitor visas and family visas — guidance from people who understand both the rules and your goals.', trail, eyebrow: 'Migration', actions: btn('#consultation', 'Check your eligibility', 'primary', { iconName: 'arrow' }) })}

  <section class="section">
    <div class="container">
      <div class="grid grid--3">
${migration.map((m) => `        <article class="card reveal">
          <span class="icon-tile">${icon(m.icon)}</span>
          <h2 class="h3">${esc(m.title)}</h2>
          <p>${esc(m.desc)}</p>
          <ul class="check-list">${m.items.map((x) => `<li>${icon('check')}${esc(x)}</li>`).join('')}</ul>
        </article>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="pr-title">
    <div class="container split">
      <div class="split__media reveal">${img(c, 'paperwork', { ratio: [4, 3], widths: [480, 800, 1100], sizes: '(min-width: 1024px) 560px, 100vw' })}</div>
      <div class="split__copy">
        ${sectionHead({ eyebrow: 'Study to PR', title: 'Plan your long-term pathway from day one', lead: 'Choosing the right course and location can make a big difference to your future residency options. We help you plan study, work and migration as one journey.', id: 'pr-title' })}
        <ul class="feature-list">
          <li class="reveal">${icon('checkCircle', 'icon icon--blue')}<div><h3>Occupation & skills assessment</h3><p>Understand whether your field appears on skilled occupation lists and how to get assessed.</p></div></li>
          <li class="reveal">${icon('checkCircle', 'icon icon--blue')}<div><h3>Points calculation</h3><p>An honest estimate of your points and how to improve them — English, experience, study and regional options.</p></div></li>
          <li class="reveal">${icon('checkCircle', 'icon icon--blue')}<div><h3>Application management</h3><p>Expressions of Interest, document preparation and lodgement handled with care.</p></div></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="container">
      <p class="note note--box reveal">${icon('info')}<span>Migration advice for Australia must be given by a Registered Migration Agent (MARA), and for Canada by a licensed RCIC. We work alongside registered and licensed professionals for all migration matters. <!-- PLACEHOLDER: add MARN / RCIC numbers here --></span></p>
    </div>
  </section>
${ctaBand(c, { title: 'Find out if you’re eligible', lead: 'Share a few details and a migration specialist will contact you with your options.' })}`;
  return { path, html: layout(c, { title: 'Migration & Visa Services', path, active: 'migration', body, description: 'Skilled migration to Australia, Canada and New Zealand, visitor visas, and dependant and family visas — expert guidance from Sri Lanka.', schema: [breadcrumbSchema(trail)] }) };
}

/* =========================================================================
   SCHOLARSHIPS & INTAKES
   ========================================================================= */
export function scholarshipsPage() {
  const path = 'pages/scholarships/';
  const c = ctx(depthOf(path));
  const trail = [['Scholarships & intakes', path]];
  const body = `${pageHero(c, { title: 'Scholarships & intakes', lead: 'Know when to apply and how to reduce your costs. Plan ahead with our intake calendar and scholarship guide.', trail, eyebrow: 'Plan ahead' })}

  <section class="section" aria-labelledby="intake-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Intake calendar', title: 'When to apply', lead: 'We recommend starting 8–12 months before your intake. Application windows below are a guide.', id: 'intake-title' })}
      <div class="table-wrap reveal" tabindex="0" role="region" aria-labelledby="intake-title">
        <table class="table">
          <thead><tr><th scope="col">Destination</th><th scope="col">Main intakes</th><th scope="col">Best time to apply</th></tr></thead>
          <tbody>${intakeTable.map(([d, i, a]) => `<tr><th scope="row">${esc(d)}</th><td>${esc(i)}</td><td>${esc(a)}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="sch-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Scholarships', title: 'Scholarships worth knowing about', lead: 'From fully funded government awards to tuition discounts at our partner universities.', id: 'sch-title' })}
      <div class="grid grid--3">
${scholarships.map((s) => `        <article class="card scholarship reveal">
          <div class="scholarship__top"><span class="badge">${esc(s.dest)}</span><span class="badge badge--teal">${esc(s.level)}</span></div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.desc)}</p>
          <p class="scholarship__value">${icon('award')}${esc(s.value)}</p>
        </article>`).join('\n')}
      </div>
      <p class="note reveal">${icon('info')}Eligibility, values and deadlines change every year. Always check the official scholarship website — or ask us to check for you.</p>
    </div>
  </section>

  <section class="section" aria-labelledby="tips-title">
    <div class="container split split--top">
      <div>${sectionHead({ eyebrow: 'Tips', title: 'How to win a scholarship', id: 'tips-title' })}</div>
      <ol class="num-list">
        <li class="reveal"><strong>Start early.</strong> Government scholarships close 9–12 months before courses start.</li>
        <li class="reveal"><strong>Apply widely.</strong> Combine a major award application with several university merit awards.</li>
        <li class="reveal"><strong>Tell your story.</strong> Strong essays link your background, goals and impact on Sri Lanka.</li>
        <li class="reveal"><strong>Prepare your English test.</strong> A higher score can unlock extra awards.</li>
      </ol>
    </div>
  </section>
${ctaBand(c, { title: 'Get a personal scholarship plan', lead: 'We’ll identify awards you qualify for and help you build winning applications.' })}`;
  return { path, html: layout(c, { title: 'Scholarships & Intakes', path, active: 'scholarships', body, description: 'Intake calendar and scholarship guide for Sri Lankan students: Chevening, Australia Awards, Fulbright, DAAD and university merit scholarships.', schema: [breadcrumbSchema(trail)] }) };
}

/* =========================================================================
   SUCCESS STORIES
   ========================================================================= */
export function storiesPage() {
  const path = 'pages/success-stories/';
  const c = ctx(depthOf(path));
  const trail = [['Success stories', path]];
  const used = destinations.filter((d) => testimonials.some((t) => t.dest === d.slug));
  const body = `${pageHero(c, { title: 'Student success stories', lead: 'Every student has a different story. Here are a few of the journeys we’ve been proud to be part of.', trail, eyebrow: 'Success stories' })}

  <section class="section section--tight">
    <div class="container">
      <ul class="stats stats--flat reveal" aria-label="Our track record">
        ${site.stats.map((s) => `<li class="stat"><span class="stat__value" data-count="${s.value}" data-suffix="${s.suffix}">${s.value.toLocaleString('en-GB')}${s.suffix}</span><span class="stat__label">${esc(s.label)}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="section" aria-labelledby="stories-h">
    <div class="container">
      <h2 class="visually-hidden" id="stories-h">Testimonials</h2>
      <div class="filters" role="group" aria-label="Filter stories by destination" data-filter-group="stories">
        <button class="chip chip--btn is-active" type="button" data-filter="all" aria-pressed="true">All</button>
        ${used.map((d) => `<button class="chip chip--btn" type="button" data-filter="${d.slug}" aria-pressed="false">${esc(d.short)}</button>`).join('\n        ')}
      </div>
      <div class="grid grid--3" data-filter-list="stories">
        ${testimonials.map((t) => `<div class="reveal" data-cat="${t.dest}">${testimonialCard(t, c)}</div>`).join('\n        ')}
      </div>
    </div>
  </section>
${ctaBand(c, { title: 'Your success story starts here', lead: 'Join thousands of Sri Lankan students studying at great universities around the world.' })}`;
  return { path, html: layout(c, { title: 'Student Success Stories', path, active: 'resources', body, description: `Read success stories from Sri Lankan students who studied in the UK, Australia, Canada, New Zealand, USA and Europe with ${site.name}.`, schema: [breadcrumbSchema(trail)] }) };
}

/* =========================================================================
   BLOG
   ========================================================================= */
function postCard(c, p, featured = false) {
  return `<article class="post-card${featured ? ' post-card--featured' : ''} reveal" data-cat="${esc(p.category)}">
          <a class="post-card__media" href="${c.href(`pages/blog/${p.slug}/`)}" tabindex="-1" aria-hidden="true">${img(c, p.img, { ratio: featured ? [16, 10] : [16, 10], widths: [400, 700, 1000], sizes: featured ? '(min-width: 1024px) 600px, 100vw' : '(min-width: 1024px) 380px, 100vw', alt: '' })}</a>
          <div class="post-card__body">
            <p class="post-card__meta"><span class="badge">${esc(p.category)}</span><time datetime="${p.date}">${fmtDate(p.date)}</time> · ${p.read} min read</p>
            <h3><a href="${c.href(`pages/blog/${p.slug}/`)}">${esc(p.title)}</a></h3>
            <p>${esc(p.excerpt)}</p>
          </div>
        </article>`;
}

export function blogIndex() {
  const path = 'pages/blog/';
  const c = ctx(depthOf(path));
  const trail = [['Blog & news', path]];
  const cats = [...new Set(posts.map((p) => p.category))];
  const [first, ...rest] = posts;
  const body = `${pageHero(c, { title: 'Blog & news', lead: 'Practical guides, visa updates and student stories from our counselling team.', trail, eyebrow: 'Insights' })}

  <section class="section">
    <div class="container">
      ${postCard(c, first, true)}
      <div class="filters" role="group" aria-label="Filter articles by category" data-filter-group="blog">
        <button class="chip chip--btn is-active" type="button" data-filter="all" aria-pressed="true">All articles</button>
        ${cats.map((x) => `<button class="chip chip--btn" type="button" data-filter="${esc(x)}" aria-pressed="false">${esc(x)}</button>`).join('\n        ')}
      </div>
      <div class="grid grid--3" data-filter-list="blog">
        ${rest.map((p) => postCard(c, p)).join('\n        ')}
      </div>
    </div>
  </section>
${ctaBand(c)}`;
  return { path, html: layout(c, { title: 'Study Abroad Blog & News', path, active: 'resources', body, description: 'Study abroad guides, visa updates, scholarship news and student life tips for Sri Lankan students.', schema: [breadcrumbSchema(trail)] }) };
}

export function articlePage(p) {
  const path = `pages/blog/${p.slug}/`;
  const c = ctx(depthOf(path));
  const trail = [['Blog & news', 'pages/blog/'], [p.title, path]];
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const url = `${site.url}/${path}`;
  const body = `
  <article class="article">
    <header class="article__header container container--narrow">
      ${breadcrumbs(c, trail)}
      <p class="post-card__meta"><span class="badge">${esc(p.category)}</span><time datetime="${p.date}">${fmtDate(p.date)}</time> · ${p.read} min read</p>
      <h1>${esc(p.title)}</h1>
      <p class="lead">${esc(p.excerpt)}</p>
    </header>
    <div class="container container--wide article__media">${img(c, p.img, { ratio: [16, 8], widths: [800, 1200, 1600], sizes: '(min-width: 1100px) 1040px, 100vw', eager: true })}</div>
    <div class="container container--narrow prose">
${p.body.map(([tag, text]) => `      <${tag}>${esc(text)}</${tag}>`).join('\n')}
      <aside class="article__cta">
        <h2 class="h3">Talk to a counsellor</h2>
        <p>Every student’s situation is different. Get free, personal advice for your plans.</p>
        ${btn(c.href('pages/contact/') + '#consultation', 'Book a Free Consultation', 'primary', { iconName: 'arrow' })}
      </aside>
      <div class="share">
        <span>Share:</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" rel="noopener" aria-label="Share on Facebook">${icon('facebook')}</a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank" rel="noopener" aria-label="Share on LinkedIn">${icon('linkedin')}</a>
        <a href="https://wa.me/?text=${encodeURIComponent(p.title + ' ' + url)}" target="_blank" rel="noopener" aria-label="Share on WhatsApp">${icon('whatsapp')}</a>
      </div>
    </div>
  </article>

  <section class="section section--alt" aria-labelledby="related-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Keep reading', title: 'Related articles', id: 'related-title' })}
      <div class="grid grid--3">
        ${related.map((r) => postCard(c, r)).join('\n        ')}
      </div>
    </div>
  </section>`;
  return {
    path,
    html: layout(c, {
      title: p.title, path, active: 'resources', body, description: p.excerpt,
      schema: [breadcrumbSchema(trail), { '@type': 'BlogPosting', headline: p.title, description: p.excerpt, datePublished: p.date, dateModified: p.date, mainEntityOfPage: url, author: { '@type': 'Organization', name: site.name }, publisher: { '@id': `${site.url}/#organization` }, image: `https://images.unsplash.com/photo-${images[p.img].id}?fm=jpg&w=1200&h=630&fit=crop` }],
    }),
  };
}

/* =========================================================================
   EVENTS
   ========================================================================= */
export function eventsPage() {
  const path = 'pages/events/';
  const c = ctx(depthOf(path));
  const trail = [['Events', path]];
  const ho = site.offices[0];
  const body = `${pageHero(c, { title: 'Events, fairs & webinars', lead: 'Meet university representatives, get your profile assessed on the spot and learn about scholarships — all free.', trail, eyebrow: 'Events' })}

  <section class="section">
    <div class="container">
      <div class="grid grid--2">
        ${events.map((e) => eventCard(c, e)).join('\n        ')}
      </div>
      <p class="note reveal">${icon('info')}Want event reminders? Subscribe to intake alerts in the footer or follow us on social media.</p>
    </div>
  </section>
${ctaBand(c, { title: 'Can’t make an event?', lead: 'Book a one-to-one consultation at a time that suits you — in person, by phone or online.' })}`;
  const eventSchema = events.map((e) => ({
    '@type': 'Event', name: e.title, description: e.desc, startDate: e.date,
    eventAttendanceMode: e.place.startsWith('Online') ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: e.place.startsWith('Online') ? { '@type': 'VirtualLocation', url: `${site.url}/${path}` } : { '@type': 'Place', name: e.place, address: { '@type': 'PostalAddress', addressLocality: e.place.split(' ')[0], addressCountry: ho.country } },
    organizer: { '@id': `${site.url}/#organization` },
    isAccessibleForFree: true,
  }));
  return { path, html: layout(c, { title: 'Education Fairs, Webinars & Events', path, active: 'resources', body, description: 'Upcoming study abroad fairs, webinars, workshops and open days in Colombo, Kandy, Kurunegala and online.', schema: [breadcrumbSchema(trail), ...eventSchema] }) };
}

/* =========================================================================
   CONTACT
   ========================================================================= */
export function contactPage() {
  const path = 'pages/contact/';
  const c = ctx(depthOf(path));
  const trail = [['Contact', path]];
  const ho = site.offices[0];
  const body = `${pageHero(c, { title: 'Let’s plan your future', lead: 'Book a free consultation, ask a question or visit one of our offices. We reply within one working day.', trail, eyebrow: 'Contact us' })}

  <section class="section" id="consultation">
    <div class="container contact-layout">
      <div class="card form-card reveal">
        ${enquiryForm(c, { id: 'contact-form' })}
      </div>
      <div class="contact-info">
        <a class="contact-tile reveal" href="tel:${site.phoneHref}"><span class="icon-tile">${icon('phone')}</span><span><strong>Call us</strong>${esc(site.phone)}</span></a>
        <a class="contact-tile reveal" href="${waLink()}" target="_blank" rel="noopener"><span class="icon-tile icon-tile--green">${icon('whatsapp')}</span><span><strong>WhatsApp</strong>Chat with a counsellor</span></a>
        <a class="contact-tile reveal" href="mailto:${site.email}"><span class="icon-tile">${icon('mail')}</span><span><strong>Email</strong>${esc(site.email)}</span></a>
        <div class="card reveal">
          <h2 class="h3 with-icon">${icon('clock', 'icon icon--blue')}Office hours</h2>
          <dl class="hours">${site.hours.map((h) => `<div><dt>${esc(h.days)}</dt><dd>${esc(h.time)}</dd></div>`).join('')}</dl>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--alt" aria-labelledby="map-title">
    <div class="container">
      ${sectionHead({ eyebrow: 'Find us', title: 'Our offices', id: 'map-title' })}
      <div class="map reveal">
        <iframe title="Map showing ${esc(ho.name)}" src="https://www.google.com/maps?q=${encodeURIComponent(ho.mapQuery)}&amp;output=embed" width="1200" height="420" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      ${officeCards(c)}
    </div>
  </section>`;
  return {
    path,
    html: layout(c, {
      title: 'Contact Us — Book a Free Consultation', path, active: 'contact', body,
      description: `Contact ${site.name}: call ${site.phone}, WhatsApp or email us, or visit our offices in Colombo, Kandy and Kurunegala. Free study abroad consultation.`,
      schema: [breadcrumbSchema(trail), orgSchema(), ...site.offices.slice(1).map((o) => ({ '@type': 'LocalBusiness', name: `${site.name} — ${o.name}`, telephone: o.phone.replace(/\s/g, ''), parentOrganization: { '@id': `${site.url}/#organization` }, address: { '@type': 'PostalAddress', streetAddress: o.street, addressLocality: o.city, addressRegion: o.region, postalCode: o.postcode, addressCountry: o.country } }))],
    }),
  };
}

/* =========================================================================
   UTILITY PAGES
   ========================================================================= */
export function thankYouPage() {
  const path = 'pages/thank-you/';
  const c = ctx(depthOf(path));
  const body = `
  <section class="section center-page">
    <div class="container container--narrow">
      <span class="icon-tile icon-tile--lg">${icon('checkCircle')}</span>
      <h1>Thank you — we’ve received your enquiry</h1>
      <p class="lead">A counsellor will contact you within one working day. Need an answer sooner? Message us on WhatsApp.</p>
      <div class="btn-row btn-row--center">
        ${btn(c.href(''), 'Back to home', 'outline')}
        ${btn(waLink(), `${icon('whatsapp')} Chat on WhatsApp`, 'primary', { attrs: 'target="_blank" rel="noopener"' })}
      </div>
    </div>
  </section>`;
  return { path, html: layout(c, { title: 'Thank You', path, body, noindex: true, description: 'Thank you for contacting us.' }) };
}

export function privacyPage() {
  const path = 'pages/privacy/';
  const c = ctx(depthOf(path));
  const trail = [['Privacy policy', path]];
  const body = `${pageHero(c, { title: 'Privacy policy', lead: 'How we collect, use and protect your personal information.', trail })}
  <section class="section">
    <div class="container container--narrow prose">
      <p><em>PLACEHOLDER — have this reviewed against Sri Lanka’s Personal Data Protection Act (PDPA) No. 9 of 2022 before going live.</em></p>
      <h2>What we collect</h2>
      <p>When you submit a form, we collect the details you provide: your name, email, phone number, study preferences and message.</p>
      <h2>How we use it</h2>
      <p>We use your information only to respond to your enquiry, provide our counselling services and, if you subscribe, send intake and scholarship updates. We never sell your data.</p>
      <h2>Sharing</h2>
      <p>With your consent, we share relevant details with universities and service providers to process your applications.</p>
      <h2>Your rights</h2>
      <p>You can ask to see, correct or delete your data at any time by emailing <a href="mailto:${site.email}">${esc(site.email)}</a>.</p>
    </div>
  </section>`;
  return { path, html: layout(c, { title: 'Privacy Policy', path, body, description: `Privacy policy for ${site.name}.`, schema: [breadcrumbSchema(trail)] }) };
}

export function notFoundPage() {
  // Served for any missing URL, so links must be root-absolute.
  const c = { depth: 0, href: (p = '') => '/' + p, asset: (p) => '/' + p };
  const body = `
  <section class="section center-page">
    <div class="container container--narrow">
      <p class="eyebrow">Error 404</p>
      <h1>This page has flown off somewhere</h1>
      <p class="lead">The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.</p>
      <div class="btn-row btn-row--center">
        ${btn(c.href(''), 'Go to home', 'primary')}
        ${btn(c.href('pages/destinations/'), 'Explore destinations', 'outline')}
      </div>
    </div>
  </section>`;
  return { path: '404', html: layout(c, { title: 'Page not found', path: '404.html', body, noindex: true, description: 'Page not found.' }) };
}
