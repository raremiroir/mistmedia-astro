<script lang="ts">
   import { t } from 'i18next'
   import TriggerSlide from "@/components/Utils/Transition/TriggerSlide.svelte";
   import Select from '@/components/Form/Inputs/Select.svelte';
   import db from '@/firebase';
   import type { Locales } from '@/types';
   import Button from '@/components/Common/Button/Button.svelte';
   import { slide } from 'svelte/transition';
   import { caseFilterTags, caseFilterSolutions, caseFilterClients } from '@/stores';

   type Option = {
      value: string;
      label: string;
   }

   export let tags: Option[] = [];
   export let solutions: Option[] = [];
   export let clients: Option[] = [];

   let open = false;
   $: open;
</script>

<div class="flex flex-row gap-8">
   <Button 
      on:click={() => open = !open}
      color="{ open ? 'error' : 'primary'}" 
      variant="minimal" size="lg" shadow="none"
   >
      {#if open}Hide{:else}Show{/if} Filters
   </Button>

   {#if open}
      <div transition:slide={{duration: 200, axis: "x"}}>
         <div class="flex flex-row gap-4 w-fit">
            <Select 
               bind:values={$caseFilterTags}
               name="tags" label="Filter by Tag" multiple 
               options={tags}
            />
            <Select 
               bind:values={$caseFilterSolutions}
               name="solutions" label="Filter by Solution" multiple 
               options={solutions}
            />
            <Select 
               bind:values={$caseFilterClients}
               name="clients" label="Filter by Client" multiple 
               options={clients}
            />
         </div>
      </div>
   {/if}
</div>