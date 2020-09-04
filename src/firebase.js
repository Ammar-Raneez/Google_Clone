import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA14Q9iFdemakBfETqeTZKAZmKwFVLaoKM",
    authDomain: "clone-62b99.firebaseapp.com",
    databaseURL: "https://clone-62b99.firebaseio.com",
    projectId: "clone-62b99",
    storageBucket: "clone-62b99.appspot.com",
    messagingSenderId: "384943536036",
    appId: "1:384943536036:web:71dce4069a0a7b8b493331",
    measurementId: "G-TK5XC8HT0M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

//for google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;