import React from 'react';
import { FOOTER_LINKS, SOCIAL_MEDIA_ICONS, CERTIFICATIONS } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-[#FAF6F1] py-10">
      {/* Divider */}
      <hr className="border-gray-300 my-6 " />
        {/* Top section with logo and links */}
        <div className="flex justify-between items-start mb-8 p-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/mantle.png" alt="Mantle Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Links Columns */}
          <div className="flex space-x-16">
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
              <div className="flex space-x-4 mt-4">
                {SOCIAL_MEDIA_ICONS.map((icon, index) => (
                  <img key={index} src={icon.src} alt={icon.alt} className="h-6 w-6" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-6 mr-10 ml-10" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-20 mb-10 mr-10 ml-10 space-y-6 lg:space-y-0">
          <p className="text-gray-500 text-sm text-center lg:text-left">
            © 2024 Ten Key Labs Incorporated DBA Mantle · Terms of Use
          </p>

          {/* Certifications */}
          <div className="flex space-x-6 mt-20 lg:mt-20">
            {CERTIFICATIONS.map((certification, index) => (
              <img key={index} src={certification.src} alt={certification.alt} className="h-12 w-auto" />
            ))}
          </div>
        </div>
    </footer>
  );
};

export default Footer;
