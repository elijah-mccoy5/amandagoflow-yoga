import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWndOTbHT4WGG1xNQ_IDGZpYjY8IKbOj8",
    authDomain: "amandagoflow-8627c.firebaseapp.com",
    projectId: "amandagoflow-8627c",
    storageBucket: "amandagoflow-8627c.appspot.com",
    messagingSenderId: "453545938519",
    appId: "1:453545938519:web:9c32f92c1dbb6def82dd12",
    measurementId: "G-0RJLEFB50H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();