import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const localizedRoutePairs = [
  ["/", "/pt"],
  ["/about", "/pt/about"],
  ["/contact", "/pt/contact"],
  ["/projects", "/pt/projects"],
  ["/projects/awsp", "/pt/projects/awsp"],
  ["/projects/bedatty-engineering", "/pt/projects/bedatty-engineering"],
  ["/projects/ghp", "/pt/projects/ghp"],
  ["/projects/release-validation-platform", "/pt/projects/plataforma-validacao-releases"],
  ["/projects/wsl-ssh-setup", "/pt/projects/wsl-ssh-setup"]
];
const alternatePathByPath = new Map(
  localizedRoutePairs.flatMap(([englishPath, portuguesePath]) => [
    [englishPath, portuguesePath],
    [portuguesePath, englishPath]
  ])
);

export default defineConfig({
  site: "https://bedatty.com",
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/+$/, "") || "/";
        const alternatePath = alternatePathByPath.get(path);

        if (!alternatePath) return item;

        const trailingSlash = url.pathname.endsWith("/") && alternatePath !== "/" ? "/" : "";
        const alternateUrl = new URL(`${alternatePath}${trailingSlash}`, url.origin).toString();
        const currentLanguage = path === "/" || !path.startsWith("/pt/") && path !== "/pt" ? "en-US" : "pt-BR";

        item.links = [
          { lang: currentLanguage, url: item.url },
          { lang: currentLanguage === "en-US" ? "pt-BR" : "en-US", url: alternateUrl }
        ];

        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
