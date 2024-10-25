import React from 'react';
import FeatureCard from "@/components/FeatureCard";
import { FEATURE_CARDS } from '@/constants';

const FeaturesPage = () => {
  return (
    <section className="features py-16 bg-[#FAF6F1]"> {/* Set background color */}
      <div className="container mx-auto">
        {/* Title and Description */}
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Manage like a pro</h2>
        <p className="text-center text-gray-500 mb-16">
          Take control of your ownership with a next-generation platform that lets you track, issue, and manage ownership.
          Be your own expert and scale back on your professional fees.
        </p>

        {/* Feature Cards Grid */}
        <div className="flex flex-col p-8 items-center space-y-8 max-w-4xl mx-auto">
          {FEATURE_CARDS.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
