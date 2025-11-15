import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCK7gy19Cs7ZutwPSS8bNSLZiI-p-fNAo",
  authDomain: "react-coderhouse-e20c1.firebaseapp.com",
  projectId: "react-coderhouse-e20c1",
  storageBucket: "react-coderhouse-e20c1.firebasestorage.app",
  messagingSenderId: "391357564955",
  appId: "1:391357564955:web:7c93f4bc49256eaa4d50be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la instancia de Firebase
export const db = getFirestore(app);