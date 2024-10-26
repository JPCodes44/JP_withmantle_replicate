import { SPONSORS } from '@/constants';
import React from 'react';

const SponsorSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF6F9]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16"> {/* Responsive layout */}
          {SPONSORS.map((sponsor, index) => (
            <div key={index} className="flex justify-center md:justify-start items-center">
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="h-36 object-contain"
                style={{ maxWidth: '200px' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;


