import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "imdb-movie-clone.firebaseapp.com",
  projectId: "imdb-movie-clone",
  storageBucket: "imdb-movie-clone.appspot.com",
  messagingSenderId: "355122046068",
  appId: "1:355122046068:web:a2bb0fbb9bdb18b7499d21",
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export default app;

