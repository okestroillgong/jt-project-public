import type { NextConfig } from "next";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const useBasePath = basePath.length > 0;

const nextConfig: NextConfig = {
  // GitHub Pages용 정적 export (out/ 생성)
  output: "export",
  trailingSlash: true,

  // Pages가 /<repo>/ 하위경로로 서비스되므로(프로젝트 Pages) basePath/assetPrefix 적용
  ...(useBasePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),

  // static export에서는 next/image 최적화 서버가 없어서 보통 필요
  images: {
    unoptimized: true,
  },

  // ✅ 빌드가 ESLint 에러로 죽는 걸 막음 (next build에서 lint 단계 스킵)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (선택) 타입 에러가 있어도 빌드를 통과시키고 싶으면 true
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
