<script lang="ts">
   // Import utils
	import { fade, slide } from "svelte/transition";

   // Export error
   export let error:any = '';
   $: error;
</script>

<span 
  aria-errormessage={error}
  class="text-sm text-error italic font-body leading-none"
  transition:slide={{duration:200, axis: 'y'}}  >
  {error}
</span>

