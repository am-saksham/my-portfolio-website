import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface ExperienceDetailsProps {
  title: string;
  slug: string;
  description: string;
  imageData: string | object; // Accept both string and object
  isLottie: boolean;
  type: string;
  width?: number;
  height?: number;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  title,
  slug,
  description,
  imageData,
  isLottie,
  type,
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
          loading="lazy"
        />
      ) : null}

      <div className="text-row">
    <div className="text-column">
      <Link href={`${type}/${slug}`} className="clean-link" prefetch={true}>
        <div className="text-title">
          <span className="black-bg">{title}</span>
        </div>
      </Link>
      <div className="text-description">{description}</div>
    </div>

    <div className="transparent-circle">
      <Link href={`${type}/${slug}`} className="clean-link" prefetch={true}>→</Link>
    </div>
  </div>
    </div>
  );
};

export default ExperienceDetails;
