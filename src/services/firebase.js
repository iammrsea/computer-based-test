import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHXn83pDX3ec3Z8qX6du3g_X6BqK1YXgo",
  authDomain: "blogapp-c20e3.firebaseapp.com",
  databaseURL: "https://blogapp-c20e3.firebaseio.com",
  projectId: "blogapp-c20e3",
  storageBucket: "blogapp-c20e3.appspot.com",
  messagingSenderId: "602741533218"
};
!firebase.apps.length ? firebase.initializeApp(config) : "";
export const auth = firebase.auth();
export const firestore = firebase.firestore();
