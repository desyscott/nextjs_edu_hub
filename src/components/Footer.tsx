// /components/Footer.tsx

import { FC } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-xl font-bold italic">deutscheinternationalschool</h2>
          <p className="mt-2 text-sm">Building Future Leaders.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Career</a></li>
              <li><a href="#" className="hover:text-white">Newsletter</a></li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Gallery</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center"><FiMail className="mr-2" /> deutscheinternationalschool@gmail.com</li>
            <li className="flex items-center"><FiPhone className="mr-2" /> +233 542 589 788</li>
            <li className="flex items-center"><FiMapPin className="mr-2" /> Acarankese, near the Pentecost church</li>
          </ul>
          {/* Newsletter Subscription */}
          <div className="mt-4 flex">
          <input type="email" placeholder="Subscribe to newsletter" className="px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-500" />
          <button className="bg-white text-black p-3 rounded-r-md hover:bg-gray-200 flex items-center justify-center">
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
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 md:px-12 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-400">
          © 2023 <span className="font-bold text-white">deutscheinternationalschool</span>.Designed and developed by Desmond.
        </p>
        <ul className="flex space-x-4 mt-4 md:mt-0 text-xs text-gray-400">
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
          <li><a href="#" className="hover:text-white">Cookies Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
