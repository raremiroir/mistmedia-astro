<script lang='ts'>
   import type { PopupSettings } from '@skeletonlabs/skeleton';
   import Popup from "@comp/Utils/Popup/Popup.svelte";

   export let id: string;
   export let placement:PopupSettings['placement'] = 'bottom';
   export let event:PopupSettings['event'] = 'click';
</script>



<Popup {id} {placement} {event}>
   <slot name="trigger"/>

   <div slot="popup">
      <slot/>
   </div>
</Popup>