// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwbzdYPI3RvA2bMhdwVLJPlyV2SRtVDGs",
  authDomain: "rsvp-invite-7f77c.firebaseapp.com",
  projectId: "rsvp-invite-7f77c",
  storageBucket: "rsvp-invite-7f77c.firebasestorage.app",
  messagingSenderId: "418796773485",
  appId: "1:418796773485:web:71c7518bea348cbec05f64",
  measurementId: "G-4WVXRWNT6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
