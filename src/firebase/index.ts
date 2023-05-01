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
   browserSessionPersistence,
   signInWithEmailAndPassword,
   signOut
} from 'firebase/auth';

import type { DocumentReference, Firestore } from 'firebase/firestore';
import { Timestamp, collection, deleteDoc, doc, endAt, endBefore, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, startAfter, startAt, updateDoc, where } from 'firebase/firestore';

import { deleteObject, getMetadata, getStorage, list, listAll, ref, updateMetadata, uploadBytes } from 'firebase/storage';
import type { FirebaseStorage, FullMetadata, SettableMetadata, StorageReference } from 'firebase/storage';
import type { DbFetchFileProps, DbFetchProps, DbInsertProps, DbProps, DbUploadFileProps } from "./types";
import { dbApp, dbAuth, dbFirestore, dbStorage } from "@/stores/db";
   
export const db = {
   // DOCS
   doc: {
      // FETCH
      fetch: {
         single: async (options: DbProps) => {
            const { collection, id } = options;
            const firestore = dbFirestore;
            const docSnapshot = await getDoc(doc( firestore, collection, id ))
            if (docSnapshot.exists()) { return docSnapshot.data(); } 
            else { console.error("🔥 No such document in Firestore Database!"); return null; }
         },
         collection: async (collectionRef: string) => {
            const firestore = dbFirestore;
            const colRef = collection(firestore, collectionRef);
            const colSnapshot = await getDocs(colRef);
            const colList = colSnapshot.docs.map(doc => doc.data());
            return colList;
         },
         fromRef: async (docRef: DocumentReference) => {
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) { return docSnapshot.data(); }
            else { console.error("🔥 No such document in Firestore Database!"); return null; }
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
            
            const firestore = dbFirestore;
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
         const firestore = dbFirestore;
         await setDoc(doc(firestore, collection, id), values);
      },
      // DELETE
      delete: {
         single: async (options: DbProps) => {
            const { collection, id } = options;
            const firestore = dbFirestore;
            await deleteDoc(doc(firestore, collection, id));
         },
         soft: async (options: DbProps) => {
            const { collection, id } = options;
            const firestore = dbFirestore;
            await updateDoc(doc(firestore, collection, id), {
               deleted_at: Timestamp.fromDate(new Date())
            });
         },
         soft_undo: async (options: DbProps) => {
            const { collection, id } = options;
            const firestore = dbFirestore;
            await updateDoc(doc(firestore, collection, id), {
               deleted_at: null
            });
         }
      },
      // UPDATE'
      update: async (options: DbInsertProps) => {
         const { collection, id, values } = options;
         const firestore = dbFirestore;
         await updateDoc(doc( firestore, collection, id ), values);
      },
      // EXISTS
      exists: async (options: DbProps) => {
         const { collection, id } = options;
         const firestore = dbFirestore;
         const docSnapshot = await getDoc(doc(firestore, collection, id));
         return docSnapshot.exists();
      },
   },


   // STORAGE
   storage: {
      // FETCH
      fetch: {
         ref: async (props: DbFetchFileProps) => {
            const storage = dbStorage
            switch (props.refType) {
               case 'gs':    return ref(storage, `gs://${props.id}`);
               case 'https': return ref(storage, `https://firebasestorage.googleapis.com/b/bucket/o/${props.id}`);
               default:      return ref(storage, props.id);
            }
         },
         meta: async (id: string) => {
            const storage = dbStorage;
            const fileRef = ref(storage, id);
            const fileMeta = await getMetadata(fileRef);
            return fileMeta;
         }
      },
      // UPLOAD
      upload: async (props: DbUploadFileProps) => {
         const storage = dbStorage;
         const name:string = props.collection ? `${props.collection}/${props.id}` : props.id;
         const fileRef = ref(storage, name);
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
         const storage = dbStorage;
         const storRef = ref(storage, id);
         deleteObject(storRef)
            .then(() => { console.log('🔥 Image deleted!'); })
            .catch((err) => { console.error(err); })
         },
   },
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
   // AUTH
   auth: {
      signIn: async (email: string, password: string) => {
         const auth = dbAuth;
         return signInWithEmailAndPassword(auth, email, password);
      },
      signOut: async () => {
         const auth = dbAuth;
         return signOut(auth);
      }
   },
}

export default db;