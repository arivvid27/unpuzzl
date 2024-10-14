import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold mb-8">404</h1>
      <p className="text-xl mb-4">Oops! Page not found.</p>
      <p className="text-lg mb-8">The page you are looking for might have been removed or doesn't exist (yet).</p>
      <Link to="/" className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1 ">Go to Home</Link>
    </div>
  );
};

export default NotFound;
