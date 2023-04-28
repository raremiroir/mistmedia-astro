export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const title = {
   class: {
      size: ( props: { type: TitleType, size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' } = {
         type: 'h1',
         size: 'md'
      }) => {
         const { type, size } = props;
         switch (type) {
            // H1
            case 'h1': switch (size) {
               case 'xs': return 'text-title-lg';
               case 'sm': return 'text-title-xl';
               case 'md': return 'text-title-2xl';
               case 'lg': return 'text-title-3xl';
               case 'xl': return 'text-title-4xl';
               case '2xl': return 'text-title-5xl';
            }
            // H2
            case 'h2': switch (size) {
               case 'xs': return 'text-title-md';
               case 'sm': return 'text-title-lg';
               case 'md': return 'text-title-xl';
               case 'lg': return 'text-title-2xl';
               case 'xl': return 'text-title-3xl';
               case '2xl': return 'text-title-4xl';
            }
            // H3
            case 'h3': switch (size) {
               case 'xs': return 'text-title-sm';
               case 'sm': return 'text-title-md';
               case 'md': return 'text-title-lg';
               case 'lg': return 'text-title-xl';
               case 'xl': return 'text-title-2xl';
               case '2xl': return 'text-title-3xl';
            }
            // H4
            case 'h4': switch (size) {
               case 'xs': return 'text-title-xs';
               case 'sm': return 'text-title-sm';
               case 'md': return 'text-title-md';
               case 'lg': return 'text-title-lg';
               case 'xl': return 'text-title-xl';
               case '2xl': return 'text-title-2xl';
            }
            // H5
            case 'h5': switch (size) {
               case 'xs': return 'text-title-2xs';
               case 'sm': return 'text-title-xs';
               case 'md': return 'text-title-sm';
               case 'lg': return 'text-title-md';
               case 'xl': return 'text-title-lg';
               case '2xl': return 'text-title-xl';
            }
            // H6
            case 'h6': switch (size) {
               case 'xs': return 'text-title-3xs';
               case 'sm': return 'text-title-2xs';
               case 'md': return 'text-title-xs';
               case 'lg': return 'text-title-sm';
               case 'xl': return 'text-title-md';
               case '2xl': return 'text-title-lg';
            }
         }
      },
      color: ( type: TitleType = 'h1' ) => {
         switch (type) {
            case 'h1': return 'text-surface-900 dark:text-white';
            case 'h2': return 'text-surface-900 dark:text-surface-50';
            case 'h3': return 'text-surface-800 dark:text-surface-50';
            case 'h4': return 'text-surface-800 dark:text-surface-50';
            case 'h5': return 'text-surface-700 dark:text-surface-100';
            case 'h6': return 'text-surface-700 dark:text-surface-100';
         }
      },
      weight: ( type: TitleType = 'h1' ) => {
         switch (type) {
            case 'h1': return 'font-bold';
            case 'h2': return 'font-bold';
            case 'h3': return 'font-bold';
            case 'h4': return 'font-medium';
            case 'h5': return 'font-medium';
            case 'h6': return 'font-medium';
         }
      }
   }
}

export default title;