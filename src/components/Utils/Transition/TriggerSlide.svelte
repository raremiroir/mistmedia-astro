<script lang="ts">
   import Button from "@/components/Common/Button/Button.svelte";
   import { slide } from "svelte/transition";

   export let trigger: string = '';


   let open = false;
   $: open;
</script>

<div class="flex flex-row gap-8">
   <div 
      role="button" aria-haspopup="true" aria-expanded="false"
      on:click={() => open = !open}
      on:keydown={(e) => { if (e.key === 'Enter') open = !open; }}
      tabindex="0" class="my-0.5"
   >
      <slot name="trigger">
         <Button 
            color="{ open ? 'error' : 'primary'}" 
            variant="minimal" size="lg" shadow="none"
         >
            {#if open}Hide{:else}Show{/if} {trigger}
         </Button>
      </slot>
   </div>

   {#if open}
      <div transition:slide={{duration: 200, axis: "x"}}>
         <slot/>
      </div>
   {/if}
</div>