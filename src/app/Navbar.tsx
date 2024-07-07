"use client";
import React, { useState } from 'react';
import Content from './Content';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev); // Toggle the state using functional update
  };

  return (
    <div className="bg-white">
      <div className='w-80vh h-[753px]'>
        <div className="container mx-[80px]">
          <nav className="bg-ECD2C5 border-gray-200">
            <div className="container mx-auto px-0 sm:px-0">
              <div className="flex items-center justify-between py-6">
                <a href="#" className="flex items-center">
                  <span className="text-lg text-[#FF7433] text-[31px] font-['Arvo'] font-bold whitespace-nowrap">SHREE RADHE</span>
                </a>
                <div className="hidden lg:flex items-center space-x-8 text-[#04536c] text-[18px] font-['Arvo']">
                  {/* Menu items for desktop */}
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 py-2 px-3 md:hover:text-blue-700 rounded focus:outline-none"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 py-2 px-3 md:hover:text-blue-700 rounded focus:outline-none"
                  >
                    Amenities & Facilities
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 py-2 px-3 md:hover:text-blue-700 rounded focus:outline-none"
                  >
                    Rooms
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 py-2 px-3 md:hover:text-blue-700 rounded focus:outline-none"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 py-2 px-3 md:hover:text-blue-700 rounded focus:outline-none"
                  >
                    Contact
                  </a>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                  aria-controls="mobile-menu-2"
                  aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                >
                  {/* Mobile menu icon */}
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
              {isMobileMenuOpen && (
                <ul className="mt-4 md:hidden">
                  {/* Menu items for mobile */}
                  <li>
                    <a
                      href="#"
                      className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                    >
                      Amenities & Facilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                    >
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
          <div className='relative flex justify-between '>
            <div className='relative z-10 mt-[119px] flex-grow'>
              <Content />
            </div>
            <div className='relative flex-shrink-0' style={{  }}>
              <div className="relative" style={{ width: '1002px', height: '725px', left: '-119px' }}>
                <img src="../images/blob.svg" style={{ position: 'absolute', width: '725px', height: '544px', objectFit: 'fill', transform: 'rotate(180deg)',top: '-25px',marginLeft:'45px' }} />
                <img src="../images/s1_c.png" style={{ position: 'relative', width: '612px', height: '580px', objectFit: 'cover',top: '80px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
