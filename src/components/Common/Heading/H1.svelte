<script lang="ts">
   import type { TitleSizes } from "./heading";
   export let fake = false;

   export let size:TitleSizes = "" // xxs, xs, sm, md
   export let color:string = ""
   export let weight:string = ""
   export let fontfam:string = ""
   export let leading = ""
   export let shadow = ""
   
   export let klass:string = ""

   $: sizeClass = size === 'xxs' ? 'text-title-lg'
                : size === 'xs' ? 'text-title-xl'
                : size === 'sm' ? 'text-title-2xl'
                : 'text-title-3xl';
   $: colorClass = color ? color : 'text-primary';
   $: weightClass = weight ? weight : 'font-bold';
   $: fontfamClass = fontfam ? fontfam : 'font-titlemono';
   $: leadingClass = leading ? leading : 'leading-none';
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
   <h1 class="{titleClass}">
      <slot/>
   </h1>
{/if}