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

const fieldClass =
  "w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cd1c26]/60 focus:border-[#cd1c26]/50 placeholder-white/40 transition-all duration-200 text-sm";

const labelClass = "block text-white/80 mb-1.5 text-sm font-medium";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    stateTerritory: "VIC",
    residencyStatus: "Australian Citizen",
    mainPurpose: "Buy Existing Home",
    firstHome: "Yes",
    propertyState: "VIC",
    applicants: "1",
    applicant1Occupation: "",
    applicant1Employment: "",
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

  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = ["mobileNumber", "combinedIncome", "totalSavings"];
    if (numericFields.includes(name)) {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
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
        setShowModal(true);
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
    } catch {
      toast.dismiss(toastId);
      toast.error("Something went wrong.");
      setStatus("");
    }
  };

  return (
    <section
      id="contact"
      className="section py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d3d3d 50%, #1a1a2e 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #cd1c26 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #cd1c26 0%, transparent 65%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#cd1c26]" />
            <span className="text-[#cd1c26] text-xs font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <span className="w-8 h-px bg-[#cd1c26]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Fill in your details and we&rsquo;ll be in touch within 24 hours for a
            free, no-obligation consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="lg:w-3/4 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* First Name */}
              <div>
                <label className={labelClass}>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={fieldClass} />
              </div>

              {/* Last Name */}
              <div>
                <label className={labelClass}>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={fieldClass} />
              </div>

              {/* Mobile */}
              <div>
                <label className={labelClass}>Mobile Number</label>
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required className={fieldClass} />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={fieldClass} />
              </div>

              {/* State */}
              <div>
                <label className={labelClass}>State / Territory</label>
                <select name="stateTerritory" value={formData.stateTerritory} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="VIC">Victoria</option>
                  <option className="text-gray-800" value="NSW">New South Wales</option>
                  <option className="text-gray-800" value="QLD">Queensland</option>
                  <option className="text-gray-800" value="WA">Western Australia</option>
                  <option className="text-gray-800" value="SA">South Australia</option>
                  <option className="text-gray-800" value="TAS">Tasmania</option>
                  <option className="text-gray-800" value="ACT">ACT</option>
                  <option className="text-gray-800" value="NT">Northern Territory</option>
                </select>
              </div>

              {/* Residency */}
              <div>
                <label className={labelClass}>Residency Status</label>
                <select name="residencyStatus" value={formData.residencyStatus} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="Australian Citizen">Australian Citizen</option>
                  <option className="text-gray-800" value="Permanent Resident">Permanent Resident</option>
                  <option className="text-gray-800" value="Temporary Visa Holder">Temporary Visa Holder</option>
                </select>
              </div>

              {/* Main Purpose */}
              <div>
                <label className={labelClass}>Main Purpose for Home Loan</label>
                <select name="mainPurpose" value={formData.mainPurpose} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="Buy Existing Home">Buy an existing home to live in</option>
                  <option className="text-gray-800" value="Buy Investment">Buy an investment property to rent out</option>
                  <option className="text-gray-800" value="Buy Land/Build">Buy land and build a new home to live in</option>
                  <option className="text-gray-800" value="Refinance">Refinance an existing home loan</option>
                </select>
              </div>

              {/* First Home */}
              <div>
                <label className={labelClass}>First Time Home Buyer?</label>
                <select name="firstHome" value={formData.firstHome} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="Yes">Yes</option>
                  <option className="text-gray-800" value="No">No</option>
                </select>
              </div>

              {/* Property State */}
              <div>
                <label className={labelClass}>Where are you planning to buy?</label>
                <select name="propertyState" value={formData.propertyState} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="VIC">Victoria</option>
                  <option className="text-gray-800" value="NSW">New South Wales</option>
                  <option className="text-gray-800" value="QLD">Queensland</option>
                  <option className="text-gray-800" value="WA">Western Australia</option>
                  <option className="text-gray-800" value="SA">South Australia</option>
                  <option className="text-gray-800" value="TAS">Tasmania</option>
                  <option className="text-gray-800" value="ACT">ACT</option>
                  <option className="text-gray-800" value="NT">Northern Territory</option>
                </select>
              </div>

              {/* Number of Applicants */}
              <div>
                <label className={labelClass}>How many people are applying?</label>
                <select name="applicants" value={formData.applicants} onChange={handleChange} className={fieldClass}>
                  <option value="" disabled hidden>Select number of applicants</option>
                  <option className="text-gray-800" value="1">1 applicant</option>
                  <option className="text-gray-800" value="2">2 applicants</option>
                  <option className="text-gray-800" value="More">More</option>
                </select>
              </div>

              {/* Applicant 1 Details */}
              {(formData.applicants === "1" || formData.applicants === "2") && (
                <>
                  <div className="md:col-span-2">
                    <p className="text-white font-semibold text-sm border-b border-white/15 pb-2 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                      Applicant 1 Details
                    </p>
                  </div>
                  <div>
                    <label className={labelClass}>Occupation</label>
                    <input type="text" name="applicant1Occupation" value={formData.applicant1Occupation} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Employment Status</label>
                    <select name="applicant1Employment" value={formData.applicant1Employment} onChange={handleChange} className={fieldClass}>
                      <option className="text-gray-800" value="Permanent Full Time">Permanent Full Time</option>
                      <option className="text-gray-800" value="Permanent Part Time">Permanent Part Time</option>
                      <option className="text-gray-800" value="Casual">Casual</option>
                      <option className="text-gray-800" value="Self-Employed (Sole Trader)">Self-Employed (Sole Trader)</option>
                      <option className="text-gray-800" value="Self-Employed (Company Director)">Self-Employed (Company Director)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Length of Employment</label>
                    <input type="text" name="applicant1Length" value={formData.applicant1Length} onChange={handleChange} className={fieldClass} />
                  </div>
                </>
              )}

              {/* Applicant 2 Details */}
              {formData.applicants === "2" && (
                <>
                  <div className="md:col-span-2">
                    <p className="text-white font-semibold text-sm border-b border-white/15 pb-2 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                      Applicant 2 Details
                    </p>
                  </div>
                  <div>
                    <label className={labelClass}>Occupation</label>
                    <input type="text" name="applicant2Occupation" value={formData.applicant2Occupation} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Employment Status</label>
                    <select name="applicant2Employment" value={formData.applicant2Employment} onChange={handleChange} className={fieldClass}>
                      <option className="text-gray-800" value="Permanent Full Time">Permanent Full Time</option>
                      <option className="text-gray-800" value="Permanent Part Time">Permanent Part Time</option>
                      <option className="text-gray-800" value="Casual">Casual</option>
                      <option className="text-gray-800" value="Self-Employed (Sole Trader)">Self-Employed (Sole Trader)</option>
                      <option className="text-gray-800" value="Self-Employed (Company Director)">Self-Employed (Company Director)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Length of Employment</label>
                    <input type="text" name="applicant2Length" value={formData.applicant2Length} onChange={handleChange} className={fieldClass} />
                  </div>
                </>
              )}

              {/* Combined Income */}
              {(formData.applicants === "1" || formData.applicants === "2") && (
                <div>
                  <label className={labelClass}>Combined Annual Income (before tax)</label>
                  <input type="text" name="combinedIncome" value={formData.combinedIncome} onChange={handleChange} required className={fieldClass} />
                </div>
              )}

              {/* Dependants */}
              <div>
                <label className={labelClass}>Number of Dependants</label>
                <select name="dependants" value={formData.dependants} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="0">0</option>
                  <option className="text-gray-800" value="1">1</option>
                  <option className="text-gray-800" value="2">2</option>
                  <option className="text-gray-800" value="3">3</option>
                  <option className="text-gray-800" value="More">More</option>
                </select>
              </div>

              {/* Total Savings */}
              <div>
                <label className={labelClass}>Total Savings to Date</label>
                <input type="text" name="totalSavings" value={formData.totalSavings} onChange={handleChange} required className={fieldClass} />
              </div>

              {/* Pay Plan */}
              <div>
                <label className={labelClass}>How are you planning to pay for the property?</label>
                <select name="payPlan" value={formData.payPlan} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="Cash Savings Only">Cash Savings Only</option>
                  <option className="text-gray-800" value="Equity from Existing Property">Equity from Existing Property</option>
                  <option className="text-gray-800" value="Using a Parent Guarantor">Using a Parent Guarantor</option>
                  <option className="text-gray-800" value="Not Sure">I&apos;m Not Sure</option>
                </select>
              </div>

              {/* Guarantor */}
              <div>
                <label className={labelClass}>Do you have a parent/family willing to go guarantor?</label>
                <select name="guarantor" value={formData.guarantor} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="Yes">Yes</option>
                  <option className="text-gray-800" value="No">No</option>
                  <option className="text-gray-800" value="Not Sure">I&apos;m Not Sure</option>
                </select>
              </div>

              {/* Purchase Time */}
              <div>
                <label className={labelClass}>When are you looking to buy?</label>
                <select name="purchaseTime" value={formData.purchaseTime} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="Now">Now</option>
                  <option className="text-gray-800" value="3-6 months">3 – 6 months</option>
                  <option className="text-gray-800" value="6-12 months">6 – 12 months</option>
                  <option className="text-gray-800" value="12+ months">12 months +</option>
                </select>
              </div>

              {/* Bad Credit */}
              <div>
                <label className={labelClass}>Ever had bad credit history?</label>
                <select name="badCredit" value={formData.badCredit} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="No">No</option>
                  <option className="text-gray-800" value="Yes">Yes</option>
                </select>
              </div>

              {formData.badCredit === "Yes" && (
                <div className="md:col-span-2">
                  <label className={labelClass}>If yes, please elaborate</label>
                  <textarea name="badCreditDetails" value={formData.badCreditDetails} onChange={handleChange} required rows={3} className={fieldClass} />
                </div>
              )}

              {/* Bankrupt */}
              <div>
                <label className={labelClass}>Been declared bankrupt in last 3 years?</label>
                <select name="bankrupt" value={formData.bankrupt} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="No">No</option>
                  <option className="text-gray-800" value="Yes">Yes</option>
                </select>
              </div>

              {/* How did you hear */}
              <div>
                <label className={labelClass}>How did you hear about us?</label>
                <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} required className={fieldClass}>
                  <option className="text-gray-800" value="Instagram">Instagram</option>
                  <option className="text-gray-800" value="Facebook">Facebook</option>
                  <option className="text-gray-800" value="TikTok">TikTok</option>
                  <option className="text-gray-800" value="Word of Mouth">Word of Mouth</option>
                  <option className="text-gray-800" value="Referral">Referral</option>
                </select>
              </div>

              {(formData.hearAboutUs === "Word of Mouth" || formData.hearAboutUs === "Referral") && (
                <div className="md:col-span-2">
                  <label className={labelClass}>Please provide referral details</label>
                  <input type="text" name="referrerDetails" value={formData.referrerDetails} onChange={handleChange} className={fieldClass} />
                </div>
              )}

              {/* Further Info */}
              <div className="md:col-span-2">
                <label className={labelClass}>Any further information?</label>
                <textarea name="furtherInfo" value={formData.furtherInfo} onChange={handleChange} rows={3} className={fieldClass} />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  disabled={status === "Sending"}
                  type="submit"
                  className="w-full bg-[#cd1c26] hover:bg-[#a01018] disabled:opacity-60 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#cd1c26]/30 hover:shadow-[#cd1c26]/50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                  Submit Request
                </button>
                <p className="mt-2.5 text-xs text-white/40 text-center">
                  All form fields must be completed to submit your request.
                </p>
              </div>
            </form>
          </div>

          {/* Calendly Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-2xl">
                <button
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors text-lg font-bold"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#cd1c26]/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#cd1c26" strokeWidth="2" className="w-5 h-5">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1a1a2e]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Book a Consultation
                  </h3>
                </div>
                <p className="text-stone-500 text-sm mb-6">
                  Thank you for your enquiry! Would you like to schedule a convenient time to speak with Bigyan?
                </p>
                {!showCalendly ? (
                  <div className="flex gap-3">
                    <button
                      className="flex-1 bg-[#cd1c26] hover:bg-[#a01018] text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                      onClick={() => setShowCalendly(true)}
                    >
                      Yes, let&apos;s book a time
                    </button>
                    <button
                      className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                      onClick={() => setShowModal(false)}
                    >
                      No, thanks
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

          {/* Contact Info Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-7 h-auto sticky top-24">
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contact Info
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#cd1c26] text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">Our Office</p>
                    <p className="text-white/55 text-xs leading-relaxed">
                      Craigieburn<br />VIC 3064
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-[#cd1c26] text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">Call Us</p>
                    <p className="text-white/55 text-xs leading-relaxed">
                      (0484) 941 980<br />Mon–Fri: 9am – 7pm AEST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#cd1c26] text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">Email Us</p>
                    <p className="text-white/55 text-xs leading-relaxed">
                      hello@redpandafinance.com.au<br />Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-white/50 text-xs font-medium uppercase tracking-widest mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/redpanda.finance"
                    target="_blank"
                    title="Facebook"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-sm" />
                  </a>
                  <a
                    href="https://instagram.com/redpanda.finance"
                    target="_blank"
                    title="Instagram"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-sm" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@redpanda.finance"
                    target="_blank"
                    title="TikTok"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={faTiktok} className="text-sm" />
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
