/* ==========================================================================
   index_v1 — interactions
   Vanilla JS, no build step. Reads WY from data.js (unmodified) and WY.v1
   from v1-extra.js. index.html does not load this file.
   ========================================================================== */
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const C = WY.v1.copy;

  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  const wa  = msg => 'https://wa.me/' + WY.biz.whatsapp + (msg ? '?text=' + encodeURIComponent(msg) : '');
  const num = n => n.toLocaleString('en-IN');
  const initials = n => n.trim().split(/\s+/).slice(0,2).map(w => w[0]).join('').toUpperCase();
  const arrow = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const trekById = id => WY.treks.filter(t => t.id === id)[0];

  /* ---------------------------------------------------------------- theme */
  const root = document.documentElement;
  function setTheme(t, remember) {
    root.setAttribute('data-theme', t);
    root.style.colorScheme = t;
    const m = $('meta[name="theme-color"]');
    if (m) m.setAttribute('content', t === 'dark' ? '#100D0A' : '#FBF8F1');
    [$('#themer'), $('#sheetTheme')].forEach(b => {
      if (b) b.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' theme');
    });
    if (remember) { try { localStorage.setItem('wy-theme-v1', t); } catch (e) {} }
  }
  const themeNow = () => root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  setTheme(themeNow(), false);
  [$('#themer'), $('#sheetTheme')].forEach(b =>
    b && b.addEventListener('click', () => setTheme(themeNow() === 'dark' ? 'light' : 'dark', true)));

  /* ------------------------------------------------------------ copy + CTAs */
  $('#heroKick').textContent = C.eyebrow;
  $('#heroA').textContent    = C.titleA;
  $('#heroB').textContent    = C.titleB;
  $('#heroSub').textContent  = C.sub;
  $('#ctaA').textContent     = C.ctaA;
  $('#ctaB').textContent     = C.ctaB;
  $('#scrollTxt').textContent = C.scroll;
  $('#catsKick').textContent = C.catsKick;
  $('#catsHead').textContent = C.catsHead;
  $('#trekKick').textContent = C.trekKick;
  $('#trekHead').textContent = C.trekHead;
  $('#trekSub').textContent  = C.trekSub;
  $('#revCount').textContent = WY.biz.reviewCount;
  $('#yr').textContent = new Date().getFullYear();
  $('#allRev').href = WY.biz.reviewUrl;

  const hello = 'Hi Wild Yogi Adventures! I found you online and I would like to know about your upcoming trips.';
  ['#navCta','#menuCta','#ctaB','#bandCta','#fab'].forEach(s => {
    const el = $(s);
    if (el) { el.href = wa(hello); el.target = '_blank'; el.rel = 'noopener'; }
  });

  /* ------------------------------------------------------------------- nav */
  const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
  addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 30), { passive:true });
  nav.classList.toggle('stuck', scrollY > 30);

  function setMenu(open) {
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-locked', open);
  }
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------------------------------------------------------------- hero bg */
  /* Hero set for this page only. index.html keeps its own hero-1..4 untouched.
     Chosen so the subject is never dead-centre, because the phone crop is tall
     and a centred figure lands directly behind the headline. Ultra-wide
     panoramas were rejected too: cropping 2000x896 to a phone's shape upscales
     it ~1.9x and goes soft. */
  const heroShots = ['assets/img/hero/v1-1.webp','assets/img/hero/v1-2.webp',
                     'assets/img/hero/v1-3.webp','assets/img/hero/v1-4.webp'];
  const bg = $('#heroBg'), dots = $('#heroDots');
  bg.innerHTML = heroShots.map((s,i) =>
    '<div class="' + (i===0?'on':'') + '" style="background-image:url(\'' + s + '\')"></div>').join('');
  dots.innerHTML = heroShots.map((_,i) =>
    '<button type="button" class="' + (i===0?'on':'') + '" aria-label="Image ' + (i+1) + '"></button>').join('');
  let hi = 0, htimer;
  function goHero(n) {
    hi = (n + heroShots.length) % heroShots.length;
    $$('#heroBg div').forEach((d,i) => d.classList.toggle('on', i === hi));
    $$('#heroDots button').forEach((d,i) => d.classList.toggle('on', i === hi));
  }
  function autoHero() { clearInterval(htimer); if (!reduced) htimer = setInterval(() => goHero(hi+1), 6500); }
  $$('#heroDots button').forEach((b,i) => b.addEventListener('click', () => { goHero(i); autoHero(); }));
  autoHero();
  requestAnimationFrame(() => $('#hero').classList.add('in'));
  setTimeout(() => $('#fab').classList.add('in'), 900);

  /* --------------------------------------------------------------- reveal io */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold:.12, rootMargin:'0px 0px -6% 0px' });
  const watch = (sel, r) => $$(sel, r).forEach(el => io.observe(el));
  watch('.reveal');

  /* -------------------------------------------------------------- counters */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; cio.unobserve(el);
    const to = parseFloat(el.dataset.to), dec = +(el.dataset.dec||0), comma = el.dataset.comma === '1';
    const out = v => comma ? num(Math.round(v)) : v.toFixed(dec);
    if (reduced) { el.textContent = out(to); return; }
    const t0 = performance.now();
    (function step(now){
      const k = Math.min(1,(now-t0)/1400);
      el.textContent = out(to*(1-Math.pow(1-k,3)));
      if (k<1) requestAnimationFrame(step);
    })(t0);
  }), { threshold:.5 });
  $$('.num').forEach(el => cio.observe(el));

  /* ------------------------------------------------------------- categories */
  $('#cats').innerHTML = WY.v1.categories.map(c => {
    const tag = c.live
      ? '<span class="cat__tag">' + (WY.treks.length) + ' journeys</span>'
      : '<span class="cat__tag cat__tag--soft">Enquire</span>';
    return '<button class="cat reveal' + (c.live ? ' cat--wide' : '') + '" type="button" data-cat="' + c.id + '">' +
      '<img src="' + c.img + '" alt="" loading="lazy" decoding="async">' + tag +
      '<span class="cat__in">' +
        '<span class="cat__n">' + c.n + '</span>' +
        '<h3>' + esc(c.name) + '</h3>' +
        '<p>' + esc(c.blurb) + '</p>' +
        '<span class="cat__meta"><span>' + esc(c.meta) + '</span>' +
          '<span class="cat__go">' + (c.live ? 'Browse' : 'Ask us') + arrow + '</span></span>' +
      '</span></button>';
  }).join('');
  watch('.cat');
  $$('.cat').forEach(btn => btn.addEventListener('click', () => {
    const c = WY.v1.categories.filter(x => x.id === btn.dataset.cat)[0];
    if (c.live) { $('#journeys').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); return; }
    open(wa('Hi Wild Yogi Adventures! I am interested in your ' + c.name + '. What do you currently run?'), '_blank', 'noopener');
  }));

  /* ------------------------------------------------------------ trek cards */
  const FEAT = WY.v1.featured;
  function cardHTML(t, hidden) {
    const d = WY.v1.detail[t.id] || {};
    return '<button class="tcard' + (hidden ? ' hide' : '') + '" type="button" data-trek="' + t.id + '">' +
      '<span class="tcard__img">' +
        '<img src="' + t.img + '" alt="' + esc(t.name) + '" loading="lazy" decoding="async">' +
        '<span class="tcard__badge">' +
          (t.flagship ? '<span class="pill pill--hot">Flagship</span>' : '') +
          '<span class="pill">' + esc(t.grade) + '</span></span>' +
        '<span class="tcard__alt">' + esc(t.altitudeLabel) + '</span>' +
      '</span>' +
      '<span class="tcard__body">' +
        '<span class="tcard__region">' + esc(t.region) + '</span>' +
        '<h3>' + esc(t.name) + '</h3>' +
        '<p>' + esc(t.hook) + '</p>' +
        '<span class="tcard__foot">' +
          '<span class="tcard__days">' + esc(t.days) + '</span>' +
          '<span class="tcard__go">View journey' + arrow + '</span>' +
        '</span>' +
      '</span></button>';
  }
  const ordered = FEAT.map(trekById).filter(Boolean)
    .concat(WY.treks.filter(t => FEAT.indexOf(t.id) === -1));
  $('#treks').innerHTML = ordered.map((t,i) => cardHTML(t, i >= FEAT.length)).join('');

  let expanded = false;
  $('#showAll').addEventListener('click', () => {
    expanded = !expanded;
    $$('.tcard').forEach((c,i) => c.classList.toggle('hide', !expanded && i >= FEAT.length));
    $('#showAll span').textContent = expanded ? 'Show fewer' : 'Show all journeys';
    $('#showAll svg').style.transform = expanded ? 'rotate(180deg)' : '';
    if (!expanded) $('#journeys').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  });

  /* ------------------------------------------------------------------- why */
  $('#why6').innerHTML = WY.pillars.map(p =>
    '<li><span><b style="display:block;font-family:var(--display);font-size:17px;margin-bottom:4px">' +
    esc(p.title) + '</b><span style="color:var(--ink-mute);font-size:13.5px">' + esc(p.body) + '</span></span></li>').join('');

  /* --------------------------------------------------------------- reviews */
  function revHTML(r) {
    return '<article class="rev">' +
      '<header style="display:flex;align-items:center;gap:11px;margin-bottom:11px">' +
        '<span class="av" style="width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-family:var(--display);font-weight:600;background:linear-gradient(135deg,var(--ember),var(--sun));color:var(--ember-ink)">' + esc(initials(r.name)) + '</span>' +
        '<span><b style="display:block;font-size:14px">' + esc(r.name) + '</b>' +
        '<time style="font-family:var(--mono);font-size:10px;color:var(--ink-mute)">' + esc(r.when) + '</time></span>' +
        '<span style="margin-left:auto;color:var(--sun);font-size:12px">' + '★'.repeat(r.stars) + '</span>' +
      '</header>' +
      '<p style="margin:0;font-size:14.5px;line-height:1.7;color:var(--ink-dim)">' + esc(r.text) +
        (r.trimmed ? ' <span style="color:var(--ink-mute)">…</span>' : '') + '</p></article>';
  }
  const revHtml = WY.reviews.map(revHTML).join('');
  $('#revRow').innerHTML = revHtml + revHtml;

  /* ---------------------------------------------------------------- footer */
  $('#footCats').innerHTML = WY.v1.categories.map(c => '<li><a href="#escape">' + esc(c.name) + '</a></li>').join('');
  $('#footTreks').innerHTML = WY.treks.slice(0,6).map(t =>
    '<li><a href="#trek/' + t.id + '">' + esc(t.name) + '</a></li>').join('');
  $('#footContact').innerHTML =
    WY.biz.phones.map((p,i) => '<li><a href="tel:' + p + '">+91 ' + esc(WY.biz.phonesDisplay[i]) + '</a></li>').join('') +
    '<li><a href="https://www.instagram.com/' + WY.biz.instagram + '/" target="_blank" rel="noopener">@' + WY.biz.instagram + '</a></li>' +
    '<li style="margin-top:8px;line-height:1.7">' + esc(WY.biz.address) + '</li>';

  /* ======================================================== DETAIL OVERLAY */
  const sheet = $('#sheet'), sheetBody = $('#sheetBody'), sheetName = $('#sheetName');
  let lbPool = [], lbi = 0, lastFocus = null;

  function reviewsFor(id) {
    const words = (WY.v1.reviewMatch[id] || []).map(w => w.toLowerCase());
    const hit = WY.reviews.filter(r => words.some(w => r.text.toLowerCase().indexOf(w) !== -1));
    return { list: hit.length ? hit.slice(0,3) : WY.reviews.slice(0,3), specific: hit.length > 0 };
  }

  function detailHTML(t) {
    const d = WY.v1.detail[t.id] || {};
    const photos = (d.photos || []).map(i => WY.gallery[i-1]).filter(Boolean);
    const rv = reviewsFor(t.id);
    const maxFt = Math.max.apply(null, (d.stages||[]).map(s => s.ft || 0));

    const stages = (d.stages || []).map(s =>
      '<li class="' + (s.ft && s.ft === maxFt ? 'peak' : '') + '">' +
        '<h4>' + esc(s.name) + (s.ft ? '<span class="ft">' + num(s.ft) + ' ft</span>' : '') + '</h4>' +
        '<p>' + esc(s.note) + '</p></li>').join('');

    const msg = 'Hi Wild Yogi Adventures! I am interested in the ' + t.name +
                ' (' + t.altitudeLabel + '). Could you send me the dates, cost and a kit list?';

    return '' +
    '<div class="dhero"><img src="' + t.img + '" alt="' + esc(t.name) + '">' +
      '<div class="dhero__in">' +
        '<p class="dhero__region">' + esc(t.region) + '</p>' +
        '<h1>' + esc(t.name) + '</h1>' +
        '<p class="dhero__hook">' + esc(t.hook) + '</p>' +
      '</div></div>' +

    '<dl class="dstats">' +
      '<div><dt>' + (t.altitude ? 'Max altitude' : 'Known for') + '</dt><dd class="hi">' + esc(t.altitudeLabel) + '</dd></div>' +
      '<div><dt>Duration</dt><dd>' + esc(t.days) + '</dd></div>' +
      '<div><dt>Grade</dt><dd>' + esc(t.grade) + '</dd></div>' +
      '<div><dt>Season</dt><dd>' + esc(t.season) + '</dd></div>' +
    '</dl>' +

    '<section class="dsec"><div class="wrap">' +
      '<h2>The journey</h2>' +
      '<p class="dlead">' + esc(d.long || t.blurb) + '</p>' +
      '<dl class="dnote">' +
        (d.best ? '<div><dt>Best time</dt><dd>' + esc(d.best) + '</dd></div>' : '') +
        (d.fitness ? '<div><dt>Fitness needed</dt><dd>' + esc(d.fitness) + '</dd></div>' : '') +
      '</dl>' +
    '</div></section>' +

    '<section class="dsec"><div class="wrap"><h2>What stands out</h2>' +
      '<ul class="dhl">' + t.highlights.map(h => '<li>' + esc(h) + '</li>').join('') + '</ul>' +
    '</div></section>' +

    (stages ? '<section class="dsec"><div class="wrap"><h2>The route, stage by stage</h2>' +
      '<ul class="rail">' + stages + '</ul>' +
      '<p class="dcap">Wild Yogi have not published a day-by-day split for this route, so these are stages rather than days. Ask them on WhatsApp for the exact itinerary.</p>' +
    '</div></section>' : '') +

    (photos.length ? '<section class="dsec"><div class="wrap"><h2>Photographs</h2>' +
      '<div class="dgal">' + photos.map((p,i) =>
        '<button type="button" data-ph="' + i + '"><img src="' + p.sm + '" alt="" loading="lazy" decoding="async"></button>').join('') +
      '</div><p class="dcap">From Wild Yogi’s own albums. Shot by their trekkers and leaders — no stock photography anywhere on this site.</p>' +
    '</div></section>' : '') +

    '<section class="dsec"><div class="wrap">' +
      '<h2>' + (rv.specific ? 'What people said about this one' : 'What people say about Wild Yogi') + '</h2>' +
      '<div class="drev">' + rv.list.map(r =>
        '<article><header><span class="av">' + esc(initials(r.name)) + '</span>' +
        '<span><b>' + esc(r.name) + '</b><time>' + esc(r.when) + '</time></span>' +
        '<span class="st">' + '★'.repeat(r.stars) + '</span></header>' +
        '<p>' + esc(r.text) + (r.trimmed ? ' …' : '') + '</p></article>').join('') + '</div>' +
      (rv.specific ? '' : '<p class="dcap">No review in the public set names this route yet, so these are general reviews of Wild Yogi.</p>') +
    '</div></section>' +

    '<div class="dbar">' +
      '<span class="dbar__txt"><b>' + esc(t.name) + '</b><span>No deposit to ask a question.</span></span>' +
      '<a class="btn btn--fill" href="' + wa(msg) + '" target="_blank" rel="noopener"><span>Request dates &amp; cost</span>' + arrow + '</a>' +
    '</div>';
  }

  function openTrek(id, push) {
    const t = trekById(id);
    if (!t) return;
    lastFocus = document.activeElement;
    const d = WY.v1.detail[id] || {};
    lbPool = (d.photos || []).map(i => WY.gallery[i-1]).filter(Boolean);
    sheetName.textContent = t.name;
    sheetBody.innerHTML = detailHTML(t);
    sheet.hidden = false;
    requestAnimationFrame(() => sheet.classList.add('open'));
    sheet.scrollTop = 0;
    document.body.classList.add('is-locked');
    if (push && location.hash !== '#trek/' + id) location.hash = 'trek/' + id;
    $('#sheetBack').focus();
    $$('.dgal button', sheetBody).forEach(b =>
      b.addEventListener('click', () => openLb(+b.dataset.ph)));
  }

  function closeSheet(push) {
    sheet.classList.remove('open');
    document.body.classList.remove('is-locked');
    setTimeout(() => { sheet.hidden = true; sheetBody.innerHTML = ''; }, reduced ? 0 : 450);
    if (push && location.hash.indexOf('#trek/') === 0) history.pushState('', '', location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  $('#sheetBack').addEventListener('click', () => closeSheet(true));
  $$('.tcard').forEach(c => c.addEventListener('click', () => openTrek(c.dataset.trek, true)));

  // hash routing: deep links, the back button and the footer links all work
  function fromHash() {
    const m = location.hash.match(/^#trek\/([a-z0-9-]+)$/i);
    if (m && trekById(m[1])) openTrek(m[1], false);
    else if (!sheet.hidden) closeSheet(false);
  }
  addEventListener('hashchange', fromHash);
  fromHash();

  /* -------------------------------------------------------------- lightbox */
  const lb = $('#lb'), lbImg = $('#lbImg'), lbC = $('#lbC');
  function openLb(i) {
    if (!lbPool.length) return;
    lbi = (i + lbPool.length) % lbPool.length;
    lbImg.src = lbPool[lbi].lg;
    lbC.textContent = (lbi+1) + ' / ' + lbPool.length;
    lb.hidden = false;
  }
  const closeLb = () => { lb.hidden = true; };
  $('#lbX').addEventListener('click', closeLb);
  $('#lbP').addEventListener('click', () => openLb(lbi-1));
  $('#lbN').addEventListener('click', () => openLb(lbi+1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  let tsx = 0;
  lb.addEventListener('touchstart', e => { tsx = e.changedTouches[0].clientX; }, { passive:true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tsx;
    if (Math.abs(dx) > 55) openLb(lbi + (dx < 0 ? 1 : -1));
  }, { passive:true });

  addEventListener('keydown', e => {
    if (!lb.hidden) {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') openLb(lbi-1);
      if (e.key === 'ArrowRight') openLb(lbi+1);
      return;
    }
    if (e.key === 'Escape') {
      if (!sheet.hidden) closeSheet(true);
      else setMenu(false);
    }
  });
})();
