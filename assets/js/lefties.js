/* ============================================================
   LEFTIES — site behaviour + conversion tracking
   ------------------------------------------------------------
   >>> EDIT THIS BLOCK ONLY. Everything below it is plumbing. <<<
   ============================================================ */

window.LEFTIES = {

  // --- Google Analytics 4 (already live, leave as-is) ---
  GA4_ID: 'G-EXYFZL7KT4',

  // --- Google Ads ---
  // Google Ads > Goals > Conversions > Summary. The ID looks like AW-123456789.
  // Each conversion action has a label like 'AbC-D_efGhIjKlMnOp'.
  GOOGLE_ADS_ID:    'AW-XXXXXXXXXX',
  LABEL_FORM_LEAD:  'XXXXXXXXXXXXXXXXXXX',   // conversion action: "Quote form submitted"
  LABEL_PHONE_CALL: 'XXXXXXXXXXXXXXXXXXX',   // conversion action: "Phone call click"

  // --- Meta (Facebook) Pixel ---
  // Events Manager > Data Sources. A 15-16 digit number.
  META_PIXEL_ID: 'XXXXXXXXXXXXXXX',

  // --- Quote form destination ---
  // GitHub Pages can't process forms, so this posts to a form service.
  // Sign up at formspree.io (or web3forms.com), create a form, paste the URL here.
  FORM_ENDPOINT: 'https://formspree.io/f/XXXXXXXX',

  // --- Business details (used by the click-to-call handlers) ---
  PHONE: '0417220012',

  // --- Google review link (used by review-request.html) ---
  // Google Business Profile > Ask for reviews > Copy link. Looks like https://g.page/r/XXXXXXXXXXXXXXXXXXX/review
  GOOGLE_REVIEW_LINK: 'https://g.page/r/XXXXXXXXXXXXXXXXXXX/review',

  // Set true while testing to see every event in the browser console.
  DEBUG: false
};

/* ============================================================
   Plumbing — no need to edit below here
   ============================================================ */
