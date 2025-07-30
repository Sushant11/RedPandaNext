import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"; // Import Instagram icon

export default function Contact() {
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
            <form className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
                  placeholder="John Smith"
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
                  type="email"
                  id="email"
                  placeholder="john@example.com"
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
                  id="phone"
                  placeholder="(555) 123-4567"
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
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="first-home">First Home</option>
                  <option value="refinance">Refinance</option>
                  <option value="investment">Investment</option>
                  <option value="commercial">Commercial</option>
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
                  type="number"
                  id="loan-amount"
                  min="100000"
                  max="5000000"
                  step="10000"
                  defaultValue="500000"
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
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="vic">Victoria</option>
                  <option value="nsw">New South Wales</option>
                  <option value="qld">Queensland</option>
                  <option value="wa">Western Australia</option>
                  <option value="sa">South Australia</option>
                  <option value="tas">Tasmania</option>
                  <option value="act">ACT</option>
                  <option value="nt">Northern Territory</option>
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
                      name="first-home"
                      value="yes"
                      className="h-4 w-4 text-red-500 focus:ring-2 focus:ring-white"
                    />
                    <label htmlFor="first-home-yes" className="ml-2 text-white">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="first-home-no"
                      name="first-home"
                      value="no"
                      defaultChecked
                      className="h-4 w-4 text-red-500 focus:ring-2 focus:ring-white"
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
                  Comments or Notes
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your mortgage needs..."
                  className="w-full px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                ></textarea>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
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
