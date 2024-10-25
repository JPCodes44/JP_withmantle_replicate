import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-[#FAF6F1] p-8 rounded-xl shadow-lg flex flex-col items-center text-center w-100 h-80">
      {/* Image */}
      {imageSrc && (
        <div className="mb-6">
          <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
        </div>
      )}

      {/* Title */}
      <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>

      {/* Description */}
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;


