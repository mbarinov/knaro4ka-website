import type { Metadata } from "next";
import { preload } from "react-dom";
import { SmoothScroll } from "@/components/interactions/smooth-scroll";
import { siteUrl } from "@/lib/site-url";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

// Kept from the source as requested. Edit these two values to replace the template's SEO copy.
const title = "Sienna Vanghn - A minimalist portfolio framer template";
const description =
  "Sienna Vanghn is a premium portfolio template for creative individuals and agencies to showcase their work in a super minimalist and straightforward way, with a clean layout and unique design to help them stand out and shine.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    images: ["/assets/71af51578e33.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/71af51578e33.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
