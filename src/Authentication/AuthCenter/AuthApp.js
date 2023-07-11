// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKBHkBB13PqwHNmSLrOuUjKUgjgvtz7rA",
    authDomain: "sbs-generator.firebaseapp.com",
    projectId: "sbs-generator",
    storageBucket: "sbs-generator.appspot.com",
    messagingSenderId: "629172391124",
    appId: "1:629172391124:web:a0d6fc36041398ff0f3f41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;