// @ts-ignore
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java interview question",
  description: "smaple java questions",
  lang: "fa",
  // dir: "rtl",
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    search: {
      provider: "local",
    },
    logo: {
      src: "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp&w=256",
      alt: "java logo",
    },
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
        text: "SOLID",
        items: [
          { text: "solid اصول", link: "/solid/solid" },
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
    footer: {
      copyright: `Designed by <a href="https://amirmaghami.ir/" target="_blank">Amir Maghami</a>`,
      message: "Amir Zarchini",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/amir-zarchini/interview-question",
      },
    ],
  },
});
