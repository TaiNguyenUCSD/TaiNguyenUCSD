// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyAzmxB4QfJGPEciUXh5lf3Nr6xwOOl81dI",
  authDomain: "suitefinder-cf0fe.firebaseapp.com",
  projectId: "suitefinder-cf0fe",
  storageBucket: "suitefinder-cf0fe.appspot.com",
  messagingSenderId: "923975331245",
  appId: "1:923975331245:web:0af52cc9310438e5158524",
  measurementId: "G-RXRMNHCW4L",
  databaseURL: "https://suitefinder-cf0fe-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
