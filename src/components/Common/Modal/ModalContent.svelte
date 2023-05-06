<script lang="ts">
   import Icon from "@/components/Media/Icon/Icon.svelte";
   import Button from "../Button/Button.svelte";
   import { modalStore } from "@skeletonlabs/skeleton";
   import { currentModalItem } from "@/stores";


   export let title:string = 'Title';
   export let width: string = 'min-w-[440px]'

   $: title;
   $: width;
</script>


<div class="
      card variant-filled 
      bg-white dark:bg-slate-900 p-4 
      text-surface-900-50-token 
      {width} max-w-[90vw]
      flex flex-col items-start justify-between
">
   <!-- Content -->
   <div class="flex w-full flex-col items-start justify-start">
      <!-- Header -->
      <div class="w-full flex items-center justify-between">
         <span class="text-title-sm font-semibold font-titlemono">
            {$currentModalItem.title}
         </span>
         <Button 
            on:click={() => { modalStore.close() }}
            variant="ghost" color="error" 
            ariaLabel="Close" size="xs"
            rounded="circle" square shadow="none"
         >
            <Icon icon="tabler:x" color="text-inherit" width="w-3" />
         </Button>
      </div>

      <slot />
   </div>
   <!-- Footer -->
   <div class="">
      <slot name="footer" />
   </div>
</div>