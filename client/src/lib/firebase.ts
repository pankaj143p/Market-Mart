// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYc3cvsbIDoPHYl4wS43bxoLdoIGSCdYY",
  authDomain: "market-mart-9d738.firebaseapp.com",
  projectId: "market-mart-9d738",
  storageBucket: "market-mart-9d738.firebasestorage.app",
  messagingSenderId: "419756340243",
  appId: "1:419756340243:web:0c625caa1506be4ebafbe6",
  measurementId: "G-D3D8S3KNDM"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
