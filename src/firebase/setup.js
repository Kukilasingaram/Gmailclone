
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDej4eiU2cnm2l0Yxqv30GMPhgljsfRVKs",
  authDomain: "clone-32ce7.firebaseapp.com",
  projectId: "clone-32ce7",
  storageBucket: "clone-32ce7.appspot.com",
  messagingSenderId: "989698803477",
  appId: "1:989698803477:web:cf378f4790ba1fdc7c8b1c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)