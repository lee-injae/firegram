import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBG40sxYQjUreYDlXjoLwaAMcbOp12s0rQ",
    authDomain: "ilee-firegram-c5c9a.firebaseapp.com",
    databaseURL: "https://ilee-firegram-c5c9a.firebaseio.com",
    projectId: "ilee-firegram-c5c9a",
    storageBucket: "ilee-firegram-c5c9a.appspot.com",
    messagingSenderId: "1003635173513",
    appId: "1:1003635173513:web:69d8fb2c5f289c4ba6be58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore};

