import React from 'react';
import { FOOTER_LINKS, SOCIAL_MEDIA_ICONS, CERTIFICATIONS } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-[#FAF6F1] py-10">
      <div className="container mx-auto px-8">
        {/* Footer Links Section */}
        <div className="flex justify-between mb-8">
          {/* Logo */}
          <div>
            <img src="/mantle.png" alt="Mantle Logo" className="h-auto w-auto max-h-6 sm:max-h-8 md:max-h-10 lg:max-h-12 xl:max-h-14 object-contain" />
          </div>

          {/* Links Columns */}
          <div className="flex space-x-12">
            {/* Products */}
            <div>
              <h4 className="font-bold text-black mb-4">Products</h4>
              <ul className="text-gray-600">
                {FOOTER_LINKS.products.map((link, index) => (
                  <li key={index} className="mb-4">{link}</li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold text-black mb-4">Solutions</h4>
              <ul className="text-gray-600">
                {FOOTER_LINKS.solutions.map((link, index) => (
                  <li key={index} className="mb-4">{link}</li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-black mb-4">Resources</h4>
              <ul className="text-gray-600">
                {FOOTER_LINKS.resources.map((link, index) => (
                  <li key={index} className="mb-4">{link}</li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-black mb-4">Company</h4>
              <ul className="text-gray-600">
                {FOOTER_LINKS.company.map((link, index) => (
                  <li key={index} className="mb-4">{link}</li>
                ))}
              </ul>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                {SOCIAL_MEDIA_ICONS.map((icon, index) => (
                  <img key={index} src={icon.src} alt={icon.alt} className="h-5" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-4" />

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Ten Key Labs Incorporated DBA Mantle · Terms of Use
          </p>
          
          {/* Certifications */}
          <div className="flex space-x-6">
            {CERTIFICATIONS.map((certification, index) => (
              <img key={index} src={certification.src} alt={certification.alt} className="h-8" />
            ))}
          </div>
        </div>
        <p className='text-[#FAF6F1]'>lfjasdlkfjasdklfj</p>
      </div>
    </footer>
  );
};

export default Footer;
