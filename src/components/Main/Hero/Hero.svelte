<script lang="ts">
   // import viewport from "$lib/actions/useViewportAction";
   // import { heroInView } from "../../../stores";

   import { widths } from '../../../consts';
   import { Heading } from '../../svelte'
   import Icon from 'astro-icon'
   import type { TitleSizes } from '../../Common/Heading/heading';
	// import Image from "../Base/Media/Image.svelte";


   // Extra classes on hero
   export let klass = '';

   // stretch the hero to 90vh? (otherwise h-fit)
   export let stretchHero = false;
   
   // Include media in hero? (img/svg/none)
   export let media = false;

   // Remove card from hero?
   export let noCard = false;
   
   // What's the bg img?
   export let bgImg = ''
   // What's the bg img srcset?
   export let bgImgSet = ''
   // What's the bg img srcset sizes?
   export let bgImgSizes:any = undefined;
   // What's the bg img alt?
   export let bgImgAlt = ''
   
   // Custom title instead of normal title?
   export let customTitle = false;
   // Size of title
   export let titleSize:TitleSizes = 'md'
   // Width of title
   export let titleWidth = 'w-full'

   // Custom width of card? (otherwise w-fit)
   export let cardWidth = '';
   // Custom height of card? (otherwise h-fit)
   export let customHeight = '';

   $: cardWidth = cardWidth ? cardWidth : 'w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-3/5';


   const transition = 'transition-all duration-300 ease-out';

</script>

<div
   class="
      m-0 w-full px-0 overflow-hidden relative
      bg-surface-200/50 dark:bg-surface-700/50
      { transition } pt-36 pb-16 flex justify-center items-center {klass}">
   <!-- Background Image -->
   <div 
      class="
         absolute -z-1 top-0 
         h-full flex items-center justify-center
         w-full m-0 p-0 blur-sm
         bg-surface-200 dark:bg-surface-700">
        
      <slot name="bg-img"></slot>
      <!-- <Image 
         loadPriority
         srcset={bgImgSet}
         sizes={bgImgSizes}
         src={bgImg}
         alt={bgImgAlt}
         klass=" w-full h-auto opacity-70 mix-blend-overlay
            {stretchHero ? 'scale-[600%] sm:scale-[450%] md:scale-150 lg:scale-100' 
            : 'scale-[200%] md:scale-100'}"
      /> -->

   </div>
   <!-- Middle Card -->
   <div class="
         flex flex-col sm:flex-row items-center justify-start
         gap-4 sm:gap-0 md:gap-2 lg:gap-8 
         mx-auto px-6 pt-6 rounded-2xl overflow-hidden z-2
         bg-surface-100/70 dark:bg-slate-600/60
         backdrop-brightness-50 backdrop-blur-sm dark:backdrop-blur-md
         { customHeight ? customHeight : 'h-fit'} 
         { cardWidth }">
      <!-- Media -->
      {#if media}
         <slot name="media"></slot>
      {/if}

      <div class="flex flex-col gap-2 w-full {titleWidth} pb-6"> 
         {#if customTitle}
            <slot name="title">Custom Title Here</slot>
         {:else}
            <Heading type="h1" klass="w-full" size={titleSize}>
               <slot name="title">Hello, Astronaut!</slot>
            </Heading>
         {/if}
         <slot name="subtitle">
            <Heading type="subheader" size="lg">
               <slot name="subtitle">Subtitle Here</slot>
            </Heading>
         </slot>
         <p>
            <slot/>
         </p>
      </div>

   </div>
</div>