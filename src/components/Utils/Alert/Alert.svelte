<script lang="ts">

   import boxGen from "@/styles/mist-theme";
   import Icon from "@iconify/svelte";
   import { fade } from "svelte/transition";

   export let visible:boolean = false;

   export let title:string;
   export let icon:string = ''

   export let type: 'info' | 'success' | 'warning' | 'error' = 'warning';

   const iconName:string = (icon !== '' && !!icon) ? icon 
      : type === 'info' ? 'ph:info-duotone'
      : type === 'success' ? 'ph:check-circle-duotone'
      : type === 'warning' ? 'ph:warning-duotone'
      : type === 'error' ? 'ph:x-circle-duotone'
      : 'mdi:alert-circle-outline';

   const bgColor:string = 
      type === 'info' ? 'bg-tertiary-100-800-token' 
      : type === 'success' ? 'bg-success-100-800-token' 
      : type === 'warning' ? 'bg-warning-100-800-token' 
      : type === 'error' ? 'bg-error-100-800-token' 
      : 'bg-surface-100-800-token';
   
   const textColor:string =
      type === 'info' ? 'text-tertiary-900-50-token'
      : type === 'success' ? 'text-success-900-50-token'
      : type === 'warning' ? 'text-warning-900-50-token'
      : type === 'error' ? 'text-error-900-50-token'
      : 'text-surface-900-50-token';

   export let compact:boolean = false;
</script>


{#if visible}
   <aside class="
         alert variant-ghost {bgColor} {textColor}
         { compact ? 'flex-col' : 'flex-col md:flex-row'} 
         items-center justify-between gap-4"
      transition:fade|local={{duration: 200}}>
      <div class="flex flex-row items-center justify-center gap-4">
         <!-- Icon -->
         <div><Icon icon={iconName} class="w-8 h-8" /></div>
         <!-- Message -->
         <div class="alert-message">
            <h3>{title}</h3>
            <p><slot/></p>
         </div>
      </div>
      <!-- Actions -->
      <div class="alert-actions">
         <slot name="actions" />
      </div>
   </aside>
{/if}