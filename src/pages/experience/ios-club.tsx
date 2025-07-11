// src/pages/experience/ios-club.tsx

import AppBarWhite from "@/components/AppBarWhite";
import React from "react";
import "@/styles/app-bar-white.css";
import "@/styles/ios-club.css";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // You can include other weights if needed
});

export default function IOSClubPage() {
  return (
    <div
      className={`relative bg-black min-h-screen text-white ${openSans.className}`}
    >
      <video className="noise-video-overlay" autoPlay loop muted playsInline>
        <source src="/noisy_background.mp4" type="video/mp4" />
      </video>
      <AppBarWhite color="#000000" />

      <div>
        {/* Gradient background between AppBar and Divider */}
        <div className="gradient-background" />

        {/* Heading with specific styles */}
        <h1 className="main-heading">iOS Club</h1>

        {/* Subtext under the heading */}
        <div className="subtext-container">
          <p>
            Company → <span className="bold-text">iOS Club - VIT Bhopal</span>
          </p>
          <p>
            Role → <span className="bold-text">iOS Developer</span>
          </p>
          <p>
            Tenure → <span className="bold-text">Mar 2024 - Present</span>
          </p>
        </div>
      </div>

      {/* Divider using the new CSS class */}
      <div className="divider-compact" />

      {/* Wrapper for the section headings */}
      <div className="section-headings-wrapper">
        {/* Section Heading 1 */}
        <h2 className="section-heading black-background">
          “Not just students.
        </h2>

        {/* Section Heading 2 */}
        <h2 className="section-heading black-background">
          Cupertino in disguise.”
        </h2>
      </div>

      {/* Intro text */}
      <div className="intro-text">
        <p>My journey with the iOS Club</p>
      </div>

      <div className="intro-paragraph">
        <p>
          Began in 2024, when I was selected as a core team member in the
          Developers Team domain, focusing on Swift and SwiftUI. I collaborate
          with a talented group of developers to organize technical workshops,
          build intuitive iOS applications, and contribute to a community
          passionate about Apple technologies.
        </p>
        <p>
          To learn more about my work with the iOS Club or upcoming initiatives
          we’re working on, feel free to reach out to me directly at{" "}
          <a href="mailto:io.sakshamgupta@gmail.com" className="email-link">
            io.sakshamgupta@gmail.com
          </a>
          .
        </p>
      </div>

      {/* Full-width image */}
      <div className="full-width-image-container">
        <Image
          src="/projects/ios-club-banner.png"
          alt="iOS Club Banner"
          className="full-width-image"
          width={522}
          height={363}
          loading="lazy"
        />
      </div>

      {/* First Row Header */}
      <div className="row-header">
        <div className="number-title">
          <span className="column serial-number">01</span>
          <span className="column title">Introduction</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            My time at the <b>iOS Club</b> is within the <b>Developers Team</b>{" "}
            domain, which focuses on building and innovating using <b>Swift</b>{" "}
            and <b>SwiftUI</b>. The Developers Team has three main areas of
            focus: <b>learning</b>, <b>building</b>, and <b>mentoring</b>. I’m
            currently contributing to projects under the learning and building
            pillars — conducting SwiftUI sessions, helping organize coding
            workshops, and working on iOS app features that enhance user
            experience and functionality.
          </p>

          <Image
            src="/projects/define-ios-club.png"
            alt="definition of ios club"
            className="define-ios-club-img"
            width={522}
            height={363}
            loading="lazy"
          />
        </div>
      </div>

      {/* Second Row Header */}
      <div className="row-header row-header-second">
        <div className="number-title">
          <span className="column serial-number">02</span>
          <span className="column title">What I did</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            Due to internal policy, I can’t disclose the specific details of
            each of my projects publicly. On a high level though, I worked
            through a <b>complete development cycle</b>, starting with
            identifying core student needs, auditing current app flows, defining{" "}
            <b>feature goals</b>, brainstorming ideas aligned with those goals,
            and finally building out refined SwiftUI components as the scope
            narrowed over time.
          </p>
          <p className="overview-paragraph">
            This might sound fairly typical, but being part of a{" "}
            <b>fast-paced student tech community</b> with a growing user base
            and evolving expectations made the experience especially enriching
            and challenging.
          </p>
          <Image
            src="/projects/ios-club-moto.png"
            alt="definition of ios club"
            className="ios-club-moto"
            width={522}
            height={237}
            loading="lazy"
          />
          <p className="overview-paragraph">
            Another big aspect of my time at iOS Club revolved around a word
            developers care deeply about: <b>impact</b>. I’m thankful to know
            that what I was building—whether UI components, onboarding
            experiences, or backend integrations—had <b>visible results</b> in
            how students discovered and engaged with events.
          </p>
          <p className="overview-paragraph">
            One of the most rewarding moments was seeing our event onboarding
            flow, which I helped build, demoed live during the university’s
            induction session. Watching peers interact with the product I shaped
            was incredibly fulfilling.
          </p>
        </div>
      </div>

      {/* Third Row Header */}
      <div className="row-header row-header-second">
        <div className="number-title">
          <span className="column serial-number">03</span>
          <span className="column title">What I learned</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            If there’s one word that can describe my time with the iOS Club,
            it’s evolution. In just a few months, I absorbed more about
            collaboration, development processes, and user-centered thinking
            than I ever expected—more than any textbook could offer.
          </p>
          <p className="overview-paragraph">
            Let me break down a few major lessons I’ll carry forward:
          </p>
          <div className="bullet-points">
            <ul className="square-bullets">
              <li>
                <strong>Communicate intentionally</strong>
                <ul className="hollow-bullets">
                  <li>
                    Whether it was syncing with design teammates or aligning
                    with backend engineers, I learned how critical clear and
                    proactive communication is. Reaching out early, sharing
                    blockers, and giving context made the workflow not just
                    smoother, but also more enjoyable.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Good design is invisible, but intentional</strong>
                <ul className="hollow-bullets">
                  <li>
                    Working on onboarding, event discovery, and registration
                    flows made me appreciate the power of subtle, intentional
                    design decisions. Every pixel and interaction matters, and
                    user empathy needs to guide each of them—even when users
                    don’t consciously notice.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Learn the platform deeply</strong>
                <ul className="hollow-bullets">
                  <li>
                    Designing for iOS isn’t just about using SF Symbols or
                    toggling auto-layout. It’s about understanding native
                    behavior, system conventions, and accessibility standards. I
                    became more fluent in the Apple design language and how to
                    build for it effectively in Flutter.
                  </li>
                </ul>
              </li>
              <li>
                <strong>It’s okay to not know everything</strong>
                <ul className="hollow-bullets">
                  <li>
                    Early on, I often hesitated to ask questions. But the moment
                    I leaned into curiosity—asking engineers how an API worked
                    or why a component wasn’t rendering—I started growing
                    faster. The team appreciated questions, and I learned it’s
                    far better to ask early than to guess wrongly.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Your vision matters, but so does knowing your limits
                </strong>
                <ul className="hollow-bullets">
                  <li>
                    I entered with ambitious plans and ideas, but over time, I
                    had to navigate scoping, feasibility, and timelines. I
                    learned when to push for an idea and when to trim scope.
                    It’s a balancing act between crafting the ideal and shipping
                    the real.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Row Header */}
      <div className="row-header row-header-second">
        <div className="number-title">
          <span className="column serial-number">04</span>
          <span className="column title">Conclusion</span>
        </div>
        <div className="column overview">
          <p className="overview-paragraph">
            What an incredible journey my time with the iOS Club has been. The
            true value of any experience lies in how much you grow—and this one
            gave me everything I needed to prepare for more collaborative,
            product-driven work in the future.
          </p>
          <p className="overview-paragraph">
            Looking back, the people were easily the highlight. From club
            seniors and peers who offered guidance, to cross-functional
            collaborators who shaped how I approached design and development,
            every conversation, late-night debug, and design critique made me
            better—not just as a developer, but as a teammate and a thinker.
          </p>
          <p className="overview-paragraph">
            The energy, support, and curiosity in this group made it more than
            just a club—it was a community. And I’m walking away not just with
            projects I’m proud of, but friendships and lessons I’ll carry far
            beyond campus.
          </p>
          <Image
            src="/projects/ios-group-pic.png"
            alt="group pics of ios club"
            className="ios-group-pic"
            width={522}
            height={981}
            loading="lazy"
          />
        </div>
      </div>

      <div className="divider"></div>

      <div className="page-navigation-container">
        <div
          className="previous-page-label"
          onClick={() => (window.location.href = "/experience/gdgc-club")}
          style={{ cursor: "pointer" }}
        >
          ← GDGC
        </div>
        <div
          className="next-page-label"
          onClick={() => (window.location.href = "../projects/phishguard")}
          style={{ cursor: "pointer" }}
        >
          PhishGuard →
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
