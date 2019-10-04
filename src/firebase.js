//Firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//
//Dev
// const firebaseConfig = {
//     apiKey: 'AIzaSyA4_2mhUJcRlEC9-mPH7Nki9eKMYX8IG-I',
//     authDomain: 'all-the-job-sites-dev.firebaseapp.com',
//     databaseURL: 'https://all-the-job-sites-dev.firebaseio.com',
//     projectId: 'all-the-job-sites-dev',
//     storageBucket: 'all-the-job-sites-dev.appspot.com',
//     messagingSenderId: '296703683737',
//     appId: '1:296703683737:web:53c43298f545b33e3e1c08',
// };

//
//Prod
var firebaseConfig = {
    apiKey: 'AIzaSyDwz7UiIapA0x2AsK_F_u_a-RggtM-Eqrg',
    authDomain: 'all-the-job-sites-prod.firebaseapp.com',
    databaseURL: 'https://all-the-job-sites-prod.firebaseio.com',
    projectId: 'all-the-job-sites-prod',
    storageBucket: 'all-the-job-sites-prod.appspot.com',
    messagingSenderId: '337071228204',
    appId: '1:337071228204:web:a27b9c32ba881df65dd889',
    measurementId: 'G-6223H8E62V',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
