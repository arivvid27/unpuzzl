// pages/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import NavBar from '../../components/NavBar';

const containerStyle = "max-w-sm mx-auto my-20 p-6 bg-white shadow-md rounded";

const formStyle = "flex flex-col";

const inputStyle = "mb-4";

const provider = new firebase.auth.GoogleAuthProvider();

function SignUp() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle normal form submission with email and password
  };

  return (
    <div className={containerStyle}>
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className={formStyle} onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email" className={inputStyle + " border-gray-300 rounded px-3 py-2"} />
        <input type="password" placeholder="Password" className={inputStyle + " border-gray-300 rounded px-3 py-2"} />
        <button type="submit" className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none transform transition duration-300 hover:-translate-y-1 hover:shadow-md mb-4">Sign Up</button>
        <div className="flex items-center mb-4">
          <div className="flex-grow border-b border-gray-400"></div>
          <div className="mx-2 text-gray-500">or</div>
          <div className="flex-grow border-b border-gray-400"></div>
        </div>
        <button onClick={signInWithGoogle} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none transform transition duration-300 hover:-translate-y-1 hover:shadow-md">Sign Up with Google</button>
      </form>
      <p className="text-center text-gray-500">{`Already have an account?`} <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link></p>
    </div>
  );
}

export default SignUp;
