/* Lefties FX - motion layer. Respects prefers-reduced-motion. */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- scroll reveals ---------- */
  const targets = document.querySelectorAll(
    '.section-head, .svc-card, .proof-grid figure, .review, .meet, .rail li, .feature-list li, .note-card, .contact-card, .cta-band .wrap, .trust li'
  );
  if (!reduce && 'IntersectionObserver' in window) {
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 70 + 'ms';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '100000px 0px -40px 0px' });
    targets.forEach((el) => io.observe(el));
  }

  /* ---------- hero word rotator ---------- */
  const rot = document.querySelector('[data-rotate]');
  if (rot) {
    const words = rot.dataset.rotate.split('|');
    let i = 0;
    // lock width to widest word so the line never jumps (after fonts load)
    const lockWidth = () => {
      const probe = document.createElement('span');
      probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;';
      probe.className = 'rotate-word';
      rot.parentNode.appendChild(probe);
      let max = 0;
      words.forEach((w) => { probe.textContent = w; max = Math.max(max, probe.offsetWidth); });
      probe.remove();
      rot.style.minWidth = max + 'px';
    };
    lockWidth();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(lockWidth);
    if (!reduce) {
      setInterval(() => {
        i = (i + 1) % words.length;
        rot.classList.add('flip-out');
        setTimeout(() => {
          rot.textContent = words[i];
          rot.classList.remove('flip-out');
          rot.classList.add('flip-in');
          setTimeout(() => rot.classList.remove('flip-in'), 350);
        }, 250);
      }, 2600);
    }
  }

  /* ---------- ticker: duplicate track for seamless loop ---------- */
  document.querySelectorAll('.ticker-track').forEach((t) => {
    t.innerHTML += t.innerHTML;
  });
})();
