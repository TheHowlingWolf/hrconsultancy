var firebaseConfig = {
  apiKey: "AIzaSyCjQu04WUnLlSqr50hc9idk4Vi4cliKeYo",
  authDomain: "hrconsultancy264.firebaseapp.com",
  databaseURL: "https://hrconsultancy264.firebaseio.com",
  projectId: "hrconsultancy264",
  storageBucket: "hrconsultancy264.appspot.com",
  messagingSenderId: "464800183345",
  appId: "1:464800183345:web:6320957e799be30b4a1110",
  measurementId: "G-RFRGLBWS5R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();


var jobDet;