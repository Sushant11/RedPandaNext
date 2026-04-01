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
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      gsap.to(window, {
        scrollTo: { y: targetElement, offsetY: 70 },
        duration: 1,
        ease: "power2.out",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={scrolled ? "/mainlogo.png" : "/mainlogoWhite.png"}
            alt="Red Panda Finance Logo"
            className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <span
              className={`text-lg font-bold tracking-tight leading-none block transition-colors duration-300 ${
                scrolled ? "text-[#1a1a2e]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Red Panda
            </span>
            <span
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-[#cd1c26]" : "text-white/70"
              }`}
            >
              Finance
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? activeSection === link.id
                    ? "text-[#cd1c26]"
                    : "text-stone-600 hover:text-[#cd1c26]"
                  : activeSection === link.id
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              } ${activeSection === link.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(`#${link.id}`);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#contact");
            }}
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#cd1c26] text-white hover:bg-[#a01018]"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
            }`}
          >
            Get Pre-Approved
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden focus:outline-none p-2 transition-colors ${
            scrolled ? "text-[#1a1a2e]" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`py-3 text-sm font-medium border-b border-stone-50 last:border-0 transition-colors ${
                  activeSection === link.id ? "text-[#cd1c26]" : "text-stone-700 hover:text-[#cd1c26]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(`#${link.id}`);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("#contact");
              }}
              className="mt-3 bg-[#cd1c26] text-white text-center text-sm font-semibold py-3 rounded-full hover:bg-[#a01018] transition-colors"
            >
              Get Pre-Approved
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
