<script lang="ts">
   import Drawer from 'svelte-drawer-component'
	import { onDestroy, setContext } from 'svelte';
	import Title from '@comp/Common/Title/Title.svelte';
	import Icon from '@iconify/svelte'
	import Button from '@comp/Common/Button/Button.svelte';
   
   import { animationTrigger } from '@stores/index';

   let open = false;

   export let klass = '';
   export let size = '600px';
   export let placement:"left"|"top"|"right"|"bottom"|undefined = 'left';
   export let duration = 0.3;
   export let sub = false;

   $: if (!open) { $animationTrigger = false } 

</script>

<div 
   class="h-full m-0 p-0 {klass}" 
   on:click={() => {open = true; $animationTrigger = true}}
   on:keydown={e => { if (e.key === 'Enter' || e.key === ' ') {open = true; $animationTrigger = true} }}
>
   <slot name="trigger">
      <button>trigger</button>
   </slot>
</div>

<Drawer 
   { open } 
   {size} {duration} {placement}
   on:clickAway={() => open = false}
   >
   <div class="h-fit min-h-full w-full bg-surface-50 dark:bg-surface-600 p-8">
      <div class="flex flex-row justify-between w-full">
         <div class="flex flex-col gap-2 max-w-[90%]">
            <Title h3 size="lg" fake class="underline">
               <slot name="title"></slot>
            </Title>
            {#if sub}
               <slot name="sub"/>
            {/if}
         </div>
         <Button color="error" on:click={() => open = false} on:keydown size="xs" square>
            <Icon icon="material-symbols:close-rounded" class="w-6 h-6"/>
         </Button>
      </div>
      <div class="mt-4">
         <slot/>
      </div>
   </div>
</Drawer>