// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// import  from 'firebase/firestore/lite';

// Utilizei do firebsae para autenticar o usuário

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAkxT6gKRT_8V7o67aIPYxm1BPgrt2fwPw',
    authDomain: 'gentecultura.firebaseapp.com',
    projectId: 'gentecultura',
    storageBucket: 'gentecultura.appspot.com',
    messagingSenderId: '283207464607',
    appId: '1:283207464607:web:e423c6fa48432ee1a114aa',
    databaseURL: 'https://gentecultura-default-rtdb.firebaseio.com',
};

export const FIREBASE_APP = initializeApp(firebaseConfig, '@GenteCultura');

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const DATABASE = getFirestore(FIREBASE_APP);
