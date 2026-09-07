import type { Metadata } from "next";
import { preload } from "react-dom";
import { SmoothScroll } from "@/components/interactions/smooth-scroll";
import { siteUrl } from "@/lib/site-url";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Knara Sobchak — Product Designer",
  robots: { index: true, follow: true, "max-image-preview": "large" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  preload("/assets/805e88458894.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload("/assets/f4f150f08e04.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
