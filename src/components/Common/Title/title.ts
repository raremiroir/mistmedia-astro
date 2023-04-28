export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type TitleProps = {
   [key in TitleType]: {
      size: {[key in TitleSize]: string};
      color: string;
      weight: string;
   }
}

export const title: TitleProps = {
   h1: {
      size: {
         xs: 'text-title-lg',
         sm: 'text-title-xl',
         md: 'text-title-2xl',
         lg: 'text-title-3xl',
         xl: 'text-title-4xl',
         '2xl': 'text-title-5xl'
      },
      color: 'text-surface-900 dark:text-white',
      weight: 'font-bold',
   },
   h2: {
      size: {
         xs: 'text-title-md',
         sm: 'text-title-lg',
         md: 'text-title-xl',
         lg: 'text-title-2xl',
         xl: 'text-title-3xl',
         '2xl': 'text-title-4xl'
      },
      color: 'text-surface-900 dark:text-surface-50',
      weight: 'font-bold',
   },
   h3: {
      size: {
         xs: 'text-title-sm',
         sm: 'text-title-md',
         md: 'text-title-lg',
         lg: 'text-title-xl',
         xl: 'text-title-2xl',
         '2xl': 'text-title-3xl'
      },
      color: 'text-surface-800 dark:text-surface-50',
      weight: 'font-bold',
   },
   h4: {
      size: {
         xs: 'text-title-xs',
         sm: 'text-title-sm',
         md: 'text-title-md',
         lg: 'text-title-lg',
         xl: 'text-title-xl',
         '2xl': 'text-title-2xl'
      },
      color: 'text-surface-800 dark:text-surface-50',
      weight: 'font-medium',
   },
   h5: {
      size: {
         xs: 'text-title-2xs',
         sm: 'text-title-xs',
         md: 'text-title-sm',
         lg: 'text-title-md',
         xl: 'text-title-lg',
         '2xl': 'text-title-xl'
      },
      color: 'text-surface-700 dark:text-surface-100',
      weight: 'font-medium'
   },
   h6: {
      size: {
         xs: 'text-title-3xs',
         sm: 'text-title-2xs',
         md: 'text-title-xs',
         lg: 'text-title-sm',
         xl: 'text-title-md',
         '2xl': 'text-title-lg'
      },
      color: 'text-surface-700 dark:text-surface-100',
      weight: 'font-medium'
   },
}

export default title;