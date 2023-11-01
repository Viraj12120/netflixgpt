// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvAZXij5vFQnO1OKczioY4yovEhuv1WOU",
  authDomain: "netflixgpt-f67a6.firebaseapp.com",
  projectId: "netflixgpt-f67a6",
  storageBucket: "netflixgpt-f67a6.appspot.com",
  messagingSenderId: "295578851236",
  appId: "1:295578851236:web:7c05a8b4cc161841cd9331",
  measurementId: "G-L58ZTCSJCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
