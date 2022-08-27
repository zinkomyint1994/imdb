// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ4hrpVxRZgHbLI6JqseI2LPHvKTtpB9w",
  authDomain: "netflix-nextjs-tailwind-f780d.firebaseapp.com",
  projectId: "netflix-nextjs-tailwind-f780d",
  storageBucket: "netflix-nextjs-tailwind-f780d.appspot.com",
  messagingSenderId: "582587454322",
  appId: "1:582587454322:web:8aa26b6f5cff848195c3eb",
  measurementId: "G-YQNDJFMBSS"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }