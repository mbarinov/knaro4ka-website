"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

export function ParallaxHeading({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let frame = 0;
    const paint = () => {
      frame = 0;
      node.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    const update = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const sync = () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
      frame = 0;
      if (motion.matches) {
        node.style.transform = "";
        return;
      }
      if (visible && !document.hidden) {
        paint();
        window.addEventListener("scroll", update, { passive: true });
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    // The parent remains in normal flow even while the heading is translated.
    observer.observe(node.parentElement ?? node);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}
