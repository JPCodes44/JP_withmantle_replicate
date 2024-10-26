const HeroSection = () => {
  return (
      <section className="bg-[#FAF6F1] py-56 flex flex-col items-center justify-center text-center font-sans">
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

          {/* Non-Interactive Video Frame (No Border) */}
          <div className="mt-12">
              <video
                  className="w-auto h-auto max-h-96 pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
              >
                  <source src="/SpinningCircles.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
      </section>
  );
};

export default HeroSection;

  
  
  
