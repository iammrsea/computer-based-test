import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYLVn7DNOd2gDuqTHhVEow6LTPDu5v7GI",
  authDomain: "master-cbt.firebaseapp.com",
  databaseURL: "https://master-cbt.firebaseio.com",
  projectId: "master-cbt",
  storageBucket: "master-cbt.appspot.com",
  messagingSenderId: "184040811370"
};
!firebase.apps.length ? firebase.initializeApp(config) : "";
export const auth = firebase.auth();
export const firestore = firebase.firestore();
