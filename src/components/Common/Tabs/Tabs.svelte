<script lang="ts">
   import { TabGroup, Tab } from '@skeletonlabs/skeleton';
   import type { MistTabs } from '@/types/components/tabs';
   import { currentTab } from '@/stores';
   import type { TabProps } from '@skeletonlabs/skeleton/dist/components/Tab/Tab.svelte';

   export let justify: string = 'justify-center w-full'
   export let flex: TabProps['flex'] = 'flex flex-row';
   export let spacing: TabProps['spacing'] = 'gap-8';
   export let border: string = 'border-b-2 border-primary-500/60 text-primary-800 font-semibold uppercase font-titlemono tracking-wide';
   export let rounded: TabProps['rounded'] = 'rounded-tl-container-token rounded-tr-container-token';
   export let padding: TabProps['padding'] = 'p-4';
   export let active: TabProps['active'] = 'bg-primary-500/60';
   export let hover: TabProps['hover'] = 'hover:bg-primary-500/20';

   export let tabs: MistTabs = {
      tab1: {
         label: 'Tab 1',
         icon: 'tabler:lemon'
      },
      tab2: {
         label: 'Tab 2',
         icon: 'tabler:lemon'
      },
   }
</script>


<TabGroup
   class="w-full"
   {justify} {border} {rounded} 
   {flex} {padding} {spacing}
   {active} {hover} 
>
   {#each Object.keys(tabs) as tab, key}
	   <Tab bind:group={$currentTab} name="{tab}" value={key}>{tabs[tab].label}</Tab>
   {/each}
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		<slot/>
	</svelte:fragment>
</TabGroup>
			