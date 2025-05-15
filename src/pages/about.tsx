import { useState, useEffect } from "react";
import Head from "next/head"; // Import Head for setting the title
import AppBar from "../components/AppBar";
import "../styles/globals.css";

export default function About() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 50, y: 50 });

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
    let animationFrame: number;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (gradientPosition.x - prev.x) * 0.02, // Slow smooth transition
        y: prev.y + (gradientPosition.y - prev.y) * 0.02,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [gradientPosition]);

  return (
    <>
      {/* Set Page Title */}
      <Head>
        <title>About — Saksham Gupta</title>
        <meta name="description" content="Learn more about Saksham Gupta, a passionate developer exploring Flutter, machine learning, and competitive programming." />
      </Head>

      {/* Page Content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: `radial-gradient(circle at ${smoothPosition.x}% ${smoothPosition.y}%, #d5d5d3 3%, rgb(47, 96, 99) 75%)`,
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'acumin-pro', sans-serif",
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
        
        {/* AppBar */}
        <div style={{ width: "100%", zIndex: 2 }}>
          <AppBar />
        </div>

        {/* Content */}
        <div
          style={{
            marginTop: "95px",
            paddingLeft: "173px",
            paddingRight: "173px",
            zIndex: 1,
            textAlign: "left",
            width: "calc(100% - 346px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "313px",
          }}
        >
          {/* Left Section: Description and Links */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <h1 style={{fontFamily: "Degular", fontSize: "47px", fontWeight: 500, color: "black" }}>
              Hi there, this is Saksham.
            </h1>

            <p
              style={{
                fontSize: "26px",
                fontWeight: 400,
                color: "#000",
                marginTop: "17px",
                lineHeight: "1.3",
              }}
            >
              A developer driven by curiosity and a passion for building impactful
              solutions ⚡
              <br />
              <br />
              Currently leading the Android team for my college’s event booking
              and management app. Previously worked on a startup project
              empowering Micro, Small & Medium Enterprises (MSMEs).
              <br />
              <br />
              Based in India, pursuing a Computer Science degree at VIT Bhopal.
              Actively exploring Flutter, machine learning, and competitive
              programming—targeting ICPC 2025 regionals.
              <br />
              <br />
              My journey in tech started early, fueled by a love for
              problem-solving and innovation. I’d love to connect—feel free to
              reach out via the links below!
            </p>

            {/* List and Image Container */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: "0",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#000",
                }}
              >
                <li style={{ marginBottom: "16px" }}>
                  → <a href="mailto:io.sakshamgupta@gmail.com" style={{ textDecoration: "none", color: "black" }}><span className="black-bg">Email</span></a>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  → <a href="https://www.linkedin.com/in/am-saksham-gupta/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}><span className="black-bg">LinkedIn</span></a>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  → <a href="https://github.com/am-saksham" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}><span className="black-bg">GitHub</span></a>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  → <a href="https://x.com/amsaksham_gupta" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}><span className="black-bg">Twitter</span></a>
                </li>
                <li>
                  → <a href="https://drive.google.com/file/d/1owo4CiyGMgUpzlyULAZsq00PmlSx2MmM/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}><span className="black-bg">Resume</span></a>
                </li>
              </ul>

              {/* Profile Picture */}
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  background: "white",
                  borderRadius: "40px",
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease-out",
                  animation: "float 3s infinite ease-in-out",
                }}
              >
                <img
                  src="/profile-pic1.jpg"
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "40px",
                  }}
                />
              </div>

              <style>
                {`
                  @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}