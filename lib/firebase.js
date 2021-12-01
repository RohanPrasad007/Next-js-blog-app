// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3eVhD8UDXhvnempx1SFObOHfMiEQYC5Q",
  authDomain: "tinder-clone-29df9.firebaseapp.com",
  projectId: "tinder-clone-29df9",
  storageBucket: "tinder-clone-29df9.appspot.com",
  messagingSenderId: "906473023835",
  appId: "1:906473023835:web:9f980f57d2558e8ee3927e",
  measurementId: "G-62VNE2G82G",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();
