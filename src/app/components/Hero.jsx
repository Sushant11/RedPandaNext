import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import SmoothScrollLink from "../lib/Smoothscroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero section h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Smart Mortgage Solutions for Melbourne Homebuyers
          </h1>
          <p className="text-xl mb-8">
            Helping home buyers and investors navigate their property journey
            with smart, tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <SmoothScrollLink
              href="#contact"
              className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              Get Pre-Approved
            </SmoothScrollLink>
            <a
              href="tel:+61484941980"
              className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> (0484) 941
              980
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
