// src/components/LocationTime.tsx
"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";

const RealTimeClock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <span className="real-time" style={{ fontWeight: 'bold' }}>
      {time}
    </span>
  );
};

export default function LocationTime() {
  return (
    <div className="location-time" style={{ paddingTop: '143px', paddingLeft: '173px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div className="location-text-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
        <p className="location-text" style={{ marginRight: '10px', fontWeight: 'normal' }}>
          Based in Agra →
        </p>
        <RealTimeClock />
      </div>
      {/* Line below "Based in Agra" */}
      <div className="line"></div>
    </div>
  );
}