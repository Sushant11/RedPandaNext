"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";
import { InlineWidget } from "react-calendly";


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    stateTerritory: "VIC", // default to Victoria
    residencyStatus: "Australian Citizen", // default
    mainPurpose: "Buy Existing Home", // default
    firstHome: "Yes", // default
    propertyState: "VIC", // default
    applicants: "1", // default to 1 applicant
    applicant1Occupation: "",
    applicant1Employment: "", // default
    applicant1Length: "",
    applicant2Occupation: "",
    applicant2Employment: "", // default
    applicant2Length: "",
    combinedIncome: "",
    dependants: "0", // default
    totalSavings: "",
    payPlan: "Cash Savings Only", // default
    guarantor: "Yes", // default
    purchaseTime: "Now", // default
    badCredit: "No", // default
    badCreditDetails: "",
    bankrupt: "No", // default
    furtherInfo: "",
    hearAboutUs: "Instagram", // default
    referrerDetails: "",
  });

  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericFields = ["mobileNumber", "combinedIncome", "totalSavings"];
    if (numericFields.includes(name)) {
      // Remove any non-digit characters
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowModal(true); // Open modal after successful submission

    setStatus("Sending");
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
        setShowModal(true); // Open modal after successful submission

        // Reset form to default values
        setFormData({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          stateTerritory: "VIC",
          residencyStatus: "Australian Citizen",
          mainPurpose: "Buy Existing Home",
          firstHome: "Yes",
          propertyState: "VIC",
          applicants: "",
          applicant1Occupation: "",
          applicant1Employment: "Permanent Full Time",
          applicant1Length: "",
          applicant2Occupation: "",
          applicant2Employment: "",
          applicant2Length: "",
          combinedIncome: "",
          dependants: "0",
          totalSavings: "",
          payPlan: "Cash Savings Only",
          guarantor: "Yes",
          purchaseTime: "Now",
          badCredit: "No",
          badCreditDetails: "",
          bankrupt: "No",
          furtherInfo: "",
          hearAboutUs: "Instagram",
          referrerDetails: "",
        });

        setStatus("");
      } else {
        toast.error(data.message || "Something went wrong.");
        setStatus("");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Something went wrong.");
      setStatus("");
    }
  };


  return (
    <section id="contact" className="section py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and personalized mortgage solution.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/4 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              {/* First Name */}
              <div>
                <label className="block text-white mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-white mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-white mb-2 font-medium">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              {/* State / Territory */}
              <div>
                <label className="block text-white mb-2 font-medium">State / Territory</label>
                <select
                  name="stateTerritory"
                  value={formData.stateTerritory}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="VIC">Victoria</option>
                  <option className="text-gray-600" value="NSW">New South Wales</option>
                  <option className="text-gray-600" value="QLD">Queensland</option>
                  <option className="text-gray-600" value="WA">Western Australia</option>
                  <option className="text-gray-600" value="SA">South Australia</option>
                  <option className="text-gray-600" value="TAS">Tasmania</option>
                  <option className="text-gray-600" value="ACT">ACT</option>
                  <option className="text-gray-600" value="NT">Northern Territory</option>
                </select>
              </div>

              {/* Residency Status */}
              <div>
                <label className="block text-white mb-2 font-medium">Residency Status</label>
                <select
                  name="residencyStatus"
                  value={formData.residencyStatus}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="Australian Citizen">Australian Citizen</option>
                  <option className="text-gray-600" value="Permanent Resident">Permanent Resident</option>
                  <option className="text-gray-600" value="Temporary Visa Holder">Temporary Visa Holder</option>
                </select>
              </div>

              {/* Main Purpose */}
              <div className="md:col-span-1">
                <label className="block text-white mb-2 font-medium">Main Purpose for Home Loan</label>
                <select
                  name="mainPurpose"
                  value={formData.mainPurpose}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="Buy Existing Home">Buy an existing home to live in</option>
                  <option className="text-gray-600" value="Buy Investment">Buy an investment property to rent out</option>
                  <option className="text-gray-600" value="Buy Land/Build">Buy land and build a new home to live in</option>
                  <option className="text-gray-600" value="Refinance">Refinance an existing home loan</option>
                </select>
              </div>

              {/* First Time Home Buyer */}
              <div>
                <label className="block text-white mb-2 font-medium">First Time Home Buyer?</label>
                <select
                  name="firstHome"
                  value={formData.firstHome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="Yes">Yes</option>
                  <option className="text-gray-600" value="No">No</option>
                </select>
              </div>

              {/* Property State */}
              <div>
                <label className="block text-white mb-2 font-medium">Where are you planning to buy?</label>
                <select
                  name="propertyState"
                  value={formData.propertyState}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="VIC">Victoria</option>
                  <option className="text-gray-600" value="NSW">New South Wales</option>
                  <option className="text-gray-600" value="QLD">Queensland</option>
                  <option className="text-gray-600" value="WA">Western Australia</option>
                  <option className="text-gray-600" value="SA">South Australia</option>
                  <option className="text-gray-600" value="TAS">Tasmania</option>
                  <option className="text-gray-600" value="ACT">ACT</option>
                  <option className="text-gray-600" value="NT">Northern Territory</option>
                </select>
              </div>

              {/* Number of Applicants */}
              <div>
                <label className="block text-white mb-2 font-medium">How many people are applying?</label>
                <select
                  name="applicants"
                  value={formData.applicants}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="" disabled hidden>
                    Select number of applicants
                  </option>
                  <option className="text-gray-600" value="1">1 applicant</option>
                  <option className="text-gray-600" value="2">2 applicants</option>
                  <option className="text-gray-600" value="More">More</option>
                </select>
              </div>

              {/* Applicant 1 Details */}
              {formData.applicants === "1" || formData.applicants === "2" ? (
                <>
                  <div className="md:col-span-2 mt-4 font-bold text-white">Applicant 1 Details</div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Occupation</label>
                    <input
                      type="text"
                      name="applicant1Occupation"
                      value={formData.applicant1Occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Employment Status</label>
                    <select
                      name="applicant1Employment"
                      value={formData.applicant1Employment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option className="text-gray-600" value="Permanent Full Time">Permanent Full Time</option>
                      <option className="text-gray-600" value="Permanent Part Time">Permanent Part Time</option>
                      <option className="text-gray-600" value="Casual">Casual</option>
                      <option className="text-gray-600" value="Self-Employed (Sole Trader)">Self-Employed (Sole Trader)</option>
                      <option className="text-gray-600" value="Self-Employed (Company Director)">Self-Employed (Company Director)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white mb-2 font-medium">Length of Employment</label>
                    <input
                      type="text"
                      name="applicant1Length"
                      value={formData.applicant1Length}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                    />
                  </div>
                </>
              ) : null}

              {/* Applicant 2 Details */}
              {formData.applicants === "2" ? (
                <>
                  <div className="md:col-span-2 mt-4 font-bold text-white">Applicant 2 Details</div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Occupation</label>
                    <input
                      type="text"
                      name="applicant2Occupation"
                      value={formData.applicant2Occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Employment Status</label>
                    <select
                      name="applicant2Employment"
                      value={formData.applicant2Employment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option className="text-gray-600" value="Permanent Full Time">Permanent Full Time</option>
                      <option className="text-gray-600" value="Permanent Part Time">Permanent Part Time</option>
                      <option className="text-gray-600" value="Casual">Casual</option>
                      <option className="text-gray-600" value="Self-Employed (Sole Trader)">Self-Employed (Sole Trader)</option>
                      <option className="text-gray-600" value="Self-Employed (Company Director)">Self-Employed (Company Director)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white mb-2 font-medium">Length of Employment</label>
                    <input
                      type="text"
                      name="applicant2Length"
                      value={formData.applicant2Length}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                    />
                  </div>
                </>
              ) : null}

              {/* Combined Income */}
              {formData.applicants === "1" || formData.applicants === "2" ? (
                <div className="md:col-span-1">
                  <label className="block text-white mb-2 font-medium">Combined Annual Income (before tax)</label>
                  <input
                    type="text"
                    name="combinedIncome"
                    value={formData.combinedIncome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                  />
                </div>
              ) : null}

              {/* Dependants */}
              <div>
                <label className="block text-white mb-2 font-medium">Number of Dependants</label>
                <select
                  name="dependants"
                  value={formData.dependants}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="0">0</option>
                  <option className="text-gray-600" value="1">1</option>
                  <option className="text-gray-600" value="2">2</option>
                  <option className="text-gray-600" value="3">3</option>
                  <option className="text-gray-600" value="More">More</option>
                </select>
              </div>

              {/* Total Savings */}
              <div className="md:col-span-1">
                <label className="block text-white mb-2 font-medium">Total Savings to Date</label>
                <input
                  type="text"
                  name="totalSavings"
                  value={formData.totalSavings}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                />
              </div>

              {/* Pay Plan */}
              <div>
                <label className="block text-white mb-2 font-medium">How are you planning to pay for the property?</label>
                <select
                  name="payPlan"
                  value={formData.payPlan}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="Cash Savings Only">Cash Savings Only</option>
                  <option className="text-gray-600" value="Equity from Existing Property">Equity from Existing Property</option>
                  <option className="text-gray-600" value="Using a Parent Guarantor">Using a Parent Guarantor</option>
                  <option className="text-gray-600" value="Not Sure">I’m Not Sure</option>
                </select>
              </div>

              {/* Guarantor */}
              <div>
                <label className="block text-white mb-2 font-medium">Do you have a parent/family willing to go guarantor?</label>
                <select
                  name="guarantor"
                  value={formData.guarantor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="Yes">Yes</option>
                  <option className="text-gray-600" value="No">No</option>
                  <option className="text-gray-600" value="Not Sure">I’m Not Sure</option>
                </select>
              </div>

              {/* Purchase Time */}
              <div>
                <label className="block text-white mb-2 font-medium">When are you looking to buy?</label>
                <select
                  name="purchaseTime"
                  value={formData.purchaseTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="Now">Now</option>
                  <option className="text-gray-600" value="3-6 months">3 – 6 months</option>
                  <option className="text-gray-600" value="6-12 months">6 – 12 months</option>
                  <option className="text-gray-600" value="12+ months">12 months +</option>
                </select>
              </div>

              {/* Bad Credit */}
              <div>
                <label className="block text-white mb-2 font-medium">Ever had bad credit history?</label>
                <select
                  name="badCredit"
                  value={formData.badCredit}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="No">No</option>
                  <option className="text-gray-600" value="Yes">Yes</option>
                </select>
              </div>

              {formData.badCredit === "Yes" && (
                <div className="md:col-span-2">
                  <label className="block text-white mb-2 font-medium">If yes, please elaborate</label>
                  <textarea
                    name="badCreditDetails"
                    value={formData.badCreditDetails}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                  ></textarea>
                </div>
              )}

              {/* Bankrupt */}
              <div>
                <label className="block text-white mb-2 font-medium">Been declared bankrupt in last 3 years?</label>
                <select
                  name="bankrupt"
                  value={formData.bankrupt}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="No">No</option>
                  <option className="text-gray-600" value="Yes">Yes</option>
                </select>
              </div>

              {/* How did you hear about us */}
              <div>
                <label className="block text-white mb-2 font-medium">How did you hear about us?</label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option className="text-gray-600" value="Instagram">Instagram</option>
                  <option className="text-gray-600" value="Facebook">Facebook</option>
                  <option className="text-gray-600" value="TikTok">TikTok</option>
                  <option className="text-gray-600" value="Word of Mouth">Word of Mouth</option>
                  <option className="text-gray-600" value="Referral">Referral</option>
                </select>
              </div>

              {/* Referral Details */}
              {(formData.hearAboutUs === "Word of Mouth" || formData.hearAboutUs === "Referral") && (
                <div className="md:col-span-2">
                  <label className="block text-white mb-2 font-medium">Please provide referral details</label>
                  <input
                    type="text"
                    name="referrerDetails"
                    value={formData.referrerDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                  />
                </div>
              )}

              {/* Further Info */}
              <div className="md:col-span-2">
                <label className="block text-white mb-2 font-medium">Any further information?</label>
                <textarea
                  name="furtherInfo"
                  value={formData.furtherInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                ></textarea>
              </div>


              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  disabled={status === "Sending"}
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90 font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Submit Request
                </button>
                <p className="mt-2 text-sm text-gray-200">All the form fields must be entered to submit request.</p>


              </div>
            </form>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white text-black rounded-lg p-8 w-full max-w-lg relative">
                <button
                  className="absolute top-3 right-3 text-xl font-bold"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold mb-4">Do you want to schedule a meeting with Red Panda Finance?</h3>
                <p className="text-gray-700">Thank you for submitting your enquiry! You can now book a convenient time to discuss your financial needs with one of our advisors.</p>
                {!showCalendly ? (
                  <div className="flex justify-between mt-3">
                    <button
                      className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded"
                      onClick={() => setShowCalendly(true)}
                    >
                      Yes, I would love to.
                    </button>
                    <button
                      className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
                      onClick={() => setShowModal(false)}
                    >
                      No, Thanks
                    </button>
                  </div>
                ) : (
                  <InlineWidget
                    url="https://calendly.com/hello-redpandafinance/20min"
                    styles={{ minWidth: "320px", height: "700px", marginTop: "20px" }}
                  />
                )}
              </div>
            </div>
          )}
          {/* Contact Info Panel (unchanged) */}
          <div className="lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-auto">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="mb-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-1">Our Office</h4>
                    <p className="opacity-90">
                      Craigieburn
                      <br />
                      VIC 3064
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
                      Mon-Fri: 9am - 7pm AEST
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
                      hello@redpandafinance.com.au
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
                    title="Facebook"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex hover:scale-90 items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://instagram.com/redpanda.finance"
                    target="_blank"
                    title="Instagram"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex hover:scale-90 items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@redpanda.finance"
                    target="_blank"
                    title="Tiktok"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex hover:scale-90 items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
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
