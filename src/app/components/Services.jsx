import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSyncAlt,
  faBuilding,
  faChartLine,
  faUserTie,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faUserTie,
    title: "First Home Buyers",
    description:
      "Special programs and guidance for those entering Australia's competitive property market.",
  },
  {
    icon: faBuilding,
    title: "Investment Loans",
    description:
      "Specialized property investment loans to help grow your portfolio in Australia and beyond.",
  },
  {
    icon: faSyncAlt,
    title: "Refinancing",
    description:
      "Lower your interest rate, reduce monthly payments, or access equity with our refinance solutions.",
  },
  {
    icon: faHandHoldingUsd,
    title: "Land & Construction Loans",
    description:
      "Tailored financing solutions for building your dream home in Victoria.",
  },
  {
    icon: faHome,
    title: "Other Loans",
    description:
      "Competitive car loans, personal loans, and SMSF loan solutions tailored to your financial goals.",
  },
  {
    icon: faChartLine,
    title: "Financial Guidance",
    description:
      "Personalized advice to help you make informed decisions about your property journey.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mortgage Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive mortgage solutions tailored to Australian property
            buyer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="loan-card bg-white rounded-lg shadow-md p-8 transition duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-primary text-2xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="#contact"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
