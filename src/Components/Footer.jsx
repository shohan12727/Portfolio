import { Facebook, Linkedin, Github, Mail, Phone, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="HomeNest Logo" className="h-10 w-10 rounded" />
             <span className="text-xl font-bold text-base-content">
            AI<span className="text-primary font-bold">_S</span>
          </span>
          </div>

          <p className="mt-4 text-sm  leading-relaxed">
          I am a curious, thoughtful, enthusiastic learner who genuinely wants to understand things deeply rather than just get answers.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              aishohan001@gmail.com
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +8801887104758
            </li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>

          
          <div className="flex items-center gap-4">
            {[
              {
                Component: Facebook,
                label: "Facebook",
                to: "https://www.facebook.com/ashraful.islam.shohan.467732",
              },
              {
                Component: X,
                label: "Twitter",
                to: "https://x.com/ShohanIsla31952",
              },
              {
                Component: Linkedin,
                label: "LinkedIn",
                to: "https://www.linkedin.com/in/ashraful-islam-shohan-094b6530b/",
              },
              {
                Component: Github,
                label: "GitHub",
                to: "https://github.com/shohan12727",
              },
            ].map(({ Component, label, to }) => (
              <Link
                key={label}
                to={to}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Component className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-base-300 py-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} AI_S. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;