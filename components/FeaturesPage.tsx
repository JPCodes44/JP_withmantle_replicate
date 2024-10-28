"use client";

import React, { useState, useEffect, useRef } from "react";
import FeatureCard from "@/components/FeatureCard";
import { FEATURE_CARDS } from '@/constants';

const FeaturesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
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
    <section ref={sectionRef} className="features py-16 bg-[#FAF6F1]">
      <div className="container mx-auto">
        <div className={`p-10 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-4xl font-bold text-black mb-4">Manage everything in one place with simple, straightforward tools augmented with AI</h2>
          <p className="text-lg text-gray-600 mb-12">
            Support at every stage, from your garage to a thriving public company. Seamless assistance throughout your journey.
          </p>
          <hr className="border-t border-gray-300 mb-12 mx-auto max-w-4xl" />
        </div>

        <div className="flex flex-col p-8 items-center space-y-8 max-w-4xl mx-auto">
          {FEATURE_CARDS.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
