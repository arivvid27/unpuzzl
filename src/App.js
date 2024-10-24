// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/dashboard';
import SignIn from './pages/auth/signin';
import SignUp from './pages/auth/signup';
import Home from './pages/home';
import NotFound from './pages/notfound';
import { AuthProvider } from './contexts/AuthContexts';
import DataEntryPage from './pages/DataEntry/DataEntryPage';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route caseSensitive path="/signin" element={<SignIn />} />
            <Route caseSensitive path="/signup" element={<SignUp />} />
            <Route caseSensitive path="/dashboard" element={<Dashboard />} />
            <Route caseSensitive path="/dataentry" element={<DataEntryPage />} />
            <Route caseSensitive path="/" element={<Home />} />
            <Route caseSensitive path="*" element={<NotFound />} />
          </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
