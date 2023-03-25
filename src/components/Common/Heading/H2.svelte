<script lang="ts">
   import type { TitleSizes } from "./heading";
   export let fake = false;

   export let size:TitleSizes = "md" // xxs, xs, sm, md, lg
   export let color:string = "text-primary-800 dark:text-primary-400"
   export let weight:string = "font-bold"
   export let fontfam:string = "font-titlemono"
   export let leading = "leading-tight"
   export let shadow = "drop-shadow-none"
   
   export let klass:string = ""


   $: sizeClass = size === 'xxs' ? 'text-title-md'
                : size === 'xs' ? 'text-title-lg'
                : size === 'sm' ? 'text-title-xl'
                : size === 'lg' ? 'text-title-3xl'
                : 'text-title-2xl';
   $: colorClass = color ? color : 'text-primary-800 dark:text-primary-400';
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