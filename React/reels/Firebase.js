// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP6T0fd7J37lKdInR8j8s3vvzMYXvuYCE",
  authDomain: "reels-cc151.firebaseapp.com",
  projectId: "reels-cc151",
  storageBucket: "reels-cc151.appspot.com",
  messagingSenderId: "391651264820",
  appId: "1:391651264820:web:5e3920d5daea94fda93d61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
