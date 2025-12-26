import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack 설정 (Next.js 16 기본 모드)
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Webpack 설정 (fallback)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;