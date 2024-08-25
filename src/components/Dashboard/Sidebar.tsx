
"use client"
import { FaRegFileAlt, FaEnvelope, FaUserAlt, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import useSidebarStore from '../../store/sidebarStore'; 

const Sidebar = () => {
  const { activeItem, setActiveItem } = useSidebarStore();

  return (
    <div className="h-screen p-5  bg-white  flex flex-col">
    {/* Navigation Items */}
    <nav className="flex flex-col space-y-6 mt-16">
      <button
        className={`flex items-center p-2 rounded-lg hover:bg-purple-100 ${
          activeItem === 'Admissions' ? 'bg-purple-100 text-purple-500' : 'text-gray-700'
        }`}
        onClick={() => setActiveItem('Admissions')}
      >
        <FaRegFileAlt className="mr-3" />
        Admissions
      </button>

      <button
        className={`flex items-center p-2 rounded-lg hover:bg-purple-100 ${
          activeItem === 'Newsletters' ? 'bg-purple-100 text-purple-500' : 'text-gray-700'
        }`}
        onClick={() => setActiveItem('Newsletters')}
      >
        <FaEnvelope className="mr-3" />
        Newsletters
      </button>

      <button
        className={`flex items-center p-2 rounded-lg hover:bg-purple-100 ${
          activeItem === 'Subscribers' ? 'bg-purple-100 text-purple-500' : 'text-gray-700'
        }`}
        onClick={() => setActiveItem('Subscribers')}
      >
        <FaUserAlt className="mr-3" />
        Subscribers
      </button>

      <button
        className={`flex items-center p-2 rounded-lg hover:bg-purple-100 ${
          activeItem === 'Analytics' ? 'bg-purple-100 text-purple-500' : 'text-gray-700'
        }`}
        onClick={() => setActiveItem('Analytics')}
      >
        <FaChartBar className="mr-3" />
        Analytics
      </button>

      <button
        className={`flex items-center p-2 rounded-lg hover:bg-purple-100 ${
          activeItem === 'Logout' ? 'bg-purple-100 text-purple-500' : 'text-gray-700'
        }`}
        onClick={() => setActiveItem('Logout')}
      >
        <FaSignOutAlt className="mr-3" />
        Logout
      </button>
    </nav>
  </div>
  );
};

export default Sidebar;
