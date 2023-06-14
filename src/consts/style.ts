
export const widths =  'mx-auto w-full sm:w-[95%] md:w-11/12 xl:w-5/6 2xl:w-3/4';
export const gaps = 'gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8';
export const gaps_2 = 'gap-3 md:gap-4 xl:gap-6 2xl:gap-8';

export const slider = `
      w-full h-full max-h-120
      object-cover relative 
      cursor-grab active:cursor-grabbing 
      py-2 rounded-2xl
      bg-surface-400 overflow-hidden
   `;


export const classes = {
      transition: {
            fast: 'transition-all duration-200 ease-out',
            default: 'transition-all duration-300 ease-out',
            slow: 'transition-all duration-500 ease-in-out'
      },
      flex: {
            center: 'flex justify-center items-center',
            between: 'flex justify-between items-center'
      }
}