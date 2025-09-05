import React from "react";

export default function Skills() {
  const skillGroups = [
    {
      category: "Programming Languages",
      list: ["C", "C++", "Python", "JavaScript"]
    },
    {
      category: "Frontend",
      list: ["HTML", "CSS", "React", "TailwindCSS"]
    },
    {
      category: "Backend & DB",
      list: ["Node.js", "MySQL"]
    },
    {
      category: "Operating Systems",
      list: ["Windows", "Linux"]
    },
    {
      category: "Machine Learning",
      list: ["Scikit-learn", "TensorFlow", "Keras", "Pandas"]
    },
    {
      category: "Tools & IDEs",
      list: ["VS Code", "Git", "GitHub"]
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/bkg3.png')` }}
    >
      <div className="relative z-10 text-center">
        {/* Heading with underline matching text color */}
        <h2 className="text-4xl font-bold mb-10 text-gray-300 relative inline-block">
          Skills
          <span className="absolute left-0 bottom-[-6px] w-full h-[3px] bg-gray-300 rounded-md"></span>
        </h2>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="flex flex-col items-center border border-gray-500 rounded-xl p-4 bg-gray-900 bg-opacity-30 min-w-[200px]"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-200">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.list.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 bg-opacity-40 text-gray-200 rounded-full font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
