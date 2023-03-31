<script lang="ts">
   import type { TitleSizes } from '@tstype/components/heading';
   export let fake = false;

   export let size:TitleSizes = "md" // xxs, xs, sm, md, lg, xl, xxl
   export let color:string = ""
   export let weight:string = ""
   export let fontfam:string = ""
   export let leading = ""
   export let shadow = ""
   
   export let klass:string = ""


   $: sizeClass = size === 'xxs' ? 'text-title-2xs'
                : size === 'xs' ? 'text-title-xs'
                : size === 'sm' ? 'text-title-sm'
                : size === 'lg' ? 'text-title-lg'
                : size === 'xl' ? 'text-title-xl'
                : size === 'xxl' ? 'text-title-2xl'
                : 'text-title-md';
   $: colorClass = color ? color : 'text-primary-700 dark:text-primary-300';
   $: weightClass = weight ? weight : 'font-semibold';
   $: fontfamClass = fontfam ? fontfam : 'font-title';
   $: leadingClass = leading ? leading : 'leading-normal';
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
   <h5 class="{titleClass}">
      <slot/>
   </h5>
{/if}