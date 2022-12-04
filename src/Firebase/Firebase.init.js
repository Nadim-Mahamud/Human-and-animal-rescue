import React from "react";
import { initializeApp } from "firebase/app";
// require('dotenv').config()

const InitializeConfig = () => {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        // apiKey: process.env.REACT_APP_API_KEY,
        // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        // projectId: process.env.REACT_APP_PROJECT_ID,
        // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        // appId: process.env.REACT_APP_APP_ID,
        apiKey: "AIzaSyA1g3Ddw8BmdudHucbCCYR3ILOPfHCR5iY",
        authDomain: "great-assists.firebaseapp.com",
        projectId: "great-assists",
        storageBucket: "great-assists.appspot.com",
        messagingSenderId: "22651602888",
        appId: "1:22651602888:web:42eb2b1c2180165e63a2fd"
    };

    console.log(firebaseConfig);
    // Initialize Firebase
    initializeApp(firebaseConfig);
};

export default InitializeConfig;
