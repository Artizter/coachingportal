npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6hiBQJ_fUMqJKdn0nJKLDR-y619tiTWk",
  authDomain: "coaching-portal.firebaseapp.com",
  databaseURL: "https://coaching-portal-default-rtdb.firebaseio.com",
  projectId: "coaching-portal",
  storageBucket: "coaching-portal.appspot.com",
  messagingSenderId: "879482548176",
  appId: "1:879482548176:web:15bc9b7a4d7b8c35b093d5",
  measurementId: "G-T3HEPMTSNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
