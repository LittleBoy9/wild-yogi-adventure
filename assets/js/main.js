/* ==========================================================================
   Wild Yogi Adventures — interactions
   Vanilla JS, no build step, no dependencies. Safe to drop on GitHub Pages.
   ========================================================================== */
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- helpers */
  function waLink(msg) {
    return 'https://wa.me/' + WY.biz.whatsapp + (msg ? '?text=' + encodeURIComponent(msg) : '');
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function initials(name) {
    return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  /* -------------------------------------------------------------- preloader */
  const pre = $('#preloader');
  const pct = $('#preloaderPct');
  let p = 0;
  const tick = setInterval(() => {
    p = Math.min(100, p + Math.random() * 16);
    if (pct) pct.textContent = Math.round(p);
    if (p >= 100) clearInterval(tick);
  }, 110);

  function finish() {
    clearInterval(tick);
    if (pct) pct.textContent = '100';
    setTimeout(() => {
      pre && pre.classList.add('is-done');
      $('#hero') && $('#hero').classList.add('is-in');
      $('#fab') && $('#fab').classList.add('is-in');
    }, reduced ? 0 : 420);
  }
  window.addEventListener('load', finish);
  setTimeout(finish, 4200); // never trap the page behind a slow image

  /* ------------------------------------------------------------ whatsapp cta */
  const baseMsg = 'Hi Wild Yogi Adventures! I found you online and I would like to know about your upcoming treks.';
  ['#heroWa', '#fab', '#menuWa', '#footWa'].forEach(sel => {
    const el = $(sel);
    if (el) { el.href = waLink(baseMsg); el.target = '_blank'; el.rel = 'noopener'; }
  });
  const ar = $('#allReviews');
  if (ar) ar.href = WY.biz.reviewUrl;
  const rc = $('#reviewCount');
  if (rc) rc.textContent = WY.biz.reviewCount;
  const yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

  const pp = $('#planPhones');
  if (pp) {
    pp.innerHTML = WY.biz.phones
      .map((ph, i) => '<a href="tel:' + ph + '">' + esc(WY.biz.phonesDisplay[i]) + '</a>')
      .join(' · ');
  }

  /* ------------------------------------------------------------------- nav */
  const nav = $('#nav');
  const burger = $('#burger');
  const menu = $('#mobileMenu');

  function onScroll() {
    const y = window.scrollY;
    nav && nav.classList.toggle('is-stuck', y > 40);
    const fill = $('#scrollbarFill');
    if (fill) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      fill.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    if (!menu || !burger) return;
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('is-locked', open);
  }
  burger && burger.addEventListener('click', () =>
    setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  menu && $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  /* --------------------------------------------------------- split headings */
  $$('[data-splitline]').forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    const perLine = words.length > 7 ? Math.ceil(words.length / 3) : Math.ceil(words.length / 2);
    const lines = [];
    for (let i = 0; i < words.length; i += perLine) lines.push(words.slice(i, i + perLine).join(' '));
    el.innerHTML = lines.map(l => '<span class="ln"><span>' + esc(l) + '</span></span>').join('');
  });

  /* -------------------------------------------------------------- reveal io */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-in');
      io.unobserve(en.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

  function observe(sel, root) { $$(sel, root).forEach(el => io.observe(el)); }
  observe('.reveal, [data-splitline], .gitem, .profile');

  /* ----------------------------------------------------------- hero slides */
  const slides = $$('.hero__slide');
  const dots = $$('.hero__dot');
  let si = 0, heroTimer;
  function goSlide(n) {
    si = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === si));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === si));
  }
  function autoSlide() {
    clearInterval(heroTimer);
    if (reduced || slides.length < 2) return;
    heroTimer = setInterval(() => goSlide(si + 1), 6200);
  }
  dots.forEach(d => d.addEventListener('click', () => {
    goSlide(parseInt(d.dataset.slide, 10)); autoSlide();
  }));
  autoSlide();

  /* --------------------------------------------------------- hero parallax */
  const heroMedia = $('#heroMedia');
  if (heroMedia && !reduced) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) heroMedia.style.transform = 'translate3d(0,' + (y * 0.32) + 'px,0)';
        ticking = false;
      });
    }, { passive: true });
  }

  /* ------------------------------------------------------------- ticker */
  const tt = $('#tickerTrack');
  if (tt) {
    const bits = WY.treks.map(t => '<b>' + esc(t.name) + '</b> ' + esc(t.altitudeLabel))
      .concat(['<b>5.0★</b> on Google', '<b>105</b> reviews', '<b>est 2024</b> Kolkata',
               '<b>Small groups</b> local guides', '<b>Village homestays</b> home food']);
    const html = bits.map(b => '<span class="ticker__item">' + b + '</span>').join('');
    tt.innerHTML = html + html; // duplicate for seamless loop
  }

  /* -------------------------------------------------------------- counters */
  const cio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      cio.unobserve(el);
      const to = parseFloat(el.dataset.to);
      const dec = parseInt(el.dataset.dec || '0', 10);
      const comma = el.dataset.comma === '1';
      if (reduced) { el.textContent = comma ? to.toLocaleString('en-IN') : to.toFixed(dec); return; }
      const t0 = performance.now(), dur = 1500;
      (function step(now) {
        const k = Math.min(1, (now - t0) / dur);
        const v = to * (1 - Math.pow(1 - k, 3));
        el.textContent = comma ? Math.round(v).toLocaleString('en-IN') : v.toFixed(dec);
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.5 });
  $$('.count').forEach(el => cio.observe(el));

  /* ---------------------------------------------------------------- treks */
  const grid = $('#trekGrid');
  if (grid) {
    grid.innerHTML = WY.treks.map(t => {
      const tags = [
        t.flagship ? '<span class="tag tag--flag">Flagship</span>' : '',
        '<span class="tag tag--grade">' + esc(t.grade) + '</span>',
        '<span class="tag">' + esc(t.season) + '</span>'
      ].join('');
      const hi = t.highlights.map(h => '<li>' + esc(h) + '</li>').join('');
      const route = t.route.map((r, i) =>
        (i === 0 || i === t.route.length - 1) ? '<b>' + esc(r) + '</b>' : esc(r)).join(' → ');
      const msg = 'Hi Wild Yogi Adventures! I am interested in the ' + t.name +
                  ' trek (' + t.altitudeLabel + '). Could you send me the dates and details?';
      return '' +
      '<article class="trek' + (t.flagship ? ' trek--flag' : '') + '" data-grade="' + esc(t.grade) + '">' +
        '<div class="trek__img"><img src="' + t.img + '" alt="' + esc(t.name) + ' trek" loading="lazy" decoding="async"></div>' +
        '<div class="trek__scrim"></div>' +
        '<div class="trek__body">' +
          '<div class="trek__tags">' + tags + '</div>' +
          '<h3 class="trek__name">' + esc(t.name) + '</h3>' +
          '<p class="trek__region">' + esc(t.region) + '</p>' +
          '<p class="trek__hook">' + esc(t.hook) + '</p>' +
          '<dl class="trek__meta">' +
            '<div class="trek__alt"><dt>Altitude</dt><dd>' + esc(t.altitudeLabel) + '</dd></div>' +
            '<div><dt>Duration</dt><dd>' + esc(t.days) + '</dd></div>' +
            '<div><dt>Grade</dt><dd>' + esc(t.grade) + '</dd></div>' +
          '</dl>' +
          '<div class="trek__more">' +
            '<p class="trek__hook" style="margin-top:14px">' + esc(t.blurb) + '</p>' +
            '<ul class="trek__hi">' + hi + '</ul>' +
            '<p class="trek__route">' + route + '</p>' +
            '<a class="trek__link" href="' + waLink(msg) + '" target="_blank" rel="noopener">' +
              'Request dates' +
              '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    // 3D tilt
    if (!reduced && window.matchMedia('(hover:hover)').matches) {
      $$('.trek', grid).forEach(card => {
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform =
            'perspective(1000px) rotateY(' + (px * 5).toFixed(2) + 'deg) rotateX(' +
            (-py * 5).toFixed(2) + 'deg) translateY(-6px)';
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      });
    }

    // filters
    $$('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const f = chip.dataset.filter;
        $$('.chip').forEach(c => {
          const on = c === chip;
          c.classList.toggle('is-on', on);
          c.setAttribute('aria-selected', String(on));
        });
        $$('.trek', grid).forEach(card => {
          card.classList.toggle('is-hidden', f !== 'all' && card.dataset.grade.indexOf(f) === -1);
        });
      });
    });
  }

  /* --------------------------------------------------- elevation profile */
  const svg = $('#profileSvg');
  if (svg) {
    const W = 1000, H = 340, padX = 46, padY = 34;
    const pts = WY.profile;
    const fts = pts.map(p => p.ft);
    const lo = Math.min.apply(null, fts) - 700;
    const hi = Math.max.apply(null, fts) + 700;
    const X = i => padX + (i / (pts.length - 1)) * (W - padX * 2);
    const Y = ft => padY + (1 - (ft - lo) / (hi - lo)) * (H - padY * 2);

    // smooth path
    let d = 'M ' + X(0) + ' ' + Y(fts[0]);
    for (let i = 0; i < pts.length - 1; i++) {
      const x0 = X(i), y0 = Y(fts[i]), x1 = X(i + 1), y1 = Y(fts[i + 1]);
      const cx = (x0 + x1) / 2;
      d += ' C ' + cx + ' ' + y0 + ', ' + cx + ' ' + y1 + ', ' + x1 + ' ' + y1;
    }
    const line = $('#profileLine');
    line.setAttribute('d', d);
    $('#profileFill').setAttribute('d', d + ' L ' + X(pts.length - 1) + ' ' + (H - padY) + ' L ' + X(0) + ' ' + (H - padY) + ' Z');

    try {
      const len = line.getTotalLength();
      line.style.setProperty('--len', len);
    } catch (e) { line.style.setProperty('--len', '4000'); }

    // gridlines
    let g = '';
    for (let k = 0; k <= 4; k++) {
      const y = padY + (k / 4) * (H - padY * 2);
      g += '<line x1="0" y1="' + y + '" x2="' + W + '" y2="' + y + '"/>';
    }
    $('#profileGrid').innerHTML = g;

    // points + axis
    const maxFt = Math.max.apply(null, fts);
    const ptsWrap = $('#profilePts'), axis = $('#profileAxis'), detail = $('#routeDetail');

    ptsWrap.innerHTML = pts.map((p, i) => {
      const l = (X(i) / W) * 100, t = (Y(p.ft) / H) * 100;
      return '<button class="pt' + (p.ft === maxFt ? ' is-peak' : '') + '" data-i="' + i +
             '" style="left:' + l + '%;top:' + t + '%" aria-label="' + esc(p.name) + ', ' +
             p.ft.toLocaleString('en-IN') + ' feet"></button>';
    }).join('');
    $$('.pt', ptsWrap).forEach((b, i) => { b.style.transitionDelay = (i * 70) + 'ms'; });

    axis.innerHTML = pts.map((p, i) =>
      '<span class="axlabel" data-i="' + i + '" style="left:' + ((X(i) / W) * 100) + '%">' +
      '<b>' + esc(p.name) + '</b>' + p.ft.toLocaleString('en-IN') + ' ft</span>').join('');

    function showPoint(i) {
      const p = pts[i];
      detail.innerHTML = '<h3>' + esc(p.name) + '</h3>' +
        '<p><span class="ft">' + p.ft.toLocaleString('en-IN') + ' ft</span> — ' + esc(p.note) + '</p>';
      $$('.pt', ptsWrap).forEach(b => b.classList.toggle('is-on', +b.dataset.i === i));
      $$('.axlabel', axis).forEach(b => b.classList.toggle('is-on', +b.dataset.i === i));
    }
    $$('.pt', ptsWrap).forEach(b => {
      const i = +b.dataset.i;
      b.addEventListener('mouseenter', () => showPoint(i));
      b.addEventListener('focus', () => showPoint(i));
      b.addEventListener('click', () => showPoint(i));
    });
    showPoint(pts.findIndex(p => p.ft === maxFt));
  }

  /* ------------------------------------------------------------------ why */
  const wg = $('#whyGrid');
  if (wg) {
    wg.innerHTML = WY.pillars.map(p =>
      '<div class="pill reveal"><span class="pill__n">' + p.n + '</span>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.body) + '</p></div>').join('');
    observe('.pill', wg);
  }

  /* ----------------------------------------------------------------- team */
  const tg = $('#teamGrid');
  if (tg) {
    tg.innerHTML = WY.team.map(m =>
      '<div class="person reveal"><h3 class="person__name">' + esc(m.name) + '</h3>' +
      '<p class="person__role">' + esc(m.role) + '</p>' +
      '<p class="person__note">' + esc(m.note) + '</p></div>').join('');
    observe('.person', tg);
  }

  /* -------------------------------------------------------------- reviews */
  function revCard(r) {
    return '<article class="rev">' +
      '<div class="rev__top">' +
        '<span class="rev__av" aria-hidden="true">' + esc(initials(r.name)) + '</span>' +
        '<span class="rev__who"><span class="rev__name">' + esc(r.name) + '</span>' +
        '<span class="rev__when">' + esc(r.when) + '</span></span>' +
        '<span class="rev__stars" aria-label="' + r.stars + ' stars">' + '★'.repeat(r.stars) + '</span>' +
      '</div>' +
      '<p class="rev__text">' + esc(r.text) +
        (r.trimmed ? ' <span class="rev__trim">…</span>' : '') + '</p>' +
    '</article>';
  }
  const half = Math.ceil(WY.reviews.length / 2);
  const rows = [WY.reviews.slice(0, half), WY.reviews.slice(half)];
  ['#revRow1', '#revRow2'].forEach((sel, i) => {
    const track = $(sel + ' .revrow__track');
    if (!track) return;
    const html = rows[i].map(revCard).join('');
    track.innerHTML = html + html;
  });

  /* -------------------------------------------------------------- gallery */
  const mas = $('#masonry');
  const PAGE = 24;
  let shown = PAGE;
  if (mas) {
    mas.innerHTML = WY.gallery.map((g, i) =>
      '<button class="gitem' + (i >= PAGE ? ' is-hidden' : '') + '" data-i="' + i + '" aria-label="Open photo ' + (i + 1) + '">' +
      '<img src="' + g.sm + '" alt="Wild Yogi Adventures trek photo ' + (i + 1) + '" loading="lazy" decoding="async">' +
      '</button>').join('');
    observe('.gitem', mas);

    const more = $('#galMore');
    more && more.addEventListener('click', () => {
      shown += PAGE;
      $$('.gitem', mas).forEach((el, i) => {
        if (i < shown && el.classList.contains('is-hidden')) {
          el.classList.remove('is-hidden');
          io.observe(el);
        }
      });
      if (shown >= WY.gallery.length) more.parentElement.style.display = 'none';
    });
    if (WY.gallery.length <= PAGE && more) more.parentElement.style.display = 'none';
  }

  /* ------------------------------------------------------------ instagram */
  const ir = $('#instaRow');
  if (ir && WY.instagram && WY.instagram.length) {
    const igIcon =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" stroke-width="1.7"/>' +
      '<circle cx="12" cy="12" r="4" stroke="#fff" stroke-width="1.7"/>' +
      '<circle cx="17.3" cy="6.7" r="1.2" fill="#fff"/></svg>';
    const reelIcon =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<path d="M8 5v14l11-7z" fill="#fff"/></svg>';

    ir.innerHTML = WY.instagram.map(p =>
      '<a class="icell" href="' + p.href + '" target="_blank" rel="noopener" ' +
        'aria-label="View this post on Instagram' + (p.date ? ', posted ' + esc(p.date) : '') + '">' +
        '<img src="' + p.img + '" alt="Instagram post by Wild Yogi Adventures' +
          (p.date ? ', ' + esc(p.date) : '') + '" loading="lazy" decoding="async">' +
        (p.reel ? '<span class="icell__reel">' + reelIcon + '</span>' : '') +
        '<span class="icell__ov">' + igIcon +
          (p.date ? '<span class="icell__date">' + esc(p.date) + '</span>' : '') +
        '</span>' +
      '</a>').join('');
  }

  /* ------------------------------------------------------------- lightbox */
  const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCount = $('#lbCount');
  let lbi = 0;
  function openLb(i) {
    lbi = (i + WY.gallery.length) % WY.gallery.length;
    lbImg.src = WY.gallery[lbi].lg;
    lbImg.alt = 'Wild Yogi Adventures trek photo ' + (lbi + 1);
    lbCount.textContent = (lbi + 1) + ' / ' + WY.gallery.length;
    lb.hidden = false;
    document.body.classList.add('is-locked');
  }
  function closeLb() { lb.hidden = true; document.body.classList.remove('is-locked'); }

  mas && mas.addEventListener('click', e => {
    const b = e.target.closest('.gitem');
    if (b) openLb(+b.dataset.i);
  });
  $('#lbClose') && $('#lbClose').addEventListener('click', closeLb);
  $('#lbPrev') && $('#lbPrev').addEventListener('click', () => openLb(lbi - 1));
  $('#lbNext') && $('#lbNext').addEventListener('click', () => openLb(lbi + 1));
  lb && lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') openLb(lbi - 1);
    if (e.key === 'ArrowRight') openLb(lbi + 1);
  });
  // swipe
  let tsx = 0;
  lb && lb.addEventListener('touchstart', e => { tsx = e.changedTouches[0].clientX; }, { passive: true });
  lb && lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tsx;
    if (Math.abs(dx) > 55) openLb(lbi + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* ----------------------------------------------------------- plan form */
  const sel = $('#fTrek');
  if (sel) {
    sel.innerHTML = WY.treks.map(t =>
      '<option value="' + esc(t.name) + ' (' + esc(t.altitudeLabel) + ')">' +
      esc(t.name) + ' — ' + esc(t.altitudeLabel) + '</option>').join('') +
      '<option value="Not sure yet">Not sure yet — help me choose</option>';
  }
  const form = $('#planForm');
  form && form.addEventListener('submit', e => {
    e.preventDefault();
    const name = ($('#fName').value || '').trim();
    if (!name) { $('#fName').focus(); return; }
    const when = $('#fWhen').value;
    let whenTxt = 'sometime soon';
    if (when) {
      const d = new Date(when + '-01T00:00:00');
      whenTxt = d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    }
    const note = ($('#fNote').value || '').trim();
    const msg =
      'Hi Wild Yogi Adventures!\n\n' +
      'I am ' + name + '.\n' +
      'Trek: ' + $('#fTrek').value + '\n' +
      'When: ' + whenTxt + '\n' +
      'Group size: ' + ($('#fPax').value || '1') + '\n' +
      'Experience: ' + $('#fExp').value + '\n' +
      (note ? '\n' + note + '\n' : '') +
      '\nCould you send me dates, cost and a kit list? Thank you!';
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ------------------------------------------------------- footer trek list */
  const ft = $('#footTreks');
  if (ft) {
    ft.innerHTML = WY.treks.map(t =>
      '<li><a href="#treks">' + esc(t.name) + '</a></li>').join('');
  }
})();
