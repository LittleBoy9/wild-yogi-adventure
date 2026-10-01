'use client';

import { useEffect } from 'react';

/**
 * Adds `data-in="true"` to anything marked `data-reveal` as it scrolls into
 * view. Elements are revealed once and then unobserved.
 *
 * Everything is visible by default in CSS and only hidden once this runs, so
 * content is never trapped behind JavaScript that failed to load.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-in])'),
    );
    if (!nodes.length) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      nodes.forEach((n) => n.setAttribute('data-in', 'true'));
      return;
    }

    nodes.forEach((n) => n.setAttribute('data-in', 'false'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute('data-in', 'true');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
