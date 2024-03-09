// pages/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../../firebase/firebase'; // Import auth and googleProvider from firebase/firebase.js
import NavBar from '../../components/NavBar';

const containerStyle = "max-w-sm mx-auto my-20 p-6 bg-white shadow-md rounded";

const formStyle = "flex flex-col";

const inputStyle = "mb-4";

function SignIn() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        // Handle successful sign-in with Google
        console.log("Google sign-in successful", result.user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing in with Google", error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle normal form submission with email and password
  };

  return (
    <div className={containerStyle}>
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form className={formStyle} onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email" className={inputStyle + " border-gray-300 rounded px-3 py-2"} />
        <input type="password" placeholder="Password" className={inputStyle + " border-gray-300 rounded px-3 py-2"} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none transform transition duration-300 hover:-translate-y-1 hover:shadow-md">Sign In</button>
        <div className="flex items-center mb-4">
          <div className="flex-grow border-b border-gray-400"></div>
          <div className="mx-2 text-gray-500">or</div>
          <div className="flex-grow border-b border-gray-400"></div>
        </div>
        <button onClick={signInWithGoogle} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none transform transition duration-300 hover:-translate-y-1 hover:shadow-md">Sign In with Google</button>
      </form>
      <p className="text-center text-gray-500">{`Don't have an account?`} <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
    </div>
  );
}

export default SignIn;
