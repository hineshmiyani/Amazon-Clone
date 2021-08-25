import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLnzxvlAkRlZt1mYHsArEc7QiulnwEjuI",
  authDomain: "auth-d681b.firebaseapp.com",
  projectId: "auth-d681b",
  storageBucket: "auth-d681b.appspot.com",
  messagingSenderId: "751910558477",
  appId: "1:751910558477:web:23478105dd7fc100392e44",
};

// App intialized only first time so, igonore next time app initalization
// Apply below condition
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
