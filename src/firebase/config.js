import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import {getAuth} from  'firebase/auth'
import {getStorage} from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd8x8fZJzEEoq8WFmuIeOV1sJ9qUI63Bs",
    authDomain: "olex-clone-d3f6f.firebaseapp.com",
    projectId: "olex-clone-d3f6f",
    storageBucket: "olex-clone-d3f6f.appspot.com",
    messagingSenderId: "907829937157",
    appId: "1:907829937157:web:511732259c79eaf5d7886c",
    measurementId: "G-QWL2PNFSG5"
  };

  // initialize firebase application
export const appConfig = initializeApp(firebaseConfig);

// initialize firestore database

export const firestoreConfig = getFirestore(appConfig);

export const authConfig = getAuth(appConfig)

export const storageConfig = getStorage(appConfig)
