import React from 'react';

const GetStarted = () => {
  return (
    <section className="flex items-center justify-center py-16 bg-[#FAF6F1]">
      <div className="bg-black text-white rounded-2xl p-24 max-w-4xl text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Get started for free</h2>
        
        {/* Description */}
        <p className="text-lg mb-8">
          Level up your equity management for $0 – no credit card required. Flat-rate paid
          plans start at $100 per month for unlimited stakeholders.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            See a Demo
          </button>
          <button className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
