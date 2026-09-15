import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 produces a plain HTML/CSS/JS bundle in `out/` for Apache
 * shared hosting (cPanel). Without it the config is unchanged, so the Vercel
 * deployment keeps server-rendered headers, image optimisation and the
 * /api/contact route handler.
 *
 * Static export cannot serve `headers()`, optimised images or POST route
 * handlers, so the cPanel build replaces them with `.htaccess` rules,
 * pre-sized images and a PHP endpoint. See docs/DEPLOYMENT-CPANEL.md.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: isStaticExport
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  ...(isStaticExport
    ? { output: "export" as const }
    : {
        async headers() {
          return [{ source: "/(.*)", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
