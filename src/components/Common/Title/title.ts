import type { TitleSizes, TitleTags } from "@/types/components/heading";

export type TitleProps = {
   [key in TitleTags]: {
      size: {[key in TitleSizes]: string};
      color: string;
      weight: string;
      family: string;
   }
}

export const title: TitleProps = {
   h1: {
      size: {
         '2xs': 'text-title-md',
         xs: 'text-title-lg',
         sm: 'text-title-xl',
         md: 'text-title-2xl',
         lg: 'text-title-3xl',
         xl: 'text-title-4xl',
         '2xl': 'text-title-5xl'
      },
      color: 'text-surface-900 dark:text-white',
      weight: 'font-bold',
      family: 'font-titlemono'
   },
   h2: {
      size: {
         '2xs': 'text-title-sm',
         xs: 'text-title-md',
         sm: 'text-title-lg',
         md: 'text-title-xl',
         lg: 'text-title-2xl',
         xl: 'text-title-3xl',
         '2xl': 'text-title-4xl'
      },
      color: 'text-surface-900 dark:text-surface-50',
      weight: 'font-bold',
      family: 'font-titlemono'
   },
   h3: {
      size: {
         '2xs': 'text-title-2xs',
         xs: 'text-title-xs',
         sm: 'text-title-sm',
         md: 'text-title-md',
         lg: 'text-title-lg',
         xl: 'text-title-xl',
         '2xl': 'text-title-2xl'
      },
      color: 'text-surface-800 dark:text-surface-50',
      weight: 'font-bold',
      family: 'font-titlemono'
   },
   h4: {
      size: {
         '2xs': 'text-title-2xs',
         xs: 'text-title-xs',
         sm: 'text-title-sm',
         md: 'text-title-md',
         lg: 'text-title-lg',
         xl: 'text-title-xl',
         '2xl': 'text-title-2xl'
      },
      color: 'text-surface-800 dark:text-surface-50',
      weight: 'font-medium',
      family: 'font-body'
   },
   h5: {
      size: {
         '2xs': 'text-title-4xs',
         xs: 'text-title-3xs',
         sm: 'text-title-2xs',
         md: 'text-title-xs',
         lg: 'text-title-sm',
         xl: 'text-title-md',
         '2xl': 'text-title-lg'
      },
      color: 'text-surface-700 dark:text-surface-100',
      weight: 'font-medium',
      family: 'font-body'
   },
   h6: {
      size: {
         '2xs': 'text-clamp-sm',
         xs: 'text-clamp-md',
         sm: 'text-title-lg',
         md: 'text-title-xl',
         lg: 'text-title-2xl',
         xl: 'text-title-3xl',
         '2xl': 'text-title-md'
      },
      color: 'text-surface-700 dark:text-surface-100',
      weight: 'font-medium',
      family: 'font-body'
   },
}

export default title;