import React, { useEffect, useRef } from 'react';

/**
 * GlowingCursor
 * - Renders a glowing cursor (dot + soft ring) that follows the mouse.
 * - Hidden on touch devices and when prefers-reduced-motion is enabled.
 * - Uses rAF for smooth lerped movement.
 */
const GlowingCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: pos.current.x, y: pos.current.y });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasTouch = matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || hasTouch) {
      // Keep hidden for accessibility or on touch devices
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const tick = () => {
      // Lerp ring position for a smooth trailing effect (higher = snappier)
      const lerp = 0.20;
      pos.current.x += (target.current.x - pos.current.x) * lerp;
      pos.current.y += (target.current.y - pos.current.y) * lerp;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div ref={ringRef} className="glow-cursor glow-cursor--ring" />
      <div ref={dotRef} className="glow-cursor glow-cursor--dot" />
    </div>
  );
};

export default GlowingCursor;
