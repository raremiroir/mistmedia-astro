<script lang="ts">
   import { Div, Article, Anchor } from '../../Base/Raw'
   import { Heading } from '../../svelte'

   export let article:boolean = false;
   export let href:string = ''
   export let title:string = '';
   export let color:'default'|'alt' = 'alt';

   export let footer:boolean = false;

   export let hover:boolean = false;
   export let direction:'col'|'row' = 'col';

   export let rounded:boolean = false;
   export let tile:boolean = false;
   
   export let block:boolean = false;

   export let flat:boolean = false;
   export let bevel:boolean = false;

   // Rounded classes
   const roundedClass = rounded ? '!rounded-2xl'
                      : tile ? '!rounded-tl-2xl !rounded-bl-md !rounded-br-2xl !rounded-tr-md'
                      : '!rounded-lg'
   // Block classes
   const widthClass = block ? 'w-full' : `w-fit ${ direction === 'row' ? 'max-w-xl' : 'max-w-sm'}`;
   // Shadow classes
   const shadowClass = flat ? 'shadow-none'
                     : bevel ? 'shadow-lg-noblur dark:shadow-black/40'
                     : 'shadow-xl';
   // Color classes
   let colorClass = 'bg-gray-100 dark:bg-gray-700'; 
   // Hover classes
   let hoverClass = '';
   if (hover) {
      hoverClass += 'active:translate-y-1 cursor-pointer';
      if (!bevel) hoverClass += ' hover:shadow-2xl hover:shadow-black/30';
      else {
         hoverClass += ' hover:shadow-xl-noblur';
         if (color === 'alt') {
            hoverClass += ' hover:shadow-primary/40 dark:hover:shadow-primary-700/40';
            colorClass += ' hover:bg-primary-50 dark:hover:bg-primary-900/20';
         }
         else {
            hoverClass += ' hover:shadow-gray-900/40';
            colorClass += ' hover:bg-white dark:hover:bg-gray-700';
         }
      }
   }

   const transition = 'transition-all duration-300 ease-out';  

   // Anchor or Div
   const outerWrapComp = href ? Anchor : Div;
   const outerWrapProps = href ? { href } : {}
   // Article or Div
   const innerWrapComp = article ? Article : Div;
</script>


<svelte:component 
   this={outerWrapComp} {outerWrapProps} {...$$props} 
   class="
      antialiased
      {roundedClass} {widthClass} {shadowClass} {hoverClass} {transition}
      overflow-hidden group relative
">
   <svelte:component 
      this={innerWrapComp} {...$$props}
      class="
         flex z-2 {colorClass} {transition}
         { direction === 'row' ? 'flex-row items-center justify-start pl-6 gap-2 h-full' : 'flex-col'}
   ">
      <!-- Image -->
      <slot name="media"/>
      
      <!-- Content -->
      <div class="flex flex-col gap-2 h-full { direction === 'row' ? 'p-6' : 'p-8' }">
         <!-- Header -->
         <header class="">
            <slot name="title">
               <Heading 
                  type="h3" size="xs" fontfam='font-body'
                  color="{ color === 'alt' ? `text-surface-900 dark:text-surface-50 ${hover ? 'group-hover:text-primary-900 dark:group-hover:text-primary-400' : ''}` 
                         : `text-surface-900 dark:text-surface-50 ${hover ? 'group-hover:text-black dark:group-hover:text-white' : ''}`}">
                  { title }
               </Heading>
            </slot>
         </header>
         
         <!-- Body -->
         <section class="line-clamp-4">
            <slot>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos recusandae, quos 
               accusantium, sed voluptates nobis qui facilis ad sint maxime? Cupiditate tempora nesciunt dignissimos 
               vitae, commodi eum possimus quia.
            </slot>
         </section>
   
         <!-- Footer -->
         {#if footer}
            <footer class="card-footer">
               (footer)
            </footer>
         {/if}
      </div>
   </svelte:component>
</svelte:component>