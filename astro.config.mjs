import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url,
  base: config.site.base_path,
  trailingSlash: "ignore",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@components/common/Button.astro",
        "@shortcodes/Accordion",
        "@shortcodes/Notice",
        "@shortcodes/Youtube",
        "@shortcodes/Tabs",
        "@shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // remarkPlugins: [remarkToc, [remarkCollapse, {
    //   test: "Table of contents"
    // }], remarkMath],
    // rehypePlugins: [[rehypeKatex, {}]],
    shikiConfig: {
      theme: "dark-plus", // https://shiki.style/themes
    },
    extendDefaultPlugins: true,
  },
});
