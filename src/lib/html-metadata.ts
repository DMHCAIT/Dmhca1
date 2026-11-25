function keepLastTag(html: string, pattern: RegExp): string {
  const matches = [...html.matchAll(pattern)];
  if (matches.length <= 1) return html;
  const last = matches[matches.length - 1][0];
  return html.replace(pattern, "").replace("</head>", `  ${last}\n</head>`);
}

export function normalizeHtmlMetadata(html: string, canonical?: string): string {
  html = keepLastTag(html, /<title\b[^>]*>[\s\S]*?<\/title>/gi);
  html = keepLastTag(html, /<meta\b[^>]*\bname=["']description["'][^>]*>/gi);
  html = keepLastTag(html, /<meta\b[^>]*\bproperty=["']og:description["'][^>]*>/gi);

  if (!canonical) return html;

  html = html
    .replace(/<meta\b[^>]*\bname=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<link\b[^>]*\brel=["']canonical["'][^>]*>\s*/gi, "");

  return html.includes("</head>")
    ? html.replace("</head>", `  <link rel="canonical" href="${canonical}" />\n</head>`)
    : html.replace(/<head([^>]*)>/i, `<head$1>\n  <link rel="canonical" href="${canonical}" />`);
}
