import { defineConfig } from 'astro/config';
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

// https://astro.build/config
export default defineConfig({
  site: 'https://mistmedia.be',
  title: 'Mist Media',
  description: 'My site description',
  lang: 'nl',
  themeColor: '#ffffff',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  // Your site's social media links
  social: {
    twitter: 'https://twitter.com/example',
    github: '',
    linkedin: '',
    instagram: '',
    youtube: '',
    facebook: ''
  },
  // ID's
  googleAnalytics: '',
  googleSearchConsole: '',
  googleTagManager: '',
  facebookPixel: '',
  vercel: '',
  sentry: '',
  // Integrations
  integrations: [
    sitemap(), 
    svelte(), 
    prefetch(),
    mdx(), 
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }), 
    astroI18next(),
    partytown(),
    robotsTxt()
  ],
  output: "server",
  adapter: vercel(),
  vite: {
    optimizeDeps: {
    }
  }
});