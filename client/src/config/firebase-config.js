import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD-MlphZ13QzF8x6ShKQScMeaLv-yqhsPg",
  authDomain: "masai-lms.firebaseapp.com",
  projectId: "masai-lms",
  storageBucket: "masai-lms.appspot.com",
  messagingSenderId: "936107177589",
  appId: "1:936107177589:web:427384fb93188cb986aa3c",
  measurementId: "G-34K2E7PB55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);