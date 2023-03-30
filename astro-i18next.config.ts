import type { AstroI18nextConfig } from "astro-i18next";

export default {
  defaultLocale: "nl",
  locales: [
    "nl", 
    "en",
    // "fr",
  ],
  fallbackLocale: "nl",
  showDefaultLocale: false, // might disable later
  
  // optional
  namespaces: ["common", "site", "home", "about", "services"],
  defaultNamespace: "common",

  routes: {
    nl: {
      "/": "home",
      "/about": "over-ons",
      "/contact": "contact",
    },
    en: {
      "/": "home",
      "/about": "about",
      "/contact": "contact",
    },
    fr: {
      "/": "accueil",
      "/about": "a-propos",
      "/contact": "contact",
    },
  },

  i18nextServer: {
    debug: true,
  },

};