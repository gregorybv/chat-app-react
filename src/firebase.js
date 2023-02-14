// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCArAu9MhKPJomT5L2iJL-un1YItBqMVDM",
  authDomain: "chat-app-42bb8.firebaseapp.com",
  projectId: "chat-app-42bb8",
  storageBucket: "chat-app-42bb8.appspot.com",
  messagingSenderId: "260979966849",
  appId: "1:260979966849:web:71ad9d3d3596a746399e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)