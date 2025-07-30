"use client"; // Add this directive at the top

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current || "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      gsap.to(window, {
        scrollTo: {
          y: targetElement.offsetTop - 70,
          autoKill: true,
        },
        duration: 1,
        ease: "power2.out",
      });

      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/mainlogo.png"
            alt="Red Panda Finance Logo"
            className="w-10 h-10 object-contain mr-2"
          />
          <span className="text-xl font-bold text-gray-800">
            Red Panda Finance
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${
                activeSection === link.id ? "active" : ""
              } text-gray-700 hover:text-primary transition`}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(`#${link.id}`);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faTimes : faBars}
            className="text-2xl"
          />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block py-2 text-gray-700 hover:text-primary transition"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(`#${link.id}`);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
