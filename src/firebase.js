import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3DISFjUSTyZj0Upp4Muk7V0lrGRee2go",
  authDomain: "tinder-clone-by-mukund.firebaseapp.com",
  databaseURL: "https://tinder-clone-by-mukund.firebaseio.com",
  projectId: "tinder-clone-by-mukund",
  storageBucket: "tinder-clone-by-mukund.appspot.com",
  messagingSenderId: "126177032333",
  appId: "1:126177032333:web:55fbe5a8e4845ba41acac4",
  measurementId: "G-8J2NT8KD4X",
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;
