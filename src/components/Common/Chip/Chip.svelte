<script lang="ts">
   import boxGen from "@styles/mist-theme";
   import type { ColorProp, VariantProp } from "@styles/theme";

   export const variant: VariantProp = "fill";
   export const color: ColorProp = "primary";

   let klass = ''
   export { klass as class }

   const chipStyle = boxGen.full({
      variant: variant,
      color: color,
      size: 'sm',
      hover: true,
      active: false,
      style: {
         rounded: 'circle',
         shadow: 'sm',
         block: false,
      },
      classes: klass
   })
</script>

<span class="{chipStyle} cursor-default font-semibold">
   <slot/>
</span>