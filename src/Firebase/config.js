import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjmcACmzQMsgSOcWBHQCBLN7hHiYNNz-Q",
  authDomain: "firegallery-af61e.firebaseapp.com",
  projectId: "firegallery-af61e",
  storageBucket: "firegallery-af61e.appspot.com",
  messagingSenderId: "974849004650",
  appId: "1:974849004650:web:07ee6b8edab30635926613",
  measurementId: "G-EWT52R9YKC",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;  // timestamp for saving urls to firebase collection 

export { appFirestore, appStorage, timestamp };