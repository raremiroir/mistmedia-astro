<script lang="ts">
   import type { ButtonVariant, ButtonColors, ButtonSizes, ButtonGroupType } from "./button";
   import Ripple from "../../actions/Ripple"
   import boxGen from '../../../styles/mist-theme'
   import type { ColorProp, VariantProp, SizeProp, RoundedProp, ShadowProp } from '../../../styles/theme';

   // Main btn props
   export let href: string = '';
   export let ariaLabel: string = '';
   export let title:boolean = false;

   // Main btn style props
   export let group: ButtonGroupType = '';         // '', vertical, horizontal
   // Extra btn style props
   export let disabled: boolean = false;
   export let active: boolean = false;
   export let loading: boolean = false;

   export let ripple: boolean = false;
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
      color: active? 'primary' : color,
      size: size,
      hover: true,
      active: true,
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
   let btnClass = `btn ${groupClass} ${transition} overflow-hidden 
                  font-semibold tracking-wide active:!scale-[97%] ${btnStyle}`;

   // Define extra classes
   btnClass += disabled ? ' disabled' : '';
   btnClass += square ? ' aspect-square' : '';
</script>


{#if href}
   <a
      href="{href}"
      use:Ripple={ripple}
      class={btnClass}
      aria-label={ariaLabel} title={title ? ariaLabel : ''}
      {...$$props}
      >
      <slot/>
   </a>
{:else}
   <button
      on:click {disabled} 
      use:Ripple={ripple}
      class={btnClass}
      aria-label={ariaLabel} title={title ? ariaLabel : ''}
      {...$$props}
      >
      <slot/>
   </button>
{/if}