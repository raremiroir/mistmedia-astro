<script lang="ts">
   import { slide } from 'svelte/transition';
   export let key:number;
   const transition = 'transition-all duration-300 ease-in-out'
</script>



<div 
   transition:slide={{duration: 300}}
   id="accordeon-item-{key}" aria-labelledby="accordeon-item-{key}"
   role="region" 
   class="mt-4 mb-2 mx-12"
>
   <slot/>
</div>