// Import the functions you need from the SDKs you need
import type { FirebaseApp } from "firebase/app";
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase
import type { Analytics } from "firebase/analytics";
import { getAnalytics } from "firebase/analytics";

import type { Auth } from 'firebase/auth';
import { 
   getAuth, 
   setPersistence,
   browserSessionPersistence
} from 'firebase/auth';

import type { Firestore } from 'firebase/firestore';
import { Timestamp, collection, deleteDoc, doc, endAt, endBefore, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, startAfter, startAt, updateDoc, where } from 'firebase/firestore';

import { deleteObject, getMetadata, getStorage, list, listAll, ref, updateMetadata, uploadBytes } from 'firebase/storage';
import type { FirebaseStorage, FullMetadata, SettableMetadata, StorageReference } from 'firebase/storage';
import type { DbFetchFileProps, DbFetchProps, DbInsertProps, DbProps } from "./types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};

let app: FirebaseApp;
let auth: Auth
let firestore: Firestore;
let analytics: Analytics;
   
export const db = {
   // Initialize Firebase
   init: async () => {
      console.log('🔥 Initializing Firebase...');
      app = initializeApp(firebaseConfig);
      firestore = getFirestore(app);
      // auth = getAuth(app);
      // analytics = getAnalytics(app); // TODO: add analytics
      // await setPersistence(auth, browserSessionPersistence);
      return { app, firestore,/* auth, analytics */ };
   },
   // DOCS
   doc: {
      // FETCH
      fetch: {
         single: async (options: DbProps) => {
            const { collection, id } = options;
            const { firestore } = await db.init();
            const docSnapshot = await getDoc(doc( firestore, collection, id ))
            if (docSnapshot.exists()) { return docSnapshot.data(); } 
            else { console.error("🔥 No such document in Firestore Database!"); return null; }
         },
         collection: async (collectionRef: string) => {
            const { firestore } = await db.init();
            const colRef = collection(firestore, collectionRef);
            const colSnapshot = await getDocs(colRef);
            const colList = colSnapshot.docs.map(doc => doc.data());
            return colList;
         },
         all: async (options: DbFetchProps) => {
            let orderByProp = options.orderBy?? 'id';
            let orderDirectionProp = options.orderDirection?? 'asc';
            let limitProp = options.limit?? 100;
            let startAtProp = options.startAt?? '';
            let endAtProp = options.endAt?? '';
            let startAfterProp = options.startAfter?? '';
            let endBeforeProp = options.endBefore?? '';
            let whereProp = options.where?? { field: '', operator: '==', value: '' };
            
            const { firestore } = await db.init();
            const colRef = collection(firestore, options.collection);
            const q = query(
               colRef, 
               orderBy(orderByProp, orderDirectionProp), 
               limit(limitProp),
               startAt(startAtProp),
               endAt(endAtProp),
               startAfter(startAfterProp),
               endBefore(endBeforeProp),
               where(whereProp.field, whereProp.operator, whereProp.value)
            )
            const allSnapshot = await getDocs(q);
            const allList = allSnapshot.docs.map(doc => doc.data());
            return allList;
         }
      },
      // INSERT
      insert: async (options: DbInsertProps) => {
         const { collection, id, values } = options;
         const { firestore } = await db.init();
         await setDoc(doc(firestore, collection, id), values);
      },
      // DELETE
      delete: {
         single: async (options: DbProps) => {
            const { collection, id } = options;
            const { firestore } = await db.init();
            await deleteDoc(doc(firestore, collection, id));
         },
         soft: async (options: DbProps) => {
            const { collection, id } = options;
            const { firestore } = await db.init();
            await updateDoc(doc(firestore, collection, id), {
               deleted_at: Timestamp.fromDate(new Date())
            });
         },
         soft_undo: async (options: DbProps) => {
            const { collection, id } = options;
            const { firestore } = await db.init();
            await updateDoc(doc(firestore, collection, id), {
               deleted_at: null
            });
         }
      },
      // UPDATE'
      update: async (options: DbInsertProps) => {
         const { collection, id, values } = options;
         const { firestore } = await db.init();
         await updateDoc(doc( firestore, collection, id ), values);
      },
      // EXISTS
      exists: async (options: DbProps) => {
         const { collection, id } = options;
         const { firestore } = await db.init();
         const docSnapshot = await getDoc(doc(firestore, collection, id));
         return docSnapshot.exists();
      },
   },


   // STORAGE
   storage: {
      // upload: async (options: DbFetchFileProps) => {
      //    const { id, refType } = options;
      // }

   },

}

export default db;