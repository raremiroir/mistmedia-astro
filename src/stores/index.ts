import type { Locales } from '@/types';
import type { ModalSettings } from '@skeletonlabs/skeleton';
import { atom } from 'nanostores'
import type { WritableAtom } from 'nanostores'
import { type Writable, writable } from 'svelte/store';
import type { MistCase } from '../types/content';
/* ~~-~~ ~-~~-~ ~~-~~ */
/* ~~-~~ STORES ~~-~~ */
/* ~~-~~ ~-~~-~ ~~-~~ */

// Current locale
export const locale: WritableAtom<Locales> = atom('nl');

// Trigger for mobile nav menu
export const openMobile: WritableAtom<boolean> = atom(false);
// Trigger for drawer component
export const animationTrigger: Writable<boolean> = writable(false);
// Active tab in tabs component
export const currentTab: WritableAtom<number> = atom(0);
// Errors in file dropzone
export const fileErrors: Writable<string[]> = writable([]);


// Modal settings
export const modalSettings: WritableAtom<ModalSettings> = atom({
   type: 'component',
   component: '',
   buttonTextCancel: 'Cancel',
   buttonTextConfirm: 'Confirm',
   buttonTextSubmit: 'Submit',
})
// Active modal in modals component
export const currentModal: WritableAtom<string|undefined> = atom('caseDetail');
// Active modal item
export const currentModalItem: WritableAtom<MistCase> = atom({
   description: '',
   enabled: false,
   images: {
      card: ''
   },
   title: '',
});