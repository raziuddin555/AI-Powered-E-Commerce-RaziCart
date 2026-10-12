import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "rcart-cea0a.firebaseapp.com",
    projectId: "razicart-cea0a",
    storageBucket: "razicart-cea0a.firebasestorage.app",
    messagingSenderId: "840023689806",
    appId: "1:840023689806:web:9ff28763c18df6229c111f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export { auth, provider }