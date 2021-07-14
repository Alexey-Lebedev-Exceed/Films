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

// var firebaseConfig = {
//   apiKey: "AIzaSyBXeWO6w5rqqHlUU-GDCUOnbzYPMJAAMG4",
//   authDomain: "test-test-ff98e.firebaseapp.com",
//   databaseURL: "https://test-test-ff98e-default-rtdb.firebaseio.com",
//   projectId: "test-test-ff98e",
//   storageBucket: "test-test-ff98e.appspot.com",
//   messagingSenderId: "204414881646",
//   appId: "1:204414881646:web:ffc686747367e16ccc3b7f",
//   measurementId: "G-KRQC7H3W8D"
// };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, storage };
export default db;