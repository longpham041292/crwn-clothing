import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDa15GnfmW5diM8jccvk_AZrDZsDrxzF_Y",
  authDomain: "crwn-db-49580.firebaseapp.com",
  projectId: "crwn-db-49580",
  storageBucket: "crwn-db-49580.appspot.com",
  messagingSenderId: "418938407052",
  appId: "1:418938407052:web:f03ddf760768607e7fd3a9",
  measurementId: "G-G461PLR5E6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
