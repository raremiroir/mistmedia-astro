<script lang="ts">
	import type { DropZone } from "./form";
	import Dropzone from "./Dropzone.svelte";
   import { cForm, cFormComplete, classes } from "@/consts/class";
   import Button from "@/components/Common/Button/Button.svelte";
   import Icon from "@/components/Media/Icon/Icon.svelte";
   import ValidationError from "../Utils/ValidationError.svelte";


   export let value:any = '';
   export let errors:string = '';
   $: value;
   $: errors;

   export let label:string = '';
   export let name:string = '';
   export let description:string = '';
   export let type:string = 'text';

   export let required:boolean = false;
   export let disabled:boolean = false;
   export let autocomplete:boolean = false;
   export let spellcheck:boolean = false;
   export let noClear:boolean = false;
   export let placeholder:string = '';
   $: disabled;

   export let onChange:any = () => {};

   export let textarea:boolean = false;
   export let rows:number = 6;
   export let noResize:boolean = false;
   
   export let dropzone:boolean = false;
   export let files:FileList | undefined = undefined;
   export let dropzoneProps: DropZone = {
      accept: ['image/*'],
      multiple: false,
      maxFiles: 1,
      maxSize: 5,
      onDrop: (files:FileList) => {
         value = files;
      }
   }
   $: dropzoneProps;


   let klass:string = '';
   export { klass as class };

   // Handle value-type of input
   const handleInput = (e:any) => {
      // switch on type and implement behaviour
      value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
   }

   const inputProps = {
      name, id: name, type,
      required, 'aria-required': required, 
      disabled, 'aria-disabled': disabled,
      placeholder, 'aria-placeholder': placeholder,
      spellcheck, autocomplete: autocomplete ? 'on' : 'off',
      autocorrect: 'off', autocapitalize: 'off',
   }

   // Clear input value
   const clear = () => value = '';
</script>

<div class="w-full h-full flex flex-col gap-0.5 items-start justify-start {klass}">
   <label class="{cFormComplete.wrapClass}">
      
      {#if !textarea && !dropzone}
         <input  
            class="{cFormComplete.inputClass}"
            {...inputProps}
            bind:value
            on:blur on:focus
            on:input={handleInput}
            on:change={onChange} />
      {:else if textarea}
         <textarea 
            class="{cFormComplete.inputClass} {noResize ? 'resize-none' : ''}"
            {...inputProps}
            bind:value
            on:blur on:focus
            on:change={onChange} {rows}
         />
      {:else if dropzone}
         <Dropzone 
            {name} 
            on:blur on:focus
            onChange={onChange}
            bind:files={files}
         />
      {/if}
      {#if value && !noClear}
         <div 
            class="{cFormComplete.clearClass}" 
            on:click={() => clear()}
            on:keydown={(e) => e.key === 'Enter' && clear()}
         >
            <Button square variant="minimal" color="error" size="xs" shadow="none" rounded="circle">
               <Icon icon="material-symbols:close-rounded" width="w-4" color="text-inherit"/>
            </Button>
         </div>
      {/if}
      <span class="{cFormComplete.labelClass} {value ? `${cForm.input.labelActiveBg} ${cForm.input.labelPosValue}` : cForm.input.labelPosDef}">
         {label}:
      </span>
   
   </label>
   {#if !!description}
      <span>{description}</span>
   {/if}
   <!-- Errors -->
   {#if !required}
      <span class="unstyled text-primary-800/80 italic whitespace-nowrap text-clamp-sm pr-1">(Optioneel)</span>
   {:else if errors}
      <ValidationError error={errors} />
   {/if}
   <!-- {#if !dropzone}
      <div class="text-error-500 font-medium italic text-sm h-4">
         {#each errors as error}
            <span class="whitespace-nowrap">{error}</span>
         {:else}
            <span class="whitespace-nowrap">&nbsp;</span>   
         {/each}
      </div>
   {/if} -->
</div>