<script lang="ts">
	import title from "./title";
   import type { TitleTags, TitleSizes } from "@/types/components/heading";

   // Can be any heading
   export let h1: boolean = false;
   export let h2: boolean = false;
   export let h3: boolean = false;
   export let h4: boolean = false;
   export let h5: boolean = false;
   export let h6: boolean = false;
   // Make it a span
   export let fake: boolean = false;
   // Pick a size (2xs, xs, sm, md, lg, xl, 2xl)
   export let size:TitleSizes|string = '2xl'
   // Override color
   export let color: string = '';
   // Override weight
   export let weight: string = '';
   // Override family
   export let family: string = '';

   export let noFill:boolean = false;

   let type: TitleTags = 
        h1? 'h1' : h2? 'h2' : h3? 'h3' 
      : h4? 'h4' : h5? 'h5' : h6? 'h6' 
      : 'h1';
   let compType = fake? 'span' : type;


   let klass:string = '';
   export { klass as class };

   let sizeClass: string = "text-4xl";
   let weightClass: string = "font-bold";

   $: if (size === '2xs' ||size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl' || size === '2xl') {
      sizeClass = `${title[type].size[size]}`;
   } else {
      sizeClass = size;
   }
   $: colorClass = color ? color : title[type].color;
   $: weightClass = weight ? weight : title[type].weight;
   $: familyClass = family ? family : title[type].family;
</script>   

<svelte:element 
   this={compType}
   class="unstyled p-0 leading-[1.1em] { noFill ? '' : 'h-full w-full'} {familyClass} {sizeClass} {colorClass} {weightClass} {klass}"
   style="{ h1? '--webkit-text-stroke: 1px var(--color-surface-700);' : '' }"
>
   <slot>Title</slot>
</svelte:element>
