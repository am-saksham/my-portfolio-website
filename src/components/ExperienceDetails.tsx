import React from "react";

// Define the props types
interface ExperienceDetailsProps {
  title: string;
  description: string;
  imageSrc: string; // Added the image source as a prop
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  title,
  description,
  imageSrc, // Destructure imageSrc from props
}) => {
  return (
    <div className="experience-details">
      {/* Replaced experience-square with image */}
      <img src={imageSrc} alt="Experience" className="experience-image" />
      <div className="text-column">
        <div className="text-title">
          <span className="black-bg">{title}</span>
        </div>
        <div className="text-description">{description}</div>
      </div>
      <div className="transparent-circle">→</div>
    </div>
  );
};

export default ExperienceDetails;