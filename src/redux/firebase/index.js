import firebase from "@firebase/app";
import "@firebase/auth";
import RSF from "redux-saga-firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8RSIps_HVwo3w-BoBpK4xV_EiK3_OrI0",
    authDomain: "palmercao-3c01f.firebaseapp.com",
    databaseURL: "https://palmercao-3c01f.firebaseio.com",
    projectId: "palmercao-3c01f",
    storageBucket: "palmercao-3c01f.appspot.com",
    messagingSenderId: "1023446056187",
    appId: "1:1023446056187:web:a159ad99cfdabb781d445e",
    measurementId: "G-ZFCKDQ4YWF"
});
const rsf = new RSF(firebaseApp);
export default rsf;
