"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export function Ticker({
  children,
  speed,
  gap,
  services = false,
}: {
  children: ReactNode;
  speed: number;
  gap: number;
  services?: boolean;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const items = Children.toArray(children);
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    let duration = 0;
    let visible = false;
    const sync = () => {
      if (!animation) return;
      if (visible && !document.hidden && !motion.matches) animation.play();
      else animation.pause();
    };
    const start = () => {
      const spacing = parseFloat(getComputedStyle(list).gap) || gap;
      const period = Array.from(list.children)
        .slice(0, items.length)
        .reduce(
          (sum, item) => sum + (item as HTMLElement).offsetWidth + spacing,
          0,
        );
      if (!period) return;
      const nextDuration = (period / speed) * 1000;
      if (animation && nextDuration === duration) return;
      const phase = duration
        ? (Number(animation?.currentTime ?? 0) % duration) / duration
        : 0;
      animation?.cancel();
      duration = nextDuration;
      const offset = services ? 0 : 10;
      animation = list.animate(
        {
          transform: [
            `translateX(-${offset}px)`,
            `translateX(-${period + offset}px)`,
          ],
        },
        { duration, iterations: Infinity, easing: "linear" },
      );
      animation.currentTime = phase * duration;
      sync();
    };
    const updateMotion = () => {
      if (motion.matches) {
        animation?.cancel();
        animation = undefined;
        duration = 0;
      } else start();
    };
    const resize = new ResizeObserver(() => {
      if (!motion.matches) start();
    });
    resize.observe(list);
    Array.from(list.children)
      .slice(0, items.length)
      .forEach((item) => resize.observe(item));
    // Observe the stationary mask, not the translating track.
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersection.observe(list.parentElement ?? list);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", updateMotion);
    updateMotion();
    return () => {
      resize.disconnect();
      intersection.disconnect();
      animation?.cancel();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", updateMotion);
    };
  }, [gap, speed, services, items.length]);
  return (
    <ul
      ref={ref}
      className={`site-ticker${services ? " services-track" : ""}`}
      style={{ "--ticker-gap": `${gap}px` } as CSSProperties}
    >
      {items}
      {items.map((item, index) =>
        isValidElement<HTMLAttributes<HTMLElement>>(item)
          ? cloneElement(item, { key: `repeat-${index}`, "aria-hidden": true })
          : item,
      )}
    </ul>
  );
}
