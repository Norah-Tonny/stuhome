// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGysRSTIV7ZCX6vm6qkGYLpe3RxIgxP48",
  authDomain: "stuhome-fbd53.firebaseapp.com",
  projectId: "stuhome-fbd53",
  storageBucket: "stuhome-fbd53.appspot.com",
  messagingSenderId: "702807356185",
  appId: "1:702807356185:web:9c3e984d68b0d686310b88",
  measurementId: "G-L6YKVX911Z",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
const firebaseApp = getApp();
export const storage = getStorage(app);
export const auth = getAuth(app);

