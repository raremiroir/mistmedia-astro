import { theme } from './theme';
import type { ColorProp, VariantProp, SizeProp, RoundedProp, ShadowProp } from './theme';

const baseStyles = `transition-all duration-300 ease-out border-solid border-2`;
const hoverStyles = ``;
const activeStyles = `hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer`;

export type ThemeProps = {
   color: ColorProp;
   variant: VariantProp;
   size: SizeProp;
   hover?: boolean;
   active?: boolean;
   style?: {
      rounded?: RoundedProp;
      shadow?: ShadowProp;
      block?: boolean;
   },
   classes?: string;
}

const boxGen = {
   color: (color: ColorProp, variant: VariantProp, hover: boolean = false, active: boolean = false) => {
      if (color === 'custom') {
         return;
      } else {
         switch (variant) {
            case 'fill':
               return ` ${theme.colors.bg[color].default} ${theme.on[color]} !border-none
                        ${hover ? theme.colors.bg[color].hover : ''}
                        ${active ? theme.colors.bg[color].active : ''}`;
            case 'outline':
               return ` ${theme.colors.border[color].default} ${theme.colors.text[color].default} bg-transparent
                        ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.text[color].hover} ${theme.colors.border[color].hover}` : ''}
                        ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.text[color].active} ${theme.colors.border[color].active}` : ''}`;
            case 'ghost':
               return ` ${theme.colors.bg[color].default_alt} ${theme.colors.border[color].default} ${theme.colors.text[color].default}
                        ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.border[color].hover} ${theme.colors.text[color].hover}` : ''}
                        ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.border[color].active} ${theme.colors.text[color].active}` : ''}`;
            case 'soft':
               return ` ${theme.colors.bg[color].default_alt} ${theme.colors.text[color].default} !border-none
                        ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.text[color].hover}` : ''}
                        ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.text[color].active}` : ''}`;
            case 'minimal':
               return ` bg-transparent border-transparent
                        ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.text[color].hover}` : ''}
                        ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.text[color].active}` : ''}`;
            default:
               return ` bg-surface-200 text-black border-transparent
                        ${hover ? `hover:bg-surface-300` : ''}
                        ${active ? `active:bg-surface-400` : ''}`;
         }
      }
   },
   size: (size: SizeProp) => {
      switch (size) {
         case 'none': return ``;
         case 'xs': return ` text-sm px-2 py-1`;
         case 'sm': return ` text-sm px-3 py-1.5`;
         case 'md': return ` text-base px-4 py-2`;
         case 'lg': return ` text-lg px-5 py-3`;
         case 'xl': return ` text-xl px-6 py-4`;
         default:   return ` text-base px-4 py-2`;
      }
   },
   rounded: (rounded: RoundedProp) => {
      switch (rounded) {
         case 'none':    return ` rounded-none`;
         case 'sm':      return ` rounded-md`;
         case 'md':      return ` rounded-xl`;
         case 'lg':      return ` rounded-3xl`;
         case 'circle':  return ` rounded-full`;
         case 'tile-sm': return ` rounded-tl-lg rounded-tr-xs rounded-bl-xs rounded-br-lg`;
         case 'tile':    return ` rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl`;
         case 'tile-lg': return ` rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl`;
         default:        return ` rounded-lg`;
      }
   },
   shadow: function(shadow: ShadowProp, color: ColorProp, hover: boolean = false, active: boolean = false) {
      
      switch (shadow) {
         case 'none': return ` shadow-none`; 
         case 'sm': 
            return ` shadow-md
                    ${ hover ? 'hover:shadow-lg hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`; 
         case 'md': 
            return ` shadow-lg
                     ${ hover ? 'hover:shadow-xl hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`;
         case 'lg': 
            return ` shadow-xl
                     ${ hover ? 'hover:shadow-2xl hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`;
         case 'xl': 
            return ` shadow-2xl
                     ${ hover ? 'hover:shadow-3xl hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`;
         case 'bevel':
            if (color === 'custom') return ` shadow-md-noblur hover:shadow-lg-noblur`;
            return ` shadow-md-noblur ${theme.colors.shadow[color].default}
                     ${ hover ? `hover:shadow-lg-noblur ${theme.colors.shadow[color].hover}` : ''}
                     ${ active ? `${theme.colors.shadow[color].active}` : '' }`;
         default:
            return ` shadow-md
                     ${ hover ? 'hover:shadow-lg hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`; 
      }
   },
   full: (props:ThemeProps = {
      color: 'primary',
      variant: 'fill',
      size: 'md',
      hover: false,
      active: false,
      style: {
         rounded: 'tile',
         shadow: 'bevel',
         block: false,
      },
      classes: '',
   }) => {
      // Define colors and variants
      let base_class = `${baseStyles} ${ props.hover ? hoverStyles : ''} ${ props.active ? activeStyles : '' }`;

      // Define color + variant
      base_class += boxGen.color(props.color, props.variant, props.hover, props.active);
      // Define size
      base_class += boxGen.size(props.size);
      // Define rounded
      base_class += props.style?.rounded ? boxGen.rounded(props.style?.rounded) : ' rounded-lg';
      // Define shadow
      base_class += props.style?.shadow 
                     ? boxGen.shadow(props.style?.shadow, props.color, props.hover, props.active) 
                     : ` shadow-md ${props.hover ? 'hover:shadow-lg hover:shadow-current/30' : ''} ${props.active ? 'active:shadow-current/40' : '' }`;

      // Define other styles
      base_class += props.style?.block ? ' w-full' : ' w-fit';
      base_class += " transition-all duration-300 ease-in-out"

      // Return class
      return `${base_class} ${props.classes}`;
   }
}

export default boxGen;