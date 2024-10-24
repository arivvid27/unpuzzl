import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Logo from '../unpuzzl.png';

const NavBar = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  // Firebase Authentication instance
  const auth = getAuth();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state if authenticated
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);

  // Check if user is on the sign-in or sign-up page
  const isAuthRoute = () => {
    return location.pathname === '/signin' || location.pathname === '/signup';
  };

  return (
    <nav className="text-black py-4 px-6 shadow-lg rounded-full bg-white mt-2">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Your App Logo" className="h-8 cursor-pointer" />
        </Link>
        {!isAuthRoute() && (
          <div className="flex gap-4">
            {user ? (
              // If the user is signed in, show the Dashboard button
              <Link to="/dashboard" className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline">
                <button className="bg-transparent border border-gray-400 hover:bg-red-400 text-gray-800 rounded-md px-3 py-1 focus:outline-none transform transition duration-300 hover:text-white 
                hover:border-transparent
                hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
                  Dashboard
                </button>
              </Link>
            ) : (
              // If the user is not signed in, show Sign In and Sign Up buttons
              <>
                <Link to="/signin" className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline">
                  <button className="bg-transparent border border-gray-400 hover:bg-green-500 text-gray-800 rounded-md px-3 py-1 focus:outline-none transform transition duration-300 hover:text-white 
                  hover:border-transparent
                  hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup" className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline">
                  <button className="bg-transparent border border-gray-400 hover:bg-blue-400 text-gray-800 rounded-md px-3 py-1 focus:outline-none transform transition duration-300 hover:text-white 
                  hover:border-transparent
                  hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
