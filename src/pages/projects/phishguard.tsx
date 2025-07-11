import AppBarWhite from "@/components/AppBarWhite";
import React from "react";
import "@/styles/app-bar-white.css";
import "@/styles/phishguard.css";
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
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <AppBarWhite color="#055FFA" />
      </div>

      <div className="pt-[60px] w-full">
        {/* Gradient background between AppBar and Divider */}
        <div className="gradient-background" />

        {/* Heading with specific styles */}
        <h1 className="main-heading">PhishGuard</h1>

        {/* Subtext under the heading */}
        <div className="subtext-container">
          <p>
            Role → <span className="bold-text">Mobile App Developer</span>
          </p>
          <p>
            Timeline → <span className="bold-text">Jan 2025 - Feb 2025</span>
          </p>
          <p>
            Team → <span className="bold-text">AntiPhish</span>
          </p>
        </div>
      </div>

      {/* Divider using the new CSS class */}
      <div className="divider-compact" />

      {/* Wrapper for the section headings */}
      <div className="section-headings-wrapper">
        {/* Section Heading 1 */}
        <h2 className="section-heading blue-background">
          “PhishGuard — an app to detect, track,
        </h2>

        {/* Section Heading 2 */}
        <h2 className="section-heading blue-background">
          and prevent phishing threats.”
        </h2>
      </div>

      {/* Intro text */}
      <div className="intro-text">
        <p>Background and class context</p>
      </div>

      <div className="intro-paragraph">
        <p>
          A personal initiative aimed at tackling the growing threat of phishing
          attacks in the mobile landscape. The app was developed with a strong
          focus on cybersecurity and user protection.
        </p>
        <p>
          PhishGuard is an Android browser built with Flutter that automatically
          scans URLs for safety before loading them, regardless of which app the
          link originated from. It integrates real-time threat detection and
          counters malicious links, helping users browse securely without
          changing their habits. The project highlights the intersection of
          mobile development, cybersecurity, and user-centered design.
        </p>
      </div>

      <div className="full-width-image-container">
        <Image
          src="/projects/phishguard-mockup.png"
          alt="iOS Club Banner"
          className="full-width-image"
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>

      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">01</span>
          <span className="column title">Introduction</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            Some of the problems I wanted to address with this project revolved
            around digital safety, online trust, phishing attacks, and general
            user awareness around malicious content. In an age where links can
            be traps, users often browse unaware of the threats behind them.
          </p>
          <br />
          <h3 className="overview-heading">Why scan links?</h3>
          <p className="overview-paragraph">
            As someone passionate about mobile security and user-centric design,
            I wanted to create a tool that provides real-time protection without
            interrupting the everyday browsing experience.
          </p>
          <Image
            src="/projects/phishguard-img1.png"
            alt="phishguard-img1"
            className="phishguard-img"
            width={1200}
            height={329}
            style={{ zIndex: 11, position: "relative" }}
            loading="lazy"
          />
          <Image
            src="/projects/phishguard-img2.png"
            alt="phishguard-img2"
            className="phishguard-img"
            width={1200}
            height={329}
            style={{ zIndex: 11, position: "relative" }}
            loading="lazy"
          />
        </div>
      </div>

      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">02</span>
          <span className="column title">Research</span>
        </div>
        <div className="column overview">
          <h3 className="overview-heading">User Interviews</h3>
          <p className="overview-paragraph">
            Phishing is one of the most common forms of cyberattacks today,
            especially via mobile devices. To better understand user habits and
            perceptions around link-clicking behavior, I conducted interviews
            with 6 smartphone users who regularly browse and use
            messaging/social media apps. Rather than asking about phishing
            specifically, I explored how users interact with links in daily
            life, and whether they consider the risks involved.
          </p>
          <Image
            src="/projects/phishguard-img3.png"
            alt="phishguard-img3"
            className="phishguard-img"
            width={1200}
            height={111}
            style={{ zIndex: 11, position: "relative" }}
            loading="lazy"
          />
          <br />
          <h3 className="overview-heading">Interview Insights</h3>
          <p className="overview-paragraph">
            Most interviewees either didn’t think much about link safety or
            assumed apps/platforms would protect them. This disconnect between
            trust and actual threat levels highlighted a key opportunity:
            creating an invisible shield that works in the background to prevent
            bad decisions before they’re made.
          </p>
          <hr className="section-divider" />
          <h3 className="overview-heading">
            Guided vs Unguided Security Awareness
          </h3>
          <p className="overview-paragraph">
            Inspired by behavioral psychology models used in UX and
            cybersecurity training, I drew a parallel to guided vs unguided
            safety mechanisms:
          </p>
          <Image
            src="/projects/phishguard-img4.png"
            alt="phishguard-img4"
            className="phishguard-img"
            width={1200}
            height={305}
            style={{ zIndex: 11, position: "relative" }}
            loading="lazy"
          />
          <p className="overview-paragraph">
            PhishGuard blends both: it scans in real time (guided) but only
            notifies when needed (unguided) — offering a balance between
            protection and autonomy.
          </p>
          <hr className="section-divider" />
          <h3 className="overview-heading">
            Keys to Effective Phishing Defense
          </h3>
          <p className="overview-paragraph">
            Cybersecurity experts emphasize the importance of low-friction,
            real-time tools that build habitual digital safety. Our takeaway:
            make it fast, make it accurate, and keep it seamless.
          </p>
          <Image
            src="/projects/phishguard-img5.png"
            alt="phishguard-img5"
            className="phishguard-img"
            width={1200} // ← Replace with your image’s actual width
            height={337}
            style={{ zIndex: 11, position: "relative" }}
            loading="lazy"
          />
        </div>
      </div>

      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">03</span>
          <span className="column title">Ideation</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            I began by identifying everyday users vulnerable to
            phishing—students, working professionals, and elderly users—each
            with varying levels of digital literacy. From interviews and
            behavioral insights, I ideated around a frictionless protection
            layer that could intercept malicious links across any app.
          </p>
        </div>
      </div>

      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">04</span>
          <span className="column title">User Flow</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            Designed a lightweight and passive flow that starts scanning links
            immediately after a user taps, before a browser opens. This
            pre-click behavior allowed us to build a real-time intervention
            system without altering user habits.
          </p>
          <Image
            src="/projects/phishguard-img8.png"
            alt="phishguard-img8"
            className="phishguard-img"
            width={1200} // ← Replace with your image’s actual width
            height={694}
            style={{ zIndex: 11, position: "relative" }}
            loading="lazy"
          />
        </div>
      </div>

      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">05</span>
          <span className="column title">Stylescape</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            Visual identity emphasized trust, clarity, and minimalism.
            Typography and color choices were inspired by security software—cool
            tones like deep blue and gray—to reinforce credibility without
            feeling intimidating. Icons and alerts were designed to be instantly
            understandable, especially for non-technical users.
          </p>
          <Image
            src="/projects/phishguard-img9.png"
            alt="phishguard-img9"
            className="phishguard-img"
            width={1200} // ← Replace with your image’s actual width
            height={289}
            style={{ zIndex: 11, position: "relative" }}
            loading="lazy"
          />
        </div>
      </div>

      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">06</span>
          <span className="column title">Hi-fi design</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            Final high-fidelity screens included real-time scan overlays,
            summary dashboards, and a visual risk rating system. Built natively
            for Android and iOS using Flutter, the app maintains consistent UI
            and performance across devices.
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="section-headings-wrapper1">
        <h2 className="section-heading blue-background">In PhishGuard…</h2>
        <div className="paragraph-container custom-paragraph">
          <p>
            The focus of this project was heavily on end-to-end design and
            development, especially building a secure and intuitive user
            experience from scratch. Creating the design system—including
            spacing, typography, colors, and component hierarchy—helped me
            better understand how to build scalable, consistent apps in
            real-world contexts. Designing both UX and functionality helped
            bridge the gap between security and usability—a balance crucial to
            trust-based apps.
          </p>
        </div>
      </div>

      <div className="divider"></div>
      <div className="page-navigation-container">
        <div
          className="previous-page-label"
          onClick={() => (window.location.href = "/experience/ios-club")}
          style={{ cursor: "pointer" }}
        >
          ← iOS Club
        </div>
        <div
          className="next-page-label"
          onClick={() => (window.location.href = "../projects/phishguard")}
          style={{ cursor: "pointer" }}
        >
          Rescue →
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
