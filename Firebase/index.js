import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDi9Pl0gsgFP0DlKAfN4gsbB8NjVxLBlBM",
  authDomain: "footgift-cb3cb.firebaseapp.com",
  databaseURL: "https://footgift-cb3cb.firebaseio.com",
  projectId: "footgift-cb3cb",
  storageBucket: "footgift-cb3cb.appspot.com",
  messagingSenderId: "983487491664",
  appId: "1:983487491664:web:9a380cbf7412e9e2026b55"
}; // Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { firebase, storage as default };
