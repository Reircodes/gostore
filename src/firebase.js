
import { initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyAIu19LF-24Sd9P4v6Y7QX1evMSQJNYklo",
  authDomain: "gostore-e0f6f.firebaseapp.com",
  projectId: "gostore-e0f6f",
  storageBucket: "gostore-e0f6f.appspot.com",
  messagingSenderId: "785665028679",
  appId: "1:785665028679:web:8f28cbade4345df7e53762",
  measurementId: "G-W84V6BTJLC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




  export default db;