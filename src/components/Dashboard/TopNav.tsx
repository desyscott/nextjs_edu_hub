import Image from "next/image";
import { FaGlobe, FaBell } from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white p-4 shadow-sm">
      {/* Left Section - Could be used for a logo or left empty */}
      <div className="flex-1 order-2 md:order-1"></div>

      {/* Center Section */}
      <div className="flex-1 flex justify-center  order-1 md:order-2">
        <button 
         className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 text-sm md:text-base md:px-6 md:py-3">
          <FaGlobe  className='text-[#000000]'/>
          <span className='text-[#000000]'>Visit Website</span>
        </button>
      </div>

      {/* Right Section - Notifications and User Profile */}
      <div className="flex-1 flex justify-end items-center space-x-4 order-3">
        <FaBell className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        <Image
          src="/profileImage.png"  // Placeholder image for the user profile
          alt="User Avatar"
          width={42}
          height={42}
          className=" rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default TopNav;
