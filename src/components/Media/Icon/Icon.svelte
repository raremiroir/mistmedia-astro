<script lang="ts">

   import Iconify from "@iconify/svelte";

   // import BoldDuotonePriceTagEuro from "./custom/BoldDuotonePriceTagEuro.svelte";
   // import BoldDuotoneScale from "./custom/BoldDuotoneScale.svelte";
	// import BoldDuotoneMoneyBag from "./custom/BoldDuotoneMoneyBag.svelte";
   import { classes } from "@/consts/style";

   // const customIcons: any = {
   //    'pricetag': BoldDuotonePriceTagEuro,
   //    'scale': BoldDuotoneScale,
   //    'moneybag': BoldDuotoneMoneyBag
   // }

   export let icon = '';
   // export let customIcon: string = '';

   export let width: string = "w-8";
   export let color: string = "text-primary-500";
   export let hex: string = "#deece8";

   let klass = '';
   export { klass as class };
</script>


<!-- {#if customIcon !== ''}
   <svelte:component 
      this={customIcons[customIcon]}
      fillColor="{hex}"
      {width}
   />
{:else} -->
   <Iconify icon={icon} class="{width} h-auto {color} {classes.transition.default} {klass}" />
<!-- {/if} -->
