import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnedrg7oaxuctallcR1_gSLJiuKIf-h54",
  authDomain: "flames-calculator-app.firebaseapp.com",
  projectId: "flames-calculator-app",
  storageBucket: "flames-calculator-app.appspot.com",
  messagingSenderId: "183911938154",
  appId: "1:183911938154:web:f5d8d898d24ed719703213",
  measurementId: "G-VN6CD44N33"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
export default db;