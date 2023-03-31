import type { Locales } from "@tstype/index";
import { locale } from "@stores/index";

// All locales
export const locales: Locales[] = ['nl', 'en']
export const baseLocale: Locales = 'nl'

export const localeFlags: {[key:string]: string} = {
   nl: 'flag-for-netherlands',
   en: 'flag-for-united-kingdom',
   fr: 'flag-for-france',
}

export const localeNames: {[key:string]: string} = {
   nl: 'Nederlands',
   en: 'English',
   fr: 'Français',
}