import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDVWgX1V2c8AvQKUEd5XSXDmFNICm78Sc",
  authDomain: "unpuzzle-9b875.firebaseapp.com",
  projectId: "unpuzzle-9b875",
  storageBucket: "unpuzzle-9b875.appspot.com",
  messagingSenderId: "136209437153",
  appId: "1:136209437153:web:72cd2f0761638740f802a0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Export the sign-in method
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export { auth };