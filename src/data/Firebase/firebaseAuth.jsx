import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDculqLhW5GX5sPDE2nYkGv-XkAqvYCIF8",
  authDomain: "login-4828d.firebaseapp.com",
  projectId: "login-4828d",
  storageBucket: "login-4828d.appspot.com",
  messagingSenderId: "255663081680",
  appId: "1:255663081680:web:ebb4a8f32426958abaf6d5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default app