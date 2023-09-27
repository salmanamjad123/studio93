import { initializeApp } from "firebase/app";
import {getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSHxX6qdbhUmMYm-YhVgQI7G52EVvVuYI",
  authDomain: "studio93-575e6.firebaseapp.com",
  projectId: "studio93-575e6",
  storageBucket: "studio93-575e6.appspot.com",
  messagingSenderId: "86801271546",
  appId: "1:86801271546:web:9851576bcedc1d00625743",
  measurementId: "G-V397HGE7TF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);