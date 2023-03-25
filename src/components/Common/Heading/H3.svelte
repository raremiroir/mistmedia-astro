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


   $: sizeClass = size === 'xxs' ? 'text-title-sm'
                : size === 'xs' ? 'text-title-md'
                : size === 'sm' ? 'text-title-lg'
                : size === 'lg' ? 'text-title-2xl'
                : size === 'xl' ? 'text-title-3xl'
                : 'text-title-xl';
   $: colorClass = color ? color : 'text-primary-700 dark:text-primary-400';
   $: weightClass = weight ? weight : 'font-semibold';
   $: fontfamClass = fontfam ? fontfam : 'font-titlemono';
   $: leadingClass = leading ? leading : 'leading-none';
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
   <h3 class="{titleClass}">
      <slot/>
   </h3>
{/if}