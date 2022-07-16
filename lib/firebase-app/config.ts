import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEdJTrlErtv6Vuu5tpuSVWIp-q8IJiQbs",
  authDomain: "minitoon-13440.firebaseapp.com",
  projectId: "minitoon-13440",
  storageBucket: "minitoon-13440.appspot.com",
  messagingSenderId: "1017297303523",
  appId: "1:1017297303523:web:1e00a41df073b7a2d292d6",
  measurementId: "G-6KV97THGJE",
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
