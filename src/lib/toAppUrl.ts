export function toAppUrl(pathOrUrl: string): string {
  // already absolute
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;

  const base = import.meta.env.BASE_URL || "/";
  const origin = window.location.origin;

  // "/popup/..." -> "popup/..." 로 정리해서 base 하위로 붙임
  const cleaned = String(pathOrUrl).replace(/^\/+/, "");
  return new URL(cleaned, origin + base).toString();
}
