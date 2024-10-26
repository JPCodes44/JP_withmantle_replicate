"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
       <nav className="bg-[#FAF6F1] flex items-center max-container padding-container fixed top-0 w-full z-50 py-5">
            {/* Logo Section */}
            <Link href='/'>
                <Image src="/mantle.png" alt="logo" width={200} height={29} className="ml-4"/>
            </Link>

            {/* Spacer to push links to the right */}
      <ul className="hidden h-full gap-12 lg:flex ml-auto mr-20">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flex items-center cursor-pointer transition-all">
            <Link href={link.href} className="text-black flex items-center space-x-1 group">
              <span className="group-hover:text-[#B3965F] transition-colors">
                {link.label}
              </span>
              <img
                src="/arrow.svg" // Replace with the correct path to your arrow icon
                alt="Arrow Icon"
                className="w-4 h-4 group-hover:text-[#B3965F]" // Adjust color for the icon on hover if needed
              />
            </Link>
          </li>
        ))}
      </ul>

            {/* Buttons Section for Larger Screens */}
            <div className="hidden md:flex space-x-4 p-4">
              <button className="border border-black px-8 py-2 rounded-full text-black hover:bg-gray-100 font-medium">
                Login
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 font-medium">
                Get Started
              </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#FAF6F1] shadow-lg z-20 lg:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-black">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href} className="regular-16 text-gray-900 flexCenter cursor-pointer transition-all hover:font-bold">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Login Button in Mobile Menu */}
                    <div className="flex justify-center py-4">
                        {/* Buttons Section for Larger Screens */}
                    <button className="border border-black px-8 py-2 rounded-full text-black hover:bg-gray-100 font-medium">
                      Login
                    </button>
                    </div>
                </div>
            )}
       </nav>
    );
};

export default Navbar;
