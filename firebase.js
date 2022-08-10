import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,// gets the database
  ref, // referce spicific parts of database
  push, // generates a unique number
  set, // adds things to database 
  onValue, //shows things in the database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
    apiKey: "AIzaSyBIMWgL_LQhVyhJ85rsZavdsWNNsa25CKY",
    authDomain: "the-blogfirebase.firebaseapp.com",
    databaseURL: "https://the-blogfirebase-default-rtdb.firebaseio.com",
    projectId: "the-blogfirebase",
    storageBucket: "the-blogfirebase.appspot.com",
    messagingSenderId: "435455804595",
    appId: "1:435455804595:web:47a1752ffc80698adf5cc6",
    measurementId: "G-1TJKFCLZDG"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
