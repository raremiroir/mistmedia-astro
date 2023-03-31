<script lang="ts">
   import { Splide, SplideSlide } from '@splidejs/svelte-splide';
   import type { SliderProps } from "component-slider";
   import { slider } from "src/consts/class";

   import SlideBase from "@comp/Common/Slider/SlideBase.svelte";
   import SlidePage from "@comp/Common/Slider/SlidePage.svelte";
   import Card from "@comp/Common/Card/Card.svelte";

   const label = 'Portfolio Slider';

   const sliderOptions = {
      label: label,
      pagination: true,
      cover: true,
      type: 'loop',
      focus: 'center',
      drag: true,
      snap: true,
      gap: '1rem',
      autoplay: 'pause',
      interval: 5000,
      speed: 300,
      omitEnd: true,
      updateOnMove: true,
      height: 200,
      width: 'fit-content',
      autoWidth: true,
   }
</script>

<Splide 
   class="{slider}"
   options={{sliderOptions}} 
   aria-label="{label}"
   classes={{
      pagination: 'splide__pagination slide-pagination',
      page: 'splide__pagination__page slide-page bg-surface-400'
   }}>
   <SlidePage>
      <SlideBase>
         <img src="placeholder-about.jpg" alt="1" class="object-cover w-96 h-auto"/>
      </SlideBase>
      <SlideBase>
         <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
      </SlideBase>
      <SlideBase>
         <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
      </SlideBase>
   </SlidePage>
   <SlidePage>
      <SlideBase>
         <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
      </SlideBase>
      <SlideBase>
         <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
      </SlideBase>
      <SlideBase>
         <img src="placeholder-hero.jpg" alt="2" class="object-cover w-96 h-auto"/>
      </SlideBase>
   </SlidePage>
</Splide>
