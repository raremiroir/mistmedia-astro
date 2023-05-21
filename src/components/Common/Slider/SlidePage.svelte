<script lang="ts">
   import { SplideSlide } from '@splidejs/svelte-splide';
</script>


<SplideSlide>
   <div class="flex flex-row justify-between">
      <slot/>
   </div>
</SplideSlide>
