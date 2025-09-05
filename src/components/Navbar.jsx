import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 bg-gray-200 shadow-md flex justify-between items-center px-6 transition-all duration-300 z-50`}
      style={{
        paddingTop: scrolled ? "0.2rem" : "0.6rem",  // smaller padding
        paddingBottom: scrolled ? "0.2rem" : "0.6rem",
      }}
    >
      <h1
        className={`text-lg font-bold text-gray-800 transition-all duration-300 transform ${
          scrolled ? "scale-90" : "scale-100"
        }`}
      >
        Aryan Dwivedi
      </h1>

      <ul
        className={`flex space-x-5 text-gray-700 transition-all duration-300 transform ${
          scrolled ? "scale-90" : "scale-100"
        }`}
      >
        <li>
          <a href="#home" className="hover:text-black">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-black">
            About
          </a>
        </li>
        <li>
          <a href="#education" className="hover:text-black">
            Education
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-black">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-black">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
