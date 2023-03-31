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


   $: sizeClass = size === 'xxs' ? 'text-title-3xs'
                : size === 'xs' ? 'text-title-2xs'
                : size === 'sm' ? 'text-title-xs'
                : size === 'lg' ? 'text-title-md'
                : size === 'xl' ? 'text-title-lg'
                : size === 'xxl' ? 'text-title-xl'
                : 'text-title-sm';
   $: colorClass = color ? color : 'text-primary-800 dark:text-primary-200';
   $: weightClass = weight ? weight : 'font-semibold';
   $: fontfamClass = fontfam ? fontfam : 'font-title';
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
   <h6 class="{titleClass}">
      <slot/>
   </h6>
{/if}