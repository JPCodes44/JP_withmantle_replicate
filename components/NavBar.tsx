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
<nav className="bg-[#FAF6F1]/90 border border-gray flex items-center max-container padding-container fixed top-0 w-full z-50 py-5">
{/* Logo Section */}
            <Link href='/'>
                <Image src="/mantle.png" alt="logo" width={200} height={29} className="ml-4"/>
            </Link>

            {/* Spacer to push links and buttons to the right */}
            <div className="flex-grow hidden lg:flex justify-end ">
                <ul className="flex h-full gap-12 mr-8 mt-2">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key} className="flex items-center cursor-pointer transition-all">
                            <Link href={link.href} className="text-black flex items-center space-x-1 group">
                                <span className="group-hover:text-[#B3965F] transition-colors">
                                    {link.label}
                                </span>
                                <img
                                    src="/arrow.svg"
                                    alt="Arrow Icon"
                                    className="w-4 h-4 group-hover:text-[#B3965F]"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* Buttons for larger screens */}
                <div className="space-x-4 mr-6">
                    <button className="border border-black px-8 py-2 rounded-full text-black hover:bg-gray-100 font-medium">
                        Login
                    </button>
                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 font-medium">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="ml-auto lg:hidden flex items-center mr-4">
                <Image
                    src="/menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                    onClick={toggleMobileMenu}
                />
            </div>

            {/* Mobile Menu */}
{isMobileMenuOpen && (
    <div className="absolute top-24 left-0 w-full bg-[#FAF6F1] bg-opacity-90 shadow-lg lg:hidden">
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

