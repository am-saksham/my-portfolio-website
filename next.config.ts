import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'], // Add Unsplash domain here
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
