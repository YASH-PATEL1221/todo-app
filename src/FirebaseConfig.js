// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "new-project-c96b0.firebaseapp.com",
  projectId:"new-project-c96b0",
  storageBucket:"new-project-c96b0.appspot.com",
  messagingSenderId:  "265733650720",
  appId: "1:265733650720:web:fafab83c583878c151bf45",
  measurementId: "G-YNCB8RS5PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;