import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative px-6 py-20"
      style={{ backgroundImage: `url('/Space Image.png')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-400 underline">
          About Me
        </h2>
        <p className="max-w-2xl text-gray-200 leading-relaxed">
          Hello! My name is <span className="font-semibold">Aryan Dwivedi</span>. I’m a
          Computer Science undergrad with a strong track record in project-based learning,
          problem-solving, data structures, and building ML/IoT systems. Passionate about
          practical application of tech to solve real-world problems.
        </p>
      </div>
    </section>
  );
}
