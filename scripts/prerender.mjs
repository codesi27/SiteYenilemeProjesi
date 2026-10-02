import { readFile, writeFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import React from "react";
import { renderToString } from "react-dom/server";

const outDir = resolve("dist");
const template = await readFile(join(outDir, "index.html"), "utf8");
const temp = await mkdtemp(join(tmpdir(), "asyapi-prerender-"));
const escape = (text) => String(text).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

async function compile(source, target, jsx = false) {
  const code = await readFile(resolve(source), "utf8");
  let result = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: jsx ? ts.JsxEmit.ReactJSX : undefined },
    fileName: source,
  }).outputText;
  if (jsx) {
    result = result.replaceAll('from "./seo"', 'from "./seo.mjs"')
      .replaceAll('from "react"', `from "${import.meta.resolve("react")}"`)
      .replaceAll('from "react/jsx-runtime"', `from "${import.meta.resolve("react/jsx-runtime")}"`);
  }
  await writeFile(join(temp, target), result);
}

try {
  await compile("src/seo.ts", "seo.mjs");
  await compile("src/App.tsx", "App.mjs", true);
  const { default: App } = await import(pathToFileURL(join(temp, "App.mjs")));
  const { home, pages, SITE, structuredData } = await import(pathToFileURL(join(temp, "seo.mjs")));

  for (const page of [home, ...pages]) {
    const url = `${SITE}${page.path}`;
    const rendered = renderToString(React.createElement(App, { path: page.path }));
    const metadata = `
    <title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <link rel="canonical" href="${escape(url)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escape(url)}" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <script type="application/ld+json">${JSON.stringify(structuredData(page)).replaceAll("<", "\\u003c")}</script>`;
    const html = template
      .replace(/\s*<title>[^<]*<\/title>/g, "")
      .replace(/\s*<(?:meta|link)\b[^>]*\b(?:name|property|rel)="(?:description|canonical|og:type|og:url|og:title|og:description|twitter:card|twitter:title|twitter:description)"[^>]*>/g, "")
      .replace("</head>", `${metadata}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
    await writeFile(join(outDir, page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`), html);
  }
  const notFound = renderToString(React.createElement(App, { path: "/404" }));
  await writeFile(join(outDir, "404.html"), template.replace(/<title>[^<]*<\/title>/, "<title>Sayfa Bulunamadı | AS YAPI</title>")
    .replace(/\s*<meta name="description"[^>]*>/g, "")
    .replace(/\s*<link rel="canonical"[^>]*>/g, "")
    .replace(/\s*<meta (?:property="og:(?:url|title|description)"|name="twitter:(?:title|description)")[^>]*>/g, "")
    .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
    .replace('<div id="root"></div>', `<div id="root">${notFound}</div>`));
} finally {
  await rm(temp, { recursive: true, force: true });
}
