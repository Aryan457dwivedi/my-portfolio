import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/bkg2.png')` }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-10 text-black underline">Education</h2>

        <div className="space-y-6">
          {/* PSIT Box */}
          <div className="bg-gray-900 bg-opacity-40 rounded-lg p-6 shadow-md">
            <p className="text-black mb-2">
              Bachelors of Technology in Computer Science and Engineering (Final Year)
            </p>
            <h3 className="text-2xl font-semibold text-black">PSIT, Kanpur</h3>

            {/* Timeline Bar */}
            <div className="w-2/3 bg-black h-2 rounded-full mx-auto overflow-hidden mt-4">
              <div
                className="bg-gray-700 h-2 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="flex justify-between text-black text-sm mt-1 w-2/3 mx-auto">
              <span>2022</span>
              <span>2026</span>
            </div>
          </div>

          {/* High School Box */}
          
        </div>
      </div>
    </section>
  );
}
