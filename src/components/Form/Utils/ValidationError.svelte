<script lang="ts">
   // Import utils
	import { fade } from "svelte/transition";

   // Export error
   export let error:any = '';
   $: error;
</script>

<span 
  aria-errormessage={error}
  class="text-sm text-error italic font-body"
  transition:fade={{duration:200}}  >
  {error}
</span>

