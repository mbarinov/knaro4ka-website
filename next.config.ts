import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: { formats: ["image/webp"], qualities: [75, 85] },
  headers() {
    return [
      {
        // Only versioned asset names. A content change must get a new filename.
        source:
          "/assets/:name([a-f0-9]{12})\\.:ext(png|webp|avif|svg|woff2|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
export default config;
