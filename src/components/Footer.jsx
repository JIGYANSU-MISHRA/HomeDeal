import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaMoon,
  FaSun,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); 

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        {/* About Us Section */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            At <span className="font-semibold">HomeDeal</span>, we are dedicated to helping you find the perfect property that matches your lifestyle and aspirations. With years of experience in the real estate industry, we specialize in residential, commercial, and investment properties across India.
          </p>
          <div className="flex justify-start items-center gap-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-white hover:bg-green-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="size-5" />
                </div>
              )
            )}
          </div>
          <h1 className="text-white mt-8">
            ©2025 HomeDeal India. All Rights Reserved.<br></br> Made by Jigyansu Mishra
          </h1>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          {[
            { icon: <FaBuilding className="text-white size-5" />, text: "HomeDeal, 123 Business Street, Bhubaneswar, India" },
            { icon: <FaMobile className="text-white size-5" />, text: "+91 99999 99999" },
            { icon: <FaFax className="text-white size-5" />, text: "+91 77777 77777" },
            { icon: <IoMdMail className="text-white size-5" />, text: "info@homedeal.com" },
          ].map((item, index) => (
            <div key={index} className="flex justify-center items-center gap-3">
              {item.icon}
              <p className="text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Latest Properties Section */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          {[
            { img: prop7, title: "Luxury Villa with Ocean View", price: "₹ 3.45 Cr" },
            { img: prop8, title: "Modern Apartment in City Center", price: "₹ 2.75 Cr" },
          ].map((property, index) => (
            <div key={index} className="flex justify-center items-center gap-4">
              <img
                src={property.img}
                alt={property.title}
                className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
              />
              <div>
                <h1 className="text-lg text-white">{property.title}</h1>
                <p className="text-slate-400">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div
        id="icon-box"
        className="bg-green-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center p-4 rounded-full bg-green-500 fixed lg:top-52 right-6 top-6"
      >
        {darkMode ? (
          <FaMoon size={25} className="text-black" />
        ) : (
          <FaSun size={25} className="text-black" />
        )}
      </button>
    </>
  );
};

export default Footer;