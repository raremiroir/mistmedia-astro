<script lang="ts">
   import type { TitleSizes, TitleTags } from './heading';
   import { H1, H2, H3, H4, H5, H6, Subheader, Subtitle } from './index';

   const titles = {
      h1: H1, h2: H2, h3: H3,
      h4: H4, h5: H5, h6: H6,
      subheader: Subheader,
      subtitle: Subtitle
   }
   
   export let type: TitleTags = 'h3';
   export let size: TitleSizes = '';
   export let color: string = '';
   export let weight: string = '';
   export let fontfam: string = '';
   export let leading: string = '';
   export let shadow: string = '';

   export let fake: boolean = false;

   export let klass: string = '';
   
   const titleComp = titles[type];
</script>

<svelte:component this={titleComp}
      {size} {color} {shadow}
      {weight} {fontfam} {leading}
      {fake} klass={klass}
   >     
      <slot/>
</svelte:component>