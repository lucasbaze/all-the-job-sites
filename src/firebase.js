//Firebase
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4_2mhUJcRlEC9-mPH7Nki9eKMYX8IG-I",
    authDomain: "all-the-job-sites-dev.firebaseapp.com",
    databaseURL: "https://all-the-job-sites-dev.firebaseio.com",
    projectId: "all-the-job-sites-dev",
    storageBucket: "all-the-job-sites-dev.appspot.com",
    messagingSenderId: "296703683737",
    appId: "1:296703683737:web:53c43298f545b33e3e1c08"
};

firebase.initializeApp(firebaseConfig);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
// firebase.auth().getRedirectResult().then(function(result) {
//     console.log(result);
//     console.log(firebase.auth().currentUser)
// });

export default firebase;
