import React, { useState, useEffect } from "react";

// 🔹 Skill Icons (MUST IMPORT)
import reactIcon from "../assets/skills/react.png";
import nextIcon from "../assets/skills/next.png";
import nodeIcon from "../assets/skills/node.png";
import mongoIcon from "../assets/skills/mongodb.png";
import firebaseIcon from "../assets/skills/firebase.png";
import pythonIcon from "../assets/skills/python.png";
import expressIcon from "../assets/skills/express.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import javascriptIcon from "../assets/skills/javascript.png"

export default function Skills() {
  const [hovered, setHovered] = useState(null);
  const [radius, setRadius] = useState(150);
  const [paused, setPaused] = useState(false);

  // 🔹 Responsive orbit radius
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w >= 1024) setRadius(230);
      else if (w >= 768) setRadius(190);
      else setRadius(150);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

 const skills = [
  { name: "React", icon: reactIcon, angle: 0 },
  { name: "Next.js", icon: nextIcon, angle: 40 },
  { name: "Node.js", icon: nodeIcon, angle: 80 },
  { name: "MongoDB", icon: mongoIcon, angle: 120 },
  { name: "Firebase", icon: firebaseIcon, angle: 160 },
  { name: "Python", icon: pythonIcon, angle: 200 },
  { name: "Express", icon: expressIcon, angle: 240 },
  { name: "Tailwind", icon: tailwindIcon, angle: 280 },
  { name: "Javascript", icon: javascriptIcon, angle: 320 },
];

  return (
    <section className="relative md:min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden px-6 py-20 md:py-24">

      {/* 🔹 Ambient Background */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-3xl rounded-full -top-40 -left-40 animate-pulse" />
      <div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full bottom-0 right-0 animate-pulse" />

      {/* 🔹 Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-12 md:gap-14">

        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto px-4">
            Technologies I use to design, build, and scale modern digital experiences.
          </p>
        </div>

        {/* 🔹 Orbit System (Hidden on small mobile) */}
        <div className="hidden sm:block">
          <div
            className={`relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]
            ${paused ? "" : "animate-orbit"}`}
          >
            {/* Orbiting Skills */}
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${skill.angle}deg) translate(${radius}px)`,
                  transformOrigin: "0 0",
                }}
              >
                <div
                  onMouseEnter={() => {
                    setHovered(skill.name);
                    setPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    setPaused(false);
                  }}
                  className={`relative transition-all duration-300
                  ${hovered && hovered !== skill.name ? "opacity-30 scale-90" : "opacity-100"}`}
                >
                  {/* Skill Bubble */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl flex items-center justify-center hover:scale-125 transition">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7 md:w-8 md:h-8 object-contain"
                    />
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                    px-3 py-1 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-md transition
                    ${hovered === skill.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
                  >
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}

            {/* 🔹 Center Glass Card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center justify-center text-white">
                <span className="text-xs md:text-sm opacity-80">Tech Stack</span>
                <span className="text-xl md:text-2xl font-bold">Skills</span>
              </div>
            </div>

            {/* Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-6 rounded-full border border-white/5" />
          </div>
        </div>

        {/* 🔹 Mobile Grid Fallback (Only on small screens) */}
        <div className="grid grid-cols-4 gap-4 sm:hidden w-full max-w-sm">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:scale-110 transition">
                <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" />
              </div>
              <span className="text-xs text-gray-300 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Animations */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit {
          animation: orbit 45s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}