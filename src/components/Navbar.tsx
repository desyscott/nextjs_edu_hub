import Link from 'next/link';


const Navbar=  () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
         {/* Logo */}
            <div className="text-black text-2xl font-bold italic">
                deutscheinternationalschool
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#" className="text-black hover:text-gray-700">
                Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
                About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
                Gallery
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
                Team
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
                Admission
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
                Newsletter
            </a>
            </nav>

            {/* Search Icon */}
        <div className="hidden md:block">
          <button className="text-gray-600 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.15-6.4a6.4 6.4 0 11-12.8 0 6.4 6.4 0 0112.8 0z"
              ></path>
            </svg>
          </button>
        </div>

        </div>
    </header>
  );
};

export default Navbar;
