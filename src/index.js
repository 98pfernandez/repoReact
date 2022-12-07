import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAI9WPCeJvvKwX9ILeB5jRnqutI7dl-Ky4",
  authDomain: "reactpablo-bd502.firebaseapp.com",
  projectId: "reactpablo-bd502",
  storageBucket: "reactpablo-bd502.appspot.com",
  messagingSenderId: "295609224786",
  appId: "1:295609224786:web:aa176b041e4ac7b1a2998b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
