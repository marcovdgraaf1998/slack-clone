import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4kn0WyB9yZqmabg2_PC2iOmdEURrcokE",
    authDomain: "slack-clone-9e5bf.firebaseapp.com",
    projectId: "slack-clone-9e5bf",
    storageBucket: "slack-clone-9e5bf.appspot.com",
    messagingSenderId: "373549789510",
    appId: "1:373549789510:web:13dc1f262c237564daf547",
    measurementId: "G-PJT32Q4DKY"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;