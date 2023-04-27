import { atom } from 'nanostores'
import { type Writable, writable } from 'svelte/store';
/* ~~-~~ ~-~~-~ ~~-~~ */
/* ~~-~~ STORES ~~-~~ */
/* ~~-~~ ~-~~-~ ~~-~~ */


// Components
export const animationTrigger = writable(false);


export const fileErrors: Writable<string[]> = writable([]);