import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuv43mPZS2B1JG4LJuBrtrQpYhiBhmv3w",
  authDomain: "react-coder-javier.firebaseapp.com",
  projectId: "react-coder-javier",
  storageBucket: "react-coder-javier.appspot.com",
  messagingSenderId: "710605389324",
  appId: "1:710605389324:web:63467f34349abf733c3829"
};

initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
