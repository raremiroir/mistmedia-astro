<script lang="ts">
   import { Modal, modalStore } from '@skeletonlabs/skeleton';
   import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
   import Button from '../Button/Button.svelte';
   import { modalSettings } from '@/stores';

   export let type: ModalSettings['type'] = 'component';
   export let title: ModalSettings['title'] = 'Example Alert';
   export let body: ModalSettings['body'] = 'This is an example modal.';
   export let image: ModalSettings['image'] = 'https://i.imgur.com/WOgTG96.gif';
   export let components: Record<string, ModalComponent> | undefined = undefined;
   export let component: ModalSettings['component'] = undefined;

   export let modalClass: ModalSettings['modalClasses'] = 'bg-white dark:bg-slate-900';
   export let backdrop: ModalSettings['backdropClasses'] = 'bg-black/20';

   export let cancelText: ModalSettings['buttonTextCancel'] = 'Cancel';
   export let confirmText: ModalSettings['buttonTextConfirm'] = 'Confirm';
   export let submitText: ModalSettings['buttonTextSubmit'] = 'Submit';
   
   export let trigger:string = 'Open Modal';
   export let noTrigger:boolean = false;

   export let height: string = 'h-auto';
   export let width: string = 'w-modal';
   export let padding: string = 'p-4';
   export let rounded: string = 'rounded-container-token';
   export let shadow: string = 'shadow-xl';
   export let spacing: string = 'gap-4';
   export let zIndex:string = 'z-99';
   export let duration: number = 200;
   export let position: string = 'items-center';

   $: title;
   $: body;
   $: image;
   $: components;
   $: component;

$modalSettings = {
	type,
	// Data
	title, body, image,
   component,
   buttonTextCancel: cancelText,
   buttonTextConfirm: confirmText,
   buttonTextSubmit: submitText,
   modalClasses: modalClass,
};

const triggerModal = () => modalStore.trigger($modalSettings);
</script>

{#if !noTrigger}
   <div 
      on:click={() => triggerModal() }
      on:keydown={e => e.key === 'Enter' && triggerModal() }
      tabindex="0"
      role="button"
      class=""
   >
      <slot>
         <Button color="surface_alt" variant="fill" size="md">
            {trigger}
         </Button>
      </slot>
   </div>
{/if}

<Modal 
   bind:components 
   regionBackdrop={backdrop} 
   background={modalClass} 
   {height} {width} {padding} 
   {rounded} {shadow} {spacing} {zIndex}
   {duration} {position} 
/>

