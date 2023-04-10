import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { doc, setDoc, collection } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signIn } from "./redux/features/SignInSlice";
import { useDispatch, useSelector } from "react-redux";
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
export const auth = getAuth(app);
export const storage = getStorage(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  app,
  firestore,
};

export const signInWithGoogle = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      const names = result.user.displayName.split(" ");
      const firstName = names[0];
      const lastName = names[1];
      const email = result.user.email;
      const photo = result.user.photoURL;
      const uid = result.user.uid;
      const user = {
        firstName,
        lastName,
        email,
        photo,
        uid,
      };
      setDoc(doc(firestore, "users", user.uid), user, { merge: true });
    })
    .catch((err) => {
      console.log(err);
    });
};
