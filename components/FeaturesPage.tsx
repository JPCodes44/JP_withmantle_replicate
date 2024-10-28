"use client";

import React, { useState, useEffect, useRef } from "react";
import FeatureCard from "@/components/FeatureCard";
import { FEATURE_CARDS } from "@/constants";

const FeaturesPage = () => {
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
      className="features py-16 bg-[#FAF6F1] transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-8">
        {/* Title and Description */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className={`text-3xl font-bold mb-4 text-black transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Manage like a pro
          </h2>
          <p
            className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 ease-out delay-200 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Take control of your ownership with a next-generation platform that
            lets you track, issue, and manage ownership. Be your own expert and
            scale back on your professional fees.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
          {FEATURE_CARDS.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              className={`transition-all duration-1000 ease-out delay-${
                300 + index * 100
              } transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
