"use client"; // Add this directive at the top

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.normalizeScroll(true);

const BackToTop = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById("back-to-top");

    // Show the button after scrolling down 300px
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove("opacity-0", "invisible");
        backToTopButton.classList.add("opacity-100", "visible");
      } else {
        backToTopButton.classList.remove("opacity-100", "visible");
        backToTopButton.classList.add("opacity-0", "invisible");
      }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", () => {
      gsap.to(window, {
        scrollTo: {
          y: 0,
          autoKill: true,
        },
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <button
      id="back-to-top"
      className="opacity-0 invisible fixed bottom-5 right-5 p-2 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg cursor-pointer transition"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default BackToTop;
