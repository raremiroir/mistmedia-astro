<script lang="ts">
   import { slide } from 'svelte/transition';
   export let key:number;
   const transition = 'transition-all duration-300 ease-in-out'
</script>



<div 
   transition:slide={{duration: 300}}
   id="accordeon__item__content-{key}" class="accordeon__item__content-{key}"
   aria-labelledby="accordeon__item__title-{key}"
   role="region" 
>
   <slot/>
</div>