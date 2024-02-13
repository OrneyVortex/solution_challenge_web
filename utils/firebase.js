// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sustaintheglobe-db1b9.firebaseapp.com",
  projectId: "sustaintheglobe-db1b9",
  storageBucket: "sustaintheglobe-db1b9.appspot.com",
  messagingSenderId: "609215970977",
  appId: "1:609215970977:web:b78b72379eb1a5c0583ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);