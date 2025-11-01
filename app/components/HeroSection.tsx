"use client";

import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white pt-32 pb-20"
      style={{
        backgroundImage: "url('/hero2.jpeg')",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-block text-teal-700 bg-slate-200 px-4 py-2 rounded-full text-sm font-medium">
            ⭐ Trusted by 50,000+ Businesses
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-blue-500 leading-tight">
            Trusted & Expert Chartered Accountants for{" "}
            <span className=" text-teal-300">
              ITR Filing, GST Returns, Accounting & Company Registration
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            Online CA Services Near Me – Simple, Secure & Affordable Chartered
            Accountant Support Across India
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { title: "50,000+ Happy Clients", icon: "👥" },
              { title: "4.9★ Google Rating", icon: "⭐" },
              { title: "No Hidden Fees", icon: "📄" },
              { title: "Pan India Coverage", icon: "🌐" },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-sm text-center flex-1 min-w-[150px]"
              >
                <div className="text-2xl mb-1">{f.icon}</div>
                <div>{f.title}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Book Free Consultation →
            </button>
            <button className="hover:bg-white text-black border-2 border-teal-400 hover:text-teal-500 px-6 py-3 rounded-lg font-semibold bg-green-500 transition">
              💬 Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Request a Callback
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Fill out the form and our experts will reach out shortly.
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-3 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none transition"
              />
            </div>

            {/* Mobile Number */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full pl-10 pr-3 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none transition"
              />
            </div>

            {/* Email Address */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-3 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none transition"
              />
            </div>

            {/* Dropdown */}
            <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-teal-600 outline-none transition">
              <option>Select Service Interested In</option>
              <option>Company Registration</option>
              <option>GST Filing</option>
              <option>Accounting & Tax</option>
              <option>Trademark Registration</option>
            </select>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-white hover:text-teal-400 hover:border-2 border-gray-300 text-white font-semibold py-3 rounded-lg transition"
            >
              Get Free Consultation
            </button>

            {/* Privacy Text */}
            <p className="text-center text-xs text-gray-500 mt-2">
              Your data is safe with us. We value your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
