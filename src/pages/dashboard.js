// pages/Dashboard.js
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts';
import { FaUser } from 'react-icons/fa';

const sidebarStyle = "w-64 bg-gray-900 text-white p-4";

const profileStyle = "flex items-center mb-4";

const profileNameStyle = "ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis";

const dropdownStyle = "absolute top-14 left-64 bg-gray-900 text-white p-2 rounded";

const dropdownItemStyle = "mb-1";

function Dashboard() {
  const { currentUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex">
      <div className={sidebarStyle}>
        <div className={profileStyle}>
          <FaUser size={24} />
          {currentUser && (
            <span className={profileNameStyle} onClick={toggleDropdown}>
              {currentUser.displayName || currentUser.email}
            </span>
          )}
        </div>
        {showDropdown && (
          <div className={dropdownStyle}>
            <div className={dropdownItemStyle}>Settings</div>
            <div className={dropdownItemStyle}>Logout</div>
          </div>
        )}
      </div>
      <div>
        {/* Main content */}
      </div>
    </div>
  );
}

export default Dashboard;
