// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh60ZDcZaR5p87c6MnH6ALbz9UDpSynLg",
  authDomain: "rate-your-product-auth.firebaseapp.com",
  projectId: "rate-your-product-auth",
  storageBucket: "rate-your-product-auth.appspot.com",
  messagingSenderId: "778173088650",
  appId: "1:778173088650:web:1199436f7f1a557cc3be73"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const auth = getAuth(fire);

export default auth;