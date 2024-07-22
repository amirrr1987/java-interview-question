import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java interview question",
  description: "smaple java questions",
  lang: "fa",
  dir: "rtl",
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Java SE",
        items: [
          { text: "OOP", link: "/java-se/oop" },
          { text: "String", link: "/java-se/string" },
          { text: "Collection", link: "/java-se/collection" },
          { text: "Stream", link: "/java-se/stream" },
        ],
      },
      {
        text: "Hibernate",
        items: [
          { text: "OOP", link: "/java-se/stream" },
          { text: "String", link: "/java-se/stream" },
        ],
      },
      {
        text: "Spring",
        items: [
          { text: "OOP", link: "/java-se/stream" },
          { text: "String", link: "/java-se/stream" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
