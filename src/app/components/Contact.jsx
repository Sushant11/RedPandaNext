"use client"; // Add this directive at the top

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"; // Import Instagram icon
import toast from "react-hot-toast"; // Added toast import

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    loanAmount: "",
    state: "",
    firstHome: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? (checked ? value : prev[name]) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending");
    console.log(formData);
    const toastId = toast.loading("Sending...");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      toast.dismiss(toastId);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="section py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and personalized mortgage
            solution.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2 font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white mb-2 font-medium"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              <div>
                <label
                  htmlFor="loan-type"
                  className="block text-white mb-2 font-medium"
                >
                  Loan Type / Purpose
                </label>
                <select
                  id="loan-type"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="first-home" className="text-gray-600">
                    First Home
                  </option>
                  <option value="refinance" className="text-gray-600">
                    Refinance
                  </option>
                  <option value="investment" className="text-gray-600">
                    Investment
                  </option>
                  <option value="commercial" className="text-gray-600">
                    Commercial
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="loan-amount"
                  className="block text-white mb-2 font-medium"
                >
                  Property Value or Loan Amount
                </label>
                <input
                  id="loan-amount"
                  name="loanAmount"
                  type="number"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  min="100000"
                  max="5000000"
                  step="10000"
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-white mb-2 font-medium"
                >
                  State / Location
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="VIC" className="text-gray-600">
                    Victoria
                  </option>
                  <option value="NSW" className="text-gray-600">
                    New South Wales
                  </option>
                  <option value="QLD" className="text-gray-600">
                    Queensland
                  </option>
                  <option value="WA" className="text-gray-600">
                    Western Australia
                  </option>
                  <option value="SA" className="text-gray-600">
                    South Australia
                  </option>
                  <option value="TAS" className="text-gray-600">
                    Tasmania
                  </option>
                  <option value="ACT" className="text-gray-600">
                    ACT
                  </option>
                  <option value="NT" className="text-gray-600">
                    Northern Territory
                  </option>
                </select>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label
                  htmlFor="firstHome"
                  className="block text-white mb-2 font-medium"
                >
                  First Home Buyer
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="first-home-yes"
                      name="firstHome"
                      value="Yes"
                      checked={formData.firstHome === "Yes"}
                      onChange={handleChange}
                      className="h-4 w-4 text-red-500"
                    />
                    <label htmlFor="first-home-yes" className="ml-2 text-white">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="first-home-no"
                      name="firstHome"
                      value="No"
                      checked={formData.firstHome === "No"}
                      onChange={handleChange}
                      className="h-4 w-4 text-red-500"
                    />
                    <label htmlFor="first-home-no" className="ml-2 text-white">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-white mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                ></textarea>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  disabled={status === "Sending"}
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90 font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2 " />{" "}
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="mb-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-xl"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-1">Our Office</h4>
                    <p className="opacity-90">
                      8 Vestige Street
                      <br />
                      Melbourne VIC 3064
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="opacity-90">
                      (0484) 941 980
                      <br />
                      Mon-Fri: 9am - 6pm AEST
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="opacity-90">
                      hello@redpandafinance.com
                      <br />
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/redpanda.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://instagram.com/redpanda.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
