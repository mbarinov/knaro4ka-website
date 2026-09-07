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
import Tilt from "react-parallax-tilt";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

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

/** Original ticker speed is 50px/s; services use 45px/s, without hover slowdown. */
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
    if (!list || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let animation: Animation | undefined;
    const start = () => {
      const spacing = parseFloat(getComputedStyle(list).gap) || gap;
      const period = Array.from(list.children)
        .slice(0, items.length)
        .reduce(
          (sum, item) => sum + (item as HTMLElement).offsetWidth + spacing,
          0,
        );
      if (!period) return;
      animation?.cancel();
      const offset = services ? 0 : 10;
      animation = list.animate(
        {
          transform: [
            `translateX(-${offset}px)`,
            `translateX(-${period + offset}px)`,
          ],
        },
        {
          duration: (period / speed) * 1000,
          iterations: Infinity,
          easing: "linear",
        },
      );
    };
    const observer = new ResizeObserver(start);
    observer.observe(list);
    Array.from(list.children)
      .slice(0, items.length)
      .forEach((item) => observer.observe(item));
    start();
    return () => {
      observer.disconnect();
      animation?.cancel();
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

export function TiltCard({ children }: { children: ReactNode }) {
  return (
    <Tilt
      className="parallax-effect"
      perspective={2000}
      glareEnable
      glareMaxOpacity={0.04}
      glareBorderRadius="0px"
      glarePosition="all"
      tiltEnable
    >
      {children}
    </Tilt>
  );
}

/** About title's original parallax multiplier: 75% (0.25 * scrollY). */
export function ParallaxHeading({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const update = () => {
      if (ref.current)
        ref.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}

/** The source's Lenis 1.1.9 rounds wheel destinations to whole CSS pixels. */
class SourceLenis extends Lenis {
  override scrollTo(
    target: number | string | HTMLElement,
    options?: Parameters<Lenis["scrollTo"]>[1],
  ) {
    super.scrollTo(typeof target === "number" ? Math.round(target) : target, options);
  }
}

export function SmoothScroll() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/vocao" || pathname === "/cycle-aura") return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new SourceLenis({
      // Original Framer intensity 5 maps to 5 / 10 seconds.
      duration: 0.5,
      autoRaf: true,
      anchors: true,
      prevent: (node) => node.matches("video, [data-native-scroll]"),
    });
    return () => lenis.destroy();
  }, [pathname]);
  return null;
}
