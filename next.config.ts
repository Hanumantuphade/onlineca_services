import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable LightningCSS to fix Vercel build issue
    optimizeCss: false,
  },
};

export default nextConfig;

