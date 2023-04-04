<script lang="ts">

   import boxGen from "@/styles/mist-theme";
   import Icon from "@iconify/svelte";
   import { fade } from "svelte/transition";

   export let visible:boolean = false;

   export let title:string;
   export let icon:string = 'material-symbols:warning-rounded'


</script>


{#if visible}
   <aside 
      class="alert variant-ghost"
      transition:fade|local={{duration: 200}}>
      <!-- Icon -->
      <div><Icon {icon} class="w-8 h-8" /></div>
      <!-- Message -->
      <div class="alert-message">
         <h3>{title}</h3>
         <p><slot/></p>
      </div>
      <!-- Actions -->
      <div class="alert-actions">
         <slot name="actions" />
      </div>
   </aside>
{/if}