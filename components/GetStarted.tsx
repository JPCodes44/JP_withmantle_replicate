import React from 'react';

const GetStarted = () => {
  return (
    <section className="flex items-center justify-center py-4 bg-[#FAF6F1] p-6">
      <div className="bg-black text-white rounded-2xl px-10 py-16 sm:px-16 sm:py-24 lg:px-24 lg:py-32 max-w-4xl text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get started for free</h2>
        
        {/* Description */}
        <p className="text-lg sm:text-xl mb-12">
          Level up your equity management for $0 – no credit card required. Flat-rate paid
          plans start at $100 per month for unlimited stakeholders.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white text-lg hover:bg-white hover:text-black transition">
            See a Demo
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
