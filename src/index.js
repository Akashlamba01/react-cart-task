import * as React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqy5KH2QoFTbeLS6Orh3Av3KP8-8nu_bk",
  authDomain: "cart-1499f.firebaseapp.com",
  projectId: "cart-1499f",
  storageBucket: "cart-1499f.appspot.com",
  messagingSenderId: "875971225458",
  appId: "1:875971225458:web:27864118f0b2f88796dfeb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const ref = firebase.firestore().collection("cart");
ReactDOM.render(<App />, document.getElementById("root"));
