import type { AstroI18nextConfig } from "astro-i18next";

const { COUNTRY = "nl" } = process.env;

export default {
  defaultLocale: "nl",
  locales: [
    "nl", 
    "en",
    // "fr",
  ],
  fallbackLocale: "nl",
  showDefaultLocale: false, // might enable later
  returnObjects: true,

  backend: {
    loadPath: "./src/public/locales/{{lng}}/{{ns}}.json",
  },
  
  // optional
  namespaces: ["common", "site", "home", "about", "services"],
  defaultNamespace: "common",

  routes: {
    nl: {
      "/": "home",
      "/about": "over-ons",
      "/cases": "cases",
      "/solutions": "solutions",
      "/contact": "contact",
      "/blog": "blog",
    },
    en: {
      "/": "home",
      "/about": "about",
      "/cases": "cases",
      "/solutions": "solutions",
      "/contact": "contact",
      "/blog": "blog",
    },
    // fr: {
    //   "/": "accueil",
    //   "/about": "a-propos",
    //   "/cases": "cas",
    //   "/solutions": "solutions",
    //   "/contact": "contact",
    //   "/blog": "blog",
    // },
  },

  i18nextServer: {
    returnObjects: true,
    debug: true,
    lng: COUNTRY,
    fallbackLng: "nl",
    preload: ["nl", "en"],
    ns: ["common", "site", "home", "about", "services"],
    defaultNS: "common",
  },
  i18nextClient: {
    returnObjects: true,
    debug: false,
    lng: COUNTRY,
    fallbackLng: "nl",
    preload: ["nl", "en"],
    ns: ["common", "site", "home", "about", "services"],
    defaultNS: "common",
    load: "languageOnly",
  }
};