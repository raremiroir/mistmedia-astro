<script lang="ts">
   import type { TitleSizes } from "./heading";
   export let fake = false;

   export let size:TitleSizes = "md" // xxs, xs, sm, md, lg
   export let color:string = ""
   export let weight:string = ""
   export let fontfam:string = ""
   export let leading = ""
   export let shadow = ""
   
   export let klass:string = ""


   $: sizeClass = size === 'xxs' ? 'text-title-md'
                : size === 'xs' ? 'text-title-lg'
                : size === 'sm' ? 'text-title-xl'
                : size === 'lg' ? 'text-title-3xl'
                : 'text-title-2xl';
   $: colorClass = color ? color : 'text-surface-700 dark:text-surface-300';
   $: weightClass = weight ? weight : 'font-bold';
   $: fontfamClass = fontfam ? fontfam : 'font-titlemono';
   $: leadingClass = leading ? leading : 'leading-tight';
   $: shadowClass = shadow ? shadow : 'drop-shadow-none';

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
   <h2 class="{titleClass}">
      <slot/>
   </h2>
{/if}