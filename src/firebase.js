import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyB44kcIGsBP3yIP_iejHvyR5_lRmsQ6HSk",
    authDomain: "alassane-s-porfolio.firebaseapp.com",
    projectId: "alassane-s-porfolio",
    storageBucket: "alassane-s-porfolio.firebasestorage.app",
    messagingSenderId: "150364215059",
    appId: "1:150364215059:web:2b1b7d9695707bfab86ce6",
    measurementId: "G-SC5Q78L0E4"
  };

// initialiser Firebase & Analytics
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
