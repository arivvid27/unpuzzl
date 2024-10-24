import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; // import signOut
import { FaUserCircle } from 'react-icons/fa'; // React Icon for User
import Logo from '../unpuzzl.png';

const NavBar = () => {
  const location = useLocation();
  const history = useHistory(); // To programmatically redirect after sign-out
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      setUser(null); // Reset user state to null
      history.push('/signin'); // Redirect to the Sign-In page after signing out
    } catch (error) {
      console.error('Error signing out:', error); // Log out errors if any
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="text-black py-4 px-6 shadow-lg rounded-full bg-white mt-2">
      <div className="flex justify-between items-center">
        {/* App Logo */}
        <Link to="/">
          <img src={Logo} alt="Your App Logo" className="h-8 cursor-pointer" />
        </Link>
        
        {/* Nav Items */}
        {!isAuthRoute() && (
          <div className="flex gap-4 items-center">
            {user ? (
              <>
                {/* Dashboard Button */}
                <Link
                  to="/dashboard"
                  className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline"
                >
                  <button className="bg-transparent border border-gray-400 hover:bg-red-400 text-gray-800 rounded-md px-3 py-1 focus:outline-none transform transition duration-300 hover:text-white hover:border-transparent hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
                    Dashboard
                  </button>
                </Link>

                {/* User Icon with Dropdown */}
                <div className="relative flex items-center">
                  <button
                    onClick={toggleDropdown}
                    className="text-gray-800 hover:text-gray-600 focus:outline-none dropdown flex items-center ml-3"
                  >
                    <FaUserCircle size={30} />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-2">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Sign In and Sign Up buttons for non-authenticated users */}
                <Link
                  to="/signin"
                  className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline"
                >
                  <button className="bg-transparent border border-gray-400 hover:bg-green-500 text-gray-800 rounded-md px-3 py-1 focus:outline-none transform transition duration-300 hover:text-white hover:border-transparent hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
                    Sign In
                  </button>
                </Link>
                <Link
                  to="/signup"
                  className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline"
                >
                  <button className="bg-transparent border border-gray-400 hover:bg-blue-400 text-gray-800 rounded-md px-3 py-1 focus:outline-none transform transition duration-300 hover:text-white hover:border-transparent hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
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
