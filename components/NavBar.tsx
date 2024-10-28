"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const toggleDropdown = (key: string) => {
        setActiveDropdown((prevKey) => (prevKey === key ? null : key));
    };

    return (
        <nav
            className={`bg-[#FAF6F1]/90 ${
                isMobileMenuOpen ? "" : "border border-gray"
            } flex flex-col max-container padding-container fixed top-0 w-full z-50 py-5`}
        >
            {/* Logo Section */}
            <div className="flex items-center">
                <Link href='/'>
                    <Image src="/mantle.png" alt="logo" width={200} height={29} className="ml-4"/>
                </Link>

                {/* Spacer to push links and buttons to the right */}
                <div className="flex-grow hidden lg:flex justify-end">
                    <ul className="flex h-full gap-12 mr-8 mt-2">
                        {NAV_LINKS.map((link) => (
                            <li
                                key={link.key}
                                className="relative flex items-center cursor-pointer transition-all"
                                onClick={() => link.subLinks && toggleDropdown(link.key)}
                            >
                                <div className="text-black flex items-center space-x-1 group">
                                    <span className="group-hover:text-[#B3965F] transition-colors">
                                        {link.label}
                                    </span>
                                    {link.subLinks && (
                                        <img
                                            src="/arrow.svg"
                                            alt="Arrow Icon"
                                            className="w-4 h-4 group-hover:text-[#B3965F]"
                                        />
                                    )}
                                </div>

                                {/* Dropdown Menu for Desktop */}
                                {link.subLinks && activeDropdown === link.key && (
                                    <div className="absolute top-full left-0 mt-6 w-72 bg-black text-white rounded-lg p-4 shadow-lg">
                                        <ul className="space-y-4">
                                            {link.subLinks.map((subLink, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <Image src={subLink.icon} alt="" width={24} height={24} />
                                                    <div>
                                                        <Link href={subLink.href}>
                                                            <span className="font-semibold text-white">
                                                                {subLink.title}
                                                            </span>
                                                        </Link>
                                                        <p className="text-gray-400 text-sm">
                                                            {subLink.description}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
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
            </div>

            {/* Mobile Menu with Transition */}
            <div
                className={`absolute left-0 w-full bg-[#FAF6F1] shadow-lg lg:hidden mt-20 transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <ul className="flex flex-col items-center space-y-4 py-4 text-black w-full">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key} className="w-full">
                            <div
                                onClick={() => link.subLinks && toggleDropdown(link.key)}
                                className="regular-16 text-gray-900 px-6 py-4 w-full flex justify-between items-center cursor-pointer transition-all hover:font-bold"
                            >
                                <span>{link.label}</span>
                                {link.subLinks && (
                                    <span>{activeDropdown === link.key ? "▲" : "▼"}</span>
                                )}
                            </div>

                            {/* Dropdown in Mobile Menu */}
                            {link.subLinks && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-out ${
                                        activeDropdown === link.key
                                            ? "max-h-[500px] opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="mt-2 space-y-2 bg-black text-white rounded-lg p-4 mx-4">
                                        {link.subLinks.map((subLink, index) => (
                                            <Link
                                                href={subLink.href}
                                                key={index}
                                                className="block text-white hover:text-[#B3965F] px-4 py-2 rounded"
                                            >
                                                {subLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Get Started Button in Mobile Menu */}
                <div className="flex justify-center py-4">
                    <button className="bg-black text-white px-10 py-3 rounded-full font-medium w-10/12">
                        GET STARTED
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
