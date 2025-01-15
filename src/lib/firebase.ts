import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyDO614jcIdpyivzsz15jmBP44i_sym8fmk",
  authDomain: "mcqbook-84567.firebaseapp.com",
  projectId: "mcqbook-84567",
  storageBucket: "mcqbook-84567.firebasestorage.app",
  messagingSenderId: "805765000912",
  appId: "1:805765000912:web:d3bbcc1538f75ade03f8d5",
  // measurementId: "G-WHXGWTGCEW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);