(function () {
  'use strict';

  var CFG = window.LEFTIES;
  var isPlaceholder = function (v) { return !v || v.indexOf('XXXX') !== -1; };
  var log = function () {
    if (CFG.DEBUG && window.console) console.log.apply(console, ['[lefties]'].concat([].slice.call(arguments)));
  };

  /* ---------- tag loading ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  function loadScript(src) {
    var s = document.createElement('script');
    s.async = true; s.src = src;
    document.head.appendChild(s);
  }

  // GA4 + Google Ads share one gtag.js load
  if (!isPlaceholder(CFG.GA4_ID) || !isPlaceholder(CFG.GOOGLE_ADS_ID)) {
    var primary = !isPlaceholder(CFG.GA4_ID) ? CFG.GA4_ID : CFG.GOOGLE_ADS_ID;
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + primary);
    gtag('js', new Date());
    if (!isPlaceholder(CFG.GA4_ID)) gtag('config', CFG.GA4_ID);
    if (!isPlaceholder(CFG.GOOGLE_ADS_ID)) gtag('config', CFG.GOOGLE_ADS_ID);
    log('google tags loaded');
  }

  // Meta Pixel
  if (!isPlaceholder(CFG.META_PIXEL_ID)) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', CFG.META_PIXEL_ID);
    window.fbq('track', 'PageView');
    log('meta pixel loaded');
  }

  /* ---------- conversion helpers ---------- */
  function adsConversion(label, value) {
    if (isPlaceholder(CFG.GOOGLE_ADS_ID) || isPlaceholder(label)) { log('ads conversion skipped (not configured)'); return; }
    var payload = { send_to: CFG.GOOGLE_ADS_ID + '/' + label };
    if (value) { payload.value = value; payload.currency = 'AUD'; }
    window.gtag('event', 'conversion', payload);
    log('ads conversion', label);
  }

  function metaEvent(name, params) {
    if (typeof window.fbq !== 'function') return;
    window.fbq('track', name, params || {});
    log('meta event', name);
  }

  function ga4Event(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params || {});
    log('ga4 event', name);
  }

  // Public so pages can fire their own
  window.leftiesTrackLead = function (source) {
    ga4Event('generate_lead', { method: source || 'quote_form' });
    metaEvent('Lead', { content_name: source || 'quote_form' });
    adsConversion(CFG.LABEL_FORM_LEAD);
  };
  window.leftiesTrackCall = function () {
    ga4Event('click_to_call', { method: 'phone_link' });
    metaEvent('Contact', { content_name: 'phone_click' });
    adsConversion(CFG.LABEL_PHONE_CALL);
  };

  /* ---------- click-to-call tracking on every tel: link ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (a) window.leftiesTrackCall();
    var m = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if (m) { ga4Event('email_click'); metaEvent('Contact', { content_name: 'email_click' }); }
    var s = e.target.closest && e.target.closest('a[href^="sms:"]');
    if (s) { ga4Event('sms_click'); metaEvent('Contact', { content_name: 'sms_click' }); }
  }, true);

  /* ---------- mobile nav ---------- */
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) btn.click();
    });
  }

  /* ---------- motion ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var targets = document.querySelectorAll(
    '.section-head, .svc-card, .proof-grid figure, .review, .meet, .rail li, ' +
    '.feature-list li, .note-card, .contact-card, .cta-band .wrap, .trust li, .faq details, ' +
    '.split-view, .estimator-card, .photo-quote-card'
  );
  if (!reduce && 'IntersectionObserver' in window) {
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 90 + 'ms';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '200px 0px -40px 0px' });
    targets.forEach(function (el) { io.observe(el); });

    // Failsafe: never leave content invisible. If anything hasn't revealed
    // within 3s (odd viewport, observer misfire, print, headless crawler),
    // show it anyway. A blank page is far worse than a skipped animation.
    setTimeout(function () {
      targets.forEach(function (el) { el.classList.add('in'); });
    }, 3000);
  }

  /* ---------- hero parallax ---------- */
  // Layers drift at different speeds as the hero scrolls out of view: the
  // aurora (furthest back) moves slowest, bubbles a little faster, hero
  // content stays put (it's the foreground, scrolls at the normal rate).
  var heroEl = document.querySelector('.hero');
  if (heroEl && !reduce) {
    var ticking = false;
    var updateParallax = function () {
      ticking = false;
      var rect = heroEl.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return; // hero off-screen
      var scrolled = Math.min(Math.max(-rect.top, 0), rect.height);
      heroEl.style.setProperty('--px-aurora', (scrolled * 0.18).toFixed(1) + 'px');
      heroEl.style.setProperty('--px-bubbles', (scrolled * 0.32).toFixed(1) + 'px');
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(updateParallax); }
    }, { passive: true });
    updateParallax();
  }

  // Owner photo is optional; collapse the layout if it hasn't been added yet.
  document.querySelectorAll('.meet').forEach(function (m) {
    var img = m.querySelector('img');
    if (!img) { m.classList.add('no-photo'); return; }
    var mark = function () { m.classList.add('no-photo'); };
    img.addEventListener('error', mark);
    if (img.complete && img.naturalWidth === 0) mark();
  });

  // hero word rotator
  var rot = document.querySelector('[data-rotate]');
  if (rot) {
    var words = rot.dataset.rotate.split('|');
    var i = 0;
    if (!reduce) {
      setInterval(function () {
        i = (i + 1) % words.length;
        rot.classList.add('flip-out');
        setTimeout(function () {
          rot.textContent = words[i];
          rot.classList.remove('flip-out');
          rot.classList.add('flip-in');
          setTimeout(function () { rot.classList.remove('flip-in'); }, 350);
        }, 250);
      }, 2600);
    }
  }

  // ticker: duplicate track for a seamless loop
  document.querySelectorAll('.ticker-track').forEach(function (t) { t.innerHTML += t.innerHTML; });

  /* ---------- before/after wipe sliders ---------- */
  document.querySelectorAll('.split-view').forEach(function (sv) {
    var range = sv.querySelector('.split-range');
    if (!range) return;
    var update = function () { sv.style.setProperty('--pos', range.value + '%'); };
    range.addEventListener('input', update);
    update();
  });

  /* ---------- suburb live-filter (service-area pill lists) ---------- */
  document.querySelectorAll('.areas').forEach(function (list) {
    var input = document.createElement('input');
    input.type = 'search';
    input.className = 'areas-search';
    input.placeholder = 'Find your suburb…';
    input.setAttribute('aria-label', 'Filter service areas by suburb');
    list.parentNode.insertBefore(input, list);

    var spans = [].slice.call(list.querySelectorAll('span'));
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      spans.forEach(function (span) {
        var match = !q || span.textContent.toLowerCase().indexOf(q) !== -1;
        span.classList.toggle('dim', !match);
      });
    });
  });

  /* ---------- proof photo lightbox ---------- */
  var proofGrids = document.querySelectorAll('.proof-grid');
  if (proofGrids.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML =
      '<button type="button" class="lightbox-prev" aria-label="Previous photo">‹</button>' +
      '<img alt=""/>' +
      '<button type="button" class="lightbox-next" aria-label="Next photo">›</button>' +
      '<button type="button" class="lightbox-close" aria-label="Close">✕</button>' +
      '<p class="lightbox-caption"></p>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector('img');
    var lbCaption = lb.querySelector('.lightbox-caption');
    var lbImages = [];
    var lbIndex = 0;
    var lbTrigger = null;

    var lbShow = function (i) {
      lbIndex = (i + lbImages.length) % lbImages.length;
      var img = lbImages[lbIndex];
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      lbCaption.textContent = img.alt || '';
    };
    var lbOpen = function (grid, img) {
      lbImages = [].slice.call(grid.querySelectorAll('img'));
      lbTrigger = img;
      lbShow(lbImages.indexOf(img));
      lb.classList.add('open');
      lb.querySelector('.lightbox-close').focus();
      document.body.style.overflow = 'hidden';
    };
    var lbClose = function () {
      lb.classList.remove('open');
      document.body.style.overflow = '';
      if (lbTrigger) lbTrigger.focus();
    };

    proofGrids.forEach(function (grid) {
      grid.querySelectorAll('img').forEach(function (img) {
        img.tabIndex = 0;
        img.setAttribute('role', 'button');
        if (!img.hasAttribute('aria-label')) img.setAttribute('aria-label', 'View larger: ' + (img.alt || 'photo'));
        img.addEventListener('click', function () { lbOpen(grid, img); });
        img.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lbOpen(grid, img); }
        });
      });
    });
    lb.querySelector('.lightbox-close').addEventListener('click', lbClose);
    lb.querySelector('.lightbox-prev').addEventListener('click', function () { lbShow(lbIndex - 1); });
    lb.querySelector('.lightbox-next').addEventListener('click', function () { lbShow(lbIndex + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lbClose();
      else if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
      else if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
    });
  }

  /* ---------- instant estimator (quote.html) ---------- */
  var estRooms = document.getElementById('estRooms');
  var estSeats = document.getElementById('estSeats');
  var estProtect = document.getElementById('estProtect');
  if (estRooms && estSeats) {
    var estTotal = document.getElementById('estTotal');
    var estSmsBtn = document.getElementById('estSmsBtn');
    var estCopyBtn = document.getElementById('estCopyBtn');
    var estMsg = '';

    var calcEstimate = function () {
      var rooms = parseInt(estRooms.value, 10) || 0;
      var seats = parseInt(estSeats.value, 10) || 0;
      var protect = estProtect && estProtect.checked;

      var base = (rooms * 40) + (seats * 35);
      var protectFee = protect ? ((rooms + seats) * 15) : 0;
      var hasItems = rooms > 0 || seats > 0;
      var total = hasItems ? Math.max(90, base + protectFee) : 0;

      estTotal.textContent = '$' + total;

      estMsg = hasItems
        ? 'Hi Lefties, my rough estimate is $' + total + ' (' + rooms + ' carpet room' + (rooms === 1 ? '' : 's') + ', ' + seats + ' lounge seat' + (seats === 1 ? '' : 's') + ', protection: ' + (protect ? 'yes' : 'no') + '). When are you available?'
        : 'Hi Lefties, I\u2019d like a quote \u2014 when are you available?';

      if (estSmsBtn) estSmsBtn.href = 'sms:' + CFG.PHONE + '?&body=' + encodeURIComponent(estMsg);
    };

    [estRooms, estSeats, estProtect].forEach(function (el) {
      if (el) el.addEventListener('input', calcEstimate);
    });
    calcEstimate();

    if (estSmsBtn) estSmsBtn.addEventListener('click', function () { ga4Event('sms_click', { method: 'estimator' }); });

    if (estCopyBtn) estCopyBtn.addEventListener('click', function () {
      var original = estCopyBtn.textContent;
      var done = function () { estCopyBtn.textContent = 'Copied!'; setTimeout(function () { estCopyBtn.textContent = original; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(estMsg).then(done).catch(function () { window.prompt('Copy this:', estMsg); });
      } else {
        window.prompt('Copy this:', estMsg);
      }
      ga4Event('estimate_copy');
    });
  }

  /* ---------- quote form ---------- */
  var form = document.getElementById('quoteForm');
  if (form) {
    var status = document.getElementById('formStatus');
    var submit = form.querySelector('[type="submit"]');
    var startFired = false;

    // "form_start" tells you how many people begin but don't finish
    form.addEventListener('input', function () {
      if (startFired) return;
      startFired = true;
      ga4Event('form_start', { form_name: 'quote' });
      metaEvent('InitiateCheckout', { content_name: 'quote_form' });
    }, { once: false });

    var showStatus = function (msg, kind) {
      if (!status) return;
      status.textContent = msg;
      status.className = 'form-status show ' + kind;
    };

    var validate = function () {
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (el) {
        var wrap = el.closest('.field');
        var bad = !el.value.trim() || (el.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
        if (el.type === 'tel') bad = el.value.replace(/\D/g, '').length < 8;
        if (wrap) wrap.classList.toggle('error', bad);
        if (bad && ok) { el.focus(); ok = false; }
      });
      return ok;
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // honeypot — bots fill hidden fields, humans don't
      var hp = form.querySelector('input[name="_gotcha"]');
      if (hp && hp.value) return;

      if (!validate()) {
        showStatus('Check the highlighted fields and try again.', 'bad');
        return;
      }

      if (isPlaceholder(CFG.FORM_ENDPOINT)) {
        showStatus('Form endpoint not configured yet — see FORM_ENDPOINT in assets/js/lefties.js', 'bad');
        return;
      }

      submit.disabled = true;
      var original = submit.textContent;
      submit.textContent = 'Sending…';

      fetch(CFG.FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('bad response');
        window.location.href = 'thank-you.html';
      }).catch(function () {
        submit.disabled = false;
        submit.textContent = original;
        showStatus('That didn\'t send. Please call 0417 220 012 and we\'ll sort it.', 'bad');
      });
    });
  }

  /* ---------- review request tool (review-request.html) ---------- */
  var reviewName = document.getElementById('reviewName');
  var reviewPreview = document.getElementById('reviewPreview');
  if (reviewName && reviewPreview) {
    var reviewSmsBtn = document.getElementById('reviewSmsBtn');
    var reviewCopyBtn = document.getElementById('reviewCopyBtn');
    var reviewWarning = document.getElementById('reviewLinkWarning');
    var linkReady = !isPlaceholder(CFG.GOOGLE_REVIEW_LINK);

    if (reviewWarning && !linkReady) reviewWarning.style.display = 'block';

    var buildReviewMsg = function () {
      var name = reviewName.value.trim();
      var link = linkReady ? CFG.GOOGLE_REVIEW_LINK : '[add your Google review link in assets/js/lefties.js]';
      var greet = name ? ('Hi ' + name) : 'Hi';
      return greet + ', thanks for choosing Lefties today! If you\u2019re happy with how it turned out, a quick review really helps a small local business: ' + link;
    };

    var refreshReview = function () {
      reviewPreview.value = buildReviewMsg();
      if (reviewSmsBtn) reviewSmsBtn.href = 'sms:?&body=' + encodeURIComponent(reviewPreview.value);
    };
    reviewName.addEventListener('input', refreshReview);
    refreshReview();

    if (reviewCopyBtn) reviewCopyBtn.addEventListener('click', function () {
      var msg = reviewPreview.value;
      var original = reviewCopyBtn.textContent;
      var done = function () { reviewCopyBtn.textContent = 'Copied!'; setTimeout(function () { reviewCopyBtn.textContent = original; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(msg).then(done).catch(function () { window.prompt('Copy this:', msg); });
      } else {
        window.prompt('Copy this:', msg);
      }
      ga4Event('review_request_copy');
    });
  }

  /* ---------- fire the lead conversion on the thank-you page ---------- */
  if (document.body.dataset.page === 'thank-you') {
    window.leftiesTrackLead('quote_form');
  }
})();
