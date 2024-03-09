// Home.js
import React from 'react';
import NavBar from '../components/NavBar';


const Home = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Your App</h1>
        <p className="text-lg text-black">This is the launch page of your application.</p>
      </div>
    </div>
  );
};

export default Home;
