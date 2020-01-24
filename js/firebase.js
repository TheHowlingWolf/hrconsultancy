var firebaseConfig = {
    apiKey: "AIzaSyC5lE9ltaYZ6xit8VGUiUYhWFOvUviCpnQ",
    authDomain: "hrconsultancy-e0437.firebaseapp.com",
    databaseURL: "https://hrconsultancy-e0437.firebaseio.com",
    projectId: "hrconsultancy-e0437",
    storageBucket: "hrconsultancy-e0437.appspot.com",
    messagingSenderId: "930495894358",
    appId: "1:930495894358:web:e90e3790639aa2e5d7fcf7",
    measurementId: "G-GZ8H8PR06S"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
console.log(db);

