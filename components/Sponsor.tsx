import { SPONSORS } from '@/constants';
import React from 'react';

const SponsorSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF6F9]">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-16"> {/* Adjust spacing between logos */}
          {SPONSORS.map((sponsor, index) => (
            <div key={index} className="flex items-center">
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="h-20 md:h-28 lg:h-36 object-contain" // Increase height for larger appearance
                style={{ maxWidth: '200px' }} // Increase max width for larger logos
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

