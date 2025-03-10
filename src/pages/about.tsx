import { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import "../styles/globals.css";

export default function About() {
  const [gradientPosition, setGradientPosition] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [smoothPosition, setSmoothPosition] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      setGradientPosition({ x: xPercent, y: yPercent });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame: number; // Explicitly define type as 'number'

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (gradientPosition.x - prev.x) * 0.01, // Adjust 0.1 for slower animation
        y: prev.y + (gradientPosition.y - prev.y) * 0.01,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [gradientPosition]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: `radial-gradient(circle at ${smoothPosition.x}% ${smoothPosition.y}%, white 10%, rgb(47, 96, 99) 90%)`,
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.1s ease-out",
      }}
    >
      {/* Noise Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/noisy-background.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ width: "100%", background: "transparent", zIndex: 1 }}>
        <AppBar />
      </div>
      <div style={{ flex: 1, width: "100%", zIndex: 1 }}>
        {/* Add content here */}
      </div>
    </div>
  );
}