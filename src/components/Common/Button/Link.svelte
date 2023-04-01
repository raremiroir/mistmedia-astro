<script lang="ts">
   import PopupHover from "@comp/Utils/Popup/PopupHover.svelte";
   import type { PopupSettings } from "@skeletonlabs/skeleton";

   export let klass = '';
   export let href = '';
   export let target = '';
   export let rel = '';

   export let color = 'text-primary-500 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-200';

   export let popup = '';
   export let popupPlacement:PopupSettings['placement'] = 'top';

   const cTransition = 'transition-all duration-200 ease-out';
   const cText = 'text-clamp-lg min-w-fit max-w-[60%] whitespace-nowrap overflow-hidden no-underline'
   const cFlex = 'flex flex-row gap-2 items-center justify-start';
   
   const cAfter = 'after:absolute after:right-2 after:bottom-1';
   const cActiveAfter = 'active:after:left-0 active:after:-bottom-0.5 active:after:w-full active:after:h-full';
   const cHoverAfter = 'hover:after:bg-primary/25';

   const linkClass = `unstyled relative group ${color} ${cTransition} ${cText} ${cFlex} ${cAfter} ${cActiveAfter} ${cHoverAfter} ${klass}`;
</script>

{#if popup}
   <PopupHover id={href} text={popup} placement={popupPlacement}>
      <a {href} {target} {rel} class={linkClass}>
         <slot name="icon" />
         <slot/>
      </a>
   </PopupHover>
{:else}
   <a {href} {target} {rel} class={linkClass}>
      <slot name="icon" />
      <slot/>
   </a>
{/if}

<style>
   a::after {
      content: "";
      width: calc(100% - 32px);
      height: calc(100% - 20px);
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05)
   }
</style>