<script lang="ts">
   import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
   // import type { SliderProps } from "component-slider";

   import Card from "@/components/Common/Card/Card.svelte";

   const label = 'Portfolio Slider';
</script>

<Splide 
   options={{
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
            perPage: 1,
            perMove: 1,
         },
      }
   }} 
   aria-label="{label}">
   <SplideSlide>
      <Card 
         block article 
         color="surface_alt" 
         hover active media="custom">
         <div slot="media">
            <img src="placeholder-about.jpg" alt="1" class="object-cover w-96 h-auto"/>
         </div>
      </Card>
   </SplideSlide>
   <SplideSlide>
      <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
   </SplideSlide>
   <SplideSlide>
      <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
   </SplideSlide>
   <SplideSlide>
      <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
   </SplideSlide>
   <SplideSlide>
      <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
   </SplideSlide>
   <SplideSlide>
      <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
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