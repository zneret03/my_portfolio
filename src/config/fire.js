  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/firestore'

  require('dotenv').config();

  var firebaseConfig = {
    apiKey: "AIzaSyCongVUJ-XOlZXfKIs1ljf-YGV7aELLtK0",
    authDomain: "my-portfolio-9cf20.firebaseapp.com",
    databaseURL: "https://my-portfolio-9cf20.firebaseio.com",
    projectId: "my-portfolio-9cf20",
    storageBucket: "my-portfolio-9cf20.appspot.com",
    messagingSenderId: "63695806463",
    appId: "1:63695806463:web:4edf5ee0d09b0ee12e51ca",
    measurementId: "G-RDQQKM7QT0"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  const db = fire.firestore();
  db.settings({timestampsInSnapshots : true});

  export default db;