import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonial", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className={`${darkMode ? "dark bg-gray-900" : "light bg-white shadow-md"} fixed w-full top-0 z-50 py-4 px-6 lg:px-20 flex justify-between items-center transition-all duration-300`}>
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Company Logo" className="lg:w-[160px] w-[120px] dark:invert" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-8">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy
            smooth
            offset={-80}
            className="text-gray-800 dark:text-white font-semibold uppercase text-sm cursor-pointer px-3 py-2 rounded-lg transition duration-300 hover:bg-green-600 hover:text-white"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white text-2xl">
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-2/3 h-screen bg-gray-800 text-white shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 lg:hidden`}>
        <button onClick={closeMenu} className="self-end text-2xl">
          <FaXmark />
        </button>
        <ul className="flex flex-col gap-4">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy
              smooth
              offset={-80}
              className="block text-lg uppercase font-semibold cursor-pointer p-3 rounded-lg transition duration-300 hover:bg-green-600 hover:text-black text-center"
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-600 text-xl" />
          <span className="text-gray-800 dark:text-white text-lg font-semibold">77777 77777</span>
        </div>
        <FaUserCircle className="text-green-600 text-3xl" />
      </div>
    </nav>
  );
};

export default Header;
