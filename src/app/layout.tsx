"use client";

import "@/styles/globals.css";
import { useState, useEffect } from "react";
import AppBar from "@/components/AppBar";
import LocationTime from "@/components/LocationTime";
import ExperienceDetails from "@/components/ExperienceDetails";
import Link from "next/link";
import iosAnimation from "@/animations/ios_club.json";
import gdgcAnimation from "@/animations/gdgc_logo.json";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseEffectActive] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseEffectActive) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMouseEffectActive]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.0, // Trigger when 10% of the element is visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <html lang="en">
      <head />
      <body>
        {/* Mouse-Following Circle */}
        {isMouseEffectActive && (
          <div
            className="mouse-following-circle"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          />
        )}

        {/* Container for Mouse Effect */}
        <div className="mouse-effect-container">
          {/* App bar */}
          <AppBar />

          {/* Location and real-time time */}
          <LocationTime />

          {/* Introduction Section */}
          <div className="introduction-section" data-animate>
            <div className="introduction-text">Hi, this is Saksham.</div>
            <div className="additional-text">
              <div>Currently <span>→ Student @VITBhopal</span></div>
              <div>Interested <span>→ Web Developer</span></div>
              <div>Passionate <span>→ About Coding</span></div>
            </div>
          </div>

          {/* Experience Section */}
          <div id = "work" className="experience-section" data-animiate>
            <div className="black-line" />
            <div className="experience-row">
              <div className="experience-text">Experience</div>
              <div className="experience-years">Years of Experience <span>→ 1</span></div>
            </div>
            <div className="experience-line"></div>
            <ExperienceDetails 
            title={"Android Team Co-Lead"} 
            description={"Google Developer Groups on Campus VIT Bhopal"} 
            animationData={gdgcAnimation} />
            <div className="experience-line"></div>
            <ExperienceDetails 
            title={"iOS Developer"} 
            description={"iOS Club VIT Bhopal"} 
            animationData={iosAnimation} />
            <div className="experience-line"></div>
          </div>

          <div className="side-projects-section">
            <div className="side-project-row">
              <div className="experience-text">Side Projects</div>
            </div>
            <div className="experience-line"></div>
            <ExperienceDetails
              title={"Portfolio Website"}
              description={"Designed and developed a personal portfolio using Next.js and Tailwind CSS"} animationData={undefined} />
            <div className="experience-line"></div>
            <ExperienceDetails
              title={"E-commerce App"}
              description={"Built a full-stack e-commerce application with React and Node.js"} animationData={undefined}/>
          </div>

          <div className="black-line"></div>

          <div
              className="text-grid"
              style={{
                display: "flex", // Ensures the columns are spaced out evenly // Aligns the items at the top
                paddingLeft: "173px",
                paddingRight: "173px", // Keep padding on both sides
                marginTop: "36px",
                gap: "284px",
              }}
            >
  {/* Left Column (Text Items) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
                gap: "14px", // Controls spacing between items in the column
                flex: 1, // Ensures it takes up available space
              }}
            >
              <Link href="mailto: io.sakshamgupta@gmail.com" target="_blank" rel="noopener noreferrer">
              <div style={{ padding: "0", margin: "0", fontSize: "20px", color:"black" }}>→ <span className="black-bg">Email</span></div>
              </Link>
              <Link href="https://www.linkedin.com/in/am-saksham-gupta/" target="_blank" rel="noopener noreferrer">
              <div style={{ padding: "0", margin: "0", fontSize: "20px", color:"black" }}>→ <span className="black-bg">LinkedIn</span></div>
              </Link>
              <Link href="https://github.com/am-saksham" target="_blank" rel="noopener noreferrer">
              <div style={{ padding: "0", margin: "0", fontSize: "20px", color:"black" }}>→ <span className="black-bg">GitHub</span></div>
              </Link>
              <Link href="https://www.instagram.com/am_sakshamgupta/" target="_blank" rel="noopener noreferrer">
              <div style={{ padding: "0", margin: "0", fontSize: "20px", color:"black" }}>→ <span className="black-bg">Instagram</span></div>
              </Link>
              <Link href="https://x.com/amsaksham_gupta" target="_blank" rel="noopener noreferrer">
              <div style={{ padding: "0", margin: "0", fontSize: "20px", color:"black" }}>→ <span className="black-bg">Twitter</span></div>
              </Link>
              <Link href="https://drive.google.com/file/d/1owo4CiyGMgUpzlyULAZsq00PmlSx2MmM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div style={{ padding: "0", margin: "0", fontSize: "20px", color: "black" }}>→ <span className="black-bg">Resume</span></div>
              </Link>
              
            </div>

  {/* Right Column (Updated and Username) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px", // Gap between the two texts in the right column
              alignItems: "flex-end", // Align items to the end (right side)
              marginLeft: "auto", // Padding for the right side
            }}
          >
            <div style={{ padding: "0", margin: "0", fontSize: "20px" }}>Updated 1/25</div>
            <div style={{ padding: "0", margin: "0", fontSize: "20px" }}>©SakshamGupta_2025</div>
          </div>
        </div>
          {/* Main Content */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}