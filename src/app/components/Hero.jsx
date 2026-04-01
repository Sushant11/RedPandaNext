"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SmoothScrollLink from "../lib/Smoothscroll";

const stats = [
  { value: "30+", label: "Lenders" },
  { value: "9+", label: "Years Experience" },
  { value: "5★", label: "Client Rating" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero section min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative geometric accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 30%, #cd1c26 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 70%, #cd1c26 0%, transparent 65%)",
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-8 h-px bg-[#cd1c26]" />
            <span className="text-[#cd1c26] text-sm font-semibold tracking-widest uppercase">
              Australian Mortgage Brokers
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 transition-all duration-800 delay-100 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Home.
            <br />
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #f5a0a4 0%, #cd1c26 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Finance.
            </span>
            <br />
            Simplified.
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl text-white/75 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-200 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Helping home buyers and property investors navigate Australia&rsquo;s
            property market with tailored, expert finance solutions.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <SmoothScrollLink
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#cd1c26] hover:bg-[#a01018] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#cd1c26]/30 hover:shadow-[#cd1c26]/50 hover:scale-[1.02]"
            >
              Get Pre-Approved
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </SmoothScrollLink>
            <a
              href="tel:+61484941980"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="text-sm" />
              (0484) 941 980
            </a>
          </div>

          {/* Stats strip */}
          <div
            className={`flex flex-row gap-8 sm:gap-12 transition-all duration-700 delay-400 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-white/55 tracking-wide uppercase mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf7f2] to-transparent pointer-events-none" />
    </section>
  );
}
