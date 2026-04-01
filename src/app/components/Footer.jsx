import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const navColumns = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Home Loans", href: "#" },
      { label: "Refinancing", href: "#" },
      { label: "Investment Loans", href: "#" },
      { label: "First Home Buyers", href: "#" },
      { label: "Construction Loans", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Licenses", href: "#" },
      { label: "Disclosures", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Top section */}
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Brand column */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/mainlogoWhite.png"
                alt="Red Panda Finance Logo"
                className="w-9 h-9 object-contain"
              />
              <div>
                <span
                  className="text-lg font-bold text-white leading-none block"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Red Panda
                </span>
                <span className="text-xs tracking-widest text-[#cd1c26] uppercase">Finance</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Helping home buyers and investors navigate their property journey
              with smart, tailored solutions.
            </p>
            <div className="space-y-1">
              <p className="text-white/35 text-xs">
                Credit Representative No. 529844 of Buyers Choice Licencing Pty Ltd.
              </p>
              <p className="text-white/35 text-xs">
                ACN 626 172 281 (Australian Credit License No. 509484)
              </p>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 max-w-xl">
            {navColumns.map((col) => (
              <div key={col.heading}>
                <h4
                  className="text-sm font-bold text-white mb-4 tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {col.heading}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/45 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Bottom bar */}
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">
          &copy; 2025 Red Panda Finance &amp; Capital Pty Ltd. All rights reserved.
        </p>

        <div className="flex gap-4">
          {[
            { icon: faFacebookF, href: "https://facebook.com/redpanda.finance", label: "Facebook" },
            { icon: faInstagram, href: "https://instagram.com/redpanda.finance", label: "Instagram" },
            { icon: faTiktok, href: "https://www.tiktok.com/@redpanda.finance", label: "TikTok" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#cd1c26] transition-all duration-200 text-sm"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
