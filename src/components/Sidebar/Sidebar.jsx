import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../logotrans.png';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen flex flex-col">
        <NavLink to="/">
          <img src={logo} alt="Your App Logo" className="h-16 cursor-pointer" />
        </NavLink>
      <div className="flex-grow">
        <nav className="mt-8">
          <NavLink 
            to="/dashboard"
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
            title="Todo"
          >
            <FaTasks size={30} />
            <span className="ml-4">Todo</span>
          </NavLink>

          <NavLink 
            to="/dataentry" 
            className={({ isActive }) => 
              `flex items-center p-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            } 
            title="Enter Data"
          >
            <AiOutlineTable size={30} />
            <span className="ml-4">Enter Data</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
