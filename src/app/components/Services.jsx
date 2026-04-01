"use client";

import { useEffect, useRef, useState } from "react";
import SmoothScrollLink from "../lib/Smoothscroll";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "First Home Buyers",
    description:
      "Specialist programs and step-by-step guidance for those entering Australia's competitive property market for the first time.",
    highlight: "FHBG eligible",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M11 8h6" strokeLinecap="round" />
        <path d="M7 12h.01M11 12h6" strokeLinecap="round" />
      </svg>
    ),
    title: "Investment Loans",
    description:
      "Grow your property portfolio with specialist investment financing — structured to maximise your borrowing power.",
    highlight: "Portfolio strategy",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
    title: "Refinancing",
    description:
      "Lower your interest rate, reduce repayments, or unlock equity. We compare 30+ lenders to find you a better deal.",
    highlight: "Rate comparison",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Land & Construction",
    description:
      "Tailored finance solutions for buying land and building your dream home — with staged draw-down structures.",
    highlight: "Build-ready finance",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Other Loans",
    description:
      "Competitive car loans, personal loans, and SMSF loan solutions — tailored to your financial goals.",
    highlight: "SMSF included",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Financial Guidance",
    description:
      "Personalised, obligation-free advice to help you make informed decisions at every stage of your property journey.",
    highlight: "No obligation",
  },
];

function ServiceCard({ service, index }) {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`service-card group bg-white border border-stone-100 rounded-2xl p-8 flex flex-col cursor-default transition-all duration-600 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-[#cd1c26]/8 flex items-center justify-center text-[#cd1c26] mb-5 group-hover:bg-[#cd1c26] group-hover:text-white transition-all duration-300">
        {service.icon}
      </div>

      {/* Highlight badge */}
      <span className="text-[10px] font-semibold tracking-widest uppercase text-[#cd1c26] mb-3">
        {service.highlight}
      </span>

      <h3
        className="text-xl font-bold text-[#1a1a2e] mb-3"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {service.title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed flex-1">{service.description}</p>

      {/* CTA */}
      <SmoothScrollLink
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-[#cd1c26] text-sm font-semibold group-hover:gap-3 transition-all duration-200"
      >
        Enquire now
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SmoothScrollLink>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section py-24 bg-[#faf7f2]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#cd1c26]" />
            <span className="text-[#cd1c26] text-xs font-semibold tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Mortgage Solutions
            <br />
            Built Around You
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            From your first home to your fifth investment property — we have a
            financing solution tailored to your situation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#cd1c26] rounded-2xl px-8 py-7">
          <div>
            <p
              className="text-white text-xl font-bold mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Not sure which loan is right for you?
            </p>
            <p className="text-white/70 text-sm">
              Book a free, no-obligation consultation — we&rsquo;ll guide you from start to settlement.
            </p>
          </div>
          <SmoothScrollLink
            href="#contact"
            className="flex-shrink-0 bg-white text-[#cd1c26] font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#faf7f2] transition-colors duration-200 whitespace-nowrap"
          >
            Book a Free Chat
          </SmoothScrollLink>
        </div>
      </div>
    </section>
  );
}
