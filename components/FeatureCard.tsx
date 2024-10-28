import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  additionalContent?: {
    image?: string;
    text?: string;
  };
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  additionalContent,
  className
}) => {
  return (
    <div className={`bg-[#FAF6F1] p-8 rounded-xl shadow-lg flex flex-col items-center text-center ${className}`}>
      {/* Row 1: Primary Image */}
      {imageSrc && (
        <div className="mb-6">
          <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
        </div>
      )}

      {/* Row 2: Text Content */}
      <div className="flex flex-col items-center w-full">
        <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>

        {/* Description with Additional Content */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left md:mr-4">{description}</p>

          {/* Conditionally Render Additional Content as Image or Text */}
          {additionalContent && (
            <>
              {additionalContent.image ? (
                <img
                  src={additionalContent.image}
                  alt="Additional content"
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <span className="text-gray-500">{additionalContent.text}</span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

