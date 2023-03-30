declare module 'component-slider' {
   import type { SvelteComponentTyped } from 'svelte';

   type SlideType = 'slide' | 'loop' | 'fade';
   type SlideFocus = number | 'center';
   type SlideAutoplay = boolean | 'pause';
   type SlideDrag = boolean | 'free';
   type SlideGap = string | number;
   type SlideHeight = string | number;
   type SlideWidth = string | number;
   type SlideDirection = 'ltr' | 'rtl' | 'ttb';
   // Others
   type SlideTrimSpace = boolean | 'move';

   interface SlidePadding {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
   }

   interface SlideStyle {
      perPage?: number;
      perMove?: number;
      gap?: SlideGap;
      padding?: SlidePadding;
      height?: SlideHeight;
      width?: SlideWidth;
   }

   type SlideBreakpoints = {
      1536?: SlideStyle;
      1280?: SlideStyle;
      1024?: SlideStyle;
      768?: SlideStyle;
      640?: SlideStyle;
      520?: SlideStyle;
   }

   interface SliderProps {
      pagination?: boolean;      // toggle pagination (default: true) 
      cover?: boolean;           // toggle cover mode (default: true)
      rewind?: boolean;          // toggle rewind mode (default: true (if type is not loop))
      rewindByDrag?: boolean;    // toggle rewind on drag (default: true (if type is not loop))
      type?: SlideType;          // slider type (default: 'loop')
      focus: SlideFocus;         // focus on the specified index (default: center)
      drag?: SlideDrag;          // toggle drag mode (default: false)
      snap?: boolean;            // toggle snap mode (default: false)
      autoplay?: SlideAutoplay;  // toggle autoplay mode (default: false)
      interval?: number;         // autoplay interval (default: 3000)
      // Others
      direction?: SlideDirection;   // slider direction (default: 'ltr')
      slideFocus?: boolean;         // determines whether to add tabindex to the slider (default: false)
      trimSpace?: SlideTrimSpace;   // determines whether to trim the space between slides (default: true)
      
      speed?: number;               // determines the speed of the slider (default: 300)
      width?: SlideWidth;           // determines the width of the slider (default: 100%)
      height?: SlideHeight;         // determines the height of the slider (default: 100%)
      padding?: SlidePadding;       // padding (default: { top: 0, right: 5rem, bottom: 0, left: 5rem })
      gap?: SlideGap;               // gap between slides (default: 1rem)
      perPage?: number;             // determines the number of slides per page (default: 1)
      perMove?: number;             // determines the number of slides to move (default: 1)
      breakpoints?: SlideBreakpoints; // breakpoints (default: check SliderBase component)


      // Automatically assigned
      omitEnd?: boolean;            // determines whether to omit the end slide (default: false, but true when type is not loop)
      updateOnMove?: boolean;       // determines whether to update the active slider just before the move (default: true)
      label?: string;               // label for the slider (default: no default (Required))

   }

   interface CarouselEvents {
      pageChange: CustomEvent<number>;
   }

   interface CarouselSlots {
      prev: {
         showPrevPage: () => void;
      };
      next: {
         showNextPage: () => void;
      };
      dots: {
         showPage: (pageIndex: number) => void;
         currentPageIndex: number;
         pagesCount: number;
      };
      default: {
         showPrevPage: () => void;
         showNextPage: () => void;
         currentPageIndex: number;
         pagesCount: number;
         showPage: (pageIndex: number) => void;
         loaded: number[];
      };
   }

   export default class Carousel extends SvelteComponentTyped<
      CarouselProps,
      CarouselEvents,
      CarouselSlots
   > {
      goTo(pageIndex: number, options?: { animated?: boolean }): Promise<void>;
      goToPrev(options?: { animated?: boolean }): Promise<void>;
      goToNext(options?: { animated?: boolean }): Promise<void>;
   }
}
