<script lang="ts">
   export let label:string = '';
   export let name:string = '';
   export let placeholder:string = '';

   import Button from '@comp/Common/Button/Button.svelte';
   import Icon from '@iconify/svelte'

   import { cForm } from '@const/class';

   export let rows:number = 6;
   export let noResize:boolean = false;
 
   // Value / type
   export let value = '';
   $: value;

   // Clear input value
   const clear = () => value = '';

   // Classes
   $: wrapClass  = `${cForm.input.wrapBase} ${cForm.input.transition} ${cForm.input.flex}`;
   $: inputClass = `${cForm.input.inputBase} ${cForm.input.transition} ${cForm.input.bg} ${cForm.input.border} ${cForm.input.rounding} 
                    ${cForm.input.placeholder} ${cForm.input.text}`
   $: clearClass = `${cForm.input.clearBase} ${cForm.input.clearAbsolute} ${cForm.input.flex}`
   $: labelClass = `${cForm.input.transition} ${cForm.input.labelBase} ${cForm.input.labelAbsolute} ${cForm.input.labelPadding}
                    ${value ? `${cForm.input.labelActiveBg} ${cForm.input.labelPosValue}` : cForm.input.labelPosDef}
                    ${cForm.input.labelPosFocus} ${cForm.input.labelBg}`
</script>

<label 
   class="{wrapClass}">
   <textarea 
      {rows} {name} {placeholder}
      class="{inputClass} min-h-[2rem] { noResize ? 'resize-none' : '' }"
      bind:value/>
   {#if value}
      <div 
         class="{clearClass}" 
         on:click={() => clear()}
         on:keydown={(e) => e.key === 'Enter' && clear()}
      >
         <Button square variant="minimal" color="error" size="xs" shadow="none" rounded="circle">
            <Icon icon="material-symbols:close-rounded" class="h-4 w-auto"></Icon>
         </Button>
      </div>
   {/if}
   <span class="{labelClass}">
      {label}
   </span>
</label>