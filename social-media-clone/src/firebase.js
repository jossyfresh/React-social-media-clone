import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSd6Ln8MjUfkyjPeXMl4sk_TAE1qpGQz8",
  authDomain: "social-media-clone-d9078.firebaseapp.com",
  projectId: "social-media-clone-d9078",
  storageBucket: "social-media-clone-d9078.appspot.com",
  messagingSenderId: "407057180569",
  appId: "1:407057180569:web:0927d35f56672ad56ad508",
  measurementId: "G-E0N5810NFD",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);
export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  app,
  firestore,
};
