import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { toAppUrl } from "@/lib/toAppUrl";

(globalThis as any).__toAppUrl = toAppUrl;

/**
 * GitHub Pages(Project Pages)에서는 앱이 /<repo>/ 아래에서 동작합니다.
 * 그런데 코드에 window.open("/popup/...") 같은 절대경로가 있으면
 * https://<user>.github.io/popup/... 로 열려서 404(사이트 없음)가 납니다.
 *
 * => base(/<repo>/)를 자동으로 앞에 붙여 popup URL을 보정합니다.
 */
function patchWindowOpenForGitHubPages() {
  const base = import.meta.env.BASE_URL; // "/" or "/<repo>/"
  if (base === "/") return;

  const originalOpen = window.open.bind(window);

  window.open = ((url?: string | URL, target?: string, features?: string) => {
    try {
      if (typeof url === "string" && url.startsWith("/popup/")) {
        const clean = url.replace(/^\/+/, ""); // "popup/..."
        url = `${base}${clean}`;              // "/<repo>/popup/..."
      }
    } catch { /* ignore */ }
    return originalOpen(url as any, target, features);
  }) as any;
}

patchWindowOpenForGitHubPages();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
