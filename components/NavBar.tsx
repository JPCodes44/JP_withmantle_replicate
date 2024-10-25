import React from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants'; 

const NavBar = () => {
  return (
    <nav className="bg-[#FAF6F1] p-4 flex justify-between items-center shadow-sm font-sans">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img 
          src="/mantle.png" 
          alt="Mantle Logo" 
          className="h-auto w-auto max-h-6 sm:max-h-8 md:max-h-10 lg:max-h-12 xl:max-h-14 object-contain"
        />
      </div>

      {/* Links Section */}
      <div className="flex-grow flex justify-end mr-8">
        <ul className="flex space-x-10 text-black">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="group relative">
              <Link href={link.href} className="flex items-center group-hover:text-[#B3965F] transition-colors font-medium">
                <span className="group-hover:text-[#B3965F]">
                  {link.label}
                </span>
                <img 
                  src="/arrow.svg" 
                  alt="arrow"
                  className="inline-block ml-1 group-hover:text-[#B3965F]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        <button className="border border-black px-8 py-2 sm:px-10 md:px-12 lg:px-14 xl:px-16 rounded-full text-black hover:bg-gray-100 font-medium">
          Login
        </button>
        <button className="bg-black text-white px-6 py-2 sm:px-8 md:px-10 lg:px-12 xl:px-14 rounded-full hover:bg-gray-800 font-medium">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;



