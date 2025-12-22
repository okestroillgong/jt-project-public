import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "jt-project-public";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // GitHub Pages는 정적 호스팅이므로 export 모드로 빌드
  output: "export",
  trailingSlash: true,

  // project pages: https://<user>.github.io/<repo>/  경로 대응
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  // next/image 최적화는 서버가 필요하므로 비활성화
  images: { unoptimized: true },

  // (원래 파일에 있던 설정)
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
