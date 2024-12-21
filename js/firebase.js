// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7yPGx-prx7eF3_xiewvjPwABuZ_ycYRU",
    authDomain: "red-apple-apartments.firebaseapp.com",
    projectId: "red-apple-apartments",
    storageBucket: "red-apple-apartments.firebasestorage.app",
    messagingSenderId: "475393233321",
    appId: "1:475393233321:web:c7e2cb76e8d9fe68cd74b8",
    measurementId: "G-4J20HYQ2GM"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);