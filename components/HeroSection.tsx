import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#FAF6F1] py-16 flex flex-col items-center justify-center text-center">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
        Company ownership, <br />
        from the future
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
        A next generation platform for modern founders, powered by AI.
      </p>

      {/* Call to Action Button */}
      <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 font-medium text-lg">
        REQUEST A DEMO
      </button>

      {/* 3D Image */}
      <div className="mt-12">
        <img 
          src="/path-to-your-3d-image.png" // Replace with the actual image path
          alt="3D Illustration"
          className="w-auto h-auto max-h-96" // Adjust the max height to control the image size
        />
      </div>
    </section>
  );
};

export default HeroSection;
