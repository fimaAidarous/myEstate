// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "haldha-estate.firebaseapp.com",
  projectId: "haldha-estate",
  storageBucket: "haldha-estate.appspot.com",
  messagingSenderId: "1016512642679",
  appId: "1:1016512642679:web:b4572986e2a5721d86d072"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);