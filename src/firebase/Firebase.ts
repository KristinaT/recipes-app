import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCpOa9T5r1v8MoI7ap3_evuxJW8V759UEY",
  authDomain: "eshop-d7f2e.firebaseapp.com",
  databaseURL: "https://eshop-d7f2e.firebaseio.com",
  projectId: "eshop-d7f2e",
  storageBucket: "",
  messagingSenderId: "611322898926",
  appId: "1:611322898926:web:165da5e5c1b1cf98"
};

firebase.initializeApp(config);
/** Get Auth service for the app */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedColleciton = collections.docs.map((doc: any) => {
    const {
      name,
      source,
      preparationTime,
      preparationInstructions
    } = doc.data();

    return {
      routeName: encodeURI(name.toLowerCase()),
      id: doc.id,
      name,
      source,
      preparationTime,
      preparationInstructions
    };
  });

  console.log(transformedColleciton);
  return transformedColleciton;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  Object.values(objectsToAdd).forEach((obj: any) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
export default firebase;
