import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";

const PopularAreas = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode} = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      } py-20`}
    >
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            data-aos="fade-up"
            className="text-green-500 font-semibold tracking-widest"
          >
            POPULAR AREAS
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl lg:text-5xl font-bold mt-4 leading-snug"
          >
            Explore Most Popular Areas
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[area1, area2, area3].map((area, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={200 * (index + 1)}
              className="h-80 bg-cover bg-center rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${area})` }}
            />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {[
            "5K ACTIVE LISTINGS",
            "8K SATISFIED CLIENTS",
            "12K TOTAL TRANSACTIONS",
          ].map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl"
            >
              <h1 className="text-5xl font-extrabold text-green-500">
                {stat.split(" ")[0]}
              </h1>
              <p className="text-lg font-semibold mt-2">
                {stat.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
