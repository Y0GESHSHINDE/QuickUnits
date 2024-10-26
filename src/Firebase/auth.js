// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

// Sign up function
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log in function
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Log out function
export const logout = () => {
  return signOut(auth);
};
