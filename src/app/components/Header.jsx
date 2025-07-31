"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 200);
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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 py-3 flex justify-between items-center transition-colors duration-300 ${
          scrolled ? "text-gray-700" : "text-white"
        }`}
      >
        <Link href="/">
          <div className="flex items-center">
            <img
              src={scrolled ? "/mainlogo.png" : "/mainlogoWhite.png"}
              alt="Red Panda Finance Logo"
              className="w-10 h-10 object-contain mr-2"
            />
            <span className="text-xl font-bold">Red Panda Finance</span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${
                activeSection === link.id ? "active" : ""
              } hover:text-primary transition`}
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
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faTimes : faBars}
            className="text-2xl transistion"
          />
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className={`md:hidden py-2 px-4 transition-colors duration-300 ${
            scrolled ? "bg-white text-gray-700" : "bg-black text-white"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block py-4 hover:text-primary transition"
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
