import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

// IMPORTANT: Replace this with your own Firebase project's configuration.
// You can find this in the Firebase console:
// Project settings > General > Your apps > Web app > SDK setup and configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6nJyQhMFBLWWVHnTlUehun8de0BMjTZk",
  authDomain: "rsvp-system-2f6de.firebaseapp.com",
  projectId: "rsvp-system-2f6de",
  storageBucket: "rsvp-system-2f6de.firebasestorage.app",
  messagingSenderId: "59287727345",
  appId: "1:59287727345:web:273abf36e76a2cb68f8d50",
  measurementId: "G-8PKQMC1M49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);