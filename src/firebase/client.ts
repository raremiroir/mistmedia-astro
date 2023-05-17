import { initializeApp, type FirebaseApp, FirebaseOptions } from "firebase/app";
import { type Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
   apiKey: import.meta.env.FB_API_KEY,
   authDomain: import.meta.env.FB_AUTH_DOMAIN,
   projectId: import.meta.env.FB_PROJECT_ID,
   storageBucket: import.meta.env.FB_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.FB_MESSAGING_SENDER_ID,
   appId: import.meta.env.FB_APP_ID,
   measurementId: import.meta.env.FB_MEASUREMENT_ID,
 };

export const dbApp: FirebaseApp = initializeApp(firebaseConfig);
export const dbFirestore: Firestore = getFirestore(dbApp);
export const dbStorage: FirebaseStorage = getStorage(dbApp);