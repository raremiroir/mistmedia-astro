<script lang="ts">
   import Popup from "@/components/Utils/Popup/Popup.svelte";
   import { classes } from "@/consts/style";
   import type { PopupSettings } from "@skeletonlabs/skeleton";

   export let klass = '';
   export let href = '';
   export let target = '';
   export let rel = '';

   export let color = 'text-primary-500 dark:text-primary-400 hover:text-primary-300 dark:hover:text-primary-200';

   export let popup = '';
   export let popupPlacement:PopupSettings['placement'] = 'top';

   const linkClass = `
      unstyled relative group ${classes.transition.fast} 
      text-clamp-lg min-w-fit max-w-[60%] whitespace-nowrap overflow-hidden no-underline
      flex flex-row gap-1.5 items-center justify-start 
      after:absolute after:right-2 after:bottom-1 
      active:after:left-0 active:after:-bottom-0.5 active:after:w-full active:after:h-full
      hover:after:bg-primary/25
      ${color} ${klass}`;
</script>

{#if popup}
   <Popup id={href} placement={popupPlacement}>
      <a {href} {target} {rel} class={linkClass} style="font-size: inherit !important;">
         <slot name="icon" />
         <slot/>
      </a>
      <span slot="popup" class="text-md">{popup}</span>
   </Popup>
{:else}
   <a {href} {target} {rel} class={linkClass} style="font-size: inherit !important;">
      <slot name="icon" />
      <span class="pt-0.5"><slot/></span>
   </a>
{/if}

<style lang="postcss" global>
   a::after {
      content: "";
      width: calc(100% - 32px);
      height: calc(100% - 20px);
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05)
   }
</style>