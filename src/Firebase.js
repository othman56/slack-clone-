import firebase, { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1duH2Ho9ilBzITq8WsZAy4Vk8Duwsgfc",
  authDomain: "slack-clone-dff11.firebaseapp.com",
  projectId: "slack-clone-dff11",
  storageBucket: "slack-clone-dff11.appspot.com",
  messagingSenderId: "165373107525",
  appId: "1:165373107525:web:2188814d363711ce6c322c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colRef = collection(db, "rooms");

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, colRef };
