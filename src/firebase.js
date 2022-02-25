import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAf1a7vAqDw4DCGKZLZ588Y9IQLKZ42peI",
  authDomain: "chat-tailwind.firebaseapp.com",
  projectId: "chat-tailwind",
  storageBucket: "chat-tailwind.appspot.com",
  messagingSenderId: "738945952989",
  appId: "1:738945952989:web:891250200e2153a812ff34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const writeUserData = ({ name }, text) => {
  const db = getDatabase();
  push(ref(db, "massage"), {
    name,
    text: text,
  });
};
