<script lang="ts">
	import Dropzone from "./Dropzone.svelte";
   import { classes } from "@/consts/style";
   import Button from "@/components/Common/Button/Button.svelte";
   import Icon from "@/components/Media/Icon/Icon.svelte";
   import ValidationError from "../Utils/ValidationError.svelte";
   import type { DropZone } from "@/types/components/form";
   import { currentForm } from "@/stores";


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

   let focused:boolean = false;
   $: focused;

   const inputClass = `
      input peer ${classes.transition.fast}
      bg-surface-500/30 dark:bg-surface-300/30
      checked:bg-surface-300 checked:dark:bg-surface-700 
      aria-checked:bg-surface-300 aria-checked:dark:bg-surface-700
      border-2 border-transparent rounded-lg
      placeholder:!text-transparent 
      focus:placeholder:text-surface-600 dark:focus:placeholder:text-surface-400 placeholder:italic
      text-bold !text-surface-900 dark:!text-surface-50 
      autofill:!text-primary-900 dark:autofill:!text-primary-100`

   // Clear input value
   const clear = () => value = '';
</script>

<div class="
      w-full h-full 
      flex flex-col gap-0.5 items-start justify-start 
      mt-2 {classes.transition.fast}
      {klass}">
   <label class="label relative group w-full cursor-text flex items-start {classes.transition.fast}">
      
      {#if !textarea && !dropzone}
         <input  
            class="unstyled {inputClass}"
            {...inputProps}
            bind:value
            on:blur on:focus={() => focused = true}
            on:input={handleInput}
            on:change={onChange} />
      {:else if textarea}
         <textarea 
            class="{inputClass} {noResize ? 'resize-none' : ''}"
            {...inputProps} 
            bind:value
            on:blur on:focus={() => focused = true}
            on:change={onChange} {rows}
         />
      {:else if dropzone}
         <Dropzone 
            {name} 
            on:blur on:focus={() => focused = true}
            onChange={onChange}
            bind:files={files}
         />
      {/if}
      {#if value && !noClear}
         <div 
            class="
               h-fit aspect-square bg-transparent justify-center cursor-pointer mt-1 mr-2
               absolute z-1 right-0 flex items-start {classes.transition.fast}" 
            on:click={() => clear()}
            on:keydown={() => {}}
         >
            <Button square variant="minimal" color="error" size="xs" shadow="none" rounded="circle">
               <Icon icon="material-symbols:close-rounded" width="w-4" color="text-inherit"/>
            </Button>
         </div>
      {/if}
      <span 
         class=" 
            {$currentForm[name] || value
               ? `bg-transparent -top-[16px] scale-95` 
               : 'top-[10px]'}
            {classes.transition.fast} leading-none absolute z-2 left-1
            px-1 py-0 peer-focus:-top-[16px] peer-focus:scale-95
            bg-transparent rounded-lg
            peer-focus:bg-transparent">
         {label}
      </span>
   
   </label>
   {#if !!description}
      <span>{description}</span>
   {/if}
   <!-- Errors -->
   {#if !required}
      <span class="unstyled text-primary-800/80 dark:text-primary-300/80 italic whitespace-nowrap text-clamp-sm pr-1">(Optioneel)</span>
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