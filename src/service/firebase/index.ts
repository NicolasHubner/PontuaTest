// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAkxT6gKRT_8V7o67aIPYxm1BPgrt2fwPw',
    authDomain: 'gentecultura.firebaseapp.com',
    projectId: 'gentecultura',
    storageBucket: 'gentecultura.appspot.com',
    messagingSenderId: '283207464607',
    appId: '1:283207464607:web:e423c6fa48432ee1a114aa',
    databaseURL: 'https://gentecultura-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
export const getFirebaseClient = () => {
    const app = initializeApp(firebaseConfig);
    return app;
};
