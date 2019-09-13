// Firebase db connection.
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCIhmVqIlMcTMjp02vaukUjjNI8rHi1nQc",
  authDomain: "todoist-6a2bb.firebaseapp.com",
  databaseURL: "https://todoist-6a2bb.firebaseio.com",
  projectId: "todoist-6a2bb",
  storageBucket: "todoist-6a2bb.appspot.com",
  messagingSenderId: "425295847230",
  appId: "1:425295847230:web:968959d1c2b01c77b6966f"
})

//Change the export name
// In the module we treat it as firebaseConfig because the firebase library calls it firebase
// But when we export it to the app we are working on we call it firebase
export { firebaseConfig as firebase };