import { useEffect } from 'react';

/**
 * Adds a subtle fade/slide-in on scroll to common elements.
 * Respects prefers-reduced-motion.
 */
export default function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = [
      '.hero-text',
      '.hero-avatar',
      'h2',
      '.project',
      '.cert-block',
      '.skills-grid',
      '.contact-links',
    ].join(',');

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!nodes.length) return;

    // Initialize hidden state
    nodes.forEach((el) => {
      el.classList.add('reveal');
    });

    if (prefersReduced) {
      // Immediately show without animation
      nodes.forEach((el) => el.classList.add('show'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
