import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5bEbMaAt0I-9JE1YRF0y7C5XcfWkk5Lk",
  authDomain: "restosoft-3eed9.firebaseapp.com",
  projectId: "restosoft-3eed9",
  storageBucket: "restosoft-3eed9.appspot.com",
  messagingSenderId: "406127887741",
  appId: "1:406127887741:web:fc6079b95cc30a1851b814"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export {db}