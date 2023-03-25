<script lang="ts">
   import type { TitleSizes } from "./heading";
   export let fake = false;

   export let size:TitleSizes = "md" // xxs, xs, sm, md, lg, xl, xxl
   export let color:string = ""
   export let weight:string = ""
   export let fontfam:string = ""
   export let leading = ""
   export let shadow = ""
   
   export let klass:string = ""


   $: sizeClass = size === 'xxs' ? 'text-title-xs'
                : size === 'xs' ? 'text-title-sm'
                : size === 'sm' ? 'text-title-md'
                : size === 'lg' ? 'text-title-xl'
                : size === 'xl' ? 'text-title-2xl'
                : size === 'xxl' ? 'text-title-3xl'
                : 'text-title-lg';
   $: colorClass = color ? color : 'text-black dark:text-white';
   $: weightClass = weight ? weight : 'font-bold';
   $: fontfamClass = fontfam ? fontfam : 'font-titlemono';
   $: leadingClass = leading ? leading : 'leading-snug';
   $: shadowClass = shadow ? shadow : 'drop-shadow-md';

   export let transition = `transition-all duration-200 ease-out`;

   $: titleClass = 
         `unstyled ${sizeClass} ${colorClass} ${shadowClass} 
         ${fontfamClass} ${leadingClass} ${weightClass} 
         ${transition} ${klass}`
</script>



{#if fake}
   <span class="{titleClass}">
      <slot/>
   </span>
{:else}
   <h4 class="{titleClass}">
      <slot/>
   </h4>
{/if}