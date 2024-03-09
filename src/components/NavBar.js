// NavBar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../unpuzzl.png';

const NavBar = () => {
  const location = useLocation();

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
            <Link to="/signin" className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline">
              <button className="bg-transparent border border-gray-400 text-gray-800 rounded-md px-3 py-1 hover:bg-gray-300 focus:outline-none transform transition duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">Sign In</button>
            </Link>
            <Link to="/signup" className="text-lg font-medium transition duration-300 hover:text-gray-300 focus:outline-none no-underline">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-md px-3 py-1 focus:outline-none transform transition duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
