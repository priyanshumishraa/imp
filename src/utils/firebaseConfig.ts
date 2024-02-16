import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAmaAN8Swr_cU8xsYZDwhD1MkfL9ILiovQ",
  authDomain: "unacadmy-clone.firebaseapp.com",
  projectId: "unacadmy-clone",
  storageBucket: "unacadmy-clone.appspot.com",
  messagingSenderId: "870519077867",
  appId: "1:870519077867:web:d1ccde46b56ff93f6637ae",
  measurementId: "G-EJK41TXYXS"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
