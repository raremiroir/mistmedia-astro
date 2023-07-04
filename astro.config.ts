import { defineConfig } from 'astro/config';
import type { AstroUserConfig } from 'astro';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import astroI18next from "astro-i18next";
import robotsTxt from "astro-robots-txt";
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { vitePreprocess } from '@astrojs/svelte';

import { loadEnv } from 'vite'
const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
const config: AstroUserConfig = {
  site: 'https://mistmedia.be',
  // Integrations
  integrations: [
    storyblok({
      accessToken: "Lx4wOhjB1cWELPQMNi02xwtt",// env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "eu",
        cache: { clear: 'auto', type: 'memory' },
      },
      enableFallbackComponent: true,
      components: {
        text: "storyblok/Text",
        html: "storyblok/Html",
        // Layouts
        page: "components/Core/Page/Page",
        // Core
        section: "storyblok/Core/Section",
        box: "storyblok/Core/Box",
        div: "storyblok/Core/Div",
        grid: "storyblok/Core/Grid",
        flex: "storyblok/Core/Flex",
        // Utils
        link: "storyblok/Utils/Link",
        alert: "storyblok/Utils/Alert",
        typewriter: "storyblok/Utils/Typewriter",
        typewriter_multiple: "storyblok/Utils/TypewriterMultiple",
        // Common
        breadcrumbs: "storyblok/Common/Breadcrumbs/Breadcrumbs",
        breadcrumb: "storyblok/Common/Breadcrumbs/Breadcrumb",
        button: "storyblok/Common/Btn",
        button_social: "storyblok/Common/ButtonSocial",
        hero_about: "storyblok/Common/Heros/HeroAbout",
        hero_home: "storyblok/Common/Heros/HeroHome",
        hero: "storyblok/Common/Heros/Hero",
        card_hover: "storyblok/Common/Cards/CardHover",
        card_static: "storyblok/Common/Cards/CardStatic",
        card_testimonial: "storyblok/Common/Cards/CardTestimonial",
        card_portfolio: "storyblok/Common/Cards/CardPortfolio",
        accordeon: "storyblok/Common/Accordeon/Accordeon",
        accordeon_item: "storyblok/Common/Accordeon/AccordeonItem",
        drawer: "storyblok/Common/Drawer",
        slider_home: "storyblok/Common/SliderHome",
        case_tag: "storyblok/Common/Case/Tag",
        case_tags: "storyblok/Common/Case/Tags",
        cta: "storyblok/Common/Cta",
        // Media
        image_1: "storyblok/Media/Image/Image_1",
        image_16_9: "storyblok/Media/Image/Image_16-9",
        logo_icon_anim: "storyblok/Media/Logo/LogoIconAnim",
        logo_lettering: "storyblok/Media/Logo/LogoLettering",
        // Forms
        contact_form: "storyblok/Form/FormContact"
      }
    }),
    sitemap({
      i18n: {
        defaultLocale: 'nl',
        locales: {
          'nl': 'https://mistmedia.be',
          'en': 'https://mistmedia.be/en'
        }
      }
    }), 
    svelte({
      preprocess: [
        vitePreprocess()
      ]
    }), 
    prefetch(),
    mdx(), 
    tailwind({
      config: {
        applyBaseStyles: false
      },
    }), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }), 
    astroI18next(),
    partytown({
      config: {
        // https://docs.partytown.app/configuration
      }
    }),
    robotsTxt(),
  ],
  output: "hybrid",
  experimental: {
    hybridOutput: true
  },
  adapter: vercel(),
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
    define:{
      'process.env.VITE_BUILD_TIME':JSON.stringify(new Date().toISOString()),
    },  
    optimizeDeps: {
    }
  },
  markdown: {
    remarkPlugins: [
      
    ]
  }
}


export default defineConfig(config);