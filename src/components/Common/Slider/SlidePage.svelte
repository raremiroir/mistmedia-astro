<script lang="ts">
   import { SplideSlide } from '@splidejs/svelte-splide';
</script>


<SplideSlide>
   <div class="flex flex-row w-full justify-center gap-4">
      <slot/>
   </div>
</SplideSlide>

<!-- <style global>
   .splide__slide {
      width: 100%;
      height: 100%;
   }
</style> -->