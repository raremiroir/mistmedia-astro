<script lang="ts">
   import boxGen from '../../../styles/mist-theme'
   import type { ColorProp, VariantProp, SizeProp, RoundedProp, ShadowProp } from '../../../styles/theme';
   import Chip from '../Chip/Chip.svelte';
   import Ripple from '@/components/actions/Ripple';
   import Svg from '@/components/Media/Svg/Svg.svelte';
   import Icon from '@/components/Media/Icon/Icon.svelte';
   import Title from '@/components/Text/Title/Title.svelte';

   export let article:boolean = false;
   
   export let href:string = ''
   export let target:string = '';
   export let rel:string = '';

   export let title:string = '';
   export let capitalize:boolean = false;
   export let label:string = '';
   export let labelledBy:string = '';

   export let tags:string[] = [];
   export let noBody:boolean = false;
   export let media:'none'|'animIcon'|'icon'|'custom' = 'none';
   export let footer:boolean = false;

   export let icon:string = '';
   export let iconSize:number = 40;
   export let iconClass:string = 'w-8 h-8';
   

   export let direction:'col'|'row' = 'col';
   export let centerRow:boolean = false;
   export let noClamp:boolean = false;

   export let variant:VariantProp = 'fill';
   export let color:ColorProp = 'surface_alt';
   export let size:SizeProp = 'none';
   export let hover:boolean = false;
   export let active:boolean = false;
   export let rounded:RoundedProp = 'tile';
   export let shadow:ShadowProp = 'bevel';

   export let padding:string = 'p-6';
   export let gap:string = 'gap-4'; 
   
   export let block:boolean = false;
   export let fillHeight:boolean = false;

   export let id:string = '';

   let klass:string = '';
   export { klass as class };
   export let innerClass: string = '';
   export let mediaClass: string = '';
   export let contentClass: string = '';
   export let innerContentClass: string = '';
   export let titleClass: string = '';
   export let bodyClass: string = '';

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
      classes: ''
   });

   const transition = 'transition-all duration-300 ease-in-out';

   // Anchor or Div
   $: outerWrapComp = href ? 'a' : 'div';
   // Article or Div
   $: innerWrapComp = article ? 'article' : 'div';

   const outerWrapProps = href ? {
      href: href,
      target: href ? target : '',
      rel: href ? rel : '',
   } : {};
</script>


<svelte:element 
   this={outerWrapComp} {...$$props} {...outerWrapProps}
   tabindex="0" aria-label={label} aria-labelledby={labelledBy}
   title="" {id}
   class="
      antialiased {transition} 
      { cardStyle } backdrop-blur-sm
      overflow-hidden group relative
      { fillHeight ? 'h-full' : '' } 
      { klass }
">
   <svelte:element this={innerWrapComp} {...$$props} title="" class="h-full">
      <div 
         use:Ripple={active}
         class="
            flex z-2 {transition} h-full {innerClass}
            { direction === 'row' ? `flex-row ${ centerRow ? '!items-center' : '!items-start !justify-start'}` : `flex-col`}
      ">
         <!-- Image -->
         {#if media !== 'none'}
            <div class="{mediaClass}">
               {#if media === 'animIcon'}
                  <Svg animIcon={icon} size={iconSize} />
               {:else if media === 'icon'}
                  <Icon {icon} class={iconClass} />
               <slot name="media" class="h-full"/>
               {:else if media === 'custom'}
                  <slot name="media" class="h-full"/>
               {/if}
            </div>
         {/if}
         
         <!-- Content -->
         <div class="
                  h-full { direction === 'row' ? 'w-full' : '' }
                  flex flex-col justify-between 
                  {gap} {padding} {contentClass}"
         >
            <div class="flex flex-col min-h-full {gap} {innerContentClass}">
               <!-- Header -->
               <header class="{titleClass}">
                  {#if tags.length > 0}
                     <div class="flex flex-row gap-2 mb-4">
                        {#each tags as tag}
                           <Chip>{tag}</Chip>
                        {/each}
                     </div>
                  {/if}
                  <slot name="title">
                     <Title 
                        h3 size="xs" class="{capitalize ? 'capitalize' : '' }"
                        color="{ boxGen.color(color, variant, false, false) } {transition} !bg-transparent !shadow-none">
                        { title }
                     </Title>
                  </slot>
               </header>
               
               {#if !noBody}
                  <!-- Body -->
                  <section class="
                           { article ? noClamp ? '' : 'line-clamp-4' : ''} {transition}
                           text-surface-900 dark:text-surface-50
                           group-hover:text-black dark:group-hover:text-white
                           font-medium dark:font-normal {bodyClass}">
                     <slot/>
                  </section>
               {/if}
            </div>
      
            <!-- Footer -->
            {#if footer}
               <footer class="card-footer w-full p-0 flex items-center justify-end">
                  <slot name="footer"/>
               </footer>
            {/if}
         </div>
      </div>
   </svelte:element>
</svelte:element>