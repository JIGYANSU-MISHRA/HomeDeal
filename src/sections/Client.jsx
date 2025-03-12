import React, { useEffect } from "react";
import { client } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Client = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode
          ? "dark bg-gray-900 text-white"
          : "light bg-gray-100 text-black"
      } transition-all duration-500`}
    >
      <section
        id="testimonials"
        className="lg:w-[90%] w-full mx-auto rounded-xl flex flex-col items-start lg:px-16 px-6 py-16 gap-16"
      >
        {/* Heading */}
        <div className="text-center w-full">
          <h1
            data-aos="zoom-in"
            className="text-green-500 dark:text-green-400 font-medium"
          >
            OUR CLIENTS
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-4xl md:text-4xl font-bold leading-tight mt-2"
          >
            Reviews From Clients
          </h1>
        </div>

        {/* Client Reviews */}
        <div
          id="clients-box"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full"
        >
          {client.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              key={index}
              className={`p-8 flex flex-col items-center gap-6 rounded-xl w-full transition-transform transform hover:scale-[1.02] 
              ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-green-100 shadow-md"
              }`}
            >
              {/* Client Info */}
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <h2 className="text-sm text-gray-500 dark:text-gray-300">
                    {item.text}
                  </h2>
                </div>
              </div>

              {/* Client Feedback */}
              <p className="text-md text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.feedback}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className="text-yellow-500" size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Client;
