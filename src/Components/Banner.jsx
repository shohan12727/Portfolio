import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import profileImg from "../assets/my_profile.png";
import { Link } from "react-router";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaX } from "react-icons/fa6";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          data-aos="zoom-in"
        >
          <img
            src={profileImg}
            alt="Ashraful Islam Shohan"
            className="
              w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72
              rounded-full
              border-4 border-cyan-400
            "
          />
        </div>

        {/* TEXT CONTENT */}
        <div
          className="order-2 lg:order-1 text-center lg:text-left"
          data-aos="fade-right"
        >
         
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Ashraful Islam Shohan
          </h1>

          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Full Stack Developer<span className="animate-pulse">|</span>
          </h2>

          <p
            className="text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
          I am a student at North South University, studying Electrical and Electronic Engineering (EEE). An enthusiastic and curious individual, I enjoy tackling challenging problems and finding solutions to unsolved puzzles.
          </p>

          {/* SOCIAL ICONS */}
          <div
            className="flex justify-center lg:justify-start gap-4 text-white mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="https://www.linkedin.com/in/ashraful-islam-shohan-094b6530b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-cyan-400 cursor-pointer text-xl" />
            </Link>

            <Link
              to="https://github.com/shohan12727"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 cursor-pointer text-xl" />
            </Link>

            <Link
              to="https://x.com/ShohanIsla31952"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaX className="hover:text-cyan-400 cursor-pointer text-xl" />
            </Link>

            <Link
              to="https://www.facebook.com/ashraful.islam.shohan.467732"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-cyan-400 cursor-pointer text-xl" />
            </Link>
          </div>

          {/* BUTTONS */}
          <div
            className="flex justify-center lg:justify-start gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-md bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
            >
             Projects
            </Link>

            <Link
              to="/resume.pdf"
              className="px-6 py-3 rounded-md border border-cyan-500 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-white transition"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
