import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    // { name: "Skills", path: "/skills" },
    {name: "Experience", path: "experience"},
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClasses = ({ isActive }) =>
    `relative px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 group
     ${
       isActive
         ? "text-blue-600"
         : "text-gray-700 hover:text-blue-600"
     }`;

  return (
    <nav className="bg-white shadow-lg  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Logo" className="w-18 h-25" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={navLinkClasses}
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 w-0 group-hover:w-full"
                />
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-1 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base sm:text-lg font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-blue-600 bg-gray-100"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
