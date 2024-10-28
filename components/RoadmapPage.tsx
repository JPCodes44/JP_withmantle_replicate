"use client";

import React, { useState, useEffect, useRef } from 'react';

const RoadmapPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#FAF6F1] transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 flex flex-row">
        {/* Title and Description */}
        <div className="text-left mb-12 max-w-2xl p-1">
          <h2
            className={`text-3xl font-bold text-black transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Up and to the right
          </h2>
          <p
            className={`text-gray-600 text-lg mt-4 leading-relaxed transition-all duration-1000 ease-out delay-200 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Support at every stage, from your garage to a thriving public company.
            Seamless assistance throughout your journey.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[#FAF6F1]">afdsfjdsjf</p>
      </div>
    </section>
  );
};

export default RoadmapPage;
