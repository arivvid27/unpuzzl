// // pages/Dashboard.js
// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContexts';
// import { FaUser } from 'react-icons/fa';

// const sidebarStyle = "w-64 bg-gray-900 text-white p-4";

// const profileStyle = "flex items-center mb-4";

// const profileNameStyle = "ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis";

// const dropdownStyle = "absolute top-14 left-64 bg-gray-900 text-white p-2 rounded";

// const dropdownItemStyle = "mb-1";

// function Dashboard() {
//   const { currentUser } = useAuth();
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <div className="flex">
//       <div className={sidebarStyle}>
//         <div className={profileStyle}>
//           <FaUser size={24} />
//           {currentUser && (
//             <span className={profileNameStyle} onClick={toggleDropdown}>
//               {currentUser.displayName || currentUser.email}
//             </span>
//           )}
//         </div>
//         {showDropdown && (
//           <div className={dropdownStyle}>
//             <div className={dropdownItemStyle}>Settings</div>
//             <div className={dropdownItemStyle}>Logout</div>
//           </div>
//         )}
//       </div>
//       <div>
//         {/* Main content */}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Stats/Stats';
import { cardsData, groupNumber } from '../../data';
import css from './dashboard.css';
const Dashboard = () => {
  return <div className={css.container}>

    {/* left side */}
    <div className={css.dashboard}>
      
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>Dashboard</span>
          <div className={css.durationButton}>
            <select>
              <option value="">1 week</option>
              <option value="">1 month</option>
              <option value="">1 year</option>
            </select>
          </div>
        </div>
          <div className={css.cards}>
            {
              cardsData.map((card, index)=> (
                <div className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
      </div>



      <Statistics/>

    </div>


      <Orders/>
  </div>
}

export default Dashboard