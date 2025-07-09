import AppBarWhite from "@/components/AppBarWhite";
import React from "react";
import "@/styles/app-bar-white.css";
import "@/styles/gdgc-club.css";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // You can include other weights if needed
});

export default function GDGCClubPage() {
  return (
    <div
      className={`relative bg-black min-h-screen text-white overflow-x-hidden ${openSans.className}`}
    >
      <video className="noise-video-overlay" autoPlay loop muted playsInline>
        <source src="/noisy_background.mp4" type="video/mp4" />
      </video>
      <div className="relative top-0 left-0 right-0 z-5 w-full">
        <AppBarWhite color="#EA4335" />
      </div>

      <div className="pt-[60px] w-full">
        {/* Gradient background between AppBar and Divider */}
        <div className="gradient-background" />

        {/* Heading with specific styles */}
        <h1 className="main-heading">GDGC on Campus</h1>

        {/* Subtext under the heading */}
        <div className="subtext-container">
          <p>
            Company →{" "}
            <span className="bold-text">
              Google Developer Groups on Campus VIT Bhopal
            </span>
          </p>
          <p>
            Role →{" "}
            <span className="bold-text">
              Co-Lead of Android Development Team
            </span>
          </p>
          <p>
            Tenure → <span className="bold-text">Oct 2024 - Apr 2025</span>
          </p>
        </div>
      </div>

      {/* Divider using the new CSS class */}
      <div className="divider-compact" />

      {/* Wrapper for the section headings */}
      <div className="section-headings-wrapper">
        {/* Section Heading 1 */}
        <h2 className="section-heading blue-background">
          “I don’t care who is doing better than me.”
        </h2>

        {/* Section Heading 2 */}
        <h2 className="section-heading green-background">
          I am doing better than I was last year.
        </h2>

        {/* Section Heading 3 */}
        <h2 className="section-heading yellow-background">It’s ME vs ME.”</h2>
      </div>

      {/* Intro text */}
      <div className="intro-text">
        <p>Intro</p>
      </div>

      <div className="intro-paragraph">
        <p>
          Co-lead of the Android Development Team at GDGC(formerly GDSC), took
          on the role in October of ‘24. GDGC is a reimagined community
          empowering student developers to learn, build, and grow together
          (think Google meets grassroots innovation).
        </p>
      </div>

      <div className="my-role-heading">
        <p>Role and Responsibilites</p>
      </div>

      <div className="my-role-paragraph">
        <p>
          My role is to Co-Lead the Android Development Team at GDGC, guiding
          developers in building high-quality apps and features. I work on
          projects ranging from internal tools to public-facing apps for events,
          workshops, and community engagement.
        </p>
        <p>I’m a hands-on Android developer and team co-lead that:</p>
        <ul className="role-bullets">
          <li>
            → Leads development of Android apps using Kotlin and Jetpack Compose
          </li>
          <li>
            → Collaborates with cross-functional teams including UI/UX and
            backend
          </li>
          <li>→ Conducts code reviews and mentors junior developers</li>
          <li>
            → Coordinates app deployment and ensures version control best
            practices
          </li>
          <li>
            → Organizes and leads Android-specific workshops and tech talks
          </li>
        </ul>
      </div>

      <div className="divider" />

      {/* Heading for Selected Work */}
      <h2 className="selected-work-heading">Selected Work</h2>

      <div className="divider-narrow" />

      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">01</span>
          <span className="column title">Rescue</span>
        </div>
        <div className="column overview">
          <h3 className="overview-heading">Overview</h3>
          <p className="overview-paragraph">
            The Rescue App connects victims with nearby volunteers during
            emergencies. Victims can report incidents and receive real-time help
            from agents within a 10km radius. The app provides live location
            tracking, along with in-app chat and call features. Agents have
            dedicated dashboards with profile management and emergency alerts.
            Additional features include a compass, safety guidelines, and nearby
            essential service locators.
          </p>
          <h3 className="overview-heading">My Role</h3>
          <p className="overview-paragraph">
            Independently built the entire rescue app from scratch, handling
            both frontend and backend. Designed and implemented real-time
            features like location tracking, notifications, and OTP
            verification. Created a seamless UI/UX for victims and agents,
            ensuring reliability during critical rescue situations.
          </p>
          <h3 className="overview-heading">Skills</h3>
          <p className="overview-paragraph">
            Flutter, Dart, Node.js, Express.js, MongoDB, REST APIs, Google Maps
            API, EmailJS, UI/UX Design, Real-time Notifications
          </p>
          <h3 className="overview-heading">Timeline</h3>
          <p className="overview-paragraph">4 months (Jan 2025 - Apr 2025)</p>
        </div>
      </div>

      <div className="divider" />

      {/* Horizontally scrollable image gallery */}
      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-scroll-gallery">
          <Image
            src="/projects/rescue1.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue2.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue3.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue4.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue5.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue6.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue7.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue8.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
          <Image
            src="/projects/rescue9.png"
            alt="Image 1"
            className="gallery-image"
            width={1200} // estimate width
            height={728}
          />
        </div>
      </div>

      <div className="divider"></div>

      <div className="section-headings-wrapper1">
        <h2 className="section-heading red-background">“My time at GDGC...”</h2>
        <div className="paragraph-container custom-paragraph">
          <p>
            I joined GDGC as the Co-Lead of the Android Development Team, where
            I focused on building and guiding mobile development projects using
            Flutter and native Android. My role involved mentoring developers,
            reviewing code, and ensuring best practices were followed across the
            team.
          </p>
          <p>
            I organized and led multiple workshops and sessions on topics like
            Flutter, Firebase, and app performance optimization. These sessions
            helped upskill community members and fostered collaboration among
            developers at different experience levels.
          </p>
          <p>
            Being part of GDGC gave me the chance to connect with passionate
            developers, collaborate with industry experts, and stay up-to-date
            with Google technologies. It was a rewarding experience that
            strengthened both my technical and leadership skills.
          </p>
          <p>
            Want to learn more? I’d happy to chat - reach me directly{" "}
            <a href="mailto:io.sakshamgupta@gmail.com" className="email-link">
              here
            </a>
            .
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="image-wrapper">
        <Image
          src="/projects/gdgc_cover.png"
          alt="Description of image"
          className="final-image"
          width={1200} // Actual or approximate width
          height={800}
        />
      </div>

      <div className="divider"></div>

      <div className="next-page-container">
        <div
          className="next-page-label"
          onClick={() => (window.location.href = "/experience/ios-club")}
        >
          iOS Club →
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}
