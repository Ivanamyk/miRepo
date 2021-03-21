import firebaseAuth from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyCoZt0uZSkRrJQnUFWh_u2gi_w7C6JrM",
    authDomain: "todo-70f99.firebaseapp.com",
    databaseURL: "https://todo-70f99-default-rtdb.firebaseio.com",
    projectId: "todo-70f99",
    storageBucket: "todo-70f99.appspot.com",
    messagingSenderId: "195984864368",
    appId: "1:195984864368:web:67664027c2f2cd298470b5",
    measurementId: "G-FHL9LGHBY5"
};

firebaseAuth.initializeApp(firebaseConfig);
export { firebaseAuth };