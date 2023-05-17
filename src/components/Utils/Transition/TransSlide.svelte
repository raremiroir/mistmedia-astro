<script lang="ts">
   import { slide } from "svelte/transition";

   export let duration: number = 200;
   export let axis: "x" | "y" = "y";

   export let visible: boolean = false;
   $: visible;

</script>

{#if visible}
   <div
      in:slide={{delay: duration, duration, axis}}
      out:slide={{duration, axis}}
   >
      <slot />
   </div>
{/if}