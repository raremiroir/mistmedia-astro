import type { Locales } from ".";

export type BlogPostType = {
   content: string;
   data: {
      slug: string;
      title: string;
      description: string;
      pubDate: string;
      heroImage: string;
      language: Locales;
      author: {
         name: string;
         email: string;
         image: string;
         github: string;
         twitter: string;
         linkedin: string;
         website: string;
      }
   },
   meta: {
      url: string;
      id: string;
      name: string;
      bucket: string;
      size: number;
      createdAt: string;
      updatedAt: string;
      fileType: string;
      customMetadata: {
         [key: string]: string;
      }|undefined,
      cacheControl: string;
      contentLang: string;
   }
}