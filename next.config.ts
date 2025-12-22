import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "jt-project-public";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // GitHub Pages는 정적 호스팅 → export
  output: "export",
  trailingSlash: true,

  // https://<user>.github.io/<repo>/ 경로 대응
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  // next/image 최적화는 서버가 필요해서 비활성화
  images: { unoptimized: true },

  devIndicators: false,

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
