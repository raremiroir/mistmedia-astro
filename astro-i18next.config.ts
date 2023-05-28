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
    loadPath: "./public/locales/{{lng}}/{{ns}}.json",
  },
  
  // optional
  namespaces: ["common", "site", "home", "about", "services"],
  defaultNamespace: "common",

  load: ["server", "client"],
  routes: {
    nl: {
      "over-ons": "over-ons",
      cases: "cases",
      solutions: {
        index: "solutions",
        web: "web",
        "grafisch-ontwerp": "grafisch-ontwerp",
        marketing: "marketing",
        "3d-visualisatie": "3d-visualisatie",
        audiovisueel: "audiovisueel",
      },
      contact: "contact",
      blog: "blog",
    },
    en: {
      "over-ons": "about",
      cases: "cases",
      solutions: {
        index: "solutions",
        web: "web",
        "grafisch-ontwerp": "graphic-design",
        marketing: "marketing",
        "3d-visualisatie": "3d-visualisation",
        audiovisueel: "audiovisual",
      },
      contact: "contact",
      blog: "blog",
    },
    // fr: {
    //   "over-ons": "a-propos",
    //   cases: "cas",
    //   solutions: {
    //     index: "solutions",
    //     web: "web",
    //     "grafisch-ontwerp": "design-graphique",
    //     marketing: "marketing",
    //     "3d-visualisatie": "visualisation-3d",
    //     audiovisueel: "audiovisuel",
    //   },
    //   contact: "contact",
    //   blog: "blog",
    // },
  },

  i18nextServer: {
    returnObjects: true,
    debug: false,
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