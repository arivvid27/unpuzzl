// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = "max-w-md mx-auto my-20 p-6 bg-white shadow-md rounded";

const headerStyle = "text-xl font-bold mb-4";

function Home() {
  return (
    <div className={containerStyle}>
      <h2 className={headerStyle}>Welcome to our App</h2>
      <p className="mb-4">This is supposed to be a tracker for special need kids.
      Come back later :)</p>
      <Link to="/signin" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign In</Link>
      <p className="mt-4">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
    </div>
  );
}

export default Home;
