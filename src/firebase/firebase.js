import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBimtElOkiiioA_bfN-LDMsJm-yjj6vS5Q",
  authDomain: "reservas-app-8e36b.firebaseapp.com",
  projectId: "reservas-app-8e36b",
  storageBucket: "reservas-app-8e36b.appspot.com",
  messagingSenderId: "5456503201",
  appId: "1:5456503201:web:89c649a05263cfce396be0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}