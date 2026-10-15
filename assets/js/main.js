/* =========================================================================
   Prestige Migrations — site scripts (vanilla JS, no dependencies)
   0. Loading screen
   1. Header shadow + scroll progress   2. Mobile drawer   3. Desktop dropdowns
   4. Scroll reveal   5. Stat counters   6. Testimonial slider
   7. FAQ animation   8. Filters         9. Table of contents
   10. Forms (validation + Formspree / Netlify submission)
   ========================================================================= */
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 0. Loading screen ---------------------------------------------------
     Shown for at least MIN ms (so it doesn't flash), then hidden as soon as
     the page is ready. CSS also hides it after 4s if JS fails.
     Scroll animations start afterwards. */
  const onLoadedCallbacks = [];
  const whenLoaded = (fn) => (root.classList.contains('is-loaded') && !loaderPending ? fn() : onLoadedCallbacks.push(fn));
  const loaderEl = $('[data-loader]');
  let loaderPending = !!loaderEl && !root.classList.contains('no-loader');

  function finishLoading() {
    if (!loaderPending && root.dataset.loaded) return;
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

  /* 4. Reveal on scroll ------------------------------------------------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    whenLoaded(() => reveals.forEach((el) => io.observe(el)));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* 5. Animated stat counters (final values are already in the HTML) ---- */
  const counters = $$('[data-count]');
  if ('IntersectionObserver' in window && !reduceMotion && counters.length) {
    const fmt = new Intl.NumberFormat('en-GB');
    const run = (el) => {
      const end = +el.dataset.count; const suffix = el.dataset.suffix || ''; const dur = 1400; const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1); const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt.format(Math.round(end * eased)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { run(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.6 });
    whenLoaded(() => counters.forEach((el) => co.observe(el)));
  }

  /* 6. Testimonial slider (CSS scroll-snap + buttons) -------------------- */
  $$('[data-slider]').forEach((slider) => {
    const track = $('.slider__track', slider);
    const prev = $('[data-slider-prev]', slider);
    const next = $('[data-slider-next]', slider);
    const step = () => track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
    const update = () => {
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev.click(); }
    });
    window.addEventListener('resize', update);
    update();
  });

  /* 7. Smooth FAQ accordion (progressive enhancement of <details>) ------ */
  if (!reduceMotion) {
    $$('.faq__item').forEach((d) => {
      const summary = $('summary', d); const body = $('.faq__body', d);
      summary.addEventListener('click', (e) => {
        e.preventDefault();
        if (d.dataset.animating) return;
        d.dataset.animating = '1';
        if (d.open) {
          const h = body.offsetHeight;
          body.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 260, easing: 'ease' })
            .onfinish = () => { d.open = false; delete d.dataset.animating; };
        } else {
          d.open = true;
          const h = body.offsetHeight;
          body.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: 300, easing: 'ease' })
            .onfinish = () => { delete d.dataset.animating; };
        }
      });
    });
  }

  /* 8. Category filters (blog, success stories) ------------------------- */
  $$('[data-filter-group]').forEach((group) => {
    const list = $(`[data-filter-list="${group.dataset.filterGroup}"]`);
    group.addEventListener('click', (e) => {
      const b = e.target.closest('[data-filter]'); if (!b) return;
      $$('[data-filter]', group).forEach((x) => { x.classList.toggle('is-active', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      $$('[data-cat]', list).forEach((item) => {
        item.hidden = !(b.dataset.filter === 'all' || item.dataset.cat === b.dataset.filter);
        item.classList.add('is-visible');
      });
    });
  });

  /* 9. Destination page table-of-contents highlighting ------------------ */
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

  /* 10. Forms ----------------------------------------------------------- */
  // Prefill message from ?event=… (events page "Reserve a seat" links)
  const ev = new URLSearchParams(location.search).get('event');
  if (ev) { const m = $('#contact-form-message'); if (m) m.value = `I'd like to reserve a seat at: ${ev}`; }

  const messages = {
    valueMissing: 'This field is required.',
    typeMismatch: 'Please enter a valid email address.',
    patternMismatch: 'Please enter a valid phone number.',
    tooShort: 'Please enter at least 2 characters.',
  };
  const errorFor = (input) => {
    const v = input.validity;
    if (v.valid) return '';
    for (const k of Object.keys(messages)) if (v[k]) return messages[k];
    return 'Please check this field.';
  };
  const showError = (input) => {
    const msg = errorFor(input);
    const el = document.getElementById(`${input.id}-err`);
    input.classList.toggle('is-invalid', !!msg);
    input.setAttribute('aria-invalid', String(!!msg));
    if (el) { el.textContent = msg; input.setAttribute('aria-describedby', el.id); }
    return !msg;
  };

  $$('form[data-provider]').forEach((form) => {
    const fields = $$('input[required], select[required], textarea[required]', form);
    fields.forEach((f) => {
      f.addEventListener('blur', () => { if (f.value) showError(f); });
      f.addEventListener('input', () => { if (f.classList.contains('is-invalid')) showError(f); });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = $('.form__status', form);
      status.className = 'form__status'; status.textContent = '';
      const valid = fields.map(showError).every(Boolean);
      if (!valid) { fields.find((f) => f.classList.contains('is-invalid'))?.focus(); return; }

      const btn = $('[type="submit"]', form); const label = btn.innerHTML;
      btn.disabled = true; btn.textContent = 'Sending…';
      const data = new FormData(form);
      const provider = form.dataset.provider;

      try {
        if (provider === 'formspree' && form.action.includes('YOUR_FORM_ID')) {
          // Demo mode — no endpoint configured yet (see build/config.mjs)
          await new Promise((r) => setTimeout(r, 600));
          console.info('[demo] Form data:', Object.fromEntries(data));
        } else if (provider === 'netlify') {
          const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
          if (!res.ok) throw new Error(res.status);
        } else {
          const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error(res.status);
        }
        form.reset();
        status.classList.add('is-success');
        status.textContent = form.dataset.formName === 'newsletter'
          ? 'Thanks! You’re subscribed to intake alerts.'
          : 'Thank you! A counsellor will contact you within one working day.';
      } catch (err) {
        status.classList.add('is-error');
        status.textContent = 'Sorry, something went wrong. Please try again or contact us on WhatsApp.';
      } finally {
        btn.disabled = false; btn.innerHTML = label;
      }
    });
  });

  // Keep copyright year current
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
