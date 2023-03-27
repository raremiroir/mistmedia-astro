<script lang="ts">
   import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
   import type { DrawerSettings } from '@skeletonlabs/skeleton';
   import Button from '../Button/Button.svelte';

   export let id:string;
   export let position:"left" | "top" | "right" | "bottom" | undefined = 'left' // left, right, top, bottom

   export let width:string = 'w-[280px] md:w-[480px]'
   export let padding:string = 'p-4'
   export let rounded:string = 'rounded-2xl !shadow-2xl !shadow-black/70'
   export let bg:string = 'bg-surface-50';
   export let backdrop:string = 'bg-gradient-to-tr from-primary-500/50 via-tertiary-600/30 to-primary-800/30';

   const drawerSettings: DrawerSettings = {
      id: id,
      // Properties
      bgDrawer: `${bg} !z-99`,
      bgBackdrop: backdrop,
      width: width,
      padding: padding,
      rounded: rounded
   }

   const openDrawer = (settings:DrawerSettings) => {
      drawerStore.open(settings)
      console.log('openDrawer')
   }
   const closeDrawer = () => {
      drawerStore.close()
      console.log('closeDrawer')
   }
</script>

<div 
   on:click={() => openDrawer(drawerSettings)}
   on:keydown={(e) => { if (e.key === 'Enter') openDrawer(drawerSettings) }}
>
   <!-- <Button on:click={() => console.log('btn clicked')}>
      Open Drawer
   </Button> -->
   <slot name="trigger"/>
</div>

<Drawer
   {position}
   duration={200}
   client:load
   {drawerStore}
   {drawerSettings}
   on:close={() => { closeDrawer() }}>
   <slot/>   
</Drawer>