import type { Locales } from '@/types';
import { atom } from 'nanostores'
import type { WritableAtom } from 'nanostores'
import { type Writable, writable } from 'svelte/store';
/* ~~-~~ ~-~~-~ ~~-~~ */
/* ~~-~~ STORES ~~-~~ */
/* ~~-~~ ~-~~-~ ~~-~~ */

export const locale: WritableAtom<Locales> = atom('nl');


export const openMobile: WritableAtom<boolean> = atom(false);

export const animationTrigger: Writable<boolean> = writable(false);
export const fileErrors: Writable<string[]> = writable([]);