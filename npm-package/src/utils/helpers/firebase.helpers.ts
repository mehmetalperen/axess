import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3Fqivr7bS-A6_TiChxl2BhDKQxkKXUEA",
    authDomain: "axess-5b30b.firebaseapp.com",
    databaseURL: "https://axess-5b30b.firebaseio.com",
    projectId: "axess-5b30b",
    storageBucket: "axess-5b30b.appspot.com",
    messagingSenderId: "830541788094",
    appId: "1:830541788094:web:feacc712dfc4dad8ecffef",
    measurementId: "G-KJCZGMJKZ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
  