// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8HJn_-PlZBEydl5lGjOv2l4rK_srTFF4",
  authDomain: "ph-ema-john-790ad.firebaseapp.com",
  projectId: "ph-ema-john-790ad",
  storageBucket: "ph-ema-john-790ad.appspot.com",
  messagingSenderId: "112698675858",
  appId: "1:112698675858:web:0a0c6cb60ed41de6d04c4b",
  measurementId: "G-T33KRBMXSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;