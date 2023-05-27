
export const widths =  'mx-auto w-full sm:w-[95%] md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3';
export const gaps = 'gap-2 md:gap-4 lg:gap-6 2xl:gap-8';

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
// Form styles
export const cForm = {
      input: {
            wrapBase     : 'label relative group w-full cursor-text',
            transition   : 'transition-all duration-200 ease-out',
            border       : 'border-2 border-transparent',
            rounding     : 'rounded-lg',
            bg           : 'bg-surface-300 dark:bg-surface-700 checked:bg-surface-300 checked:dark:bg-surface-700 aria-checked:bg-surface-300 aria-checked:dark:bg-surface-700',
            flex         : 'flex items-start',
            
            inputBase    : 'input peer',
            placeholder  : 'placeholder:!text-transparent focus:placeholder:text-surface-600 dark:focus:placeholder:text-surface-400 placeholder:italic',
            text         : "text-bold !text-surface-900 dark:!text-surface-50 autofill:!text-primary-900 dark:autofill:!text-primary-100 ",
            
            labelBase    : 'leading-none',
            labelBg      : `bg-transparent rounded-lg
                             peer-focus:bg-gradient-to-b peer-focus:from-transparent peer-focus:via-surface-300 peer-focus:to-surface-300
                             dark:peer-focus:from-transparent dark:peer-focus:via-surface-700 dark:peer-focus:to-surface-700`,
            labelActiveBg: `bg-gradient-to-b from-transparent to-surface-300 
                             dark:from-transparent dark:to-surface-700`,
            labelPadding : 'px-1 py-0',
            labelAbsolute: 'absolute z-2 left-1',
            
            labelPosDef  : 'top-[10px]',
            labelPosFocus: 'peer-focus:-top-[10px] peer-focus:scale-95',
            labelPosValue: '-top-[10px] scale-95',
            
            clearBase    : 'h-fit aspect-square bg-transparent justify-center cursor-pointer mt-1 mr-2',
            clearAbsolute: 'absolute z-1 right-0',
      }
}
// Complete form styles
export const cFormComplete = {
      wrapClass: `${cForm.input.wrapBase} ${cForm.input.transition} ${cForm.input.flex} ${classes.transition.default}`,
      inputClass: `${cForm.input.inputBase} ${cForm.input.transition} ${cForm.input.bg} ${cForm.input.border} 
                   ${cForm.input.rounding} ${cForm.input.placeholder} ${cForm.input.text} ${classes.transition.default}`,
      clearClass: `${cForm.input.clearBase} ${cForm.input.clearAbsolute} ${cForm.input.flex} ${classes.transition.default}`,
      labelClass: `${cForm.input.transition} ${cForm.input.labelBase} ${cForm.input.labelAbsolute} ${cForm.input.labelPadding}
                   ${cForm.input.labelPosFocus} ${cForm.input.labelBg} ${classes.transition.default}`
}