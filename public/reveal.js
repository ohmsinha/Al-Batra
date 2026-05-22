/* Scroll reveal — single Intersection Observer, mark elements .ab-reveal */
(function () {
  if (typeof window === 'undefined') return;
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) {
    document.querySelectorAll('.ab-reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );

  function mount() {
    document.querySelectorAll('.ab-reveal:not(.is-visible)').forEach((el) => io.observe(el));
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

  // Scroll progress bar (homepage / article)
  const bar = document.querySelector('.ab-progress');
  if (bar) {
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      bar.style.setProperty('--p', `${Math.min(100, Math.max(0, scrolled * 100))}%`);
    };
    document.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Sticky TOC highlight
  const tocLinks = document.querySelectorAll('.ab-toc a[href^="#"]');
  if (tocLinks.length) {
    const targets = Array.from(tocLinks)
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);
    const tocObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            tocLinks.forEach((a) => a.removeAttribute('aria-current'));
            const match = document.querySelector(`.ab-toc a[href="#${e.target.id}"]`);
            if (match) match.setAttribute('aria-current', 'true');
          }
        });
      },
      { rootMargin: '-30% 0px -55% 0px' }
    );
    targets.forEach((t) => tocObserver.observe(t));
  }

  // Header subtle shrink on scroll
  const header = document.querySelector('.ab-header');
  if (header) {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 8);
      lastY = y;
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
