<script lang="ts">
   import { TabGroup, Tab } from '@skeletonlabs/skeleton';
   import type { MistTabs } from '@/types/components/tabs';
   import { currentTab } from '@/stores';
   import type { TabProps } from '@skeletonlabs/skeleton/dist/components/Tab/Tab.svelte';

   export let justify: string = 'justify-center w-full'
   export let flex: TabProps['flex'] = 'flex-1 lg:flex-none';
   export let spacing: TabProps['spacing'] = 'gap-8';
   export let border: string = 'font-semibold uppercase font-titlemono tracking-wide';
   export let rounded: TabProps['rounded'] = '';
   export let padding: TabProps['padding'] = 'p-4';
   export let bg: string = 'bg-surface-100-800-token';
   export let active: TabProps['active'] = 'variant-filled-primary';
   export let hover: TabProps['hover'] = 'hover:variant-soft-primary';
   
   let klass = '';
   export { klass as class };
   const tabClass = `w-full ${bg} ${klass}`

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
   class="{tabClass}"
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
			