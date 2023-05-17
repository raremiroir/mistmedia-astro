<script lang="ts">
   import { t } from 'i18next'
   import Drawer from "@/components/Common/Drawer/Drawer.svelte";
   import Button from '@/components/Common/Button/Button.svelte';
   import { caseFilterTags, caseFilterSolutions, caseFilterClients } from '@/stores';

   export let key: number;
   export let title: string;
   export let description: string;
   export let slug: string;
   export let id: string;

   // $: console.log('Selected tags: ', $caseFilterTags);
   // $: console.log('Selected solutions: ', $caseFilterSolutions);
   // $: console.log('Selected clients: ', $caseFilterClients);
</script>

<div 
   class={`col-span-1 `}
>
   <Drawer 
      placement={(key % 2 == 0) && (key !== 0)  ? 'right' : 'left'}
   >
      <div slot="trigger" class="h-full w-full">
         <slot name="card"/>
      </div>
      <span slot="title">{title}</span>

      <div class="flex flex-col gap-4">
         <span>{description}</span>

         <Button href={slug} target="_blank">
            {t('btn.visit_site')}
         </Button>
      </div>
   </Drawer>
</div>