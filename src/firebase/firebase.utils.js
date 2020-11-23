import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBdekJVFfTAR-dC48K81jtQ79oZ1PDkf1M",
    authDomain: "e-commerce-project-30f23.firebaseapp.com",
    databaseURL: "https://e-commerce-project-30f23.firebaseio.com",
    projectId: "e-commerce-project-30f23",
    storageBucket: "e-commerce-project-30f23.appspot.com",
    messagingSenderId: "21013792597",
    appId: "1:21013792597:web:7b4e2b941a0f20077f91dc",
    measurementId: "G-6NG0FMVGFE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
export default firebase;