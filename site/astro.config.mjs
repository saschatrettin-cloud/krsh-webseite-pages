import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Die site-URL steuert sowohl die kanonischen Links als auch die Sitemap.
// Beim Go-Live auf https://www.krsh.de umstellen und parallel in
// src/config/site.ts isStaging = false setzen.
export default defineConfig({
  site: "https://neu.krsh.de",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        if (page.endsWith("/service/sitemap/")) return false;
        return true;
      },
      serialize(item) {
        if (/\/aktuelles\//.test(item.url)) {
          item.changefreq = "weekly";
          item.priority = 0.9;
        }
        if (/\/anwaelte-notare\/anwaelte\/[^/]+\/$/.test(item.url)) {
          item.priority = 0.9;
        }
        if (item.url.replace(/\/$/, "") === "https://neu.krsh.de") {
          item.priority = 1.0;
        }
        return item;
      },
    }),
  ],
});
