import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDa2RNnls0VJCRHMNV7RH36pwysmDPQitc",
    authDomain: "crwn-db-209a5.firebaseapp.com",
    projectId: "crwn-db-209a5",
    storageBucket: "crwn-db-209a5.appspot.com",
    messagingSenderId: "703081209023",
    appId: "1:703081209023:web:2c8fe23d53b8f0993c3a0a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

