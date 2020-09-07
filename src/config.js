import firebase from "firebase";
var firebaseConfig = {
  //your firebase config info
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
