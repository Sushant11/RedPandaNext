"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import SmoothScrollLink from "../lib/Smoothscroll";

const trustPillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "30+ Lenders",
    body: "Access to over 30 lenders across Australia — giving you more choice and better rates.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "9+ Years Experience",
    body: "Deep expertise across accounting, novated leasing, and home finance — all working for you.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Your Best Interests",
    body: "As a licensed credit representative, we are legally obligated to act in your best interests.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "After-Hours Support",
    body: "Always available — evenings and weekends. Because property decisions don't follow a 9–5 schedule.",
  },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section py-24 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left — Photo with decorative frame */}
          <div
            className={`lg:w-5/12 relative transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Decorative backdrop */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#cd1c26]/6 z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
              <Image
                src="/Better Choice-12.JPG"
                alt="Bigyan Gurung — Red Panda Finance"
                width={1200}
                height={1600}
                className="w-full h-[55vh] md:h-[70vh] object-cover object-[center_30%]"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                <p
                  className="text-[#1a1a2e] font-bold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Bigyan Gurung
                </p>
                <p className="text-[#cd1c26] text-sm font-medium mt-0.5">
                  Credit Representative No. 529844
                </p>
                <p className="text-stone-400 text-xs mt-1">
                  Buyers Choice Licencing Pty Ltd · ACL 509484
                </p>
              </div>
            </div>
            {/* Floating accent */}
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full z-0"
              style={{ background: "radial-gradient(circle, #cd1c2622 0%, transparent 70%)" }}
            />
          </div>

          {/* Right — Content */}
          <div
            className={`lg:w-7/12 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#cd1c26]" />
              <span className="text-[#cd1c26] text-xs font-semibold tracking-widest uppercase">
                Meet Your Broker
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Finance made personal,
              <br />
              <span className="text-[#cd1c26]">not transactional.</span>
            </h2>

            <p className="text-stone-500 text-base leading-relaxed mb-8">
              Hi, I&rsquo;m Bigyan — the home loans specialist here at Red Panda Finance,
              based in Donnybrook, VIC. With over 9 years of experience across finance,
              accounting, and novated leasing, I&rsquo;ll be with you every step of the way.
              Whether you&rsquo;re buying your first home, upgrading, or expanding your portfolio,
              I make the process efficient, simple, and stress-free. With access to 30+ lenders
              and an intimate understanding of the Aussie property market, let&rsquo;s find the
              right solution for your goals.
            </p>

            {/* Trust pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {trustPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-[#faf7f2] border border-stone-100 hover:border-[#cd1c26]/20 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#cd1c26]/10 flex items-center justify-center text-[#cd1c26]">
                    {pillar.icon}
                  </div>
                  <div>
                    <p
                      className="text-[#1a1a2e] font-semibold text-sm mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {pillar.title}
                    </p>
                    <p className="text-stone-500 text-xs leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SmoothScrollLink
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#cd1c26] hover:bg-[#a01018] text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 shadow-md shadow-[#cd1c26]/25"
              >
                Get Started Today
              </SmoothScrollLink>
              <a
                href="tel:+61484941980"
                className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#1a1a2e] font-semibold py-3.5 px-7 rounded-full transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhoneAlt} className="text-sm" />
                (0484) 941 980
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
