// src/firebaseConfig.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Configurazione del progetto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyChPMsYUVgXVjMxMWKAfcpZbrZif0ufi0M",
    authDomain: "gstgrl-4e1e4.firebaseapp.com",
    projectId: "gstgrl-4e1e4",
    storageBucket: "gstgrl-4e1e4.appspot.com",
    messagingSenderId: "215988177462",
    appId: "1:215988177462:web:d6025374d6b4c13177a697",
    measurementId: "G-GVV2HRQ1F8"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
