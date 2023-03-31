<script lang="ts">
   import { Splide } from '@splidejs/svelte-splide';
   import SlideBase from './SlideBase.svelte';
   
   import type { 
      SlideAutoplay, SlideBreakpoints, SlideDirection, SlideDrag, 
      SlideFocus, SlideGap, 
      SlideHeight, 
      SliderProps, SlideType, SlideWidth 
   } from 'component-slider';
   
   export let title:string = '';
   export let label:string;

   export let pagination:boolean = false;
   export let autoplay:SlideAutoplay = false;
   export let rewind:boolean = false;
   export let type:SlideType = 'loop';
   export let focus:SlideFocus = 'center';
   export let drag:SlideDrag = false;
   export let snap:boolean = false;
   export let gap:SlideGap = '1rem';
   export let padding:string = '5rem';

   export let speed:number = 300;

   export let width: SlideWidth = '100%';
   export let height: SlideHeight = '16rem';
   export let breakpoints:SlideBreakpoints = {};


   // Others
   export let direction:SlideDirection = 'ltr';

   const sliderOptions: SliderProps = {
      label: label,
      pagination: pagination,
      cover: true,
      rewind: type === 'loop' ? false : rewind,
      rewindByDrag: type === 'loop' ? false : rewind,
      type: type, focus: focus,
      drag: drag, snap: snap,
      gap: gap,
      padding: {
         right: padding,
         left: padding,
      },
      autoplay: autoplay,
      speed: speed,
      width: width,
      height: height,
      breakpoints: {
         1536: breakpoints[1536]??{ height: '16rem' },
			1280: breakpoints[1280]?? { height: '12rem' },
			1024: breakpoints[1024]?? { height: '10rem' },
			768: breakpoints[768]?? { height: '9rem' },
			640: breakpoints[640]?? { height: '9rem' },
			520: breakpoints[520]?? {
				height: '8rem',
				perPage: 1,
				perMove: 1
			}
      },
      direction: direction,
      omitEnd: type === 'loop' ? false : true,
      updateOnMove: true,
   }


   const slideClasses = `
      w-full h-full max-h-120
      object-cover relative 
      cursor-grab active:cursor-grabbing 
      py-2 rounded-2xl
      bg-surface-400 overflow-hidden
   `;
</script>



<Splide  
   class="{slideClasses}"
   options={{sliderOptions}} 
   aria-label="{label}"
   classes={{
      pagination: 'splide__pagination slide-pagination',
      page: 'splide__pagination__page slide-page bg-surface-400'
   }}
>
   <slot>
      <SlideBase>
         <img src="placeholder-about.jpg" alt="Image 1"/>
      </SlideBase>
      <SlideBase>
         <img src="placeholder-hero.jpg" alt="Image 2"/>
      </SlideBase>
   </slot>
</Splide>