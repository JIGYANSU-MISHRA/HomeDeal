import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaHeart,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
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
    <div className={`${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
      <section
        id="properties"
        className="lg:w-[90%] w-full m-auto lg:px-20 px-6 py-20 flex flex-col gap-10"
      >
        <div className="flex flex-col items-start gap-4">
          <h1 data-aos="zoom-in" className="text-green-500 dark:text-green-400">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-4xl font-semibold"
          >
            Explore the latest
          </h1>
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div className="flex justify-between">
                <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                    Featured
                  </button>
                  <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Sales
                    </button>
                    <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Active
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2 text-white">
                    <FaMapMarkerAlt className="text-lg" />
                    <span>{item.address}</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <FaVideo className="text-lg" />
                    <FaCamera className="text-lg" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <h1 className="text-2xl text-green-600 font-bold">{item.price}</h1>
                <p>{item.about}</p>

                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-2">
                    <FaBath className="text-green-500 text-lg" />
                    <span>{item.bath} Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBed className="text-green-500 text-lg" />
                    <span>{item.bed} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdSpaceDashboard className="text-green-500 text-lg" />
                    <span>{item.area} sqft</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-green-500 text-lg" />
                    <span>{item.owner}</span>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer transition hover:scale-110">
                      <FaShareAlt className="text-green-500" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer transition hover:scale-110">
                      <FaHeart className="text-green-500" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer transition hover:scale-110">
                      <FaPlus className="text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
