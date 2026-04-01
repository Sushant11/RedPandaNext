"use client"; // Add this directive at the top

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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

    const handleClick = () => {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: true },
        duration: 1,
        ease: "power2.out",
      });
    };

    backToTopButton?.addEventListener("click", handleClick);

    return () => {
      backToTopButton?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button
      id="back-to-top"
      className="opacity-0 invisible fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center bg-[#0d6e6e] hover:bg-[#0a5a5a] text-white rounded-full shadow-lg shadow-[#0d6e6e]/30 cursor-pointer transition-all duration-300"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default BackToTop;
