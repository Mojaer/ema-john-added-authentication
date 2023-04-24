// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq5SPvL9HuMQXt4m1WHH8z8mDoOh3MijU",
    authDomain: "ema-john-authentication-d383e.firebaseapp.com",
    projectId: "ema-john-authentication-d383e",
    storageBucket: "ema-john-authentication-d383e.appspot.com",
    messagingSenderId: "134865827891",
    appId: "1:134865827891:web:9beb5650f830eeca218b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;