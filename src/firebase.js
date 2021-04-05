// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCmJsTIzBembh-ahRHxTNWQyPvTndv4528",
    authDomain: "slack-clone-a1a85.firebaseapp.com",
    projectId: "slack-clone-a1a85",
    storageBucket: "slack-clone-a1a85.appspot.com",
    messagingSenderId: "411182360442",
    appId: "1:411182360442:web:a11a8d3bdc3607deb458c3",
    measurementId: "G-NCMV8T86P8"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider

export{auth,provider};
export default db;