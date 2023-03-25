<script lang="ts">
   import type { ButtonVariant, ButtonColors, ButtonSizes, ButtonGroupType } from "./button";
   import Ripple from "../../actions/Ripple"

   // Main btn props
   export let href: string = '';
   export let ariaLabel: string = '';
   export let title:boolean = false;

   // Main btn style props
   export let variant: ButtonVariant = 'initial';  // [initial], transparent, minimal, filled, ghost, soft, ringed
   export let color: ButtonColors = '';            // [default], surface, primary, secondary, tertiary, success, warning, error
   export let size: ButtonSizes = '';              // sm, [md], lg, xl
   export let group: ButtonGroupType = '';         // '', vertical, horizontal
   // Extra btn style props
   export let disabled: boolean = false;
   export let active: boolean = false;
   export let loading: boolean = false;

   export let block: boolean = false;
   export let flat: boolean = false;
   export let ripple: boolean = false;
   
   export let rounded: boolean = false;
   export let circle: boolean = false;
   export let square: boolean = false;
   export let tile: boolean = false;
   
   export let icon: string = '';
   export let iconOnly: boolean = false;
   export let iconRight: boolean = false;

   // Extra classes
   export let klass:string = '';

   // Define color/variant combination class
   $: colorVariantClass = 
      variant === 'initial' ? 'bg-initial' 
      : variant === 'transparent' ? '!bg-transparent'
      : variant === 'minimal' ? 
            color === 'primary' ? `!bg-primary/5 hover:!bg-primary/40`
          : color === 'secondary' ? `!bg-secondary/5 hover:!bg-secondary/40`
          : color === 'tertiary' ? `!bg-tertiary/5 hover:!bg-tertiary/40`
          : color === 'success' ? `!bg-success/5 hover:!bg-success/40`
          : color === 'warning' ? `!bg-warning/5 hover:!bg-warning/40`
          : color === 'error' ? `!bg-error/5 hover:!bg-error/40`
          : color === 'surface' ? `!bg-surface/5 hover:!bg-surface/40`
          : `!bg-gray-500/5 hover:!bg-gray-500/40`
      : active ? color ? `variant-filled-${color}` : `variant-filled`
      : color ? `variant-${variant}-${color}` : `variant-${variant}`;

   $: colorVariantClass += variant === 'soft' && !active ? 
        color === 'primary' ? ` hover:!bg-primary/40` 
      : color === 'secondary' ? ` hover:!bg-secondary/40`  
      : color === 'tertiary' ? ` hover:!bg-tertiary/40`
      : color === 'success' ? ` hover:!bg-success/40`
      : color === 'warning' ? ` hover:!bg-warning/40`
      : color === 'error' ? ` hover:!bg-error/40`
      : color === 'surface' ? ` hover:!bg-error/40`

      : '' : '';

   // Define size class
   $: sizeClass = size ? `btn-${size} btn-icon-${size}` : '';
   // Define group class
   $: groupClass = group ? group === 'horizontal' ? 'btn-group' : 'btn-group-vertical' : '';
   // Parse all classes into one string
   $: btnClass = `btn ${colorVariantClass} ${sizeClass} ${groupClass}`;

   // Add standard classes
   $: btnClass += ` transition-all duration-200 ease-in-out overflow-hidden font-semibold tracking-wide`;
   // Define extra classes
   $: btnClass += disabled ? ' disabled' : '';
   $: btnClass += block ? ' w-full' : ' w-fit';
   $: btnClass += rounded ? ' rounded-xl' 
             : circle ? ' rounded-full' 
             : tile ? ' rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm'
             : ' rounded-md';
   $: btnClass += circle ? ' !rounded-full' : '';
   $: btnClass += square ? ' aspect-square' : '';
   $: btnClass += flat ? ' shadow-none' : ' shadow-md hover:shadow-lg focus:shadow-lg active:shadow-sm ';
</script>


{#if href}
   <a
      href="{href}"
      use:Ripple={ripple}
      class="{btnClass} {klass}"
      aria-label={ariaLabel} title={title ? ariaLabel : ''}
      {...$$props}
      >
      <slot/>
   </a>
{:else}
   <button
      on:click {disabled} 
      use:Ripple={ripple}
      class="{btnClass} {klass}"
      aria-label={ariaLabel} title={title ? ariaLabel : ''}
      {...$$props}
      >
      <slot/>
   </button>
{/if}