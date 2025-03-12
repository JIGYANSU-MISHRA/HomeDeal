import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-full h-[700px] mt-5 m-auto bg-cover bg-center flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-7xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[80px] leading-[70px]"
          >
            Discover Your Dream Home in India
          </h1>

          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Whether you're looking to buy, rent, or invest, we offer a wide range of properties across India. From luxurious apartments to spacious villas, find the perfect home that suits your lifestyle.
          </p>
        </section>
      </div>

      {/* form starts from this line */}
      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-900" : "light bg-white"
          } lg:w-[70%] w-[90%] mx-auto grid lg:grid-cols-4 grid-cols-1 gap-6 p-10 rounded-xl shadow-lg -mt-14 border border-gray-200 dark:border-gray-700`}
        >
          {/* Location Input */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter city, neighborhood, or address"
              className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-lime-500 outline-none"
            />
          </div>

          {/* Type Dropdown */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
            >
              <option value="" disabled selected>
                Select Property Type
              </option>
              <option value="Rentals">Rentals</option>
              <option value="Sales">Sales</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectCategory"
              className="bg-white dark:bg-gray-800 p-3 w-full mt-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Villas</option>
              <option value="Plots">Plots</option>
              <option value="Farmhouses">Farmhouses</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center items-center">
            <button className="bg-lime-600 dark:bg-lime-700 hover:bg-lime-700 dark:hover:bg-lime-500 text-lg p-3 w-full text-white font-semibold rounded-lg transition-all transform hover:scale-105">
              SEARCH PROPERTIES
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;