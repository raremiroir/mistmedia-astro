export type ColorShades = {
   [key: number]: string;
   50: string;
   100: string;
   200: string;
   300: string;
   400: string;
   500: string;
   600: string;
   700: string;
   800: string;
   900: string;
}

export type ColorPalette = {
   [key: string]: ColorShades;
   primary: ColorShades;
   secondary: ColorShades;
   tertiary: ColorShades;
   success: ColorShades;
   warning: ColorShades;
   error: ColorShades;
   surface: ColorShades;
   surface_alt: ColorShades;
   surface_dark: ColorShades;
}

export type ColorProp = "primary" | "secondary" | "tertiary" | "success" | "warning" | "error" | "surface" | "surface_alt" | "surface_dark" | "custom";
export type VariantProp = "fill" | "outline" | "ghost" | "soft" | "minimal";
export type SizeProp = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type RoundedProp = "none" | "sm" | "md" | "lg" | "circle" | "tile-sm" | "tile" | "tile-lg";
export type ShadowProp = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'bevel';

export const isColorProp = (prop: string) => {
	return prop === "primary" || prop === "secondary" || prop === "tertiary" || prop === "success" || prop === "warning" || prop === "error" || prop === "surface" || prop === "surface_alt" || prop === "surface_dark";
}


export type ThemeVariant = {
   baseStyles: string;
   hoverStyles: string;
   activeStyles: string;
}

export type ThemeVariants = {
   [key: string]: ThemeVariant;
   fill: ThemeVariant;
   outline: ThemeVariant;
   ghost: ThemeVariant;
   soft: ThemeVariant;
   minimal: ThemeVariant;
   link: ThemeVariant;
}

export type ThemeProperties = {
	properties: {
		[key: string]: string;
	},
	on: {
		[key: string]: string;
	},
	colors: ColorPalette;
}

