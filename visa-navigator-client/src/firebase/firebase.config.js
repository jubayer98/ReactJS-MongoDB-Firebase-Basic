// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9kH8yvB7htSnlDatevg9DnrlbBEchdk8",
    authDomain: "b10a10-83ee8.firebaseapp.com",
    projectId: "b10a10-83ee8",
    storageBucket: "b10a10-83ee8.firebasestorage.app",
    messagingSenderId: "73191807378",
    appId: "1:73191807378:web:646c8040125ee27179094b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;