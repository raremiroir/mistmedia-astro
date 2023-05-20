<script lang="ts">
   import Icon from '@iconify/svelte';
   import { SlideToggle } from '@skeletonlabs/skeleton';
   import { cForm, classes } from '@/consts/style';

   import type { OnKeyDownEvent } from '@tstype/components/toggle';

   export let name:string = '';
   export let label:string = '';

   export let required:boolean = false;
   export let disabled:boolean = false;

   export let checked:boolean = false;
   $: checked;

   export let trueLabel:string = '';

   // Classes
   export let bg_off = "bg-error";
   export let bg_on = "bg-success";
	export let icon_off = "text-error outline-error";
	export let ìcon_on = "text-success outline-success";
   const toggle = 'group/toggle cursor-pointer';

   // Handlers
   const toggleHandler = () => {
      if (!disabled) checked = !checked;
   }
   const onKeyDown = (e:OnKeyDownEvent) => { if (e.key === 'Enter') {
      e.preventDefault();
      toggleHandler()
   }}

   const toggleSize = '!h-6 !w-12';
   const toggleBorder = 'ring-[1px] ring-surface-500/30 rounded-token'
   const toggleThumbSize = 'h-6 w-6 group-active/toggle:w-8 scale-[0.8]'
   const toggleThumbBg = 'bg-surface-900 dark:bg-surface-50 rounded-full'

   const toggleThumbOn = 'translate-x-full group-active/toggle:translate-x-1/2'

   // State
   $: toggleBg = checked ? bg_on : bg_off;
   $: thumbPosition = checked && toggleThumbOn;
   $: thumbFill = checked ? ìcon_on : icon_off;
   // Reactive
   $: toggleClass = `${toggle} ${toggleBg} ${toggleSize} ${toggleBorder} ${classes.transition.fast} ${$$props.class ?? ''}`;
   $: thumbClass = `${toggleThumbSize} ${classes.flex.center} ${toggleThumbBg} ${thumbPosition} ${classes.transition.fast}`;
   $: iconClass = `w-4 h-auto aspect-square outline-[1px] ${thumbFill} ${classes.transition.fast}`;
</script>


<div class="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1 md:gap-2">
   <!-- Toggle -->
   <div class="col-span-1 flex items-center justify-start">
      <div 
         class="toggle {toggleClass}"
         on:click={toggleHandler} on:click
         on:keydown={onKeyDown} on:keydown
         on:keyup on:keypress
         role="checkbox" tabindex="0"
         aria-label={label} aria-checked={checked ? 'true' : 'false'}
      > 
         <input {required} {disabled} type="checkbox" bind:checked class="hidden" {name} id={name} />
         <!-- Thumb -->
         <div class="thumb {thumbClass}">
            <!-- Icon -->
            {#if checked}
               <Icon icon="material-symbols:check" class={iconClass} />
            {:else}
               <Icon icon="material-symbols:close" class={iconClass} />
            {/if}
         </div>
      </div>
   </div>
   <div class="col-span-3 md:col-span-4 xl:col-span-5 2xl:col-span-6">
      <label for={name} class="mt-0.5">
         {label}
      </label>
   </div>
</div>

<!-- <SlideToggle 
   {name} bind:checked
   {required} {disabled}
   active="bg-success-500"
   {size} {border} {rounded}
   class="flex items-center"
>
   {#if trueLabel && checked}
      {trueLabel}
   {:else}
      {label}
   {/if}
</SlideToggle> -->