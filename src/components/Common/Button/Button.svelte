<!-- BUTTON -->

<script lang="ts">
   import type { ButtonVariant, ButtonColors, ButtonSizes, ButtonGroupType } from "./button";
   import Ripple from "../../actions/Ripple"
   import boxGen from '../../../styles/mist-theme'
   import type { ColorProp, VariantProp, SizeProp, RoundedProp, ShadowProp } from '../../../styles/theme';

   // Main btn props
   export let id: string = '';
   export let href: string = '';
   export let rel: string = '';
   export let target: string = '';
   export let ariaLabel: string = '';

   // Main btn style props
   export let group: ButtonGroupType = '';         // '', vertical, horizontal
   // Extra btn style props
   export let disabled: boolean = false;
   export let active: boolean = false;
   export let loading: boolean = false;

   export let capitalize: boolean = false;
   export let uppercase: boolean = false;

   export let ripple: boolean = true;
   export let square: boolean = false;
   
   export let icon: string = '';
   export let iconOnly: boolean = false;
   export let iconRight: boolean = false;

   export let variant:VariantProp = 'fill';
   export let color:ColorProp = 'surface_alt';
   export let size:SizeProp = 'md';
   export let rounded:RoundedProp = 'tile';
   export let shadow:ShadowProp = 'bevel';
   export let block:boolean = false;

   // Extra classes
   export let klass:string = '';

   const btnStyle = boxGen.full({
      variant: active? 'ghost' : variant,
      color: color === 'custom' ? color : active ? 'primary' : color,
      size: size,
      hover: true,
      active: active,
      style: {
         rounded: rounded,
         shadow: shadow,
         block: block,
      },
      classes: klass
   });

   const transition = 'transition-all duration-200 ease-in-out';
   // Define group class
   const groupClass = group ? group === 'horizontal' ? 'btn-group' : 'btn-group-vertical' : '';
   
   // Parse classes to btnClass
   let btnClass = `unstyled btn group ${groupClass} ${transition} overflow-hidden ${capitalize ? 'capitalize' : uppercase ? 'uppercase' : ''} 
                  font-semibold tracking-wide active:!scale-[97%] ${btnStyle}`;

   // Define extra classes
   btnClass += disabled ? ' disabled' : '';
   btnClass += square ? ' aspect-square' : '';
</script>


{#if href}
   <a
      {id} type="button"
      href="{href}"
      rel={rel} target={target}
      use:Ripple={ripple}
      class={btnClass}
      aria-label={ariaLabel}
      {...$$props}
      >
      <slot/>
   </a>
{:else}
   <button
      {id}
      on:click {disabled} 
      use:Ripple={ripple}
      class={btnClass}
      aria-label={ariaLabel}
      {...$$props}
      >
      <slot/>
   </button>
{/if}