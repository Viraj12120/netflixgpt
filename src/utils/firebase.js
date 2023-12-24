// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDdhQ7yCeMlFq8Hj-9wc3z9ZnVjZSYvsRs",
	authDomain: "netflixgpt-6efb3.firebaseapp.com",
	projectId: "netflixgpt-6efb3",
	storageBucket: "netflixgpt-6efb3.appspot.com",
	messagingSenderId: "870991722306",
	appId: "1:870991722306:web:b471c3488220bf7dc37adb",
	measurementId: "G-LX1GZ21C4J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
