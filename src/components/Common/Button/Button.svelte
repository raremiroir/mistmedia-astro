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
   export let ripple: boolean = false;

   export let flat: boolean = false;
   export let bevel: boolean = false;
   
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
   $: btnClass += ` transition-all duration-200 ease-in-out 
                  overflow-hidden font-semibold tracking-wide 
                  active:translate-y-0.5 active:!scale-[99%]`;

   // Define extra classes
   $: btnClass += disabled ? ' disabled' : '';
   $: btnClass += block ? ' w-full' : ' w-fit';
   $: btnClass += rounded ? ' rounded-xl' 
             : circle ? ' rounded-full' 
             : tile ? ' rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm'
             : ' rounded-md';
   $: btnClass += circle ? ' !rounded-full' : '';
   $: btnClass += square ? ' aspect-square' : '';

   $: if (flat) {
      btnClass += ' shadow-none';
   } else if (bevel) {
      switch (size) {
         case 'sm': btnClass += ' shadow-sm-noblur'; break;
         case 'lg': btnClass += ' shadow-lg-noblur'; break;
         case 'xl': btnClass += ' shadow-xl-noblur'; break;
         default: btnClass += ' shadow-md-noblur'; break;
      }
      switch(color) {
         case 'primary': btnClass += ' shadow-primary/40 hover:shadow-primary-600/40 dark:hover:shadow-primary-400/40'; break;
         case 'secondary': btnClass += ' shadow-secondary/40 hover:shadow-secondary-600/40 dark:hover:shadow-secondary-400/40'; break;
         case 'tertiary': btnClass += ' shadow-tertiary/40 hover:shadow-tertiary-600/40 dark:hover:shadow-tertiary-400/40'; break;
         case 'success': btnClass += ' shadow-success/40 hover:shadow-success-600/40 dark:hover:shadow-success-400/40'; break;
         case 'warning': btnClass += ' shadow-warning/40 hover:shadow-warning-600/40 dark:hover:shadow-warning-400/40'; break;
         case 'error': btnClass += ' shadow-error/40 hover:shadow-error-600/40 dark:hover:shadow-error-400/40'; break;
         case 'surface': btnClass += ' shadow-surface/40 hover:shadow-surface-600/40 dark:hover:shadow-surface-400/40'; break;
         default: btnClass += ' shadow-gray-500/40 hover:shadow-gray-500/40'; break;
      }
   }
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