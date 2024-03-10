// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import SignIn from './pages/auth/signin';
import SignUp from './pages/auth/signup';
import Home from './pages/home';
import NotFound from './pages/notfound';
import { AuthProvider } from './contexts/AuthContexts';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
