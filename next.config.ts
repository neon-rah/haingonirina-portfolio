import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_SENDER: process.env.EMAIL_SENDER,
  },
};

export default nextConfig;
