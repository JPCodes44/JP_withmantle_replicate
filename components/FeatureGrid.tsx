import { FEATURES } from '@/constants';
import React from 'react';

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF6F1]">
      <div className="container mx-auto text-center">
        {/* Title and Description */}
<p className="text-4xl font-bold text-black mb-6 max-w-4xl mx-auto text-start">
    Manage everything in one place with simple, straightforward tools augmented with AI
</p>
<p className="text-lg text-start text-gray-600 max-w-4xl mx-auto mb-12">
  Support at every stage, from your garage to a thriving public company. Seamless assistance throughout your journey.
</p>
        
{/* Divider */}
<hr className="border-t border-gray-300 mb-12 mx-auto max-w-4xl" />


        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div key={index} className="text-left">
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
