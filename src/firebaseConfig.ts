// Import the functions you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your Firebase config from the console
const firebaseConfig = {
  apiKey: "AIzaSyBZIVYAUnc3zTChvB9rPn2guWmkNJBq7Fk",
  authDomain: "quizgame-102dd.firebaseapp.com",
  projectId: "quizgame-102dd",
  storageBucket: "quizgame-102dd.firebasestorage.app",
  messagingSenderId: "724071272945",
  appId: "1:724071272945:web:06080e99cb91da497fb450",
  measurementId: "G-R92T2B96RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);
export const rtdb = getDatabase(app);