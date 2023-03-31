import { atom } from 'nanostores'
import { baseLocale } from '@utils/i18n'
import type { Locales } from '@tstype/index';


/* ~~-~~ ~-~~-~ ~~-~~ */
/* ~~-~~ STORES ~~-~~ */
/* ~~-~~ ~-~~-~ ~~-~~ */

// i18n
export let locale = atom<Locales>(baseLocale);