<script lang="ts">
   import boxGen from "../../styles/mist-theme";
   import type { ColorProp, VariantProp, SizeProp, RoundedProp, ShadowProp } from '../../styles/theme';


   export let variant:VariantProp = 'fill'; // fill, outline, ghost, 
   export let color:ColorProp = 'surface';
   export let size:SizeProp = 'lg';
   export let hover:boolean = false;
   export let active:boolean = false;
   export let rounded:RoundedProp = 'tile';
   export let shadow:ShadowProp = 'bevel';
   
   export let block:boolean = false;

   let klass:string = '';
   export { klass as class };

   const boxStyle = boxGen.full({
      variant: variant,
      color: color,
      size: size,
      hover: hover,
      active: active,
      style: {
         rounded: rounded,
         shadow: shadow,
         block: block,
      },
      classes: klass
   });
</script>


<div class="{boxStyle}">
   <slot/>
</div>