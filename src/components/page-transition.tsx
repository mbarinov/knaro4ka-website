"use client";

// Next.js App Router supplies React's canary ViewTransition implementation.
import type {} from "react/canary";
import { ViewTransition, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    // Use the viewport snapshot: named page boxes would morph document heights.
    <ViewTransition>
      <div className="page-transition-content">{children}</div>
    </ViewTransition>
  );
}
