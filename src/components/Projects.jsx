import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/Space Image.png')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-400 underline text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">ParkTrackr — Automated Parking Allocation</h3>
            <p className="text-gray-700 mb-2">
              Developed an Automated Parking System using Tesseract OCR and OpenCV-based ML model for number plate recognition.
            </p>
            <p className="text-gray-700 mb-2">
              Automated parking allocation and billing with SMS delivery including entry/exit duration and fare.
            </p>
            <p className="text-gray-700">
              Utilized MySQL for efficient vehicle and parking data management.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Nest — Home Automation using Arduino Uno</h3>
            <p className="text-gray-700 mb-2">
              Built a microcontroller-based Home Automation system with Arduino Uno and Bluetooth module.
            </p>
            <p className="text-gray-700 mb-2">
              Enabled remote control of lights, fans, and appliances via Android app, with automated scheduling.
            </p>
            <p className="text-gray-500 text-sm mt-2">February, 2025</p>
          </div>

          {/* Project 3 */}
          <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">SmartCalci — Scientific Calculator</h3>
            <p className="text-gray-700 mb-2">
              Python-based scientific calculator with trigonometry, logarithms, exponentiation; 40% faster using NumPy.
            </p>
            <p className="text-gray-700">
              Designed interactive GUI for seamless user experience.
            </p>
            <p className="text-gray-500 text-sm mt-2">July, 2024</p>
          </div>

          {/* Project 4 */}
          <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Expense Tracker — Full-Stack Web Application</h3>
            <p className="text-gray-700 mb-2">
              Full-stack app to track and categorize personal expenses with Material-UI interface.
            </p>
            <p className="text-gray-700 mb-2">
              Frontend built with React.js & Material-UI; API integration using Axios with localStorage fallback.
            </p>
            <p className="text-gray-700 mb-2">
              Features: add, delete, categorize, filter, and sort expenses dynamically.
            </p>
            <p className="text-gray-500 text-sm mt-2">January, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
