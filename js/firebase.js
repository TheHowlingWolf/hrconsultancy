var firebaseConfig = {
  apiKey: "AIzaSyAhUnnpmzzb-wD1KSNz91In0xZ3X6m3Adk",
  authDomain: "hrconsultancy-d09c5.firebaseapp.com",
  databaseURL: "https://hrconsultancy-d09c5.firebaseio.com",
  projectId: "hrconsultancy-d09c5",
  storageBucket: "hrconsultancy-d09c5.appspot.com",
  messagingSenderId: "584668704495",
  appId: "1:584668704495:web:bc4f316106274b3598f51a",
  measurementId: "G-VYKZVSTN2V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();


var jobDet;