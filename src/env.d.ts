/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
   readonly SITE_TITLE: string;
   readonly SITE_URL: string;

   readonly AUTHOR_IMAGE: string;
   readonly AUTHOR_NAME: string;
   readonly AUTHOR_EMAIL: string;
   readonly AUTHOR_URL: string;
   readonly AUTHOR_TWITTER: string;
   readonly AUTHOR_GITHUB: string;
   readonly AUTHOR_LINKEDIN: string;

   readonly SOCIAL_LINKEDIN: string;
   readonly SOCIAL_TWITTER: string;
   readonly SOCIAL_GITHUB: string;
   readonly SOCIAL_FACEBOOK: string;
   readonly SOCIAL_INSTAGRAM: string;

   readonly GA_API: string;
   readonly GC_API: string;
   readonly G_MAPS_ID: string;
   readonly G_SITE_VERIFICATION: string;

   readonly PUBLIC_MAPBOX_ACCESS_TOKEN: string;

   readonly MG_DOMAIN: string;
   readonly MG_API_KEY: string;
   readonly MG_BASE_URL: string;

   readonly PUBLIC_TS_SITEKEY: string;
   readonly TS_SECRET_KEY: string;

   readonly FB_API_KEY: string;
   readonly FB_AUTH_DOMAIN: string;
   readonly FB_PROJECT_ID: string;
   readonly FB_STORAGE_BUCKET: string;
   readonly FB_MESSAGING_SENDER_ID: string;
   readonly FB_APP_ID: string;
   readonly FB_MEASUREMENT_ID: string;

   readonly STORYBLOK_TOKEN: string;
}

interface ImportMeta {
   readonly env: ImportMetaEnv;
}