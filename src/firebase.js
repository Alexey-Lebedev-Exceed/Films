import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyBtvARnOqqTABzM2QM0yWpHnmA-wrLI4mE",
  authDomain: "test-films-d5c4b.firebaseapp.com",
  databaseURL: "https://test-films-d5c4b-default-rtdb.firebaseio.com",
  projectId: "test-films-d5c4b",
  storageBucket: "test-films-d5c4b.appspot.com",
  messagingSenderId: "1060162311424",
  appId: "1:1060162311424:web:8a012f725a9709dffb8fe5",
  measurementId: "G-LRZM6R8MDN"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, storage };
export default db;