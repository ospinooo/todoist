// Firebase db connection.
import firebase from 'firebase/app';
import 'firebase/firestore';
require('dotenv').config();

const config_params = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const firebaseConfig = firebase.initializeApp(config_params);

//Change the export name
// In the module we treat it as firebaseConfig because the firebase library calls it firebase
// But when we export it to the app we are working on we call it firebase
export { firebaseConfig as firebase };