import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}>
      <section
        id="contact"
        data-aos="fade-up"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-green-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        {/* Form Section */}
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl w-full shadow-lg"
        >
          <h1 className="text-2xl text-black font-semibold dark:text-white">Send a message today</h1>
          
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          <input
            type="number"
            placeholder="Enter your mobile number"
            className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter your message here..."
            className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          ></textarea>

          <button className="bg-green-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-green-700 dark:hover:bg-green-500 transition-all">
            SEND MESSAGE
          </button>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos="fade-up" className="text-green-500 dark:text-white uppercase tracking-widest">
            Reach Us
          </h1>
          <h1
            data-aos="fade-up"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Get in touch with us today
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            If you have any questions or need further information, feel free to reach out to us. We
            are here to help you.
          </p>

          <button className="bg-green-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-green-700 dark:hover:bg-green-500 transition-all">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
