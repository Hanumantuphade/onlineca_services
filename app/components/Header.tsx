"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-teal-700">
          Pro<span className="text-blue-800">Register</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden text-md md:flex space-x-14 text-gray-900 font-semibold">
          <Link href="/about" className="hover:text-teal-700 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-teal-700 transition">
            Services
          </Link>
          <Link href="/faq" className="hover:text-teal-700 transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-teal-700 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-300 hover:text-black transition flex items-center gap-2"
          >
            <Phone size={18} />
            Talk to Expert
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700 transition"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700 transition"
            >
              Services
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700 transition"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700 transition"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-teal-300 transition"
            >
              Talk to Expert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
