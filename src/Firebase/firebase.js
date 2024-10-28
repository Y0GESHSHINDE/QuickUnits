// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4MZtBFwwrY3pTYmomgkA1KFDN_L6JZAY",
  authDomain: "quickunits-57e72.firebaseapp.com",
  projectId: "quickunits-57e72",
  storageBucket: "quickunits-57e72.appspot.com",
  messagingSenderId: "372469011462",
  appId: "1:372469011462:web:7dc8a47d1ff5092a335f87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);