import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmLAVCVFTCYYG42UnbHQbUOEmyzO-80cI",
  authDomain: "proyecto-react-dgr.firebaseapp.com",
  projectId: "proyecto-react-dgr",
  storageBucket: "proyecto-react-dgr.appspot.com",
  messagingSenderId: "203180629981",
  appId: "1:203180629981:web:a352d871f9f85953d8a034"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
