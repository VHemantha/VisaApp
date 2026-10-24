/* =========================================================================
   Prestige Migration — site scripts
   Animations use Motion (motion.dev, the vanilla JS build of Framer Motion),
   loaded just before this file from assets/js/vendor/motion.min.js.
   Without Motion, or with "reduce motion" on, everything is shown statically.
   0. Loading screen + hero entrance    1. Header + scroll progress
   2. Mobile drawer                      3. Desktop dropdowns + nav highlight
   4. Scroll reveal                      5. Number tickers
   6. Timeline beam + hero parallax      7. Destination rotator
   8. Spotlight cards                    9. FAQ animation
   10. Filters                           11. Table of contents
   ========================================================================= */
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const M = window.Motion;
  const motionOn = !!M && !reduceMotion;
  const ease = [0.22, 1, 0.36, 1];
  root.classList.add(motionOn ? 'motion-ready' : 'no-motion');

  /* 0. Loading screen ---------------------------------------------------
     Shown for at least MIN ms (so it doesn't flash), then hidden as soon as
     the page is ready. CSS also hides it after 4s if JS fails.
     Entrance and scroll animations start afterwards. */
  const onLoadedCallbacks = [];
  const loaderEl = $('[data-loader]');
  let loaderPending = !!loaderEl && !root.classList.contains('no-loader');
  const whenLoaded = (fn) => (root.dataset.loaded && !loaderPending ? fn() : onLoadedCallbacks.push(fn));

  function finishLoading() {
    if (root.dataset.loaded) return;
    loaderPending = false; root.dataset.loaded = '1';
    root.classList.add('is-loaded');
    if (loaderEl) { loaderEl.classList.add('is-done'); setTimeout(() => loaderEl.remove(), 700); }
    onLoadedCallbacks.splice(0).forEach((fn) => fn());
  }
  if (loaderPending) {
    // This deferred script runs once the HTML and CSS are ready, so the page
    // can be shown now — we don't wait for every image to download.
    const MIN = reduceMotion ? 300 : 700;
    setTimeout(finishLoading, Math.max(0, MIN - performance.now()));
  } else {
    finishLoading();
  }

  /* Split the hero headline into words for a staggered blur-in (21st.dev "text effect") */
  function splitWords(el) {
    const wrap = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(part); return; }
            const s = document.createElement('span'); s.className = 'word'; s.textContent = part; frag.append(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) wrap(n);
      });
    };
    wrap(el);
    return $$('.word', el);
  }

  if (motionOn) {
    const { animate, stagger } = M;
    whenLoaded(() => {
      // Home hero
      const copy = $('.hero__copy');
      if (copy) {
        const h1 = $('[data-split]', copy);
        const words = h1 ? splitWords(h1) : [];
        const others = [...copy.children].filter((el) => el !== h1);
        if (h1) h1.style.opacity = 1;
        animate(words, { opacity: [0, 1], y: [18, 0], filter: ['blur(8px)', 'blur(0px)'] }, { duration: 0.7, delay: stagger(0.06, { startDelay: 0.1 }), ease });
        animate(others, { opacity: [0, 1], y: [20, 0] }, { duration: 0.7, delay: stagger(0.1, { startDelay: 0.35 }), ease });
        const media = $('.hero__media');
        if (media) animate(media, { opacity: [0, 1], scale: [0.96, 1], y: [30, 0] }, { duration: 1.1, delay: 0.2, ease });
        $$('.float-card').forEach((card, i) => {
          animate(card, { opacity: [0, 1], scale: [0.8, 1] }, { type: 'spring', bounce: 0.35, duration: 0.8, delay: 0.8 + i * 0.2 })
            .then(() => animate(card, { y: [0, -8, 0] }, { duration: 5 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }));
        });
      }
      // Interior heroes
      $$('.page-hero .container, .dest-hero__inner').forEach((c) => {
        animate([...c.children], { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, delay: stagger(0.08), ease });
      });
      // Above-the-fold blocks (contact page)
      const rise = $$('.rise-in');
      if (rise.length) animate(rise, { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, delay: stagger(0.08, { startDelay: 0.15 }), ease });
    });
  }

  /* 1. Header shadow + scroll progress bar ----------------------------- */
  const header = $('[data-header]');
  const progress = $('[data-progress]');
  if (header) {
    let ticking = false;
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      if (progress) {
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
      }
      ticking = false;
    };
    onScroll();
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  }

  /* 2. Mobile drawer ---------------------------------------------------- */
  const drawer = $('[data-drawer]');
  const openBtn = $('[data-menu-open]');
  let lastFocus = null;
  const focusables = () => $$('a, button', drawer).filter((el) => el.offsetParent !== null);

  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    openBtn?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('no-scroll', open);
    if (open) {
      lastFocus = document.activeElement;
      if (motionOn) M.animate($$('.drawer__list > li, .drawer__cta > *', drawer), { opacity: [0, 1], x: [24, 0] }, { duration: 0.5, delay: M.stagger(0.04, { startDelay: 0.12 }), ease });
      setTimeout(() => focusables()[0]?.focus(), 50);
    } else {
      lastFocus?.focus();
    }
  }
  openBtn?.addEventListener('click', () => setDrawer(true));
  $$('[data-menu-close]').forEach((el) => el.addEventListener('click', () => setDrawer(false)));
  drawer?.addEventListener('click', (e) => { if (e.target.closest('a[href^="#"], a[href*="#consultation"]')) setDrawer(false); });
  document.addEventListener('keydown', (e) => {
    if (!drawer?.classList.contains('is-open')) return;
    if (e.key === 'Escape') setDrawer(false);
    if (e.key === 'Tab') { // simple focus trap
      const f = focusables(); const first = f[0]; const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia('(min-width: 1100px)').addEventListener('change', (m) => { if (m.matches) setDrawer(false); });

  /* 3. Desktop dropdowns (click / keyboard) ----------------------------- */
  const toggles = $$('.nav__toggle');
  const closeMenus = (except) => toggles.forEach((t) => t !== except && t.setAttribute('aria-expanded', 'false'));
  toggles.forEach((t) => {
    t.addEventListener('click', () => {
      const open = t.getAttribute('aria-expanded') === 'true';
      closeMenus(t);
      t.setAttribute('aria-expanded', String(!open));
    });
    t.parentElement.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { t.setAttribute('aria-expanded', 'false'); t.focus(); }
    });
    t.parentElement.addEventListener('focusout', (e) => {
      if (!t.parentElement.contains(e.relatedTarget)) t.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav__has-menu')) closeMenus(); });

  /* Sliding highlight behind the hovered / current nav link (21st.dev "tubelight navbar") */
  const navList = $('[data-nav]');
  const pill = $('[data-nav-pill]');
  if (navList && pill && motionOn) {
    const active = $('.nav__link.is-active', navList);
    const moveTo = (link, instant) => {
      if (!link) { M.animate(pill, { opacity: 0 }, { duration: 0.2 }); return; }
      const r = link.getBoundingClientRect(); const base = navList.getBoundingClientRect();
      const target = { x: r.left - base.left, width: r.width, opacity: 1 };
      pill.style.setProperty('--glow', link === active ? 1 : 0);
      M.animate(pill, target, instant ? { duration: 0 } : { type: 'spring', bounce: 0.2, duration: 0.45 });
    };
    $$('.nav__link', navList).forEach((link) => {
      link.addEventListener('pointerenter', () => moveTo(link));
      link.addEventListener('focus', () => moveTo(link));
    });
    navList.addEventListener('pointerleave', () => moveTo(active));
    // Place on the current page once fonts have settled widths
    const place = () => moveTo(active, true);
    (document.fonts?.ready || Promise.resolve()).then(place);
    window.addEventListener('resize', place);
  }

  /* 4. Reveal on scroll ------------------------------------------------- */
  const reveals = $$('.reveal');
  if (motionOn) {
    whenLoaded(() => reveals.forEach((el) => {
      // Stagger siblings that enter together (cards in a grid, steps…)
      const sibs = [...el.parentElement.children].filter((x) => x.classList.contains('reveal'));
      const i = Math.min(sibs.indexOf(el), 5);
      const stop = M.inView(el, () => {
        M.animate(el, { opacity: [0, 1], y: [28, 0] }, { duration: 0.8, delay: i * 0.07, ease });
        stop();
      }, { margin: '0px 0px -8% 0px', amount: 0.08 });
    }));
  }

  /* 5. Number tickers (final values are already in the HTML) ------------ */
  if (motionOn) {
    const fmt = new Intl.NumberFormat('en-GB');
    whenLoaded(() => $$('[data-count]').forEach((el) => {
      const end = +el.dataset.count; const suffix = el.dataset.suffix || '';
      el.textContent = '0' + suffix;
      const stop = M.inView(el, () => {
        M.animate(0, end, { duration: 1.8, ease, onUpdate: (v) => { el.textContent = fmt.format(Math.round(v)) + suffix; } });
        stop();
      }, { amount: 0.6 });
    }));
  }

  /* 6. Timeline beam fills as you scroll + subtle hero parallax ---------- */
  if (motionOn) {
    $$('[data-steps]').forEach((wrap) => {
      const beam = $('[data-beam]', wrap);
      const steps = $$('.step', wrap);
      M.scroll((p) => {
        beam.style.setProperty('--p', p.toFixed(3));
        steps.forEach((s, i) => s.classList.toggle('is-active', p >= i / Math.max(steps.length - 1, 1) - 0.02));
      }, { target: wrap, offset: ['start 80%', 'end 55%'] });
    });
    const heroImg = $('.hero__img img');
    const hero = $('.hero');
    if (heroImg && hero) M.scroll(M.animate(heroImg, { y: [0, -60] }, { ease: 'linear' }), { target: hero, offset: ['start start', 'end start'] });
  } else {
    $$('.step').forEach((s) => s.classList.add('is-active'));
  }

  /* 7. Rotating destination chip on the hero photo (21st.dev "text rotate") */
  $$('[data-rotator]').forEach((rot) => {
    const items = $$('.rotator__item', rot);
    if (!motionOn || items.length < 2) return;
    let i = 0;
    setInterval(() => {
      const cur = items[i]; i = (i + 1) % items.length; const next = items[i];
      M.animate(cur, { y: [0, -18], opacity: [1, 0] }, { duration: 0.4, ease });
      M.animate(next, { y: [18, 0], opacity: [0, 1] }, { type: 'spring', bounce: 0.3, duration: 0.6, delay: 0.1 });
      cur.classList.remove('is-active'); next.classList.add('is-active');
    }, 2600);
  });

  /* 8. Spotlight: card glow follows the cursor (21st.dev "spotlight card") */
  if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest?.('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* 9. Smooth FAQ accordion (progressive enhancement of <details>) ------ */
  if (motionOn) {
    $$('.faq__item').forEach((d) => {
      const summary = $('summary', d); const body = $('.faq__body', d);
      summary.addEventListener('click', (e) => {
        e.preventDefault();
        if (d.dataset.animating) return;
        d.dataset.animating = '1';
        if (d.open) {
          M.animate(body, { height: [`${body.offsetHeight}px`, '0px'], opacity: [1, 0] }, { duration: 0.3, ease })
            .then(() => { d.open = false; body.style.height = ''; body.style.opacity = ''; delete d.dataset.animating; });
        } else {
          d.open = true;
          M.animate(body, { height: ['0px', `${body.offsetHeight}px`], opacity: [0, 1] }, { duration: 0.4, ease })
            .then(() => { body.style.height = ''; delete d.dataset.animating; });
        }
      });
    });
  }

  /* 10. Category filters (blog, success stories) ------------------------ */
  $$('[data-filter-group]').forEach((group) => {
    const list = $(`[data-filter-list="${group.dataset.filterGroup}"]`);
    group.addEventListener('click', (e) => {
      const b = e.target.closest('[data-filter]'); if (!b) return;
      $$('[data-filter]', group).forEach((x) => { x.classList.toggle('is-active', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      const shown = [];
      $$('[data-cat]', list).forEach((item) => {
        item.hidden = !(b.dataset.filter === 'all' || item.dataset.cat === b.dataset.filter);
        if (!item.hidden) shown.push(item);
      });
      if (motionOn) M.animate(shown, { opacity: [0, 1], scale: [0.96, 1], y: [12, 0] }, { duration: 0.45, delay: M.stagger(0.05), ease });
      else shown.forEach((item) => { item.style.opacity = 1; });
    });
  });

  /* 11. Destination page table-of-contents highlighting ----------------- */
  const tocLinks = $$('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const so = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { tocLinks.forEach((a) => a.classList.remove('is-active')); map.get(en.target.id)?.classList.add('is-active'); }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) so.observe(s); });
  }

  // Keep copyright year current
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
