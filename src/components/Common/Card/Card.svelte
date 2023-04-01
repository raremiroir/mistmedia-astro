<script lang="ts">
   import { Div, Article, Anchor } from '../../Base/Raw'
   import Heading from '../../Common/Heading/Heading.svelte'
   import boxGen from '../../../styles/mist-theme'
   import type { ColorProp, VariantProp, SizeProp, RoundedProp, ShadowProp } from '../../../styles/theme';

   export let article:boolean = false;
   export let href:string = ''
   export let title:string = '';

   export let footer:boolean = false;

   export let direction:'col'|'row' = 'col';

   export let variant:VariantProp = 'fill';
   export let color:ColorProp = 'surface_alt';
   export let size:SizeProp = 'none';
   export let hover:boolean = false;
   export let active:boolean = false;
   export let rounded:RoundedProp = 'tile';
   export let shadow:ShadowProp = 'bevel';
   
   export let block:boolean = false;
   export let fillHeight:boolean = false;

   let klass:string = '';
   export { klass as class };

   const cardStyle = boxGen.full({
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

   const transition = 'transition duration-300 ease-in-out';

   // Anchor or Div
   $: outerWrapComp = href ? Anchor : Div;
   $: outerWrapProps = href ? { href } : {}
   // Article or Div
   $: innerWrapComp = article ? Article : Div;
</script>


<svelte:component 
   this={outerWrapComp} {outerWrapProps} {...$$props} 
   tabindex="0"
   title=""
   class="
      antialiased
      { cardStyle } backdrop-blur-sm
      overflow-hidden group relative
      { fillHeight ? 'h-full' : '' }
">
   <svelte:component 
      this={innerWrapComp} {...$$props}
      title=""
      class="
         flex z-2 {transition}
         h-full
         { direction === 'row' ? 'flex-row items-center justify-start pl-6 gap-2' : 'flex-col'}
   ">
      <!-- Image -->
      <slot name="media"/>
      
      <!-- Content -->
      <div class="flex flex-col gap-4 justify-between h-full { direction === 'row' ? 'p-6' : 'p-8' }">
         <div class="flex flex-col gap-4">
            <!-- Header -->
            <header class="">
               <slot name="title">
                  <Heading 
                     type="h3" size="xs" fontfam='font-body'
                     color="{ boxGen.color(color, variant, hover, active) } !bg-transparent !shadow-none">
                     { title }
                  </Heading>
               </slot>
            </header>
            
            <!-- Body -->
            <section class="{ article ? 'line-clamp-4' : ''}">
               <slot>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos recusandae, quos 
                  accusantium, sed voluptates nobis qui facilis ad sint maxime? Cupiditate tempora nesciunt dignissimos 
                  vitae, commodi eum possimus quia.
               </slot>
            </section>
         </div>
   
         <!-- Footer -->
         {#if footer}
            <footer class="card-footer w-full p-0 mt-8">
               <slot name="footer"/>
            </footer>
         {/if}
      </div>
   </svelte:component>
</svelte:component>