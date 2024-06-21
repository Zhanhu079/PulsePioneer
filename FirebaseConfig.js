// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNW-Ie92BWHYDxId6VAZzFZrgdLVCamzs",
  authDomain: "pulse-pioneer.firebaseapp.com",
  projectId: "pulse-pioneer",
  storageBucket: "pulse-pioneer.appspot.com",
  messagingSenderId: "641483172061",
  appId: "1:641483172061:web:13e40600ba565c2da29334",
  measurementId: "G-M066NKXV9B"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);