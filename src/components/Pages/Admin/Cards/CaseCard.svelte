<script lang="ts">
   import Card from "@/components/Common/Card/Card.svelte";
   import { locale } from "@/stores";
   import { modalStore } from "@skeletonlabs/skeleton";
   import { currentModalItem, modalSettings, currentModal } from "@/stores";
   import type { MistCase } from "@/types/content";

   export let images: MistCase['images'];
   export let title: MistCase['title'];
   export let enabled: MistCase['enabled'];
   export let description: MistCase['description'];

   $: title;
   $: images;
   $: enabled;
   $: description;

   const openModal = () => {
      // console.log('openModal', title, images, description, enabled);
      $modalSettings = {
         type: 'component', title,
         component: $currentModal,
      };
      // console.log('modal settings: ', $modalSettings);
      $currentModalItem = { title, images, description, enabled };
      $currentModal = 'caseDetail';
      modalStore.trigger($modalSettings);
      // console.log('modal store: ', $modalStore);
   }

</script>

<div 
   on:click={() => openModal() }
   on:keydown={e => e.key === 'Enter' && openModal() }
   tabindex="0"
   role="button">
   <Card
      color="surface_dark"
      variant="ghost"
      block hover active
      direction="row"
      media="custom"
      fillHeight
      mediaClass="w-1/3 h-50"
      contentClass="w-2/3"
   >
      <div slot="media" class="h-full w-full flex items-center justify-start">
         <img src={images.card} alt="" class="w-auto m-0 p-0 h-full object-cover" />
      </div>
      <div slot="title" class="w-full flex items-center justify-between">
         <span class="font-titlemono text-title-xs font-semibold underline">{title}</span>
         <div class="flex-end { enabled ? 'bg-success-900' : 'bg-error-900' } text-surface-50 px-1 rounded-md py-0">
            <span class="unstyled text-sm uppercase font-medium font-titlemono tracking-wide">
               {#if enabled}Enabled{:else}Disabled{/if}
            </span>
         </div>
      </div>
      <p class="line-clamp-3">
         { typeof description === 'object' ? description[$locale] : description}
      </p>
   </Card>
</div>