import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../logotrans.png';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen flex flex-col">
      <img src={logo} alt="logo" className="h-16 mx-auto mt-4" />

      <div className="flex-grow">
        <nav className="mt-8">
          <NavLink 
            to="/" // Change to the correct path for the dashboard
            className={({ isActive }) => 
              `flex items-center p-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            } 
            title={"dashboard"}
          >
            <MdSpaceDashboard size={30} />
            <span className="ml-4">Dashboard</span>
          </NavLink>

          <NavLink 
            to="/calendar" 
            className={({ isActive }) => 
              `flex items-center p-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            } 
            title="Calendar"
          >
            <AiFillCalendar size={30} />
            <span className="ml-4">Calendar</span>
          </NavLink>

          <NavLink 
            to="/board" 
            className={({ isActive }) => 
              `flex items-center p-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            } 
            title="Trello Board"
          >
            <FaTasks size={30} />
            <span className="ml-4">Trello Board</span>
          </NavLink>

          <NavLink 
            to="/users" 
            className={({ isActive }) => 
              `flex items-center p-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            } 
            title="Users"
          >
            <AiOutlineTable size={30} />
            <span className="ml-4">Users</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
