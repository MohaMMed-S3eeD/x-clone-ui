import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverActions: {
    bodySizeLimit: '13mb', // زوّد الحد لـ 2 ميجابايت
  },
};

export default nextConfig;
