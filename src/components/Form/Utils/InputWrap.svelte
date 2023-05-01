<script lang="ts">
   export let label:string = '';
   // export let name:string = '';
   
   export let value:any = '';
   $: value;
   
   // export let placeholder:string = '';
   // export let required:boolean = false;
   // export let disabled:boolean = false;
   
   export let noClear:boolean = false;
   // export let autocomplete:boolean = false;
   // export let autocapitalize:boolean = false;
   // export let spellcheck:boolean = false;

   import Button from '@/components/Common/Button/Button.svelte';
   import Icon from '@iconify/svelte'

   import { cForm, cFormComplete } from '@/consts/style';

   // Clear input value
   const clear = () => value = '';
</script>

<label 
   class="{cFormComplete.wrapClass}">
   <slot/>
   {#if value && !noClear}
      <div 
         class="{cFormComplete.clearClass}" 
         on:click={() => clear()}
         on:keydown={(e) => e.key === 'Enter' && clear()}
      >
         <Button square variant="minimal" color="error" size="xs" shadow="none" rounded="circle">
            <Icon icon="material-symbols:close-rounded" class="h-4 w-auto"></Icon>
         </Button>
      </div>
   {/if}
   <span class="{cFormComplete.labelClass} {value ? `${cForm.input.labelActiveBg} ${cForm.input.labelPosValue}` : cForm.input.labelPosDef}">
      {label}
   </span>
</label>