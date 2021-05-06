import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWzHn0TMdXh1mrty0sNWvQxyhtvB3sY7M",
  authDomain: "signinout-ee69.firebaseapp.com",
  projectId: "signinout-ee69",
  storageBucket: "signinout-ee69.appspot.com",
  messagingSenderId: "287404780403",
  appId: "1:287404780403:web:4054e163033ce87ee03306",
  measurementId: "G-P8PYCCJ8XS",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const sanpShot = await userRef.get();

  if (!sanpShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
