'use client'

import { FEATURES } from '@/constants';
import React, { useState, useEffect, useRef } from 'react';

const FeatureGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -20% 0px', // Adjust for earlier/later visibility trigger
      }
    );

    const { current } = sectionRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#FAF6F1] p-4"
    >
      <div className="container mx-auto text-center">
        {/* Title and Description */}
        <p
          className={`text-4xl font-bold text-black mb-6 max-w-4xl mx-auto text-start transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Manage everything in one place with simple, straightforward tools augmented with AI
        </p>
        <p
          className={`text-lg text-start text-gray-600 max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out transform delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Support at every stage, from your garage to a thriving public company. Seamless assistance throughout your journey.
        </p>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-12 mx-auto max-w-4xl" />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`text-left transition-all duration-1000 ease-out transform delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="lg:text-xl sm:text-sm lg:font-semibold sm:font-light text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
