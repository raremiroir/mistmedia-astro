<script lang="ts">
   import { popup } from "@skeletonlabs/skeleton";
   import type { PopupSettings } from '@skeletonlabs/skeleton';

   export let id: string;
   export let text: string;

   export let placement: PopupSettings['placement'] = 'top';


   let popupSettings: PopupSettings = {
      event: 'hover',
      target: id,
      placement: placement,
   }
</script>

<div use:popup={popupSettings}>
   <slot/>
</div>

<div 
   data-popup={id} 
   class="
      arrow
      bg-primary-300/60 dark:bg-primary-900/60
      backdrop-blur-lg
      px-4 py-2 rounded-lg
      font-semibold
">
   {text}
</div>
