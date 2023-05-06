<script lang="ts">
   import ModalContent from "@/components/Common/Modal/ModalContent.svelte";
   import Tabs from "@/components/Common/Tabs/Tabs.svelte";
   import { currentTab } from "@/stores";
   import type { MistTabs } from "@/types/components/tabs";
   import CaseContentForm from './CaseContentForm.svelte'

   export let item = {
      title: '',
      description: {
         nl: '',
         en: ''
      },
   }
   $: item;

   const tabs: MistTabs = {
      tab1: {
         label: 'Edit Content',
         icon: 'tabler:lemon'
      },
      tab2: {
         label: 'Tab 2',
         icon: 'tabler:lemon'
      },
   }
</script>

<ModalContent width="min-w-[880px]">
   <Tabs {tabs}>
      {#if $currentTab === 0}
         <CaseContentForm {item} />
      {:else if $currentTab === 1}
         (tab panel 2 contents)
      {/if}
   </Tabs>
</ModalContent>