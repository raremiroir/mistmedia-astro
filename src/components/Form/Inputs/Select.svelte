<script lang="ts">
   import Button from "@/components/Common/Button/Button.svelte";
import Popup from "@/components/Utils/Popup/Popup.svelte";
   import TransSlide from "@/components/Utils/Transition/TransSlide.svelte";
   import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
   import { slide } from "svelte/transition";

   export let name: string;
   export let label: string = 'Select...';

   export let multiple: boolean = false;

   export let options: {
      label: string;
      value: string;
   }[] = [];

   export let value: string = '';
   export let values: string[] = [];
   $: value;
   $: values;

</script>

<Popup
   event="click"
   placement="bottom"
   id={name}
>
   <Button color="primary" variant="ghost" size="lg">
      {#if value} 
         {value}
      {:else if values.length > 0} 
         <div class="flex flex-col items-start">
            <span class="underline">{label}</span>
            <span class="text-start text-sm font-light">{@html values.join(', <br/>')}</span>
         </div>
      {:else} 
         {label}
      {/if}
   </Button>

   <div slot="popup" class="flex flex-col space-y-2">
      <ListBox {multiple}>
         {#if multiple}
            {#each options as option}
               <ListBoxItem bind:group={values} name={name} value={option.value}>{option.label}</ListBoxItem>
            {/each}
            {#if values.length > 0}
               <div transition:slide={{duration: 200, axis: 'y'}}>
                  <Button 
                     block size="sm" color="error" variant="soft" shadow="none"
                     on:click={() => {values = []}}
                  >
                     Clear all
                  </Button>
               </div>
            {/if}
         {:else}
            {#each options as option}
               <ListBoxItem bind:group={value} name={name} value={option.value}>{option.label}</ListBoxItem>
            {/each}
         {/if}
      </ListBox>
   </div>

</Popup>