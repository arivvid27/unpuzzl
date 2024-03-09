import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase';
import NavBar from '../../components/NavBar';

const containerStyle = 'max-w-sm mx-auto my-20 p-6 bg-white shadow-md rounded';
const formStyle = 'flex flex-col';
const inputStyle = 'mb-4';

function SignIn() {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignInWithGoogle = async () => {
    setIsSigningIn(true);

    try {
      await signInWithGoogle();
      // Handle successful sign-in with Google
    } catch (error) {
      console.error('Error signing in with Google', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle normal form submission with email and password
  };

  return (
    <div>
      <NavBar />
      <div className={containerStyle}>
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <form className={formStyle} onSubmit={handleFormSubmit}>
          <input type="email" placeholder="Email" className={inputStyle + ' border-gray-300 rounded px-3 py-2'} />
          <input type="password" placeholder="Password" className={inputStyle + ' border-gray-300 rounded px-3 py-2'} />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
            Sign In
          </button>

          <div className="flex items-center mb-4">
            <div className="flex-grow border-b border-gray-400"></div>
            <div className="mx-2 text-gray-500">or</div>
            <div className="flex-grow border-b border-gray-400"></div>
          </div>

          <button
            onClick={handleSignInWithGoogle} // Attach handleSignInWithGoogle to the click event
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none transform transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {isSigningIn ? 'Signing In...' : 'Sign In with Google'}
          </button>
        </form>

        <p className="text-center text-gray-500">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
