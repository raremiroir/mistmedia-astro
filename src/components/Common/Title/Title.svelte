<script lang="ts">
	import title, { TitleSize } from "./title";
	import type { TitleType } from "./title";

   // Can be any heading
   export let h1: boolean = false;
   export let h2: boolean = false;
   export let h3: boolean = false;
   export let h4: boolean = false;
   export let h5: boolean = false;
   export let h6: boolean = false;
   // Make it a span
   export let fake: boolean = false;
   // Pick a size (sm, md, lg, xl, 2xl)
   export let size:TitleSize|string = '2xl'
   // Override color
   export let color: string = '';
   // Override weight
   export let weight: string = '';

   let type: TitleType = 
        h1? 'h1' : h2? 'h2' : h3? 'h3' 
      : h4? 'h4' : h5? 'h5' : h6? 'h6' 
      : 'h1';
   let compType = fake? 'span' : type;


   let klass:string = '';
   export { klass as class };

   let sizeClass: string = "text-4xl";
   let weightClass: string = "font-bold";

   $: if (size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl' || size === '2xl') {
      sizeClass = `${title[type].size[size]}`;
   } else {
      sizeClass = size;
   }
   $: colorClass = color ? color : title[type].color;
   $: weightClass = weight ? weight : title[type].weight;
</script>   

<svelte:element 
   this={compType}
   class="unstyled p-0 leading-[1.1em] h-full w-full font-mono {sizeClass} {colorClass} {weightClass} {klass}"
   style="{ h1? '--webkit-text-stroke: 1px var(--color-surface-700);' : '' }"
>
   <slot>Title</slot>
</svelte:element>
