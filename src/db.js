// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmOKGt1wJ4Okq-n-VcbVeYSi7sEWA-SBw",
  authDomain: "onlineshoppingfrontend-reactjs.firebaseapp.com",
  databaseURL:
    "https://onlineshoppingfrontend-reactjs-default-rtdb.firebaseio.com",
  projectId: "onlineshoppingfrontend-reactjs",
  storageBucket: "onlineshoppingfrontend-reactjs.appspot.com",
  messagingSenderId: "960581919838",
  appId: "1:960581919838:web:fed023b7c43c158e48c0cf",
  measurementId: "G-3286V8NN5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
