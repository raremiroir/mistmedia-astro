<script lang="ts">
   import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
   // import type { SliderProps } from "component-slider";

   import SlidePage from "@/components/Common/Slider/SlidePage.svelte";
   import Card from "@/components/Common/Card/Card.svelte";
   import type { SplideProps } from '@splidejs/svelte-splide/components/Splide/Splide.svelte';

   const label = 'Portfolio Slider';

   const sliderOptions:SplideProps = {
      label,
      perPage: 3,
      perMove: 2,
      type: 'loop',
      gap: '1rem',
      breakpoints: {
         1280: {
            perPage: 4,
            perMove: 2,
         },
         1024: {
            perPage: 3,
            perMove: 1,
         },
         768: {
            perPage: 2,
            perMove: 1,
         },
         640: {
            perPage: 2,
            perMove: 1,
         },
      }
   }
</script>

<Splide 
   options={{
      label,
      pagination: true,
      navigation: true,
      perPage: 3,
      perMove: 2,
      type: 'loop',
      gap: '1rem',
      breakpoints: {
         1280: {
            perPage: 3,
            perMove: 2,
         },
         1024: {
            perPage: 3,
            perMove: 1,
         },
         768: {
            perPage: 2,
            perMove: 1,
         },
         640: {
            perPage: 1,
            perMove: 1,
         },
      }}} 
   aria-label="{label}"
   classes={{
      pagination: 'splide__pagination slide-pagination mx-4',
      page: 'splide__pagination__page slide-page bg-surface-400',
   }}>
   <SplideSlide>
      <slot name="first"/>
   </SplideSlide>
   <SplideSlide>
      <slot name="second"/>
   </SplideSlide>
   <SplideSlide>
      <slot name="third"/>
   </SplideSlide>
</Splide>