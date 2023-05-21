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

   export let thirdPage = false;
   export let fourthPage = false;
   export let fifthPage = false;
   export let sixthPage = false;
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


<style global lang="postcss">
   .splide__pagination {
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: fit-content;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      background-color: red;
      border-radius: 0.5rem;
   }

</style>