export const theme = {
	/* =~= Theme Properties =~= */
	properties: {
		'font-family-base': 'quasimoda',
		'font-family-heading': 'attribute-mono',
		'font-color-base': '0 0 0',
		'font-color-dark': '255 255 255',
		'rounded-base': '9999px',
		'rounded-container': '8px',
		'border-base': '2px',
	},
	/* =~= Theme On-X Colors =~= */
	on: {
		primary: 'text-black',
		secondary: 'text-white',
		tertiary: 'text-black dark:text-white',
		success: 'text-black',
		warning: 'text-black',
		error: 'text-white',
		surface: 'text-surface-900 dark:text-surface-50',
		surface_alt: 'text-surface-900 dark:text-surface-50 active:text-primary-900 dark:active:text-primary-50',
		surface_dark: 'text-surface-50 dark:text-surface-900',
	},
	/* =~= Theme Colors  =~= */
	colors: {
		bg: {
			none:  'bg-transparent',
			primary: {
				default: 'bg-primary',
				default_alt: 'bg-primary/10',
				hover: 'hover:bg-primary-600',
				hover_alt: 'hover:bg-primary/20',
				active: 'active:bg-primary-700',
				active_alt: 'active:bg-primary/40 dark:active:bg-primary/30',
			},
			secondary: {
				default: 'bg-secondary',
				default_alt: 'bg-secondary/10',
				hover: 'hover:bg-secondary-600',
				hover_alt: 'hover:bg-secondary/20',
				active: 'active:bg-secondary-700',
				active_alt: 'active:bg-secondary/40 dark:active:bg-secondary/30',
			},
			tertiary: {
				default: 'bg-tertiary',
				default_alt: 'bg-tertiary/10',
				hover: 'hover:bg-tertiary-600',
				hover_alt: 'hover:bg-tertiary/20',
				active: 'active:bg-tertiary-700',
				active_alt: 'active:bg-tertiary/40 dark:active:bg-tertiary/30',
			},
			success: {
				default: 'bg-success',
				default_alt: 'bg-success/10',
				hover: 'hover:bg-success-600',
				hover_alt: 'hover:bg-success/20',
				active: 'active:bg-success-700',
				active_alt: 'active:bg-success/40 dark:active:bg-success/30',
			},
			warning: {
				default: 'bg-warning',
				default_alt: 'bg-warning/10',
				hover: 'hover:bg-warning-600',
				hover_alt: 'hover:bg-warning/20',
				active: 'active:bg-warning-700',
				active_alt: 'active:bg-warning/40 dark:active:bg-warning/30',
			},
			error: {
				default: 'bg-error',
				default_alt: 'bg-error/10',
				hover: 'hover:bg-error-600',
				hover_alt: 'hover:bg-error/20',
				active: 'active:bg-error-700',
				active_alt: 'active:bg-error/40 dark:active:bg-error/30',
			},
			surface: {
				default: 'bg-gray-200 dark:bg-slate-500/80',
				default_alt: 'bg-white/40 dark:bg-black/40',
				hover: 'hover:bg-slate-100 dark:hover:bg-slate-600',
				hover_alt: 'hover:bg-white/50 dark:hover:bg-black/50',
				active: 'active:bg-slate-300/80 dark:active:bg-slate-500/40',
				active_alt: 'active:bg-white/70 dark:active:bg-black/70',
			},
			surface_alt: {
				default: 'bg-gray-200 dark:bg-slate-500/80',
				default_alt: 'bg-white/40 dark:bg-black/40',
				hover: 'hover:!bg-primary-50 dark:hover:bg-primary-900/20',
				hover_alt: 'hover:bg-primary/15 dark:hover:bg-primary-400/15',
				active: 'active:bg-primary-200/80 dark:active:bg-primary-900/40',
				active_alt: 'active:bg-primary/40 dark:active:bg-primary-400/40',
			},
			surface_dark: {
				default: 'bg-slate dark:bg-slate-50',
				default_alt: 'bg-gray-900/10 dark:bg-gray-50/10',
				hover: 'hover:bg-slate-600 hover:dark:bg-slate-100',
				hover_alt: 'hover:bg-gray-900/20 hover:dark:bg-gray-50/20',
				active: 'active:bg-slate-700 active:dark:bg-slate-300',
				active_alt: 'active:bg-gray-900/40 active:dark:bg-gray-50/40',
			},
		},
		border: {
			none: 'border-transparent',
			primary: {
				default: 'border-primary dark:border-primary-400',
				default_alt: 'border-primary/10 dark:border-primary-400/10',
				hover: 'hover:border-primary-600 dark:border-primary-300',
				active: 'active:border-primary-700 dark:border-primary-200',
			},
			secondary: {
				default: 'border-secondary dark:border-secondary-400',
				hover: 'hover:border-secondary-600 dark:border-secondary-300',
				active: 'active:border-secondary-700 dark:border-secondary-200',
			},
			tertiary: {
				default: 'border-tertiary dark:border-tertiary-400',
				hover: 'hover:border-tertiary-600 dark:border-tertiary-300',
				active: 'active:border-tertiary-700 dark:border-tertiary-200',
			},
			success: {
				default: 'border-success dark:border-success-400',
				hover: 'hover:border-success-600 dark:border-success-300',
				active: 'active:border-success-700 dark:border-success-200',
			},
			warning: {
				default: 'border-warning dark:border-warning-400',
				hover: 'hover:border-warning-600 dark:border-warning-300',
				active: 'active:border-warning-700 dark:border-warning-200',
			},
			error: {
				default: 'border-error dark:border-error-400',
				hover: 'hover:border-error-600 dark:border-error-300',
				active: 'active:border-error-700 dark:border-error-200',
			},
			surface: {
				default: 'border-white dark:border-surface-600',
				hover: 'hover:border-surface-100 dark:border-surface-200',
				active: 'active:border-surface-200 dark:border-surface-50',
			},
			surface_alt: {
				default: 'border-white dark:border-surface-600',
				hover: 'hover:border-primary-600 dark:hover:border-primary-700',
				active: 'active:border-primary-700 dark:active:border-primary-600',
			},
			surface_dark: {
				default: 'border-surface dark:border-surface-400',
				hover: 'hover:border-surface-600 dark:hover:border-surface-300',
				active: 'active:border-surface-700 dark:active:border-surface-100',
			},
		},
		text: {
			none: 'text-transparent',
			primary: {
				default: 'text-primary-700 dark:text-primary-400',
				hover: 'hover:text-primary-900 dark:hover:text-primary-200',
				active: 'active:text-primary-300 dark:active:text-primary-100',
			},
			secondary: {
				default: 'text-secondary-600 dark:text-secondary-400',
				hover: 'hover:text-secondary-800 dark:hover:text-secondary-300',
				active: 'active:text-secondary-900 dark:active:text-secondary-200',
			},
			tertiary: {
				default: 'text-tertiary-600 dark:text-tertiary-400',
				hover: 'hover:text-tertiary-800 dark:hover:text-tertiary-300',
				active: 'active:text-tertiary-900 dark:active:text-tertiary-200',
			},
			success: {
				default: 'text-success-600 dark:text-success-400',
				hover: 'hover:text-success-800 dark:hover:text-success-300',
				active: 'active:text-success-900 dark:active:text-success-200',
			},
			warning: {
				default: 'text-warning-700 dark:text-warning-400',
				hover: 'hover:text-warning-800 dark:hover:text-warning-300',
				active: 'active:text-warning-900 dark:active:text-warning-200',
			},
			error: {
				default: 'text-error-600 dark:text-error-400',
				hover: 'hover:text-error-800 dark:hover:text-error-300',
				active: 'active:text-error-900 dark:active:text-error-200',
			},
			surface: {
				default: 'text-surface-700 dark:text-surface-300',
				hover: 'hover:text-surface-800 dark:hover:text-surface-200',
				active: 'active:text-surface-900 dark:active:text-surface-100',
			},
			surface_alt: {
				default: 'text-surface-700 dark:text-surface-300',
				hover: 'hover:text-primary-800 dark:hover:text-primary-200',
				active: 'active:text-primary-900 dark:active:text-primary-200',
			},
			surface_dark: {
				default: 'text-surface-800 dark:text-surface-200',
				hover: 'hover:text-surface-900 dark:hover:text-surface-100',
				active: 'active:text-black dark:active:text-white',
			},
		},
		shadow: {
			none: 'shadow-none',
			primary: {
				default: 'shadow-primary-500/60',
				hover: 'hover:shadow-primary-600/60',
				active: 'active:shadow-primary-700/60',
			},
			secondary: {
				default: 'shadow-secondary-500/60',
				hover: 'hover:shadow-secondary-600/60',
				active: 'active:shadow-secondary-700/60',
			},
			tertiary: {
				default: 'shadow-tertiary-500/60',
				hover: 'hover:shadow-tertiary-600/60',
				active: 'active:shadow-tertiary-700/60',
			},
			success: {
				default: 'shadow-success-500/60',
				hover: 'hover:shadow-success-600/60',
				active: 'active:shadow-success-700/60',
			},
			warning: {
				default: 'shadow-warning-500/60',
				hover: 'hover:shadow-warning-600/60',
				active: 'active:shadow-warning-700/60',
			},
			error: {
				default: 'shadow-error-500/60',
				hover: 'hover:shadow-error-600/60',
				active: 'active:shadow-error-700/60',
			},
			surface: {
				default: 'shadow-black/30',
				hover: 'hover:shadow-surface-900/50 dark:hover:shadow-surface-700',
				active: 'active:shadow-surface-900/70 dark:active:shadow-surface-500/80',
			},
			surface_alt: {
				default: 'shadow-black/30',
				hover: 'hover:shadow-primary/40 dark:hover:shadow-primary-700/40',
				active: 'active:shadow-primary-600/60 dark:active:shadow-primary-500/40',
			},
			surface_dark: {
				default: 'shadow-surface-500/60 dark:shadow-surface-100/60',
				hover: 'hover:shadow-surface-600/60 dark:hover:shadow-surface-200/60',
				active: 'active:shadow-surface-700/60 dark:active:shadow-surface-300/40',
			},
		},
	}
}