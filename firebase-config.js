import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKmTuBeqneZyMrni9aKwLkXRBB018K2cI",
  authDomain: "bizcom-39d83.firebaseapp.com",
  projectId: "bizcom-39d83",
  storageBucket: "bizcom-39d83.firebasestorage.app",
  messagingSenderId: "514070473542",
  appId: "1:514070473542:web:09016635c87fa2a672d347",
  measurementId: "G-76S9PN60B7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const logOut = () => {
  return signOut(auth);
};

export const addIdea = (ideaData) => {
  return addDoc(collection(db, 'ideas'), ideaData);
};

export const listenToIdeas = (callback) => {
  const q = query(collection(db, 'ideas'), orderBy('timestamp', 'desc'));
  return onSnapshot(q, callback);
};

export const uploadFile = (file, path) => {
  const storageRef = ref(storage, path);
  return uploadBytes(storageRef, file);
};

export const getFileURL = (path) => {
  const storageRef = ref(storage, path);
  return getDownloadURL(storageRef);
};

export { auth, db, storage };