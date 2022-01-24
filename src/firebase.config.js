// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCu69T94g-jlwKqKVVU-ulHsoLH5FnDMJA",
    authDomain: "react-recipe-app-6973a.firebaseapp.com",
    projectId: "react-recipe-app-6973a",
    storageBucket: "react-recipe-app-6973a.appspot.com",
    messagingSenderId: "687577018295",
    appId: "1:687577018295:web:ea33ad1a1f8808d8b24232",
    measurementId: "G-JXS0E79PWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }