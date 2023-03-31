<script lang="ts">
   import type { TitleSizes } from '@tstype/components/heading';
   export let size:TitleSizes = "md" // xxs, xs, sm, md, lg, xl, xxl
   export let color:string = ""
   export let weight:string = ""
   export let fontfam:string = ""
   export let leading = ""
   export let shadow = ""
   
   export let klass:string = ""

   $: sizeClass = size === 'xxs' ? 'text-title-4xs'
                : size === 'xs' ? 'text-title-3xs'
                : size === 'sm' ? 'text-title-2xs'
                : size === 'lg' ? 'text-title-sm'
                : size === 'xl' ? 'text-title-md'
                : size === 'xxl' ? 'text-title-lg'
                : 'text-title-xs';
   $: colorClass = color ? color : "text-black dark:text-white";
   $: weightClass = weight ? weight : "font-medium";
   $: fontfamClass = fontfam ? fontfam : "font-body";
   $: leadingClass = leading ? leading : "";
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