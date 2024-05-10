// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw7Pthf68TAqkZO3X0h8adb0JQhswxcMw",
  authDomain: "careercove-d1a01.firebaseapp.com",
  projectId: "careercove-d1a01",
  storageBucket: "careercove-d1a01.appspot.com",
  messagingSenderId: "778231421653",
  appId: "1:778231421653:web:21dd202f26c99eb14a205c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;