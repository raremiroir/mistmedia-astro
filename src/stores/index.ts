import { atom } from 'nanostores'
import { type Writable, writable } from 'svelte/store';
/* ~~-~~ ~-~~-~ ~~-~~ */
/* ~~-~~ STORES ~~-~~ */
/* ~~-~~ ~-~~-~ ~~-~~ */


export const animationTrigger: Writable<boolean> = writable(false);
export const fileErrors: Writable<string[]> = writable([]);