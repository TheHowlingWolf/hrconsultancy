var firebaseConfig = {
    apiKey: "AIzaSyDpZmECT_OEwLME-QzZ8GA2F-vBs_j19nM",
    authDomain: "hrconsultancy-e17f4.firebaseapp.com",
    databaseURL: "https://hrconsultancy-e17f4.firebaseio.com",
    projectId: "hrconsultancy-e17f4",
    storageBucket: "hrconsultancy-e17f4.appspot.com",
    messagingSenderId: "346406916926",
    appId: "1:346406916926:web:19181e6b3f90fd62ecd26f",
    measurementId: "G-Y44BJ2ZVVR"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
console.log(db);

