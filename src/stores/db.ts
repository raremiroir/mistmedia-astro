import { atom } from "nanostores";
import type { WritableAtom, Atom } from "nanostores";
import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import { type Auth, setPersistence, browserSessionPersistence, initializeAuth, getAuth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { initializeApp, getApp, getApps } from "firebase/app";

import type { User } from "firebase/auth";
export const userStore: WritableAtom<User | null> = atom(null);

const app = initializeApp({
   apiKey: import.meta.env.FIREBASE_API_KEY || 'AIzaSyDA4oxpqeQ5DnA0gWcIyFrSuGVOaz1ph_M',
   authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN || 'mistmedia-48615.firebaseapp.com',
   projectId: import.meta.env.FIREBASE_PROJECT_ID || 'mistmedia-48615',
   storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET || 'mistmedia-48615.appspot.com',
   messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID || '72407139695',	
   appId: import.meta.env.FIREBASE_APP_ID || '1:72407139695:web:aad2729562a76813f9149a',
   measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID || 'G-94MFX4ZZWF'
}, 'app');

export const dbApp: FirebaseApp = !!getApps() ? getApp('app') : app;
// console.log(dbApp);
export const dbAuth: Auth = getAuth(dbApp);
export const dbFirestore: Firestore = getFirestore(dbApp);
export const dbStorage: FirebaseStorage = getStorage(dbApp);