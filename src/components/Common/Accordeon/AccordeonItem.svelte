<script lang="ts">
   import AccordeonTrigger from "./AccordeonTrigger.svelte";
   import AccordeonContent from "./AccordeonContent.svelte";
   import boxGen from "../../../styles/mist-theme";
   import Ripple from "@/components/actions/Ripple";

   export let key = 0;
   export let title = 'Title';
   export let icon = false;

   export let customTrigger = false;

   const accStyle = boxGen.full({
      variant: 'fill',
      color: 'surface_alt',
      size: 'lg',
      hover: true,
      active: true,
      style: {
         rounded: 'tile-lg',
         shadow: 'bevel',
         block: true,
      },
      classes: `group overflow-hidden`
   })
   
   let open = false;
</script>

<div
   use:Ripple
   tabindex="-1"
   class="{accStyle} overflow-hidden"
   on:click={() => open = !open }
   on:keydown={(e) => { if (e.key === 'Enter') { open = !open } }}
>

   {#if customTrigger}
      <AccordeonTrigger {open} {key}>
         <slot name="trigger" />
      </AccordeonTrigger>
   {:else}
      <AccordeonTrigger {open} {title} {icon} {key}>
         <slot name="icon" slot="icon"/>
      </AccordeonTrigger>
   {/if}

   {#if open}
      <AccordeonContent {key}>
         <slot />
      </AccordeonContent>
   {/if}

   
</div>