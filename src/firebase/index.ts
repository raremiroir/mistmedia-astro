
import type { DocumentReference, Firestore } from 'firebase/firestore';
import { Timestamp, collection, deleteDoc, doc, endAt, endBefore, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, startAfter, startAt, updateDoc, where } from 'firebase/firestore';

import { deleteObject, getMetadata, getStorage, ref, updateMetadata, uploadBytes } from 'firebase/storage';
import type { FirebaseStorage, SettableMetadata } from 'firebase/storage';
import type { DbFetchFileProps, DbFetchProps, DbInsertProps, DbProps, DbUploadFileProps } from "./types";
import { initializeApp, type FirebaseApp, type FirebaseOptions, getApp } from 'firebase/app';
import type { MistClient } from '@/types/content';

const firebaseConfig: FirebaseOptions = {
   apiKey: import.meta.env.FB_API_KEY,
   authDomain: import.meta.env.FB_AUTH_DOMAIN,
   projectId: import.meta.env.FB_PROJECT_ID,
   storageBucket: import.meta.env.FB_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.FB_MESSAGING_SENDER_ID,
   appId: import.meta.env.FB_APP_ID,
   measurementId: import.meta.env.FB_MEASUREMENT_ID,
};

const dbApp: FirebaseApp = initializeApp(firebaseConfig);
const dbFirestore: Firestore = getFirestore(dbApp);
const dbStorage: FirebaseStorage = getStorage(dbApp);
export const db = {
   // INIT
   init: () => {
      const app = getApp();
      if (app) { return app; }
   },
   // DOCS
   doc: {
      // FETCH
      fetch: {
         single: async (options: DbProps) => {
            const { collection, id } = options;
            const docSnapshot = await getDoc(doc( dbFirestore, collection, id ))
            if (docSnapshot.exists()) { return docSnapshot.data(); } 
            else { console.error("🔥 No such document in Firestore Database!"); return null; }
         },
         collection: async (collectionRef: string) => {
            const colRef = collection(dbFirestore, collectionRef);
            // console.log(colRef);
            const colSnapshot = await getDocs(colRef);
            const colList = colSnapshot.docs.map(doc => doc.data());
            return colList;
         },
         fromRef: async (docRef: DocumentReference) => {
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) { return docSnapshot.data(); }
            else { console.error("🔥 No such document in Firestore Database!"); return null; }
         },
         fromRefArray: async (docRefArray: DocumentReference[]) => {
            const docSnapshotArray = await Promise.all(docRefArray.map(docRef => getDoc(docRef)));
            const docDataArray = docSnapshotArray.map(docSnapshot => docSnapshot.data());
            return docDataArray;
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
            
            const colRef = collection(dbFirestore, options.collection);
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
         await setDoc(doc(dbFirestore, collection, id), values);
      },
      // DELETE
      delete: {
         single: async (options: DbProps) => {
            const { collection, id } = options;
            await deleteDoc(doc(dbFirestore, collection, id));
         },
         soft: async (options: DbProps) => {
            const { collection, id } = options;
            await updateDoc(doc(dbFirestore, collection, id), {
               deleted_at: Timestamp.fromDate(new Date())
            });
         },
         soft_undo: async (options: DbProps) => {
            const { collection, id } = options;
            await updateDoc(doc(dbFirestore, collection, id), {
               deleted_at: null
            });
         }
      },
      // UPDATE'
      update: async (options: DbInsertProps) => {
         const { collection, id, values } = options;
         await updateDoc(doc( dbFirestore, collection, id ), values);
      },
      // EXISTS
      exists: async (options: DbProps) => {
         const { collection, id } = options;
         const docSnapshot = await getDoc(doc(dbFirestore, collection, id));
         return docSnapshot.exists();
      },
   },


   // STORAGE
   storage: {
      // FETCH
      fetch: {
         ref: async (props: DbFetchFileProps) => {
            switch (props.refType) {
               case 'gs':    return ref(dbStorage, `gs://${props.id}`);
               case 'https': return ref(dbStorage, `https://firebasestorage.googleapis.com/b/bucket/o/${props.id}`);
               default:      return ref(dbStorage, props.id);
            }
         },
         meta: async (id: string) => {
            const fileRef = ref(dbStorage, id);
            const fileMeta = await getMetadata(fileRef);
            return fileMeta;
         }
      },
      // UPLOAD
      upload: async (props: DbUploadFileProps) => {
         const name:string = props.collection ? `${props.collection}/${props.id}` : props.id;
         const fileRef = ref(dbStorage, name);
         uploadBytes(fileRef, props.file).then((snapshot) => { console.log('🔥 Image uploaded!') })

         const customMeta = props.meta ? props.meta : {};
         const newMeta: SettableMetadata = { 
            cacheControl: 'public, max-age=31536000',
            contentType: props.file.type,
            customMetadata: customMeta 
         };
         updateMetadata(fileRef, newMeta);
      },
      // DELETE
      delete: async (id: string) => {
         const storRef = ref(dbStorage, id);
         deleteObject(storRef)
            .then(() => { console.log('🔥 Image deleted!'); })
            .catch((err) => { console.error(err); })
      },
   },
   // CUSTOM
   custom: {
      // FILTER
      filter: {
         by: {
            categoryFromPortfolio: async (key: string) => {
               try {
                  var itemsList: any[] = [];
                  const allPortfolio = await db.doc.fetch.collection(`portfolio`);
                  allPortfolio.forEach((item) => {
                     item.categories.forEach( async (category:any) => {
                        var catSlug = category._key.path.segments[category._key.path.segments.length - 1];
                        if (catSlug === key) {
                           itemsList.push(item);
                        };
                     })
                  });
                  return itemsList;
               } catch (error) {
                  console.error(error);
               }
            }
         }
      }
   },
}

export default db;