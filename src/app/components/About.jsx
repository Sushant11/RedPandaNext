import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import SmoothScrollLink from "../lib/Smoothscroll";

export default function About() {
  return (
    <section id="about" className="section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <Image
              src="/Better Choice-12.JPG"
              alt="Red Panda Finance team"
              width={1200}
              height={1600} // Maintain aspect ratio
              className="rounded-lg shadow-xl w-full h-[50vh] md:h-[75vh] object-cover object-[center_30%]"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet your personal broker
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-6">
              Hi, I’m Bigyan, the home loans specialist here at Red Panda
              Finance – located in Donnybrook, VIC. With over 9 years experience
              in the finance industry, including accounting and novated leasing,
              I’ll be there with you every step of the way. Whether you’re
              buying your first home, upgrading to your dream home, or expanding
              your property portfolio, I’m here to make the process efficient,
              simple and stress-free. With access to over 30 lenders and an
              intimate understanding of the Aussie property market, I’ll help 
              you find the right finance solution, tailored to your goals. Let’s
              chat about what you’re setting out to do!
            </p>

            <div className="mb-8">
              {[
                "Access to 30+ lenders across Australia",
                "Extensive knowledge of Australain property market",
                "Personalized service with your best interests at heart",
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary"
                      />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <SmoothScrollLink
                href="#contact"
                className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Get Started
              </SmoothScrollLink>
              <a
                href="tel:+61484941980"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> (0484)
                941 980
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
