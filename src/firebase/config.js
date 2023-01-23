// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDth82op27K_Xbio6ljGmHWeA6TzGkpNC0",
  authDomain: "extramilk3-2023.firebaseapp.com",
  projectId: "extramilk3-2023",
  storageBucket: "extramilk3-2023.appspot.com",
  messagingSenderId: "740577579982",
  appId: "1:740577579982:web:ed3bf0567c32705067d19f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);