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
      "/over-ons": "over-ons",
      "/cases": "cases",
      "/solutions": "solutions",
      "/solutions/web": "web",
      "/solutions/grafisch-ontwerp": "grafich-ontwerp",
      "/solutions/marketing": "marketing",
      "/solutions/3d-visualisatie": "3d-visualisatie",
      "/solutions/audiovisueel": "audiovisueel",
      "/contact": "contact",
      "/blog": "blog",
    },
    en: {
      "/": "home",
      "/over-ons": "about",
      "/cases": "cases",
      "/solutions": "solutions",
      "/solutions/web": "web",
      "/solutions/grafisch-ontwerp": "graphic-design",
      "/solutions/marketing": "marketing",
      "/solutions/3d-visualisatie": "3d-visualisation",
      "/solutions/audiovisueel": "audiovisual",
      "/contact": "contact",
      "/blog": "blog",
    },
    // fr: {
    //   "/": "accueil",
    //   "/over-ons": "a-propos",
    //   "/cases": "cas",
    //   "/solutions": "solutions",
    //   "/solutions/web": "web",
    //   "/solutions/grafisch-ontwerp": "design-graphique",
    //   "/solutions/marketing": "marketing",
    //   "/solutions/3d-visualisatie": "visualisation-3d",
    //   "/solutions/audiovisueel": "audiovisuel",
    //   "/contact": "contact",
    //   "/blog": "blog",
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