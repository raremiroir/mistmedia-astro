<script lang="ts">
   import type { TitleSizes } from "./heading";
   export let fake = false;

   export let size:TitleSizes = "md"; // xxs, xs, sm, md, lg, xl
   export let color:string = "";
   export let weight:string = "";
   export let fontfam = "";
   export let leading = "";
   export let shadow = "";
   
   export let klass:string = ""


   $: sizeClass = size === 'xxs' ? 'text-title-2xs'
                : size === 'xs' ? 'text-title-xs'
                : size === 'sm' ? 'text-title-sm'
                : size === 'lg' ? 'text-title-lg'
                : size === 'xl' ? 'text-title-xl'
                : 'text-title-md';
   $: colorClass = color ? color : 'text-surface-700 dark:text-surface-300';
   $: weightClass = weight ? weight : 'font-semibold';
   $: fontfamClass = fontfam ? fontfam : 'font-body';
   $: leadingClass = leading ? leading : 'leading-none';
   $: shadowClass = shadow ? shadow : 'drop-shadow-md';

   export let transition = `transition-all duration-200 ease-out`;
   
   $: titleClass = 
         `unstyled ${sizeClass} ${colorClass} ${shadowClass} 
         ${fontfamClass} ${leadingClass} ${weightClass} 
         ${transition} tracking-wide ${klass}`
</script>



{#if fake}
   <span class="{titleClass}">
      <slot/>
   </span>
{:else}
   <h3 class="{titleClass}">
      <slot/>
   </h3>
{/if}