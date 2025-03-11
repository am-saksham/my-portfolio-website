import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface ExperienceDetailsProps {
  title: string;
  description: string;
  imageData: string | object; // Accept both string and object
  isLottie: boolean;
  width?: number;
  height?: number;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  title,
  description,
  imageData,
  isLottie,
  width = 100,
  height = 100,
}) => {
  return (
    <div className="experience-details">
      {/* Render Lottie Animation or Image/Video */}
      {isLottie ? (
        <Lottie
          animationData={imageData}
          loop
          className="lottie-animation"
          style={{ width, height }}
        />
      ) : typeof imageData === "string" && imageData.endsWith(".mp4") ? (
        <video
          src={imageData}
          autoPlay
          loop
          muted
          playsInline
          className="video-animation"
          style={{ width, height }}
        />
      ) : typeof imageData === "string" ? (
        <Image
          src={imageData}
          alt={title}
          width={width}
          height={height}
          className="image-animation"
        />
      ) : null}

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
