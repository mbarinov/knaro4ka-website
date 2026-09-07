"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/" && pathname !== "/about") return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let generation = 0;
    let instance: Lenis | undefined;
    const update = async () => {
      const request = ++generation;
      instance?.destroy();
      instance = undefined;
      if (motion.matches) return;
      try {
        const { default: BaseLenis } = await import("lenis");
        if (disposed || request !== generation || motion.matches) return;
        // Preserve the original rounding of wheel destinations.
        class SourceLenis extends BaseLenis {
          override scrollTo(
            target: number | string | HTMLElement,
            options?: Parameters<Lenis["scrollTo"]>[1],
          ) {
            super.scrollTo(
              typeof target === "number" ? Math.round(target) : target,
              options,
            );
          }
        }
        instance = new SourceLenis({
          duration: 0.5,
          autoRaf: true,
          anchors: true,
          prevent: (node) => node.matches("video, [data-native-scroll]"),
        });
      } catch {
        // Native scrolling remains available if the optional chunk cannot load.
      }
    };
    void update();
    motion.addEventListener("change", update);
    return () => {
      disposed = true;
      generation++;
      instance?.destroy();
      motion.removeEventListener("change", update);
    };
  }, [pathname]);
  return null;
}
