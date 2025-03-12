import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../assets/images/about.jpg";

const About = () => {
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
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black text-white" : "light bg-transparent text-black"
      } w-full m-auto lg:px-40 px-10 py-10 grid lg:grid-cols-2 grid-cols-1 items-center gap-10 lg:gap-16`}
    >
      {/* Image Section */}
      <div data-aos="zoom-in">
        <img
          src={aboutimg}
          alt="About Us"
          className="rounded-2xl w-full lg:w-[500px] lg:h-[600px] object-cover shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-start gap-6">
        <h1 data-aos="fade-up" className="text-green-500 font-bold tracking-widest">
          ABOUT US
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[40px] font-semibold leading-tight"
        >
          Your Trusted Partner in Real Estate
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          At <span className="font-semibold">HomeDeal</span>, we are dedicated to helping you find the perfect property that matches your lifestyle and aspirations. With years of experience in the real estate industry, we specialize in residential, commercial, and investment properties across India. Our team of experts is committed to providing personalized service, transparent processes, and unmatched expertise to make your property journey seamless and rewarding.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-lg text-gray-600 dark:text-gray-300 text-justify"
        >
          Whether you're buying, selling, or renting, we are here to guide you every step of the way. Our mission is to turn your real estate dreams into reality by offering innovative solutions, market insights, and a wide range of properties to choose from.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-lime-600 dark:bg-lime-700 hover:bg-lime-700 dark:hover:bg-lime-500 text-lg px-6 py-3 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md"
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default About;