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

    // Partition nodes: hero (#home) vs others
    const heroSection = document.getElementById('home');
    const heroNodes = heroSection ? nodes.filter((el) => heroSection.contains(el)) : [];
    const otherNodes = nodes.filter((el) => !heroNodes.includes(el));

    // Initialize hidden state
    nodes.forEach((el) => el.classList.add('reveal'));

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
        threshold: 0.01, // reveal as soon as slightly visible
        rootMargin: '0px 0px -5% 0px',
      }
    );

    // Show hero immediately; other sections reveal on scroll
    heroNodes.forEach((el) => el.classList.add('show'));
    otherNodes.forEach((el) => observer.observe(el));

    // Helper: reveal all reveal-targets inside a specific section by id
    const revealSectionById = (id: string) => {
      const section = document.getElementById(id);
      if (!section) return;
      const targets = Array.from(section.querySelectorAll<HTMLElement>(selector));
      targets.forEach((el) => el.classList.add('show'));
    };

    // If user loaded with a hash (e.g., #projects), show that section immediately
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id && id !== 'home') {
        revealSectionById(id);
      }
    }

    // If user navigates via navbar (hash change), reveal the section immediately
    const onHashChange = () => {
      const id = location.hash.replace('#', '');
      if (id && id !== 'home') {
        revealSectionById(id);
      }
    };
    window.addEventListener('hashchange', onHashChange);

    // Additionally, observe whole sections to reveal their children reliably
    const sectionIds = ['about','skills','projects','experience','education','certifications','contact'];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sec = entry.target as HTMLElement;
            // reveal all reveal-targets within this section
            const targets = Array.from(sec.querySelectorAll<HTMLElement>(selector));
            targets.forEach((el) => el.classList.add('show'));
            sectionObserver.unobserve(sec);
          }
        }
      },
      { root: null, threshold: 0.01, rootMargin: '0px 0px -5% 0px' }
    );
    sectionIds.forEach((id) => {
      const sec = document.getElementById(id);
      if (sec) sectionObserver.observe(sec);
    });

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);
}
