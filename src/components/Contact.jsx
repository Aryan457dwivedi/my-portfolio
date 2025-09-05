import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/iss.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-300 underline">Contact Me</h2>
        <p className="text-center max-w-xl mb-6 text-gray-200">
          Feel free to reach out via email, phone, or connect with me on LinkedIn.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:aryandwivedi644@gmail.com"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition text-2xl flex items-center justify-center"
            title="Email"
          >
            <MdEmail />
          </a>

          <a
            href="tel:+916392307844"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition text-2xl flex items-center justify-center"
            title="Phone"
          >
            <MdPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-dwivedi14/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition text-2xl flex items-center justify-center"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
