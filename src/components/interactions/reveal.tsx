"use client";
import { useEffect, useRef, type HTMLAttributes } from "react";

interface AppearEffect {
  initial: Record<string, number>;
  animate: Record<string, unknown> & {
    transition: {
      delay?: number;
      duration?: number;
      ease?: number[];
      type?: string;
    };
  };
}

/** Original appear timing: 1s, cubic-bezier(.16,1,.3,1), 200/300ms delay. */
export function Reveal({
  as = "div",
  effect,
  children,
  ...props
}: HTMLAttributes<HTMLElement> & {
  as?: "div" | "section";
  effect: AppearEffect;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { initial, animate } = effect;
    const {
      delay = 0,
      duration = 1,
      ease = [0.16, 1, 0.3, 1],
    } = animate.transition;
    const transform = (v: Record<string, unknown>) =>
      `translate3d(${v.x ?? 0}px,${v.y ?? 0}px,0) scale(${v.scale ?? 1}) rotate(${v.rotate ?? 0}deg)`;
    const animation = node.animate(
      [
        { opacity: initial.opacity ?? 1, transform: transform(initial) },
        {
          opacity: Number(animate.opacity ?? 1),
          transform: transform(animate),
        },
      ],
      {
        duration: duration * 1000,
        delay: delay * 1000,
        easing: `cubic-bezier(${ease.join(",")})`,
        fill: "backwards",
      },
    );
    return () => animation.cancel();
  }, [effect]);
  return as === "section" ? (
    <section {...props} ref={ref}>
      {children}
    </section>
  ) : (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}
