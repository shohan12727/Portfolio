import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const STATUS_STYLES = {
  current: {
    circle:
      "bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-500/30 animate-pulse",
    badge: "bg-gradient-to-r from-orange-500 to-orange-600 text-white",
    label: "In Progress",
  },
  completed: {
    circle: "bg-gradient-to-br from-green-500 to-blue-600 shadow-blue-500/30",
    badge: "bg-gradient-to-r from-green-500 to-blue-600 text-white",
    label: "Completed",
  },
  incomplete: {
    circle: "bg-gradient-to-br from-gray-400 to-gray-500 shadow-gray-400/30",
    badge: "bg-gradient-to-r from-gray-400 to-gray-500 text-white",
    label: "Incomplete",
  },
};

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  const educationData = [
    {
      degree: "BS in Electrical and Electronic Engineering",
      institution: "North South University",
      duration: "2025 – Present",
      status: "current",
    },
    {
      degree: "BSc in Mathematics",
      institution: "Khulna University",
      duration: "2024 – 2025",
      description: "Left due to pursuing a degree in Engineering",
      status: "incomplete",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Rajendra College",
      result: "GPA-5.00",
      duration: "2022 – 2023",
      description:
        "Science background with Mathematics, Physics and Chemistry major.",
      status: "completed",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Boalmari George Academy",
      result: "GPA-5.00",
      duration: "2016 – 2018",
      description: "Science background.",
      status: "completed",
    },
  ];

  return (
    <section className="min-h-screen grid-bg py-10">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div data-aos="fade-right" className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1F3A5F] via-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A timeline of academic achievements and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {educationData.map((item, index) => {
            const status = STATUS_STYLES[item.status];

            return (
              <div
                key={`${item.degree}-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="flex group"
              >
                {/* Indicator */}
                <div className="flex flex-col items-center mr-8 md:mr-12">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg 
              transition-transform duration-300 ease-in-out 
              group-hover:scale-110 ${status.circle}`}
                  >
                    {item.status === "current" ? (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  {index !== educationData.length - 1 && (
                    <div className="flex flex-col items-center flex-1 my-3">
                      <div className="w-1 flex-1 bg-gradient-to-b from-orange-500 via-blue-500 to-red-900 rounded-full" />
                      <svg
                        className="w-5 h-5 text-orange-500 -mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Card */}
                <div className="pb-14 flex-1">
                  <div
                    data-aos="zoom-in-left"
                    className=" backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100  bg-[#f9f7f1]
           transition-transform  duration-300 ease-in-out 
          hover:shadow-xl"
                  >
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${status.badge}`}
                    >
                      {status.label}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {item.degree}
                    </h3>

                    <p className="text-[#1F2933] font-semibold text-lg mb-3">
                      {item.institution}
                    </p>

                    <p className="text-orange-600 font-semibold mb-3">
                      {item.duration}
                    </p>

                    {item.result && (
                      <p className="text-green-600 font-semibold mb-3">
                        Result: {item.result}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
