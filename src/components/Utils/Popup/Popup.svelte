<script lang="ts">
   import { popup } from "@skeletonlabs/skeleton";
   import type { PopupSettings } from '@skeletonlabs/skeleton';

   export let id: string;

   export let placement: PopupSettings['placement'] = 'top';
   export let event: PopupSettings['event'] = 'hover';
   export let role:string = '';

   role = role?? event === 'hover' ? 'tooltip' : 'dialog';


   let popupSettings: PopupSettings = {
      event: event,
      target: id,
      placement: placement,
   }
</script>

<div use:popup={popupSettings}>
   <slot/>
</div>

<div 
   data-popup={id} {role}
   class="
      arrow
      bg-primary-300/60 dark:bg-primary-900/60
      backdrop-blur-lg
      px-4 py-2 rounded-lg
      font-semibold
">
   <div class="absolute w-2 h-2 rotate-45"/>
   <slot name="popup"/>
</div>
