import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJZ4EuPTfVJc_QUYWlJ4SniDlCDQrXtIA",
  authDomain: "login-form-a4578.firebaseapp.com",
  projectId: "login-form-a4578",
  storageBucket: "login-form-a4578.appspot.com",
  messagingSenderId: "179206386327",
  appId: "1:179206386327:web:2593bfb4991cd5e88befd2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export { auth, signInWithGoogle, logOut };

