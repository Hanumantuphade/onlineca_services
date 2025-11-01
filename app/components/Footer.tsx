"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D91] text-white pt-16 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold  mb-3">
            Pro<span className="text-teal-400">Register</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Simplifying your tax, accounting, and registration needs with
            expert Chartered Accountants — trusted by thousands of businesses
            across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/about" className="hover:text-teal-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-teal-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-teal-300 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-300 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>✅ Company Registration</li>
            <li>✅ GST Filing</li>
            <li>✅ Accounting & Taxation</li>
            <li>✅ Trademark Registration</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">
            Contact Info
          </h3>
          <p className="text-gray-300 text-sm">
            📍 Mumbai, Maharashtra, India
          </p>
          <p className="text-gray-300 text-sm mt-2">
            📞 +91 98765 43210
          </p>
          <p className="text-gray-300 text-sm mt-2">
            ✉️ support@onlinecaservices.in
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-white/10 p-2 rounded-full hover:bg-teal-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} OnlineCA Services. All rights reserved. | Designed with ❤️ in India.
      </div>
    </footer>
  );
}
