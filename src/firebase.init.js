// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv5c03R3PTv9KUtDnkSFfw-ozrYPypDrk",
    authDomain: "ema-jhon-simple-d4c20.firebaseapp.com",
    projectId: "ema-jhon-simple-d4c20",
    storageBucket: "ema-jhon-simple-d4c20.appspot.com",
    messagingSenderId: "582423856546",
    appId: "1:582423856546:web:06cc304a605c86d04adefb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;