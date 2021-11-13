import React from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const InitializeFirebase = () => {
    initializeApp(firebaseConfig)
};

export default InitializeFirebase;