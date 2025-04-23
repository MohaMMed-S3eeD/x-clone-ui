import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb"
    } // زوّد الحد لـ 2 ميجابايت
  },
  images: {
    domains: ['ik.imagekit.io'],
  },
};

export default nextConfig;
