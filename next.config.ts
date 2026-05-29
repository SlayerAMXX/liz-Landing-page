import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
