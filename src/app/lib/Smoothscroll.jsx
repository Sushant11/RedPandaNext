"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const SmoothScrollLink = ({ href, className, children }) => {
  // Smooth scroll function
  const handleScrollTo = (e, targetId) => {
    e.preventDefault(); // Prevent the default anchor link behavior

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      gsap.to(window, {
        scrollTo: {
          y: targetElement.offsetTop - 70, // Adjust for fixed header or offset
          autoKill: true, // Stop any ongoing scroll
        },
        duration: 1, // Duration of the scroll animation
        ease: "power2.out", // Easing for smooth scroll animation
      });
    }
  };

  return (
    <Link
      href={href} // Standard anchor link
      onClick={(e) => handleScrollTo(e, href)} // Trigger smooth scroll on click
      className={className}
    >
      {children} {/* The content (e.g., "Get Pre-Approved") inside the link */}
    </Link>
  );
};

export default SmoothScrollLink;
