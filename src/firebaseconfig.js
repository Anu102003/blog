// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDaWu1TxoU1NbB_sANwY-DF6pdZu12LKR4",
  authDomain: "blog-8d3a0.firebaseapp.com",
  projectId: "blog-8d3a0",
  storageBucket: "blog-8d3a0.appspot.com",
  messagingSenderId: "845658206411",
  appId: "1:845658206411:web:2fed4ae681759c56a8eb4e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
