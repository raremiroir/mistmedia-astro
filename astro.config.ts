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
import { vitePreprocess } from '@astrojs/svelte';

// https://astro.build/config
const config: AstroUserConfig = {
  site: 'https://mistmedia.be',
  // Integrations
  integrations: [
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
    storyblok({
      accessToken: "Lx4wOhjB1cWELPQMNi02xwtt",
      apiOptions: {
        region: "eu",
      },
      components: {
        page: "components/Core/Page/Page.astro",
      }
    })
  ],
  output: "server",
  adapter: vercel(),
  vite: {
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