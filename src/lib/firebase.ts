import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (hardcoded as requested for static export)
const firebaseConfig = {
  apiKey: "AIzaSyB07c5ehb9CV4i6mYrR8zPfM_d6KttjVlU",
  authDomain: "milestone-95d76.firebaseapp.com",
  projectId: "milestone-95d76",
  storageBucket: "milestone-95d76.firebasestorage.app",
  messagingSenderId: "417561933725",
  appId: "1:417561933725:web:261688d5031778019e6174",
  measurementId: "G-EEL8GH4X60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;