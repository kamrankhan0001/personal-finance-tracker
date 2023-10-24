// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy7zmHWyaVhQ0f0ruXxI-81R9a491Nb4c",
  authDomain: "financly-712ec.firebaseapp.com",
  projectId: "financly-712ec",
  storageBucket: "financly-712ec.appspot.com",
  messagingSenderId: "454464846320",
  appId: "1:454464846320:web:8b9d6e39027472ff820535",
  measurementId: "G-QQ595FELF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };