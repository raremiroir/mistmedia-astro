<script lang='ts'>
   import type { PopupSettings } from '@skeletonlabs/skeleton';
   import Popup from "@/components/Utils/Popup/Popup.svelte";
   import Button from '@/components/Common/Button/Button.svelte';
   import Icon from '@iconify/svelte';

   export let id: string;
   export let placement:PopupSettings['placement'] = 'bottom';
   export let event:PopupSettings['event'] = 'click';
</script>



<Popup 
   {id} {placement} {event}
   bg="bg-gray-50 dark:bg-surface-500 shadow-lg shadow-black/30"
   padding="p-2"
>
   <div class="">
      <Button variant="minimal" color="surface_alt" shadow="none" size="md" block flat tile ripple>
         <div class="flex gap-2 items-center justify-center">
            <slot name="trigger"/>
            <Icon icon="ph:caret-down-fill" class="w-3 h-3 mb-0.5 text-inherit"/>
         </div>
      </Button>
   </div>

   <div slot="popup">
      <slot/>
   </div>
</Popup>