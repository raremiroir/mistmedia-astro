<script lang="ts">
   import type { TitleSizes } from '@tstype/components/heading';
   export let size:TitleSizes = "md" // xxs, xs, sm, md, lg, xl, xxl
   export let color:string = ""
   export let weight:string = ""
   export let fontfam:string = ""
   export let leading = ""
   export let shadow = ""
   
   export let klass:string = ""

   $: sizeClass = size === 'xxs' ? 'text-clamp-lg'
                : size === 'xs' ? 'text-clamp-xl'
                : size === 'sm' ? 'text-clamp-2xl'
                : size === 'lg' ? 'text-title-3xs'
                : size === 'xl' ? 'text-title-2xs'
                : size === 'xxl' ? 'text-title-xs'
                : 'text-title-4xs';
   $: colorClass = color ? color : "text-surface-600 dark:text-surface-300";
   $: weightClass = weight ? weight : "font-regular";
   $: fontfamClass = fontfam ? fontfam : "font-body";
   $: leadingClass = leading ? leading : "leading-snug";
   $: shadowClass = shadow ? shadow : "drop-shadow-none";

   export let transition = `transition-all duration-200 ease-out`;

   $: titleClass = 
         `unstyled ${sizeClass} ${colorClass} ${shadowClass} 
         ${fontfamClass} ${leadingClass} ${weightClass} 
         ${transition} ${klass}`
</script>



<span class="{titleClass}">
   <slot/>
</span>