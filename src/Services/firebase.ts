import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCB6zy-X7GbCnF9Qoc4gYTI2ua1gEh8fp8",
    authDomain: "fut4you-f051b.firebaseapp.com",
    databaseURL: "https://fut4you-f051b-default-rtdb.firebaseio.com",
    projectId: "fut4you-f051b",
    storageBucket: "fut4you-f051b.appspot.com",
    messagingSenderId: "1093906435301",
    appId: "1:1093906435301:web:f5ec82210bc45412c4980c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();