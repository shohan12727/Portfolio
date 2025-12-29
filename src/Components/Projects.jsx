import Aos from "aos";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing projects, skills, and experience with smooth animations and responsive design.",
    tech: ["React", "Tailwind CSS", "AOS"],
    live: "https://your-live-link.com",
    repos: {
      client: "https://github.com/your-username/portfolio-client",
      server: "https://github.com/your-username/portfolio-server",
    },
    image: "https://via.placeholder.com/600x400/1F3A5F/ffffff?text=Portfolio",
    featured: true,
  },
  {
    title: "Gemini AI Chatbot",
    description:
      "AI-powered chatbot using Gemini API with Flask backend and a clean frontend interface.",
    tech: ["React", "Flask", "Python", "Gemini API"],
    live: "https://your-live-link.com",
    repos: {
      client: "https://github.com/your-username/chatbot-client",
      server: "https://github.com/your-username/chatbot-server",
    },
    image: "https://via.placeholder.com/600x400/3B5998/ffffff?text=AI+Chatbot",
    featured: false,
  },
  {
    title: "React CRUD App",
    description:
      "A full CRUD application with reusable components and clean state management.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://your-live-link.com",
    repos: {
      client: "https://github.com/your-username/crud-client",
    },
    image: "https://via.placeholder.com/600x400/2D5A7B/ffffff?text=CRUD+App",
    featured: false,
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return (
    <section className="relative grid-bg py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-5xl font-bold bg-linear-to-r from-[#1F3A5F] via-cyan-600 to-orange-500 bg-clip-text text-transparent tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my recent work showcasing full-stack development, clean UI,
            and scalable architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform flex flex-col"
            >
              {/* Featured Badge */}
              {project.featured && (
                <span
                  data-aos="zoom-in"
                  className="absolute top-4 left-4 z-10 bg-linear-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                >
                  Featured
                </span>
              )}

              {/* Image */}
              <div
                className="h-56 overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div
                  className="flex items-start justify-between mb-3"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h3 className="text-xl font-bold text-[#1F3A5F]  transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p
                  className="text-gray-600 text-sm leading-relaxed mb-5 flex-1"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={400 + i * 80}
                      className="text-xs font-medium bg-linear-to-r from-[#1F3A5F]/10 to-blue-500/10 text-[#1F3A5F] px-3 py-1.5 rounded-lg border border-[#1F3A5F]/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div
                  className="flex gap-2 mt-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1F3A5F] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-[#152d47] transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  {project.repos?.client && (
                    <a
                      href={project.repos.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-3 py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-300"
                    >
                      <Github size={16} />
                      Client
                    </a>
                  )}

                  {project.repos?.server && (
                    <a
                      href={project.repos.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-3 py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-300"
                    >
                      <Github size={16} />
                      Server
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-linear-to-r from-[#1F3A5F] via-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16" data-aos="zoom-in">
          <button className="inline-flex items-center gap-2 bg-[#1F3A5F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#152d47] transition-all duration-300 shadow-lg">
            View All Projects
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
