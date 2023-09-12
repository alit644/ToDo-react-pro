// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP4DgKapSfC9Kw_uZz6KmxdtJ6PtnMCAQ",
  authDomain: "react-level2-a7312.firebaseapp.com",
  projectId: "react-level2-a7312",
  storageBucket: "react-level2-a7312.appspot.com",
  messagingSenderId: "614335255028",
  appId: "1:614335255028:web:92daf9272ff76d805f69a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);