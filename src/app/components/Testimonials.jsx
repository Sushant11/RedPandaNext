"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "T Thapa",
    role: "Investment property buyer in QLD",
    initial: "T",
    color: "#cd1c26",
    content:
      "Bigyan Dhai is extremely knowledgeable and helpful. It was a delight to work with him on securing finance for my investment property. His customer service is top notch. He was very informative, had all the answers and was always available after hours as well for support. I would be using his service again for my next property and will recommend him to all my contacts. Bigyan Dhai made the whole process easy and I am forever grateful.",
  },
  {
    id: 2,
    name: "Kim Ngan Nguyen",
    role: "First home buyer",
    initial: "K",
    color: "#cd1c26",
    content:
      "Bigyan is very knowledgeable and professional. As a first home buyer, I didn't have much understanding about all the process, Bigyan was very good at explaining, which made everything happen smoothly. Highly recommend.",
  },
  {
    id: 3,
    name: "Anil Moktan Tamang",
    role: "First home buyer in VIC",
    initial: "A",
    color: "#1a1a2e",
    content:
      "Bigyan Gurung dai from Red Panda Finance made our first home buying experience smooth and stress-free. He helped us secure a great borrowing capacity, even though my partner isn't a PR or Australian citizen — something we thought would be a big challenge. He went above and beyond, sending us detailed CoreLogic reports and guiding us through every step with patience. Thanks to his support, we've finally purchased our first home! Highly recommend Red Panda Finance!",
  },
  {
    id: 4,
    name: "Ayumi Tamang",
    role: "Investment property buyer",
    initial: "A",
    color: "#8a1a20",
    content:
      "I want to extend my heartfelt thanks to Bigyan Gurung for his exceptional service in creating a tailored program and plans that perfectly matched my needs. His deep understanding, attention to detail, and commitment to my goals exceeded my expectations. The process was seamless and stress-free, thanks to their professionalism and expertise. I highly recommend Red Panda Finance for their outstanding, client-focused service.",
  },
  {
    id: 5,
    name: "Kroshyo Gurung",
    role: "First home buyer in SA",
    initial: "K",
    color: "#cd1c26",
    content:
      "Bigyan was truly amazing! He made the process of buying our first home seamless and stress-free. His expertise, patience, and dedication were exceptional, and we couldn't have achieved this milestone without his guidance. We highly recommend his services to anyone looking for a mortgage broker. Thank you so much, Bigyan!",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="#f59e0b" className="w-4 h-4">
          <path d="M8 .25l1.857 3.763 4.154.604-3.005 2.928.709 4.133L8 9.75l-3.715 1.951.709-4.133L2 4.617l4.154-.604L8 .25z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, infinite: true, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="testimonials" className="section py-24 bg-[#faf7f2] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#cd1c26]" />
              <span className="text-[#cd1c26] text-xs font-semibold tracking-widest uppercase">
                Client Stories
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-stone-100 flex-shrink-0">
            <div className="flex flex-col items-center">
              <span
                className="text-3xl font-bold text-[#1a1a2e]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                5.0
              </span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 16 16" fill="#f59e0b" className="w-3.5 h-3.5">
                    <path d="M8 .25l1.857 3.763 4.154.604-3.005 2.928.709 4.133L8 9.75l-3.715 1.951.709-4.133L2 4.617l4.154-.604L8 .25z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-stone-200" />
            <div className="flex flex-col">
              <span className="text-stone-500 text-xs">Average rating</span>
              <span className="text-stone-700 text-sm font-semibold mt-0.5">5 verified reviews</span>
            </div>
          </div>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-3">
              <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#1a1a2e] text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-stone-400 text-xs">{t.role}</p>
                  </div>
                </div>

                <StarRating />

                {/* Quote mark */}
                <svg
                  viewBox="0 0 32 24"
                  fill="none"
                  className="w-8 h-6 text-[#cd1c26]/20 mb-3"
                >
                  <path
                    d="M0 24V14.4C0 6.4 4.267 1.6 12.8 0l1.6 2.4C10.133 3.467 7.733 6.267 7.2 10.8H12V24H0zm16 0V14.4C16 6.4 20.267 1.6 28.8 0l1.6 2.4C26.133 3.467 23.733 6.267 23.2 10.8H28V24H16z"
                    fill="currentColor"
                  />
                </svg>

                <p className="text-stone-500 text-sm leading-relaxed flex-1 line-clamp-5">
                  {t.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
