import React from "react";
import dynamic from "next/dynamic";
import { LottieComponentProps } from "lottie-react";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface ExperienceDetailsProps {
  title: string;
  description: string;
  animationData: LottieComponentProps["animationData"];
  width?: number;
  height?: number;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  title,
  description,
  animationData,
  width = 100,
  height = 100,
}) => {
  return (
    <div className="experience-details">
      {/* Lottie Animation with Custom Size */}
      <Lottie
        animationData={animationData}
        loop
        className="lottie-animation"
        style={{ width, height }}
      />

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