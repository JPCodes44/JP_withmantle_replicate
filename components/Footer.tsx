import React from 'react';
import { FOOTER_LINKS, SOCIAL_MEDIA_ICONS, CERTIFICATIONS } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-[#FAF6F1] py-1">
            <hr className="border-t border-gray-300 my-6 w-full" />

      {/* Logo and Links for Large Screens */}
      <div className="hidden md:flex justify-between items-start mb-8 p-10">
        {/* Logo */}
        <div className="flex-shrink-0 mb-6">
        <img src="/mantle.png" alt="Mantle Logo" className="h-20 w-auto object-contain" />
        </div>
        {/* Links Columns */}
        <div className="flex space-x-16">
          {/* Products */}
          <div className="mb-6">
            <h4 className="font-bold text-black mb-4">Products</h4>
            <ul className="text-gray-600 space-y-4">
              {FOOTER_LINKS.products.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="mb-6">
            <h4 className="font-bold text-black mb-4">Solutions</h4>
            <ul className="text-gray-600 space-y-4">
              {FOOTER_LINKS.solutions.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-6">
            <h4 className="font-bold text-black mb-4">Resources</h4>
            <ul className="text-gray-600 space-y-4">
              {FOOTER_LINKS.resources.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="mb-6">
            <h4 className="font-bold text-black mb-4">Company</h4>
            <ul className="text-gray-600 space-y-4">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
            {/* Social Media Icons */}
            <div className="flex justify-center w-full space-x-4 mt-6">
              {SOCIAL_MEDIA_ICONS.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} className="h-6 w-6" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-6 mx-10 hidden md:block" />

      {/* Footer for Mobile Screens */}
      <div className="md:hidden flex flex-col items-center text-center space-y-8 px-8">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-6">
          <img src="/mantle.png" alt="Mantle Logo" className="h-10 w-auto object-contain" />
        </div>
        {/* Links Columns Stacked */}
        <div className="grid grid-cols-1 gap-8 w-full space-y-6">
          {/* Products */}
          <div>
            <h4 className="font-bold text-black mb-4">Products</h4>
            <ul className="text-gray-600 space-y-2">
              {FOOTER_LINKS.products.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-black mb-4">Solutions</h4>
            <ul className="text-gray-600 space-y-2">
              {FOOTER_LINKS.solutions.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-black mb-4">Resources</h4>
            <ul className="text-gray-600 space-y-2">
              {FOOTER_LINKS.resources.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-black mb-4">Company</h4>
            <ul className="text-gray-600 space-y-2">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-14 mt-6 p-10">
              {SOCIAL_MEDIA_ICONS.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} className="h-6 w-6" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider for Bottom Section */}
      <hr className="border-gray-300 my-6 mx-10 md:hidden" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 space-y-10 lg:space-y-0 px-8 mb-20">
        <p className="text-gray-500 text-sm text-center lg:text-left">
          © 2024 Ten Key Labs Incorporated DBA Mantle · Terms of Use
        </p>
        {/* Certifications */}
        <div className="flex space-x-6">
          {CERTIFICATIONS.map((certification, index) => (
            <img key={index} src={certification.src} alt={certification.alt} className="h-12 w-auto" />
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-300 w-full" />
    </footer>
  );
};

export default Footer;
