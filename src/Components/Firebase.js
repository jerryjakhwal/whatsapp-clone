import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChhLiUnDgxuCJBmgaj7-RAj32MjZz-oxw",
    authDomain: "whatsapp-clone-8e99b.firebaseapp.com",
    projectId: "whatsapp-clone-8e99b",
    storageBucket: "whatsapp-clone-8e99b.appspot.com",
    messagingSenderId: "351125128731",
    appId: "1:351125128731:web:a419695c3a4d435c2a5abe",
    measurementId: "G-JBEEXVH4RH"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = app.firestore();
  const googleProvider = new firebase.auth.GoogleAuthProvider();


  export { auth, googleProvider }
  export default db;