import React, { useEffect } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init({ 
      duration: 500, 
      once: true, 
      easing: "ease-out-cubic",
      offset: 100
    });
  }, []);
  
  const experiences = [
    {
      org: "IEEE NSU Student Branch",
      type: "Full-time",
      duration: "8 mos",
      roles: [
        {
          title: "Web Dev Core Volunteer",
          period: "Nov 2025 - Present · 2 mos",
          skills: ["Web Development"],
        },
        {
          title: "General Member",
          period: "May 2025 - Present · 8 mos",
          skills: ["Teamwork"],
        },
        {
          title: "Web Dev Volunteer",
          period: "May 2025 - Nov 2025 · 7 mos",
          location: "Dhaka, Bangladesh",
          skills: ["Web Development"],
        },
      ],
    },
    {
      org: "NSU ACM Student Chapter",
      type: "Full-time",
      duration: "8 mos",
      roles: [
        {
          title: "Web-dev Member",
          period: "Jul 2025 - Present · 6 mos",
          location: "Dhaka, Bangladesh · Hybrid",
          skills: ["Web Development"],
        },
        {
          title: "General Member",
          period: "May 2025 - Jul 2025 · 3 mos",
          skills: ["Provision"],
        },
      ],
    },
    {
      org: "NSU Computer & Engineering Club",
      type: "Full-time",
      duration: "5 mos",
      roles: [
        {
          title: "General Member",
          period: "Mar 2025 - Jul 2025 · 5 mos",
          location: "Dhaka, Bangladesh · On-site",
          skills: [],
        },
      ],
    },
  ];

  return (
    <section className="px-6 py-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div 
          data-aos="fade-down" 
          data-aos-duration="800"
          className="text-center mb-6"
        >
          <h2 className="text-4xl bg-gradient-to-r from-[#1F3A5F] via-blue-600 to-orange-500 font-bold bg-clip-text text-transparent mb-2">
            Experience
          </h2>
          <p className="text-gray-600">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-duration="1000"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Organization Header */}
              <div 
                className="bg-gradient-to-r from-[#1F3A5F] to-[#2c5282] p-6 text-white"
                data-aos="fade-right"
                data-aos-delay={idx * 150 + 100}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.org}</h3>
                    <div className="flex items-center gap-4 text-blue-100">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles Section */}
              <div className="p-6">
                <div className="space-y-6">
                  {exp.roles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      data-aos="fade-left"
                      data-aos-delay={idx * 150 + rIdx * 100 + 200}
                      data-aos-duration="800"
                      className="relative pl-8 pb-6 border-l-2 border-[#1F3A5F]/30 last:pb-0"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-0 w-4 h-4 bg-[#1F3A5F] rounded-full transform -translate-x-[9px]">
                        <div className="absolute inset-0 bg-[#1F3A5F] rounded-full animate-ping opacity-75"></div>
                      </div>

                      {/* Role Content */}
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {role.title}
                        </h4>

                        <div className="space-y-1 mb-3">
                          <p className="text-gray-600 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#1F3A5F]" />
                            <span className="font-medium">{role.period}</span>
                          </p>

                          {role.location && (
                            <p className="text-gray-600 flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-[#1F3A5F]" />
                              <span>{role.location}</span>
                            </p>
                          )}
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {role.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              data-aos="zoom-in"
                              data-aos-delay={idx * 150 + rIdx * 100 + sIdx * 50 + 300}
                              data-aos-duration="500"
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#1F3A5F]/10 text-[#1F3A5F] border border-[#1F3A5F]/20 hover:bg-[#1F3A5F]/20 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;