var firebaseConfig = {
    apiKey: "AIzaSyBBS5X5bp9SMnXAZJtFCOwlHbumxWg33JY",
    authDomain: "hrconsultancy-7684c.firebaseapp.com",
    databaseURL: "https://hrconsultancy-7684c.firebaseio.com",
    projectId: "hrconsultancy-7684c",
    storageBucket: "hrconsultancy-7684c.appspot.com",
    messagingSenderId: "784361293465",
    appId: "1:784361293465:web:f632aa14a0be16547c5a08",
    measurementId: "G-P2C74F435J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

