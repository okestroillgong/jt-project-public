import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

/**
 * GitHub Pages(Project Pages)는 기본 경로가 /<repo>/ 입니다.
 * => base 를 /<repo>/ 로 맞춰야 JS/CSS/asset 경로가 깨지지 않습니다.
 */
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const repo =
    process.env.GITHUB_REPOSITORY?.split("/")[1] ??
    "jt-project-public";

  return {
    base: isProd ? // : "/",
    plugins: [react(), svgr()],
  };
});