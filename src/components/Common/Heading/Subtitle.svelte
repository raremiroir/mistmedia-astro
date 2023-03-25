<script lang="ts">
   import type { TitleSizes } from "./heading";
   export let size:TitleSizes = "md" // xs, sm, md, lg, xl, xxl
   export let color:string = ""
   export let weight:string = ""
   export let fontfam:string = ""
   export let leading = ""
   export let shadow = ""
   
   export let klass:string = ""

   $: sizeClass = size === 'xs' ? 'text-title-4xs'
                : size === 'sm' ? 'text-title-3xs'
                : size === 'lg' ? 'text-title-xs'
                : size === 'xl' ? 'text-title-sm'
                : size === 'xxl' ? 'text-title-md'
                : 'text-title-2xs';
   $: colorClass = color ? color : "text-gray-800 dark:text-gray-200";
   $: weightClass = weight ? weight : "font-medium";
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