import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbw-MTZQGWKWPEX2BGz7EBk2A_QZQM1M0",
  authDomain: "clone-674d6.firebaseapp.com",
  projectId: "clone-674d6",
  storageBucket: "clone-674d6.firebasestorage.app",
  messagingSenderId: "102361656144",
  appId: "1:102361656144:web:6911ce22f2fc52a31b5a55",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
