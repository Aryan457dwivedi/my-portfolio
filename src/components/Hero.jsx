import React from "react";
import { SiLeetcode, SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('/bkg1.png')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl px-6">
        <p className="text-lg mb-2">Hello, I am</p>
        <h2 className="text-5xl font-bold mb-2">Aryan Dwivedi</h2>

        {/* Sliding Text */}
        <h3 className="text-2xl text-gray-300 h-8 mb-6 animate-pulse">
          Aspiring Software Developer
        </h3>

        {/* Resume Icon */}
        <div className="mt-4 flex justify-center gap-6 text-2xl">
          <a
            href="/Aryan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-green-500 transition transform hover:scale-110"
          >
            <HiOutlineDocumentText />
          </a>

          {/* Other Social Icons */}
          <a
            href="https://leetcode.com/u/Aryan7N/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-orange-500 transition transform hover:scale-110"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-dwivedi14/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 transition transform hover:scale-110"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/Aryan457dwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition transform hover:scale-110"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:aryandwivedi644@gmail.com"
            className="text-gray-200 hover:text-red-500 transition transform hover:scale-110"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </section>
  );
}
