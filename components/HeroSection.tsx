const HeroSection = () => {
  return (
    <section className="bg-[#FAF6F1] py-56 flex flex-col items-center justify-center text-center font-sans">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight px-4 sm:px-0 lg:max-w-[40rem]">
        Company
        ownership,
        from the future
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 px-4 sm:px-0">
        A next generation platform for modern founders, powered by AI.
      </p>

      {/* Call to Action Button */}
      <button className="mt-8 bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-gray-800 font-medium text-base sm:text-lg">
        REQUEST A DEMO
      </button>

      {/* Non-Interactive Video Frame (No Border) */}
      <div className="mt-8 sm:mt-12 flex justify-center w-full">
        <video
          className="mx-auto w-full sm:w-auto max-h-48 sm:max-h-72 md:max-h-96 pointer-events-none"
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
