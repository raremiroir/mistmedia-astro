<script lang="ts">
   import Icon from '@iconify/svelte';
   import { SlideToggle } from '@skeletonlabs/skeleton';
   import { cForm, cToggle, classes } from '@/consts/style';

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

   // State
   $: toggleBg = checked ? bg_on : bg_off;
   $: thumbPosition = checked ? cToggle.thumb.pos.on : cToggle.thumb.pos.off;
   $: thumbFill = checked ? ìcon_on : icon_off;
   // Reactive
   $: toggleClass = `${toggle} ${toggleBg} ${cToggle.size.md} ${cToggle.border} ${classes.transition} ${$$props.class ?? ''}`;
   $: thumbClass = `${cToggle.thumb.size.md} ${classes.flex.center} ${cToggle.thumb.bg} ${thumbPosition} ${classes.transition}`;
   $: iconClass = `${cToggle.thumb.icon.size.md} ${cToggle.thumb.icon.base} ${thumbFill} ${classes.transition}`;
</script>


<div class="flex items-center gap-2">
   <!-- Toggle -->
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
   
   <label for={name} class="mt-0.5">
      {label}
   </label>
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