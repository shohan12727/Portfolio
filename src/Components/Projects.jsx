import Aos from "aos";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ticketBari from "../assets/Projects/ticketBari.png";
import homeNest from "../assets/Projects/homeNest.png";
import hero from "../assets/Projects/hero.png";
import { Link } from "react-router";

const projects = [
  {
    title: "Ticket Bari",
    description:
      "TicketBari is a modern Online Ticket Booking Platform where users can discover and book tickets for Bus, Train, Launch, and Plane.",
    tech: [
      "React",
      "MongoDB",
      "ExpressJs",
      "Stripe",
      "Tanstack Query",
      "React Hook Form",
    ],
    live: "https://ticket-bari-492a4.web.app",
    repos: {
      client: "https://github.com/shohan12727/TicketBari-client",
      server: "https://github.com/shohan12727/TicketBari-server",
    },
    image: ticketBari,
    featured: false,
  },
  {
    title: "Home Nest",
    description:
      "HomeNest is a full-stack real estate listing platform where users can browse, search, and manage rental or sale properties. Property owners can securely add, update, and delete listings, while users can explore properties, view details, and leave ratings and reviews.",
    tech: ["React", "Express", "MongoDB", "Tanstack Query"],
    live: "https://home-nest-7e180.web.app",
    repos: {
      client: "https://github.com/shohan12727/Home-Nest-Client",
      server: "https://github.com/shohan12727/Home-Nest-server",
    },
    image: homeNest,
    featured: false,
  },
  {
    title: "Hero App Store",
    description:
      "A modern and responsive React-based App Store web application showcasing apps, installation tracking, analytics, and smooth user interaction — built with creativity, performance, and practicality.",
    tech: ["React", "JavaScript", "React-router"],
    live: "https://hero-app-store-001.netlify.app/",
    repos: {
      client: "https://github.com/shohan12727/Hero-App-Store",
    },
    image: hero,
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
    <section className="relative grid-bg py-8 px-4 overflow-hidden">
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
              className="group relative bg-[#F9F7F1] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform flex flex-col"
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
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
          <Link
            to="https://github.com/shohan12727"
            className="inline-flex items-center gap-2 bg-[#1F3A5F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#152d47] transition-all duration-300 shadow-lg"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
