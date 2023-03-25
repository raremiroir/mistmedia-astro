<script lang="ts">
   // import viewport from "$lib/actions/useViewportAction";
   // import { heroInView } from "../../../stores";

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

</script>

<header
   class="
      m-0 w-full px-0
      bg-blend-overlay dark:bg-blend-multiply
      bg-surface-200/50 dark:bg-surface-700/50
      transition-all duration-300 ease-out overflow-clip
      h-fit flex justify-center items-center {klass}">
   <div 
      class="
         absolute z-0 top-0 bottom-0 left-0 right-0 
         w-full m-0 p-0
         overflow-hidden 
         { noCard ? 'blur-sm' : 'blur-md md:blur-[8px] lg:blur-sm'}
         bg-primary-d2 dark:bg-secondary-d2">
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
   <div class="flex flex-col sm:flex-row gap-4 sm:gap-0 md:gap-2 lg:gap-8 
               items-center justify-start z-2 
               mx-auto overflow-hidden
               { customHeight ? customHeight : 'h-fit'} 
               py-6 px-0 sm:p-0
               { cardWidth }">
      <!-- Media -->
      {#if media}
         <slot name="media"></slot>
      {/if}

      <div class="flex flex-col gap-2 w-full {titleWidth} {noCard ? 'contrast-150' : 'contrast-75'}"> 
         {#if customTitle}
            <slot name="title">Custom Title Here</slot>
         {:else}
            <Heading type="h1" color="text-black dark:text-white" klass="w-full" size={titleSize}>
               <slot name="title">Title</slot>
            </Heading>
         {/if}
         <slot name="subtitle">Subtitle</slot>
      </div>

   </div>
</header>