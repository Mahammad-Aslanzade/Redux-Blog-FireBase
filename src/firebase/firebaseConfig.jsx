import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyD-OtI_be0iMCcq_d7c2krdplZmejAtGQI",
  authDomain: "blog-app-1-6f820.firebaseapp.com",
  databaseURL: "https://blog-app-1-6f820-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-1-6f820",
  storageBucket: "blog-app-1-6f820.appspot.com",
  messagingSenderId: "512364973938",
  appId: "1:512364973938:web:c38a653d7ef1b6cca757eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}