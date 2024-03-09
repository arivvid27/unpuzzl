// pages/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = "max-w-sm mx-auto my-20 p-6 bg-white shadow-md rounded";

const formStyle = "flex flex-col";

const inputStyle = "mb-4";

function SignUp() {
  return (
    <div className={containerStyle}>
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className={formStyle}>
        <input type="email" placeholder="Email" className={inputStyle + " border-gray-300 rounded px-3 py-2"} />
        <input type="password" placeholder="Password" className={inputStyle + " border-gray-300 rounded px-3 py-2"} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign Up</button>
      </form>
      <p className="mt-4">Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link></p>
    </div>
  );
}

export default SignUp;
