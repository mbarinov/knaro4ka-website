"use client";

import { lazy, Suspense, useSyncExternalStore, type ReactNode } from "react";

const Tilt = lazy(() => import("react-parallax-tilt"));
const query = "(prefers-reduced-motion: reduce)";
const subscribe = (notify: () => void) => {
  const media = matchMedia(query);
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};
const getSnapshot = () => matchMedia(query).matches;
const getServerSnapshot = () => true;

export function TiltCard({ children }: { children: ReactNode }) {
  const reducedMotion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const fallback = <div className="parallax-effect">{children}</div>;
  if (reducedMotion) return fallback;
  return (
    <Suspense fallback={fallback}>
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
    </Suspense>
  );
}
