import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // This disables Next.js image optimization
  },
};

export default nextConfig;
